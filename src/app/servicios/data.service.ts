import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import * as firebase from "firebase/app";
import { Actor } from '../clases/actor';
import { Pais } from '../clases/pais';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFirestore) { }

  getAllPeliculas() {
    var lista = Array<any>();
    firebase.firestore().collection("peliculas").get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          let docum = doc.data();
          let pelicula = new Pelicula(docum.id, docum.nombre, docum.tipo, docum.fecha_estreno, docum.cantidad_publico, docum.foto);
          lista.push(pelicula);
      });
    })
    return lista;
  }

  getAllActores() {
    var lista = Array<any>();
    firebase.firestore().collection("actores").get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          let docum = doc.data();
          let pais = new Actor();
          pais.id = docum.id;
          pais.nombre = docum.nombre;
          pais.apellido = docum.apellido;
          pais.sexo = docum.sexo;
          pais.fecha_de_nacimiento = docum.fecha_de_nacimiento;
          pais.nacionalidad = docum.nacionalidad;
          pais.foto = docum.foto;
          pais.uid = doc.id;
          if(docum.activa = 1) {
            lista.push(pais);
          }
      });
    })
    return lista;
  }

  // getAllPaises() {
  //   var lista = Array<any>();
  //   firebase.firestore().collection("paises").get()
  //   .then(function(querySnapshot) {
  //     querySnapshot.forEach(function(doc) {
  //         let docum = doc.data();
  //         let pais = new Pais();
  //         pais.nombre = docum.nombre;
  //         pais.poblacion = docum.poblacion;
  //         pais.bandera = docum.bandera;
  //         pais.uid = doc.id;
  //         lista.push(pais);
  //     });
  //   })
  //   return lista;
  // }

  savePelicua(pelicula) {
    console.log(pelicula)
    return this.db.collection("peliculas").add({
      id: pelicula.id,
      nombre: pelicula.nombre,
      tipo: pelicula.tipo,
      fecha_estreno: pelicula.fecha_estreno,
      cantidad_publico: pelicula.cantidad_publico,
      foto: pelicula.foto,
      actor: pelicula.actor.id,
      activa: 1
    });
  }

  saveActor(actor) {
    return this.db.collection("actores").add({
      id: actor.id,
      nombre: actor.nombre,
      apellido: actor.apellido,
      sexo: actor.sexo,
      fecha_de_nacimiento: actor.fecha_de_nacimiento,
      nacionalidad: actor.nacionalidad,
      foto: actor.foto,
      activo: 1
    });
  }

  savePais(pais) {
    return this.db.collection("paises").add({
      nombre: pais.nombre,
      poblacion: pais.poblacion,
      bandera: pais.bandera,
      activo: 1
    });
  }

  deleteActor(actor) {
    return firebase.firestore().collection("actores").doc(actor.uid).update({
      activo: 0
    })
  }

  updateActor(actor) {
    return firebase.firestore().collection("actores").doc(actor.uid).update({
      nombre: actor.nombre,
      apellido: actor.apellido,
      sexo: actor.sexo,
      fecha_de_nacimiento: actor.fecha_de_nacimiento,
    })
  }
}
