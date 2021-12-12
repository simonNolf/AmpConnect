import {Song} from "../../src/classes/Song";
// @ts-ignore
import {AudioContext} from 'web-audio-api';
import fs, {PathLike} from "fs";
import Logger from "../../src/lib/logger";
const ctx : AudioContext = new AudioContext();
const testing_file_name : PathLike ="resources/testFiles/ff-16b-2c-44100hz.aac";
const dataBuffer : Buffer = fs.readFileSync(testing_file_name);
let song :Song
const fileProperties =  {
    title   : "",
    album   : "",
    author   : "",
    length  : "",
}
describe('Unit testing Song Class',()=>{
    beforeEach((done)=>{
        ctx.decodeAudioData(dataBuffer,(audio :AudioBuffer)=>{
            song = new Song(dataBuffer,audio);
            song.on("ready",done)
        },(err: Error) =>{Logger.error(err.name,err.message,err.stack)})

    })
    it("should instantiate a new instance of song with correct attributes",(done)=>{
        expect(song).toBeDefined()
        expect(song).toBeInstanceOf(Song)
        expect(song.audioBuffer).toBeDefined()
        done()
    })
    it("should have correct song properties",(done)=>{
        expect(song.songArtist).toEqual(fileProperties.author)
        expect(song.songAlbum).toEqual(fileProperties.album)
        expect(song.songName).toEqual(fileProperties.title)
        done()
    })
})