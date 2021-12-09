export class Song {
    private _songData    : Buffer
    private _songName    : String
    private _songArtist  : String
    private _songAlbum   : String

    constructor(data : Buffer ,songName :string,songArtist :string,songAlbum :string) {
        this._songData = data
        this._songName = songName
        this._songAlbum = songAlbum
        this._songArtist = songArtist
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
}