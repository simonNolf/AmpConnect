import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Dab } from '../interface/dab';
import { Youtube } from '../interface/youtube';
import { Generale } from '../interface/generale';

@Injectable({
  providedIn: 'root'
})
export class SettingHttpService {

  constructor(private http : HttpClient) { }

  getDabSettings():Observable<Dab[]>{

    return this.http.get<Dab[]>("/DabSettings")
  }

  getYtbSettings():Observable<Youtube[]>{

    return this.http.get<Youtube[]>("/YtbSettings")
  }

  getGeneralSettings():Observable<Generale[]>{

    return this.http.get<Generale[]>("/GeneralSettings")
  }

  addGeneralSettings(generale: any):Observable<Generale> {
    console.log(generale)
    return this.http.post<Generale>("/sendGeneralSettings", generale)

      
  }

  addDabSettings(dab: any):Observable<Dab> {
    console.log(dab)
    return this.http.post<Dab>("/sendDabSettings", dab)

      
  }

  addYoutubeSettings(youtube: any):Observable<Youtube> {
    console.log(youtube)
    return this.http.post<Youtube>("/sendYoutubeSettings", youtube)

      
  }

}
