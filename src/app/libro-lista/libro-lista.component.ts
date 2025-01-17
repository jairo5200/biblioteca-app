import { Component } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html'
})
export class LibroListaComponent {
  libros: Libro[];

  constructor(private libroServicio: LibroService){

  }

  ngOnInit(){
    //cargar todos los productos
    this.obtenerLibros();
  }

  private obtenerLibros(){
    //consumir los datos del observable (subscribirnos)
    this.libroServicio.obtenerLibrosLista().subscribe(libros => {
      this.libros = libros;
      });
  }
}
