import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroListaComponent,
    AgregarLibroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
