import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { ClimaComponent } from './components/clima/clima.component';



const routes: Routes = [
  {path:'noticias',component:NoticiasComponent},
  {path:'horoscopo',component:HoroscopoComponent},
  {path:'divisas',component:DivisasComponent},
  {path:'estadisticas',component:EstadisticasComponent},
  {path:'clima',component:ClimaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
