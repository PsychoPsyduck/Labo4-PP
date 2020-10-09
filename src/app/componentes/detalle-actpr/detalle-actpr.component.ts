import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-detalle-actpr',
  templateUrl: './detalle-actpr.component.html',
  styleUrls: ['./detalle-actpr.component.css']
})
export class DetalleActprComponent implements OnInit {

  @Input() actor: Actor;
  @Input() borrado: number;
  @Output() eventoBorrarPelicula = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  borrarPelicula(pelicula) {
    this.eventoBorrarPelicula.emit(pelicula);
    this.actor = null; 
  }
}
