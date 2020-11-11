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
  @Output()
  fueraRango: EventEmitter<String> = new EventEmitter<String>(); 
  
  
  ngOnInit(): void {
  }



  upCantidad(): void {
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else
      this.fueraRango.emit("La cantidad no puede superar al stock.");
  }

  downCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
    else
      this.fueraRango.emit("La cantidad no puede ser menor a 0.");
  }

  controlCantidad(event): void {

    if (event.target.value < 0){
      this.cantidad = 0;
      this.fueraRango.emit("La cantidad no puede ser menor a 0.");
    }
    else
      if (event.target.value > this.max){
        this.cantidad = this.max;
        this.fueraRango.emit("La cantidad no puede superar al stock.");
      }
    this.cantidadChange.emit(this.cantidad);
  }
}
