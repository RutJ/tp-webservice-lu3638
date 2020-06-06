import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http: HttpClient) { }

  public listarHoroscopo():Observable<any>{
    //peticion por get a esa url de un api rest
    const httpOptions ={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'zodiac-sign.p.rapidapi.com',
        'X-RapidApi-Key':'d458f7de41mshac2328bb432c49ap18ac2djsn10a0cd04240b',
      })
    };
    return this._http.get("https://zodiac-sign.p.rapidapi.com/signs",httpOptions);
  }

  public obtenerDia(fecha:string):Observable<any>{
    //peticion por get a esa url de un api rest
    const httpOptions ={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'zodiac-sign.p.rapidapi.com',
        'X-RapidApi-Key':'d458f7de41mshac2328bb432c49ap18ac2djsn10a0cd04240b',
      }),
      params:{
        'date': fecha
      }
    };
    return this._http.get("https://zodiac-sign.p.rapidapi.com/sign"+fecha,httpOptions);
  }
}

