import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private _http: HttpClient) { }


  public obtenerClima(city:string):Observable<any>{
    //peticion por get a esa url de un api rest
    const httpOptions ={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'community-open-weather-map.p.rapidapi.com',
        'X-RapidApi-Key':'d458f7de41mshac2328bb432c49ap18ac2djsn10a0cd04240b',
      }),
      params: {
        'q': city,
      }
    };
    return this._http.get("https://community-open-weather-map.p.rapidapi.com/weather", httpOptions);
  }


}
