import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor(private _http: HttpClient) { }

  public obtenerMonto(de:string,a:string,cantidad:string):Observable<any>{
    //peticion por get a esa url de un api rest
    const httpOptions ={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'community-neutrino-currency-conversion.p.rapidapi.com',
        'X-RapidApi-Key':'d458f7de41mshac2328bb432c49ap18ac2djsn10a0cd04240b',
        'content-type': 'application/x-www-form-urlencoded'
      }),
      params: {
        'from-type': de,
        'to-type': a,
        'from-value': cantidad
      }
    };
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert?",'from-type/to-type/from-value',httpOptions);
  }

 // public obtenerReasultado(de:string,a:string)
}
