import * as mediaTags from "jsmediatags";
import Logger from "../lib/logger";
import {TagType} from "jsmediatags/types";
import {EventEmitter} from "events";

export class Song extends EventEmitter{
    private readonly _songData    : Buffer
    private _songName             : String | null
    private _songArtist           : String | null
    private _songAlbum            : String | null
    public  playing               : Boolean
    private _audioBuffer          : AudioBuffer
    private _duration            : number

    constructor(data : Buffer ,audioContext :AudioContext) {
        super();
        this._songData = data
        this.playing = false
        mediaTags.read(data,{
            onSuccess: this.setTags,
            onError: function(error) {
                Logger.error(':(', error.type, error.info);
            }
        })
        audioContext.decodeAudioData(this.songData).then((audio)=>{
            this._audioBuffer = audio
        }).catch((err: Error) =>{Logger.error(err)})

    }
    public get songData() :Buffer
    {
        return this._songData
    }
    public get songName() :String
    {
        return this._songName
    }
    public get songArtist():String
    {
        return this._songArtist
    }
    public get songAlbum():String
    {
        return this._songAlbum
    }
    private setTags (tag :TagType) {
        this._songName      = tag.tags.title
        this._songAlbum     = tag.tags.album
        this._songArtist    = tag.tags.artist
        this._duration      = this._audioBuffer.duration
    }
    public get audioBuffer() :AudioBuffer
    {
        return this._audioBuffer
    }
    public get duration () :number{
        return this._duration
    }
    public play():Song{
        this.playing = true
        setTimeout(()=>{
            this.emit("songEnded",this)
        },this.duration)
        return this
    }
}