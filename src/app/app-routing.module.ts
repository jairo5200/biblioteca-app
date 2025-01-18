import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';

// http:localhost:4200/libros
const routes: Routes = [
  {path: 'libros',component:LibroListaComponent},
  {path: '', redirectTo: 'libros', pathMatch:'full'},
  {path: 'agregar-libro',component: AgregarLibroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
