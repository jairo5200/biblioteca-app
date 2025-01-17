import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroListaComponent } from './libro-lista/libro-lista.component';

// http:localhost:4200/productos
const routes: Routes = [
  {path: 'libros',component:LibroListaComponent},
  {path: '', redirectTo: 'libros', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
