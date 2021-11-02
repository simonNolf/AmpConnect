import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.css']
})
export class SettingsMenuComponent implements OnInit {
  
  public displayYoutubeForm: boolean = false;
  public displayGeneralForm: boolean = false;
  public displayDabForm: boolean = false;
  

  constructor() { }

  ngOnInit(): void {

  }

  getGene(){
return this.displayGeneralForm
  }
  getYtb(){
    return this.displayYoutubeForm
  }
  getDab(){
    return this.displayDabForm
  }

  onSubmitDAB(form: NgForm) {
    console.log(form.value);
    this.displayDabForm = false
    
}

  onSubmitYoutube(form: NgForm) {
    console.log(form.value);
    this.displayYoutubeForm = false
  }

  onSubmitGeneral(form: NgForm) {
    console.log(form.value);
    this.displayGeneralForm = false
}

  onGnForm() {
    this.displayGeneralForm = true
  }

  onYtForm() {
    this.displayYoutubeForm = true
  }

  onDabForm() {
    this.displayDabForm = true

  }

  onAnnulerFormYtb(){
    this.displayYoutubeForm = false
  }
  onAnnulerFormGeneral(){
    this.displayGeneralForm = false

  }
  onAnnulerFormDab(){
this.displayDabForm = false
  }
}
