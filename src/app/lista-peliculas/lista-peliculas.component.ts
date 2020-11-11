import { Component, OnInit } from '@angular/core';
import { CarroComprasService } from '../carro-compras.service';
import { Pelicula } from './Pelicula';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.scss']
})
export class ListaPeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [
    {
      img: "../assets/img/bohemianrhapsody.jpg",
      nombre: "Bohemian Rhapsody",
      genero: "Musical",
      precio: 100,
      stock: 5,
      cantidad: 0,
    },
    {
      img: "../assets/img/district9.jpg",
      nombre: "District 9",
      genero: "Ciencia Ficcion",
      precio: 100,
      stock: 5,
      cantidad: 0,
    },
    {
      img: "../assets/img/elgranhotelbudapest.jpg",
      nombre: "Hotel Budapest",
      genero: "Drama, Comedia",
      precio: 100,
      stock: 0,
      cantidad: 0,
    },
    {
      img: "../assets/img/gegendiewand.jpg",
      nombre: "Gegen die wand",
      genero: "Drama",
      precio: 100,
      stock: 5,
      cantidad: 0,
    },
  ]

  constructor(private carro: CarroComprasService) { }

  ngOnInit(): void {
  }

  fueraRango(m: string): void {
    console.log(m);
  }

  agregarAlCarro(p: Pelicula) {
    if (p.cantidad > 0) {
      this.carro.addPelicula(p);
      p.stock -= p.cantidad;
      p.cantidad = 0;
    }
  }

}
