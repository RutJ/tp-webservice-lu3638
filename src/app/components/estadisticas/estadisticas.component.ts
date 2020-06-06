import { Component, OnInit } from '@angular/core';
import { Estadistica } from 'src/app/models/estadistica';
import { EstadisticaService } from 'src/app/services/estadistica.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  estadistica: Estadistica;
  pais:string;
  mostrar:boolean=false;
  estadisticas:Array<Estadistica>;
  confirmados:boolean;
  fallecidos:boolean;
  recuperados:boolean;

  constructor(private estadisticaService:EstadisticaService) {
    this.estadistica=new Estadistica();
    this.estadisticas= new Array<Estadistica>();
   }

  ngOnInit(): void {
  }

  obtenerEstadisticasPais(){
    this.estadisticaService.listEstadisticas(this.pais).subscribe(
      (result)=>{
        
        this.estadistica.pais=result["Country_text"];
        this.estadistica.casosConfirmados=result["Total Cases_text"];
        this.estadistica.curados=result["Total Recovered_text"];
        this.estadistica.fallecidos=result["Total Deaths_text"];
        this.mostrar=true;
      }
    );

  }
  public guardarEstadistica(){
    this.estadisticas.push(this.estadistica);
    this.estadistica=new Estadistica();
    this.mostrar=false;
    this.confirmados=false;
    this.fallecidos=false;
    this.recuperados=false;
  }

  public ocultar1(e){
    if(e.target.checked==true)
    this.confirmados=true;
    else
    this.confirmados=false;
    
  }

  public ocultar2(e){
    if(e.target.checked==true)
    this.recuperados=true;
    else
    this.recuperados=false;

  }

  public ocultar3(e){
    if(e.target.checked==true)
    this.fallecidos=true;
    else
    this.fallecidos=false;

  }
}
