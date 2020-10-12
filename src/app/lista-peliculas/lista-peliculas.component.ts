import { Component, OnInit } from '@angular/core';
import {Pelicula} from './Pelicula';

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
    precio:100,
    stock:5
  },
  {
    img: "../assets/img/district9.jpg",
    nombre: "District 9",
    genero: "Ciencia Ficcion",
    precio:100,
    stock:5
  },
  {
    img: "../assets/img/elgranhotelbudapest.jpg",
    nombre: "Hotel Budapest",
    genero: "Drama, Comedia",
    precio:100,
    stock:5
  },
  {
    img: "../assets/img/gegendiewand.jpg",
    nombre: "Gegen die wand",
    genero: "Drama",
    precio:100,
    stock:5
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
