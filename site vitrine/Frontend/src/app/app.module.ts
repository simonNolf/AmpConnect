import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';

import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tuto', component: TutorialComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    TutorialComponent,
    ContactComponent,
    AccueilComponent
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
