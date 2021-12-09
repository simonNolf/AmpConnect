import Logger from "../lib/logger";
import Speaker from "speaker";

// @ts-ignore
import {AudioContext} from 'web-audio-api';
import {Socket} from "socket.io";
export class AudioPlayer {
    private pausedTime              :Number;
    public  primaryGainNodeControl  : GainNode;
    public  playlist                : Array<Buffer> //TODO implement playlist
    public  audioContext            :AudioContext =new AudioContext ()
    public  destination             : any;
    private nextTime                :number =0;
    private websocket               :Socket
    constructor(socket :Socket) {
        this.audioContext.outStream = new Speaker({
            channels: this.audioContext.format.numberOfChannels,
            bitDepth: this.audioContext.format.bitDepth,
            sampleRate: this.audioContext.sampleRate
        })
        this.primaryGainNodeControl = this.audioContext.createGain()
        this.primaryGainNodeControl.gain.setValueAtTime(0.5,0);
        this.primaryGainNodeControl.connect(this.audioContext.destination)
        this.destination = this.primaryGainNodeControl
        this.websocket = socket
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
    newSong(songData :Buffer, songName:Buffer){

    }
    scheduleBuffer(chunk: Buffer) {
        Logger.info("Decoding.....")
        this.audioContext.decodeAudioData(chunk,(audioBuffer : AudioBuffer)=>{
            Logger.info("audio Decoded")
            const  source    = this.audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(this.destination);
            if (this.nextTime == 0)
                this.nextTime = this.audioContext.currentTime + 0.01;
            source.start(this.nextTime);
            this.nextTime += source.buffer.duration;
        },(error :DOMException) => Logger.error(error))
    }

    restartSong(){

    }

    previousSong(){

    }
    cleanPlaylist(){

    }
}