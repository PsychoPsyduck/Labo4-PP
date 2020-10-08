import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private urlPeliculas = environment.urlPeliculas;
  public usuario;

  constructor(private http: HttpClient) { }

  public obtenerEntidades() {
    return this.http.get(this.urlPeliculas);
  }
}
