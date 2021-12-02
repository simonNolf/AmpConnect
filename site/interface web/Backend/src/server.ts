import express from "express";
import path from "path";
import morganMiddleware from "./config/morganMiddleware";
import Logger from "./lib/logger";
import sequelize from "./config/DataBase.config";
import Module from "./model/modules.model";

import generalSettings from "./generalSettings.json"
const fs = require('fs')



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



app.get("/GeneralSettings", (req: express.Request, res: express.Response) => {
    res.status(200)
    res.setHeader('Content-Type', 'application/json');
    res.send(generalSettings)


});


app.post("/sendGeneralSettings", (req, res, next) => {
  console.log(req.body.appName)
const newGeneralSettings = {
  appName:req.body.appName,
  volume:req.body.volume,
}
fs.writeFile("./src/generalSettings.json",JSON.stringify(newGeneralSettings),(err: any)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log("modification du ficher json réussi !!")
  }
})
    res.status(201)
    res.send(req.body)
  });


  /** AUDIO */

app.post("/audio/play", (req, res, next) => {
    const form = formidable();
    form.parse(req,(err: any,fields: any,files: any) =>{
      if(err){
        next(err);
      return;
      }
      console.log(files.sound.filepath)
    })
  });

app.get("/audio/pause", (req, res, next) => {
    console.log(req.body.music);
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