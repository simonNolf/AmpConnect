import express from "express";
import path from "path";
import morganMiddleware from "./config/morganMiddleware";
import Logger from "./lib/logger";
import sequelize from "./config/DataBase.config";
import Module from "./model/modules.model";



sequelize.addModels([Module])
const app = express();
const port = 8080; // default port to listen
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(morganMiddleware)
// define a route handler for the default home page
app.use("/", express.static(path.join(__dirname, "../../frontendInterfaceWeb/dist/frontendInterfaceWeb")))
app.get("/index", (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, "../../frontendInterfaceWeb/dist/frontendInterfaceWeb/index.html"))

});
app.get("/api", (req: express.Request, res: express.Response) => {
    Logger.debug("api")
    res.sendStatus(200);
    Module.create({
        name: "test"
    }).then(r => {
        Logger.debug(JSON.stringify(r))
    })
})
// start the Express server
app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({
            force: false
        });
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

app.post("/sendGeneralSettings", (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
      message: 'Objet créé !'
    });
  });


  /** AUDIO */

app.get("/audio/play", (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
      message: ' PLAY '
    });
  });

app.get("/audio/pause", (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
      message: ' PAUSE '
    });
  });

app.get("/audio/forward", (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
      message: ' FORWARD '
    });
});

app.get("/audio/backward", (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
      message: ' BACKWARD '
    });
});

app.get("/audio/title", (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
      message: ' TITLE '
    });
});

app.get("/audio/time", (req, res, next) => {
    console.log(req.body);
    res.status(20).json({
      message: ' TIME '
    });
});

module.exports = app