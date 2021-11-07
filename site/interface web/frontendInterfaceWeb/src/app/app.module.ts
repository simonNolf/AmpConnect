import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { ConnexionStreamingComponent } from './connexion-streaming/connexion-streaming.component';
import { HelpComponent } from './help/help.component';
import { FormsModule }   from '@angular/forms';
import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpService } from './service/http.service';
import { ChangeSettingsComponent } from './change-settings/change-settings.component';
import { ShowSettingsComponent } from './show-settings/show-settings.component';


const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'settings', component: SettingsMenuComponent },
  { path: 'connection', component: ConnexionStreamingComponent },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SettingsMenuComponent,
    ConnexionStreamingComponent,
    HelpComponent,
    AccueilComponent,
    ChangeSettingsComponent,
    ShowSettingsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
