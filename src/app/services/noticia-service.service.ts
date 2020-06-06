import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiaServiceService {


  constructor(private _http: HttpClient) { }

  public listNoticias(categoria:string):Observable<any>{
    //peticion por get a esa url de un api rest
    const httpOptions ={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'livescore6.p.rapidapi.com',
        'X-RapidApi-Key':'d458f7de41mshac2328bb432c49ap18ac2djsn10a0cd04240b',
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria,httpOptions);
  }
}
