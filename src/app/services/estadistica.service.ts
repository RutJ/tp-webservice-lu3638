import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  constructor(private _http: HttpClient) { }

  public listEstadisticas(pais:string):Observable<any>{
    //peticion por get a esa url de un api rest
    const httpOptions ={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'covid-19-tracking.p.rapidapi.com',
        'X-RapidApi-Key':'d458f7de41mshac2328bb432c49ap18ac2djsn10a0cd04240b',
      }),
      params: {
        'country': pais,
      }
    };
    return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1/"+pais,httpOptions);
  }
}
