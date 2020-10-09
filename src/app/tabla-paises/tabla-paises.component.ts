import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from '../clases/pais';
import { DataService } from '../servicios/data.service';
import { EntidadService } from '../servicios/entidad.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  public listadoEntidades: Array<Pais>;
  // public listadoActores: Array<Actor>;
  @Output() paisSeleccionado: EventEmitter <Pais> = new EventEmitter();
  @Output() indexPaisSelecionado: EventEmitter <number> = new EventEmitter();

  constructor(private entidadeService:EntidadService, private dataService: DataService) 
  { }

  ngOnInit(): void {
    // this.listadoEntidades = this.entidadeService.obtenerEntidades();

    this.entidadeService.obtenerEntidades().subscribe((entidad: any) => {
        console.log(entidad);
        console.log('console log dentro del observable');
        this.listadoEntidades = entidad;
      }, error => {
        console.log(error);
      });;
  }

  seleccionarPais(pelicula:Pais, index: number) {
    console.log(pelicula);
    console.log(index);
    this.paisSeleccionado.emit(pelicula);
    this.indexPaisSelecionado.emit(index);
  }
}
