import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-dab-settings',
  templateUrl: './change-dab-settings.component.html',
  styleUrls: ['./change-dab-settings.component.css']
})
export class ChangeDabSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitDAB(form: NgForm) {
    console.log(form.value);
}

}
