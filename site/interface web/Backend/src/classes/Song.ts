import * as mediaTags from "jsmediatags";
import Logger from "../lib/logger";
import {TagType} from "jsmediatags/types";
import {EventEmitter} from "events";

export class Song extends EventEmitter{
    private readonly _songData    : Buffer
    private _songName             : String | null
    private _songArtist           : String | null
    private _songAlbum            : String | null
    public readonly audioBuffer   : AudioBuffer
    private _duration             : number

    constructor(data : Buffer ,audioBuffer :AudioBuffer) {
        super();
        this._songData = data
        this.audioBuffer = audioBuffer
        mediaTags.read(data,{
            onSuccess: this.setTags,
            onError: function(error) {
                Logger.error(':(', error.type, error.info);
            }
        })
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
        this._duration      = this.audioBuffer.duration
        this.emit("ready")
    }
    public get duration () :number{
        return this._duration
    }

}