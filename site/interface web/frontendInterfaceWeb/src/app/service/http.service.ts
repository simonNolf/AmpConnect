import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url : string = "../assets/Users.json"
  constructor(private http : HttpClient) { }

  postYoutubeSettings():Observable<User[]>{

    return this.http.get<User[]>(this.url)
  }

  postGeneralSettings(){
    console.log('requete post pour les paramètres généraux')
  }

  z(){
    console.log('requete post pour les paramètres DAB+')
  }

}
