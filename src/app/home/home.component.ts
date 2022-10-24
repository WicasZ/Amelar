import { Component, OnInit } from '@angular/core';
export interface ProductosI {
  id: number,
  imagen : String,
  titulo : String,
  descripcion: String,
  precio: number

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Producto: ProductosI[]=[
    {id:1, imagen: 'assets/recursos/vino350ml.png', titulo: 'Vino Amelar', descripcion: 'Vino Amelar', 'precio': 85},
    {id: 2, imagen: 'assets/recursos/vino850ml.png', titulo: 'Vino Amelar', descripcion: 'Vino de 850 ml', 'precio': 180}
  ]

  constructor() {
    //let Producto: Productos;
    //Producto = {imagen: 'assets/recursos/vino350ml.png', titulo: 'Vino Amelar', descripcion: 'Vino Amelar', 'precio': 85};
    //Producto = {imagen: 'assets/recursos/vino850ml.png', titulo: 'Vino Amelar', descripcion: 'Vino de 850 ml', 'precio': 180};
   }

  ngOnInit(): void {
  }

}
