import express from "express";
import path from "path";
import morganMiddleware from "./config/morganMiddleware";
import Logger from "./lib/logger";

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
})
// start the Express server
app.listen( port, () => {
    Logger.info( `server started at http://localhost:${ port }` );
} );