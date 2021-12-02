import Logger from "../lib/logger";
import Speaker from "speaker";

// @ts-ignore
import {AudioContext} from 'web-audio-api';
export class AudioPlayer {
    private pausedTime :Number
    public primaryGainNodeControl: GainNode
    public playlist: Array<any> //TODO implement playlist
    public audioContext: AudioContext;
    constructor() {
        this.audioContext = new AudioContext ()
        this.audioContext.outStream = new Speaker({
            channels: this.audioContext.format.numberOfChannels,
            bitDepth: this.audioContext.format.bitDepth,
            sampleRate: this.audioContext.sampleRate
        })
        this.primaryGainNodeControl = this.audioContext.createGain()
        this.primaryGainNodeControl.gain.setValueAtTime(0.5,0);
        this.primaryGainNodeControl.connect(this.audioContext.destination)
    }
    resume(){
        this.audioContext.resume().then().catch((err: Error) =>{Logger.error(err)})
    }

    pause(){
        this.pausedTime = this.audioContext.currentTime
        this.audioContext.suspend().then().catch((err :Error)=>{Logger.error(err)})
    }

    nextSong(){

    }

    endSong(){

    }

    restartSong(){

    }

    previousSong(){

    }
}