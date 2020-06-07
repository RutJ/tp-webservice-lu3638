import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from 'src/app/services/horoscopo.service';
import { Horoscopo } from 'src/app/models/horoscopo';
import { sign } from 'crypto';
import { element } from 'protractor';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  horoscopo: Horoscopo;
  horoscopos: Array<Horoscopo>;
  datosDia:Array<any>;
  datosDescripcion:Array<any>;
  imagenesHoroscopos=["assets/images/capricornio.png" ,"assets/images/aquario.png" ,"assets/images/picis.png",
  "assets/images/aries.png","assets/images/tauro.png","assets/images/geninis.png","assets/images/cancer.png",
  "assets/images/leo.png","assets/images/virgo.png","assets/images/libra.png","assets/images/scorpio.png","assets/images/sagitario.png"];

  constructor(private horoscopoService:HoroscopoService) {
    this.horoscopo= new Horoscopo();
    this.horoscopos= new Array<Horoscopo>();
    this.datosDia=new Array<any>();
    this.datosDescripcion=new Array<any>();
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
        console.log(result);
        this.agregarImagen()
        });
}

cargarInformacion(){
  this.horoscopoService.obtenerDia().subscribe(
    (result) =>{
      this.datosDia=result['sign'];
      this.datosDescripcion=result['description'];
      console.log(result);
    }
    );
}
agregarImagen(){
  var k=0;
  this.horoscopos.forEach(element => {
    element.img=this.imagenesHoroscopos[k];
    k++;
  });  
  }

}
