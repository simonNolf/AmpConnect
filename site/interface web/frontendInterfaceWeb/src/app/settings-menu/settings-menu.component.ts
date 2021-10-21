import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.css']
})
export class SettingsMenuComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitSpotify(form: NgForm) {
    console.log(form.value);
}

  onSubmitTidal(form: NgForm) {
  console.log(form.value);
}

  onSubmitDAB(form: NgForm) {
  console.log(form.value);
}


}
