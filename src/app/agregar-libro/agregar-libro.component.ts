import { Component } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrl: './agregar-libro.component.css'
})
export class AgregarLibroComponent {
  libro :Libro = new Libro();
  constructor(private libroServicio:LibroService,private enrutador:Router) { }

  onSubmit(){
    this.guardarLibro();
  }

  guardarLibro(){
    this.libroServicio.agregarLibro(this.libro).subscribe({
      next: (data) => {
        this.irListaLibros();
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  irListaLibros(){
    this.enrutador.navigate(['/libros']);
  }

}
