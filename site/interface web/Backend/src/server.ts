import express from "express";
import path from "path";
import morganMiddleware from "./config/morganMiddleware";
import Logger from "./lib/logger";
import generalSettings from "./generalSettings.json"
const fs = require('fs')

import bodyParser from "body-parser";
import {createServer} from "http";
import {AudioRouter} from "./routes/audio.route";
import {Server} from "socket.io";
import {socketRouter} from "./routes/socket.routes";


// default port to listen
const app = express();
const port = 8080;
export const server = createServer(app)
export const ioServ =new Server(server)
app.use(bodyParser.json());
app.use(morganMiddleware)
// define a route handler for the default home page
app.use("/", express.static(path.join(__dirname, "../../frontendInterfaceWeb/dist/frontendInterfaceWeb")))

app.use("/audio/",AudioRouter)
app.get("/index", (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, "../../frontendInterfaceWeb/dist/frontendInterfaceWeb/index.html"))

});
ioServ.on('connection',socketRouter)
app.get("/api", (req: express.Request, res: express.Response) => {
    Logger.debug("api")
    res.sendStatus(200);

})
// start the Express server
server.listen(port, async () => {
    try {
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

app.post("/sendGeneralSettings", (req, res) => {
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

app.get("/audio/play", (req, res,) => {
    console.log(req.body);

    res.status(200).json({
      message: ' PLAY '
    });
  });


