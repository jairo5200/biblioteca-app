import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private urlBase = "http://localhost:8080/biblioteca-app/libros";

  constructor(private clienteHttp: HttpClient) { }

  obtenerLibrosLista(): Observable<Libro[]>{
    return this.clienteHttp.get<Libro[]>(this.urlBase);
  }
}
