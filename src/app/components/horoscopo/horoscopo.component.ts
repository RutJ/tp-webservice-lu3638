import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from 'src/app/services/horoscopo.service';
import { Horoscopo } from 'src/app/models/horoscopo';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  horoscopo: Horoscopo;
  horoscopos: Array<Horoscopo>;
  nombre: any;
  

  constructor(private horoscopoService:HoroscopoService) {
    this.horoscopo= new Horoscopo();
    this.horoscopos= new Array<Horoscopo>();
    this.cargarHoroscopo();
    this.cargarInformacion();

   }

  ngOnInit(): void {
  }
  cargarHoroscopo(){
    this.horoscopoService.listarHoroscopo().subscribe(
      (result) =>{
        //es necesario que convienta el JSON 
        this.horoscopos = result;
        });
}

cargarInformacion(){
  let fecha="2020-09-25";
  this.horoscopoService.obtenerDia(fecha).subscribe(
    (result) =>{
      this.nombre= new Horoscopo();
      this.nombre=result;
      console.log(this.nombre)
    },
    (error)=>{
      console.log(error);
    }
    
    );
}

}
