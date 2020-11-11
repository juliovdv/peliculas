import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarroComprasService } from '../carro-compras.service';
import { Pelicula } from '../lista-peliculas/Pelicula';

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.scss']
})
export class CarroComprasComponent implements OnInit {

  listaCompras$: Observable<Pelicula[]>;

  constructor(private carro: CarroComprasService) {
    this.listaCompras$ = carro.listaCompras.asObservable();
  }

  ngOnInit(): void {
  }

}
