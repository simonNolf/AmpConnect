import * as mediaTags from "jsmediatags";
import Logger from "../lib/logger";
import {TagType} from "jsmediatags/types";

export class Song {
    private readonly _songData    : Buffer
    private _songName             : String
    private _songArtist           : String
    private _songAlbum            : String
    public  playing               : Boolean
    private _audioBuffer          : AudioBuffer

    constructor(data : Buffer ,audioContext :AudioContext) {
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
        this._songName = tag.tags.title
        this._songAlbum = tag.tags.album
        this._songArtist = tag.tags.artist
    }
    public get audioBuffer() :AudioBuffer
    {
        this.playing = true
        return this._audioBuffer
    }

}