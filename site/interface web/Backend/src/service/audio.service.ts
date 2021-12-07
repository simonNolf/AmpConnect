import {pipeline, Stream} from "stream";
// @ts-ignore
import Speaker from 'speaker'
import fs from "fs";
import Logger from "../lib/logger";
import {AudioPlayer} from "../classes/AudioPlayer";
import {Request} from "express";



const audioPlayer :AudioPlayer = new AudioPlayer()


export async function playFile (filepath :string){
    const buffer :Buffer= fs.readFileSync(filepath)
    audioPlayer.scheduleBuffer(buffer)
}
export async function playBuffer (soundBuffer :Buffer){
    audioPlayer.scheduleBuffer(soundBuffer)
}
export async function playStream (stream :Request) {
    let nextTime :number =0
    stream.on("data",(chunk)=>{
       audioPlayer.scheduleBuffer(chunk)
    })
    stream.on("end", ()=>{
        Logger.info("all stream data recieved ")
    })
    stream.on("error", (err)=>{
        Logger.error(err)
    })
    //TODO: convert + read Audio stream
    Logger.info("not implemented")
}
export function nextBuffer(chunk :Buffer) {
    audioPlayer.scheduleBuffer(chunk)
}

export function resume() {
    audioPlayer.resume()
}
export function pause() {
    audioPlayer.pause()
}