import express from "express";
import path from "path";
import morganMiddleware from "./config/morganMiddleware";
import Logger from "./lib/logger";
import bodyParser from "body-parser";
import formidable from "formidable";
import {AudioPlayerRouter} from './routes/player.route'

 // default port to listen
const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(morganMiddleware)
// define a route handler for the default home page
app.use("/", express.static(path.join(__dirname, "../../frontendInterfaceWeb/dist/frontendInterfaceWeb")))

app.use("/audio/",AudioPlayerRouter)
app.get("/index", (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, "../../frontendInterfaceWeb/dist/frontendInterfaceWeb/index.html"))

});
app.get("/api", (req: express.Request, res: express.Response) => {
    Logger.debug("api")
    res.sendStatus(200);

})
// start the Express server
app.listen(port, async () => {
    try {
        Logger.info('Connection has been established successfully.');
    } catch (error) {
        Logger.error('Unable to connect to the database:', error);
    }
    Logger.info(`server started at http://localhost:${port}`);

});

/** SETTINGS */

app.get("/DabSettings", (req: express.Request, res: express.Response) => {
    res.status(200)
    res.json({
        "appName": "Leanne Graham",
        "volume": 50
    })


});

app.get("/GeneralSettings", (req: express.Request, res: express.Response) => {
    res.status(200)
    res.json({
        "appName": "Leanne Graham",
        "volume": 50
    })


});

app.get("/YtbSettings", (req: express.Request, res: express.Response) => {
    res.status(200)
    res.json({
        "appName": "Leanne Graham",
        "volume": 50
    })
});


/**
 * app.post("/sendGeneralSettings", (req: express.Request, res: express.Response) => {
    res.status(201)
    console.log(req.body);
})
*/

app.post("/sendGeneralSettings", (req, res, next) => {
    Logger.info(req.body);
    res.status(200).json({
      message: 'Objet créé !'
    });
  });

app.post("/sendDabSettings", (req, res, next) => {
    Logger.info(req.body);
    res.status(200).json({
      message: 'Objet créé !'
    });
  });

app.post("/sendYoutubeSettings", (req, res, next) => {
    Logger.info(req.body);
    res.status(200).json({
      message: 'Objet créé !'
    });
  });


  /** AUDIO */

app.post("/audio/play", (req, res, next) => {
    const form = formidable();
    form.parse(req,(err: any,fields: any,files: any) =>{
      if(err){
        next(err);
      return;
      }
      Logger.log(files.sound.filepath)
    })
  });

app.get("/audio/pause", (req, res, next) => {
    Logger.info(req.body.music);
    res.status(200).json({
      message: ' PAUSE '
    });
  });

app.get("/audio/forward", (req, res, next) => {
    Logger.info(req.body);
    res.status(200).json({
      message: ' FORWARD '
    });
});

app.get("/audio/backward", (req, res, next) => {
    Logger.info(req.body);
    res.status(200).json({
      message: ' BACKWARD '
    });
});

app.get("/audio/title", (req, res, next) => {
    Logger.info(req.body);
    res.status(200).json({
      message: ' TITLE '
    });
});

app.get("/audio/time", (req, res, next) => {
    Logger.info(req.body);
    res.status(200).json({
      message: ' TIME '
    });
});