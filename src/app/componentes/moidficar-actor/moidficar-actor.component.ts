import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-moidficar-actor',
  templateUrl: './moidficar-actor.component.html',
  styleUrls: ['./moidficar-actor.component.css']
})
export class MoidficarActorComponent implements OnInit {
  
  form: FormGroup;
  pais: Pais;
  hola: string;
  lastID: number;
  confirmMsj: string;
  errorMsj: string;
  listadoEntidades: Array<Actor>;

  @Input() actor: Actor;
  @Input() borrado: number;
  @Output() eventoBorrarPelicula = new EventEmitter<number>();
  
  constructor(private fb: FormBuilder, private dataService: DataService)
  { this.lastID = 0}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      fecha_de_nacimiento: ['', Validators.required],
      nacionalidad: ['', Validators.required]
    });

    
    // this.listadoEntidades = this.dataService.getAllActores();
  }

  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get sexo() { return this.form.get('sexo'); }
  get fecha() { return this.form.get('fecha_de_nacimiento'); }
  // get nacionalidad() { return this.form.get('nacionalidad'); }

  cargarForm() {
    this.form.setValue({
      nombre: this.actor.nombre,
      apellido: this.actor.apellido,
      sexo: this.actor.sexo,
      fecha_de_nacimiento: this.actor.fecha_de_nacimiento,
      nacionalidad: this.actor.nacionalidad
    });
  }


  guardar() {
    if(this.listadoEntidades) {
      this.listadoEntidades.forEach(element => {
        if(element.id > this.lastID) {
          this.lastID = element.id;
        }
      });
    }
    
    const { nombre, apellido, sexo, fecha_de_nacimiento} = this.form.value;
    
    if(nombre && apellido && sexo && fecha_de_nacimiento) {
      this.lastID++;

      var newActor = this.actor;

      newActor.id = this.actor.id;
      newActor.nombre = nombre;
      newActor.apellido = apellido;
      newActor.sexo = sexo;
      newActor.fecha_de_nacimiento = fecha_de_nacimiento;
      if(this.dataService.updateActor(newActor)) {
        this.errorMsj = null;
        this.confirmMsj = "Alta exitosa."
      } else {
        this.errorMsj = "Error. Firebase."
      }
    } else {
      this.errorMsj = "Error. Revise los datos."
    }
  }






  borrarPelicula(pelicula) {
    this.eventoBorrarPelicula.emit(pelicula);
    this.actor = null; 
  }
}
