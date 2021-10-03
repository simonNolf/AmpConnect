import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { ConnexionStreamingComponent } from './connexion-streaming/connexion-streaming.component';
import { HelpComponent } from './help/help.component';

import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';


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
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
