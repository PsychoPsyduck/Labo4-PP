import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-delete-actor',
  templateUrl: './delete-actor.component.html',
  styleUrls: ['./delete-actor.component.css']
})
export class DeleteActorComponent implements OnInit {

  @Input() actor: Actor;
  @Input() borrado: number;
  @Output() eventoBorrarPelicula = new EventEmitter<number>();
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  borrarActor() {
    if(this.dataService.deleteActor(this.actor)) {
      console.log("bien")
    } else {
      console.log("mal")
    }
    
  }
}
