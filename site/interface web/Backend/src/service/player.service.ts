import {Stream} from "stream";
import fs from "fs";

// @ts-ignore
import {AudioContext} from 'web-audio-api';

// @ts-ignore
import Speaker from 'speaker'
import Logger from "../lib/logger";

const audioContext = new AudioContext ()

audioContext.outStream = new Speaker({
    channels: audioContext.format.numberOfChannels,
    bitDepth: audioContext.format.bitDepth,
    sampleRate: audioContext.sampleRate
})

const primaryGainNodeControl = audioContext.createGain()
primaryGainNodeControl.gain.setValueAtTime(0.5,0);
primaryGainNodeControl.connect(audioContext.destination)

export async function playFile (filepath :string){
    const buffer :Buffer= fs.readFileSync(filepath)
    await playBuffer(buffer)
}
export async function playBuffer (soundBuffer :Buffer){
    await audioContext.decodeAudioData(soundBuffer,(audioBuffer :AudioBuffer)=>{
        const audioSource = audioContext.createBufferSource()
        audioSource.buffer= audioBuffer
        audioSource.connect(primaryGainNodeControl)
        audioSource.start(0)
        Logger.info("now playing")
    }, (error :DOMException) => Logger.error(error))

}
export async function playStream (stream :Stream) {
    Logger.info("not implemented")
}
