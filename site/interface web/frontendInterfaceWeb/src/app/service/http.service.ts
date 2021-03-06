import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  

  constructor(private http : HttpClient) { }

  /**
  * requête pour la partie audio de l'interface web
  */

  getPlayEvent():Observable<User[]>{

    return this.http.get<User[]>("/audio/play")
  }

  getPauseEvent():Observable<User[]>{

    return this.http.get<User[]>("/audio/pause")
  }

  getForwardEvent():Observable<User[]>{

    return this.http.get<User[]>("/audio/forward")
  }

  getBackwardEvent():Observable<User[]>{

    return this.http.get<User[]>("/audio/backward")
  }

  getTitleMusic():Observable<User[]>{

    return this.http.get<User[]>("/audio/title")
  }

  getTimeMusic():Observable<User[]>{

    return this.http.get<User[]>("/audio/time")
  }



}
