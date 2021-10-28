import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ChangeGeneralSettingsComponent } from './change-general-settings/change-general-settings.component';
import { ChangeYoutubeSettingsComponent } from './change-youtube-settings/change-youtube-settings.component';
import { ChangeDabSettingsComponent } from './change-dab-settings/change-dab-settings.component';


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
    ChangeGeneralSettingsComponent,
    ChangeYoutubeSettingsComponent,
    ChangeDabSettingsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
