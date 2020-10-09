import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { PeliculasAltaComponent } from './componentes/peliculas-alta/peliculas-alta.component';


const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'actor/listado', component: ActorListadoComponent},
  {path: 'peliculas/alta', component: PeliculasAltaComponent},
  {path: 'actor/actorpelicula', component: ActorPeliculaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
