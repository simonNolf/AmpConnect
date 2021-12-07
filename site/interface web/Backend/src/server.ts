import express, {Express} from "express";
import path from "path";
import morganMiddleware from "./config/morganMiddleware";
import Logger from "./lib/logger";
import bodyParser from "body-parser";
import {createServer} from "http";
import {AudioRouter} from "./routes/audio.routes";
import {Server} from "socket.io"
import {socketRouter} from "./routes/soket.routes";

// default port to listen
const app:Express = express();
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

app.post("/sendGeneralSettings", (req, res) => {
    Logger.info(req.body);
    res.status(200).json({
      message: 'Objet cree !'
    });
  });

app.post("/sendDabSettings", (req, res) => {
    Logger.info(req.body);
    res.status(200).json({
      message: 'Objet cree !'
    });
  });

app.post("/sendYoutubeSettings", (req, res) => {
    Logger.info(req.body);
    res.status(200).json({
      message: 'Objet cree !'
    });
  });

