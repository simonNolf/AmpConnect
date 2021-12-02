import {Stream} from "stream";
import fs from "fs";
// @ts-ignore

import Speaker from 'speaker'
import Logger from "../lib/logger";
import {AudioPlayer} from "../classes/AudioPlayer";

const audioPlayer :AudioPlayer = new AudioPlayer()


export async function playFile (filepath :string){
    const buffer :Buffer= fs.readFileSync(filepath)
    await playBuffer(buffer).catch(err=>{Logger.error(err)})
}
export async function playBuffer (soundBuffer :Buffer){
    await audioPlayer.audioContext.decodeAudioData(soundBuffer,(audioBuffer :AudioBuffer)=>{
        const audioSource: AudioBufferSourceNode = audioPlayer.audioContext.createBufferSource()
        audioSource.buffer= audioBuffer
        audioSource.connect(audioPlayer.primaryGainNodeControl)
        audioSource.start(0)
        Logger.info("now playing")
    }, (error :DOMException) => Logger.error(error))

}
export async function playStream (stream :Stream) {
    //TODO: convert + read Audio stream
    Logger.info("not implemented")
}


export function resume() {
    audioPlayer.resume()
}
export function pause() {
    audioPlayer.pause()
}