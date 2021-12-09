import {pipeline, Stream} from "stream";
// @ts-ignore
import Speaker from 'speaker'
import fs from "fs";
import Logger from "../lib/logger";
import {AudioPlayer} from "../classes/AudioPlayer";
import {Request} from "express";
import {socket} from "../routes/socket.routes"

const audioPlayer :AudioPlayer = new AudioPlayer(socket)


export async function playFile (filepath :string){
    const buffer :Buffer= fs.readFileSync(filepath)
    audioPlayer.scheduleBuffer(buffer)
}
export async function playBuffer (soundBuffer :Buffer){
    audioPlayer.scheduleBuffer(soundBuffer)
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

export function nextSong() {
    audioPlayer.nextSong()
}

export function cleanPlaylist (){
    audioPlayer.cleanPlaylist()
}

export function previousSong() {
    audioPlayer.previousSong()
}


export function restartSong() {
    audioPlayer.restartSong()
}
