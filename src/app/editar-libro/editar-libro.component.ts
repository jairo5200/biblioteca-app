import { Component } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
})
export class EditarLibroComponent {
  libro :Libro = new Libro();
  id:number;

  constructor(private libroServicio:LibroService, private ruta: ActivatedRoute,private enrutador:Router) { }

  ngOnInit(){
    this.id= this.ruta.snapshot.params['id'];
    this.libroServicio.buscarLibroPorId(this.id).subscribe({
      next: (libro) => {
        this.libro = libro;
        },
        error: (error: any) => {
          console.error('Error:', error);
          }
    });
  }

  onSubmit(){
    this.guardarLibro();
  }

  guardarLibro(){
    this.libroServicio.editarLibro(this.id,this.libro).subscribe({
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
