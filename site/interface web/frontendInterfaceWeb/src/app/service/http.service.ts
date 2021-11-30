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


  getPlayEvent():Observable<any>{

    return this.http.get<any>("/audio/play")
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


  /**
  * requête pour les formulaires de paramétrages de l'interface web
  */

   postYoutubeSettings():Observable<User[]>{

    return this.http.get<User[]>("/youtubeSettings")
  }

  postDABSettings():Observable<User[]>{

    return this.http.get<User[]>("/dabSettings")
  }

}
