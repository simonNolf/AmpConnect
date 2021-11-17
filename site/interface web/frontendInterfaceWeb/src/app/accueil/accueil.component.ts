import { Component, OnInit } from '@angular/core';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../service/http.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  faPlay = faPlay;
  faPause = faPause;
  faForward = faForward
  faBackward = faBackward
  list = [] as any
  Titre: string = "ceci est le titre de la musique";
  time: string = "TBD";
  musicPlaying : boolean = false
  audio = new Audio()

  msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = false;
msaapDisplayDuration = false;
msaapDisablePositionSlider = true;



  constructor(private HttpService: HttpService) {}


  ngOnInit(): void {
    
    /**
     * this.HttpService.getTitleMusic().subscribe(data => {this.list = data})
     * 
     * this.HttpService.getTimeMusic().subscribe(data => {this.list = data})
     * 
    */
  }

  getTitle() {
    
    return this.Titre;
  }

  getTime() {
    
    return this.time;
  }
  
  onBackMusic() {
    this.HttpService.getBackwardEvent().subscribe(data => {
      this.list = data
    })

    console.log("backMusic")

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

}
