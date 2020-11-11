import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pelicula } from './lista-peliculas/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class CarroComprasService {

  private _listaCompras: Pelicula[] = [];
  listaCompras: BehaviorSubject<Pelicula[]> = new BehaviorSubject([]);

  constructor() { }

  addPelicula(p: Pelicula): void{
    let encontrado: Pelicula = this._listaCompras.find((v1) => v1.nombre == p.nombre);

    if (!encontrado)
      this._listaCompras.push({...p});

    else
      encontrado.cantidad += p.cantidad;
    this.listaCompras.next(this._listaCompras);
    console.log(this._listaCompras[0].cantidad);
  }
}
