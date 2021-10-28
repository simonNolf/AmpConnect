import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-youtube-settings',
  templateUrl: './change-youtube-settings.component.html',
  styleUrls: ['./change-youtube-settings.component.css']
})
export class ChangeYoutubeSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitYoutube(form: NgForm) {
    console.log(form.value);
}

}
