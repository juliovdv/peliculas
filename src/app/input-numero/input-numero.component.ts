import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../lista-peliculas/Pelicula';

@Component({
  selector: 'app-input-numero',
  templateUrl: './input-numero.component.html',
  styleUrls: ['./input-numero.component.scss']
})
export class InputNumeroComponent implements OnInit {

  constructor() { }


  @Input()
  cantidad: number;
  @Input()
  max: number;
  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }



  upCantidad(): void {
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  downCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  controlCantidad(event): void {

    if (event.target.value < 0)
      this.cantidad = 0;
    else
      if (event.target.value > this.max)
        this.cantidad = this.max;
    this.cantidadChange.emit(this.cantidad);
  }
}
