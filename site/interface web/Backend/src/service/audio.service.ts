import {pipeline, Stream} from "stream";
// @ts-ignore
import Speaker from 'speaker'
import fs from "fs";
import Logger from "../lib/logger";
import {AudioPlayer} from "../classes/AudioPlayer";
import {socket} from "../routes/socket.routes"
import logger from "../lib/logger";
import * as mediatags from "jsmediatags";

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
    Logger.debug("audio resumed")
}
export function pause() {
    audioPlayer.pause()
    Logger.debug("audio paused")
}

export function nextSong() {
    audioPlayer.nextSong()
    Logger.debug("Song skiped")
}

export function cleanPlaylist (){
    audioPlayer.cleanPlaylist()
    Logger.debug("")
}

export function previousSong() {
    audioPlayer.previousSong()
}


export function restartSong() {
    audioPlayer.restartSong()
}
export function addPlaylist(blob :Buffer) {
    mediatags.read(blob,{
            onSuccess: function(tag) {
                audioPlayer.newSong(blob,tag.tags.title,tag.tags.artist,tag.tags.album)
            },
            onError: function(error) {
                Logger.error(':(', error.type, error.info);
            }
        })
}
