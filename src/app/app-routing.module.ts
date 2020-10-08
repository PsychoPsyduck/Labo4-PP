import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';


const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  // {path: 'error', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
