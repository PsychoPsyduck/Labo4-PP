import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';


const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'actor/listado', component: ActorListadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
