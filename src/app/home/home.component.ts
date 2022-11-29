import { Component, OnInit, Output } from '@angular/core';
import {ProductosService} from '../services/productos.service';
import { ProductosI } from '../share/productos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Producto: ProductosI[] = [];
  Producto: ProductosI[]=[
    {id:0, imagen: 'assets/recursos/vino350ml.png', titulo: 'Vino AMELAR', descripcion: 'Vino AMELAR de 350 ml', 'precio': 85, cant:1},
    {id: 1, imagen: 'assets/recursos/vino850ml.png', titulo: 'Vino AMELAR', descripcion: 'Vino AMELAR de 850 ml', 'precio': 180, cant:1}
  ]
  productoV!: ProductosI;

  constructor(private producService: ProductosService) {
    //let Producto: Productos;
    //Producto = {imagen: 'assets/recursos/vino350ml.png', titulo: 'Vino Amelar', descripcion: 'Vino Amelar', 'precio': 85};
    //Producto = {imagen: 'assets/recursos/vino850ml.png', titulo: 'Vino Amelar', descripcion: 'Vino de 850 ml', 'precio': 180};
   }

  ngOnInit(): void {
  }

  onVista(datos:ProductosI){
    console.log(datos);
    this.productoV = datos;
  }

}
