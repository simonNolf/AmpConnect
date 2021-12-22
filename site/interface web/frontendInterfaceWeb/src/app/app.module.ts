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

import { CommonModule } from '@angular/common';

import { SettingHttpService } from './services/settings-http.service';

import { HttpService } from './service/http.service';



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
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),

    CommonModule,
    FontAwesomeModule,
    HttpClientModule

  ],
  providers: [
    SettingHttpService,
    FontAwesomeModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
