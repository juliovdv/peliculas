import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';

import { FormsModule } from '@angular/forms';
import { ReseniasContactoComponent } from './resenias-contacto/resenias-contacto.component';
import { ReseniasHomeComponent } from './resenias-home/resenias-home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPeliculasComponent,
    CarroComprasComponent,
    ReseniasContactoComponent,
    ReseniasHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
