import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-general-settings',
  templateUrl: './change-general-settings.component.html',
  styleUrls: ['./change-general-settings.component.css']
})
export class ChangeGeneralSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitGeneral(form: NgForm) {
    console.log(form.value);
}

}
