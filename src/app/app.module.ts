import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { HttpClientModule }from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HoroscopoComponent,
    NoticiasComponent,
    DivisasComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
