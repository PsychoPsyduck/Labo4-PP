import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {

  form: FormGroup;
  pais: Pais;
  hola: string;
  lastID: number;
  confirmMsj: string;
  errorMsj: string;
  listadoEntidades: Array<Actor>;

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

    this.listadoEntidades = this.dataService.getAllActores();
  }

  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get sexo() { return this.form.get('sexo'); }
  get fecha() { return this.form.get('fecha_de_nacimiento'); }
  get nacionalidad() { return this.form.get('nacionalidad'); }


  paisSeleccionado(pais: Pais) {
    this.form.patchValue({
      nacionalidad: pais.nombre
    });

    this.pais = pais;
  }

  guardar() {
    if(this.listadoEntidades) {
      this.listadoEntidades.forEach(element => {
        if(element.id > this.lastID) {
          this.lastID = element.id;
        }
      });
    }
    
    const { nombre, apellido, sexo, fecha_de_nacimiento, nacionalidad } = this.form.value;
    
    if(nombre && apellido && sexo && fecha_de_nacimiento && nacionalidad) {
      this.lastID++;

      var newActor = new Actor();

      newActor.id = this.lastID;
      newActor.nombre = nombre;
      newActor.apellido = apellido;
      newActor.sexo = sexo;
      newActor.fecha_de_nacimiento = fecha_de_nacimiento;
      newActor.nacionalidad = nacionalidad;

      console.log(newActor)
      if(this.dataService.saveActor(newActor)) {
        this.errorMsj = null;
        this.confirmMsj = "Alta exitosa."
      } else {
        this.errorMsj = "Error. Firebase."
      }
    } else {
      this.errorMsj = "Error. Revise los datos."
    }
  }
 
}
