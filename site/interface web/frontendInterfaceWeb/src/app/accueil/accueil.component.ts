import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../service/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  selectedFile: any = null
  faPlay = faPlay;
  faPause = faPause;
  faForward = faForward
  faBackward = faBackward
  list = [] as any
  Title: string = "ceci est le titre de la musique";
  time: number = 0;
  musicPlaying : boolean = false
  audio = new Audio()




  constructor(private HttpService: HttpService,private http:HttpClient) {}


  ngOnInit(): void {
    
    /**
     * this.HttpService.getTitleMusic().subscribe(data => {this.list = data})
     * 
     * this.HttpService.getTimeMusic().subscribe(data => {this.list = data})
     * 
    */
  }

  getTitle() {
    return this.Title;
  }

  getTime() {
    
    return this.time;
  }
  
  onBackMusic() {
    this.HttpService.getBackwardEvent().subscribe(data => {
      this.list = data
    })

    return "backMusic"

  }

  onPlayMusic() {
    this.HttpService.getPlayEvent().subscribe(data => {
      this.list = data
    })
    this.audio.src = "../assets/music/station-six.mp3";
      this.audio.play();
      console.log("play")
      
    
    
  }

  onPauseMusic() {
    this.HttpService.getPauseEvent().subscribe(data => {
      this.list = data
    })
      this.audio.pause();
      console.log("pause")

  }

  onForwardMusic() {
    this.HttpService.getForwardEvent().subscribe(data => {
      this.list = data
    })

    console.log("onForwardMusic")
  }

  onSubmitFile(form : NgForm){
console.log("test")
  }

  onMusicSelected(event: any){
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile)
  }

  onUpload(){
    console.log('test')
    const fd = new FormData();
    fd.append('sound',this.selectedFile,this.selectedFile.name)
    console.log(fd)
    this.http.post<any>("/audio/play",fd).subscribe(res =>{
      console.log(res)
    })
  }

}
