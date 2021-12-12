import Logger from "../lib/logger";
import {Socket} from "socket.io";
import * as service from '../service/audio.service'
import {ok} from "assert";

export let socket :Socket
export const socketRouter = (soket :Socket) =>{
    socket = soket

    Logger.info("New connection");

    socket.on("sending new buffer",service.nextBuffer);

    socket.on("resumeSong",service.resume);

    socket.on("pauseSong",service.pause);

    socket.on("nextSong",service.nextSong);

    socket.on("previousSong", service.previousSong);

    socket.on("restartSongSong", service.restartSong);

    socket.on("cleanPlaylist",service.cleanPlaylist);
}



