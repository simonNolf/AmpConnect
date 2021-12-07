import Logger from "../lib/logger";
import {Socket} from "socket.io";
import {nextBuffer} from '../service/audio.service'
let socket :Socket
export const socketRouter = (soket :Socket) =>{
    socket = soket
    Logger.info("New connection");
    socket.on('incoming stream',receiveStream );
}

const receiveStream = ()=>{
    socket.on("newFile",(fileName , fileSize)=>{
        Logger.debug(`begining of new file stream ${fileName} ${fileSize}`)
        socket.emit('newFileReceived' , fileName)
    })
    socket.on("FileBuffer",(buffer)=>{
        nextBuffer(buffer)
        Logger.debug("file part recieved")
        socket.emit("FileBufferReceived","ok")
    })
    socket.on("FileEnd",()=>{
        Logger.debug("file end")
        socket.emit('FileEndAk',"ok")
    })
}
