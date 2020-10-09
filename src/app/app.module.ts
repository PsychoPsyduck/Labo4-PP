import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';

import { firebaseConfig } from '../environments/environment';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { DeleteActorComponent } from './componentes/delete-actor/delete-actor.component';
import { DetalleActprComponent } from './componentes/detalle-actpr/detalle-actpr.component';
import { MoidficarActorComponent } from './componentes/moidficar-actor/moidficar-actor.component';
import { PeliculasAltaComponent } from './componentes/peliculas-alta/peliculas-alta.component';
import { ActorTablaComponent } from './componentes/actor-tabla/actor-tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    CabeceraComponent,
    TablaPaisesComponent,
    AltaActorComponent,
    ActorListadoComponent,
    TablaActorComponent,
    DeleteActorComponent,
    DetalleActprComponent,
    MoidficarActorComponent,
    PeliculasAltaComponent,
    ActorTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
