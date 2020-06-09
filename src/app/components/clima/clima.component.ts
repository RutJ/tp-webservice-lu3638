import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
import { Clima } from 'src/app/models/clima';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  clima:Clima;
  ciudad:string;
  constructor(private climaService:ClimaService) { 
    this.clima= new Clima();
  }

  ngOnInit(): void {
  }

  public obtenerClima(){
    this.climaService.obtenerClima(this.ciudad).subscribe(
      (result)=>{
        this.clima=result['main'];
        this.clima.speed=result['wind']['speed'];
        this.convertirCelsius();
        console.log(result);
      }
    );
  }

  convertirCelsius(){
    this.clima.temp_min=((parseFloat(this.clima.temp_min)-273.15).toFixed(2)).toString();
    this.clima.temp_max=((parseFloat(this.clima.temp_max)-273.15).toFixed(2)).toString();
    this.clima.feels_like=((parseFloat(this.clima.feels_like)-273.15).toFixed(2)).toString();
    this.clima.temp=((parseFloat(this.clima.temp)-273.15).toFixed(2)).toString();
  }

}
