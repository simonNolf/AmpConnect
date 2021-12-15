import { Component } from '@angular/core';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  ngOnInit(): void {
  }
  public title = 'frontendInterfaceWeb';
  public faCoffee = faCoffee;
  public faCog=faCog;
}
