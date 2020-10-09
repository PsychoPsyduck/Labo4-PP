import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-actor-tabla',
  templateUrl: './actor-tabla.component.html',
  styleUrls: ['./actor-tabla.component.css']
})
export class ActorTablaComponent implements OnInit {

  public listadoEntidades: Array<Actor>;

  @Output() actorSeleccionado: EventEmitter <Actor> = new EventEmitter();
  @Output() indexActorSeleccionado: EventEmitter <number> = new EventEmitter();

  constructor(private dataService: DataService) 
  { }

  ngOnInit(): void {
    this.listadoEntidades = this.dataService.getAllActores();
  }

  seleccionarActor(actor:Actor, index: number) {
    console.log(actor);
    console.log(index);
    this.actorSeleccionado.emit(actor);
    this.indexActorSeleccionado.emit(index);
  }
}
