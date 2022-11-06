import { Component, Input, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { ProductosI } from '../share/productos';
import { HomeComponent } from '../home/home.component';
import { ProductosService } from '../services/productos.service';
import { FormsModule } from '@angular/forms';

interface tipoI {
  tipo: string;
  cantidad: number;
}

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  productoS!: ProductosI;
  producto: ProductosI[] = [
    {
      id: 0,
      imagen: 'assets/recursos/vino350ml.png',
      titulo: 'Vino Amelar',
      descripcion: 'Vino Amelar 350 ml',
      precio: 85,
      cant: 1,
    },
    {
      id: 1,
      imagen: 'assets/recursos/vino850ml.png',
      titulo: 'Vino Amelar',
      descripcion: 'Vino Amelar 850 ml',
      precio: 180,
      cant: 1,
    },
  ];
  @Output() prodcutosCar = new EventEmitter<ProductosI>();
  constructor(private producServe: ProductosService) {}

  ngOnInit(): void {}

  addCar(idAdd: number) {
    this.prodcutosCar.emit(this.producto[idAdd]);
  }

}
