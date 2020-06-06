import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaServiceService } from 'src/app/services/noticia-service.service';
import { element } from 'protractor';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticia:Noticia;
  noticias:Array<Noticia>;
  categoria:string;
  constructor(private noticiaServicio:NoticiaServiceService) {
    this.noticia= new Noticia();
    this.noticias = new Array<Noticia>();
    this.categoria="covid-19";
    this.cargarNoticias();

   }

  ngOnInit(): void {
  }
  public cargarNoticias(){
    this.noticiaServicio.listNoticias(this.categoria).subscribe(
      (result) =>{
        //es necesario que convienta el JSON 
        this.noticias = new Array<Noticia>();
        result['arts'].forEach(element =>{
          this.noticia = new Noticia();
          Object.assign(this.noticia,element);
          this.noticias.push(this.noticia);
        });
        console.log(this.noticias);
      },
      error => {alert("Error en la peticion");})
  }

}
