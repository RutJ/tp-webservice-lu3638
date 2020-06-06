import { Component, OnInit } from '@angular/core';
import { DivisaService } from 'src/app/services/divisa.service';
import { Divisa } from 'src/app/models/divisa';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements OnInit {
  divisa:Divisa;
  de:string;
  a:string;
  cantidad:number;
  divisas=["USD","ARS","JPY"];
  resultados:Array<any>;
  constructor(private conversorService:DivisaService) {
    this.divisa= new Divisa();
    this.resultados= new Array<any>();
    this.cargarResultados();
    
   }

  ngOnInit(): void {
  }
  obtenerDivisa(){
    this.conversorService.obtenerMonto(this.de,this.a,this.cantidad.toString()).subscribe(
      (result)=>{
        this.divisa.cantidad=result["from-value"];
        this.divisa.origen=result["from-type"];
        this.divisa.destino=result["to-type"];
        this.divisa.resultado=result["result"];
      }
    );
  }

public cargarResultados(){
    for (let i = 0; i < this.divisas.length; i++) {
      const element = this.divisas[i];
      for (let j = 0; j < this.divisas.length; j++) {
        const element2 = this.divisas[j];
        this.conversorService.obtenerMonto(element,element2,"1").subscribe(
          (result)=>{
            this.resultados.push(result["result"]);
          }
        );
      }
      
    }
  }

}
