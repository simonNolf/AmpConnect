import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';

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
    this.HttpService.getGeneralSettings().subscribe(data => {
      this.nomApplication= data.appName
      this.volumeApplication= data.volume
    })

  }

  public angelMowersPromise = new Promise<any>((resolve, reject) => {
    
})



  onSubmitGeneral(form: any) {
    this.displayGeneralForm = false
    return form;
  }


    this.HttpService.addGeneralSettings(form.value).subscribe(data => {
        this.HttpService.getGeneralSettings().subscribe(data => {
        this.nomApplication= data.appName
        this.volumeApplication= data.volume
        this.displayGeneralForm = false
      })
    })
    
  }

  onGnForm() {
    this.displayGeneralForm = true

  }


  onAnnulerFormGeneral() {
    this.displayGeneralForm = false

  }

}
