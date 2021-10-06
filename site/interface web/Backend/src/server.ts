import express from "express";
import path from "path";
import morganMiddleware from "./config/morganMiddleware";

const app = express();
const port = 8080; // default port to listen
app.use(morganMiddleware)
// define a route handler for the default home page
app.get( "/index", ( req, res ) => {
    res.sendFile(path.join(__dirname,"../../frontendInterface/dist/frontendInterface/index.html") )
    res.send( path.join(__dirname,"../../frontendInterface/dist/frontendInterface/index.html"));
});
app.use("/static",express.static("../../frontendInterface/dist/frontendInterface"))
// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );