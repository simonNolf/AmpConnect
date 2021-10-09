import express from "express";
import path from "path";
import morganMiddleware from "./config/morganMiddleware";
import Logger from "./lib/logger";
import sequelize from "./config/DataBase.config";
import Module from "./model/modules.model";

sequelize.addModels([Module])
const app = express();
const port = 8080; // default port to listen
app.use(morganMiddleware)
// define a route handler for the default home page
app.use("/",express.static(path.join(__dirname,"../../frontendInterfaceWeb/dist/frontendInterfaceWeb")))
app.get( "/index", ( req:express.Request, res:express.Response ) => {
    res.sendFile(path.join(__dirname,"../../frontendInterfaceWeb/dist/frontendInterfaceWeb/index.html"))

});
app.get("/api",(req:express.Request,res:express.Response ) =>{
    Logger.debug("api")
    res.sendStatus(200);
    Module.create({name: "test"}).then(r => {
        Logger.debug(JSON.stringify(r))
    })
})
// start the Express server
app.listen( port, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force:false});
        Logger.info('Connection has been established successfully.');
    } catch (error) {
        Logger.error('Unable to connect to the database:', error);
    }
    Logger.info(`server started at http://localhost:${port}`);
} );