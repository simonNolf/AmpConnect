import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Donne une seconde vie à ton ancien Ampli";
  title2 ="Bientôt";
  title3 = "Disponible,";
  title4 = "reviens dans"

  //les variables du countDown
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() {
   }

  ngOnInit(){
    this.countDown;
  }

  countDown = setInterval(()=>{
      const countDate = new Date("Dec 23, 2021 13:00:00").getTime();
      const currentDate = new Date().getTime();
      var gap = countDate - currentDate;

      // variables de cacules
      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours*24;

      this.days = Math.floor(gap / (days));
      this.hours = Math.floor((gap % (days)) / (hours));
      this.minutes = Math.floor((gap % (hours)) / (minutes));
      this.seconds = Math.floor((gap % (minutes)) / (seconds));
  })
}
