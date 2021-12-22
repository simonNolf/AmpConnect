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


  getGeneralSettings():Observable<any>{

    return this.http.get<any>("/GeneralSettings")
  }

  addGeneralSettings(generale: any):Observable<Generale> {
    console.log(generale)
    return this.http.post<Generale>("/sendGeneralSettings", generale)

      
  }

}
