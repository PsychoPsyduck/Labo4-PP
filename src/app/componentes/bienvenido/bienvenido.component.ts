import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { DataService } from 'src/app/servicios/data.service';
import { EntidadService } from 'src/app/servicios/entidad.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  public listadoActores: Array<Pais>;

  constructor(private entidadService: EntidadService, private dataService: DataService) { }

  ngOnInit(): void {

    // this.entidadService.obtenerEntidades().subscribe((entidad: any) => {
    //   console.log(entidad);
    //   console.log('console log dentro del observable');
    //   this.listadoActores = entidad;
    // }, error => {
    //   console.log(error);
    // });;

  }

  // cargarTabla() {
  //   console.log(this.listadoActores);

  //     this.listadoActores.forEach(element => {
  //       let actor = element;
  //       this.dataService.savePais(actor);
  //       console.log("cargo bien: " + actor)
  //     });
  //   }

}
