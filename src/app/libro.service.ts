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

  agregarLibro(libro: Libro): Observable<Object>{
    return this.clienteHttp.post(this.urlBase,libro);
  }

  buscarLibroPorId(id: number): Observable<Libro>{
    return this.clienteHttp.get<Libro>(this.urlBase + "/" + id);
  }

  editarLibro(id: number,libro: Libro): Observable<Object>{
    return this.clienteHttp.put(this.urlBase+"/"+id,libro);
  }

  eliminarLibro(id: number): Observable<object>{
    return this.clienteHttp.delete(this.urlBase+"/"+id);
  }

}
