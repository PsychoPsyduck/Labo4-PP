import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-detalle-actpr',
  templateUrl: './detalle-actpr.component.html',
  styleUrls: ['./detalle-actpr.component.css']
})
export class DetalleActprComponent implements OnInit {

  @Input() actor: Actor;
  @Input() borrado: number;
  @Output() eventoBorrarPelicula = new EventEmitter<number>();
  
  constructor(private dataService: DataService ) { }

  ngOnInit(): void {
  }

  borrarPelicula(pelicula) {
    this.eventoBorrarPelicula.emit(pelicula);
    this.actor = null; 
  }

  borrarActor() {
    if(this.dataService.deleteActor(this.actor)) {
      console.log("bien")
    } else {
      console.log("mal")
    }
    
  }
}
