import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { SettingHttpService } from '../services/settings-http.service';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.css']
})
export class SettingsMenuComponent implements OnInit {


  public displayYoutubeForm: boolean = false;
  public displayGeneralForm: boolean = false;
  public displayDabForm: boolean = false;
  listDab = [] as any
  listGeneral = [] as any
  listYoutube = [] as any

  generalInput = [] as any

  public nomApplication:string = ""
  public volumeApplication:Number = 0

  


  constructor(private HttpService: SettingHttpService) {}




  ngOnInit(): void {
    this.HttpService.getDabSettings().subscribe(data => {
      this.listDab= data
    })
    this.HttpService.getYtbSettings().subscribe(data => {
      this.listYoutube = data
    })
    this.HttpService.getGeneralSettings().subscribe(data => {
      this.nomApplication= data[0].appName
      this.volumeApplication= data[0].volume
    })

  }
  


  onSubmitDAB(form: NgForm) {
    console.log(form.value);
    this.displayDabForm = false

  }


  onSubmitYoutube(form: NgForm) {
    console.log(form.value);
    this.displayYoutubeForm = false
  }

  onSubmitGeneral(form: any) {
    this.displayGeneralForm = false
    return form;
  }

  sendSubmitedGeneralData(form: NgForm){
    this.HttpService.addGeneralSettings(this.onSubmitGeneral(form.value)).subscribe(test => {
      console.log(test)
    })
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

  onAnnulerFormYtb() {
    this.displayYoutubeForm = false
  }
  onAnnulerFormGeneral() {
    this.displayGeneralForm = false

  }
  onAnnulerFormDab() {
    this.displayDabForm = false
  }

}
