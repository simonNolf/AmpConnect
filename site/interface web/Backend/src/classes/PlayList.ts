import {Song} from "./Song";

class playList extends Array<Song> {
    private currentSong         : number
    private outputNode          :AudioNode
    private currentAudioSource  :AudioBufferSourceNode
    private audioCtx            :AudioContext
    constructor(song : Song, outputNode : AudioNode, audioContext :AudioContext) {
        super();
        this.push(song)
        this.currentSong = this.length -1
    }
    public append(song:Song){
        this.push(song)
        if (!this.currentSong){
            this.currentSong = this.length -1
        }

    }
    public playNext () {
        if (this.currentSong +1 < this.length){
            this.play(this.currentSong +1)
        }
    }
    public restartSong(){
        this.play(this.currentSong)
    }
    public playPrevious(){
        if(this.length >1){
            this.play(this.currentSong -1)
        }
    }
    private play (index: number =0){
        let newSource = this.audioCtx.createBufferSource()
        newSource.buffer = this[index].audioBuffer
        this.currentSong = index
        this.currentAudioSource.start()
        this.currentAudioSource = newSource
        this.currentAudioSource.connect(this.outputNode)
        this.currentAudioSource.start(0)
        this[this.currentSong].play().on('songEnded',this.playNext)
    }


}