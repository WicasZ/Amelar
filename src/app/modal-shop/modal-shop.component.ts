import { Component, Input, OnInit, ɵɵi18nPostprocess } from '@angular/core';
import { ProductosI } from '../share/productos';

@Component({
  selector: 'app-modal-shop',
  templateUrl: './modal-shop.component.html',
  styleUrls: ['./modal-shop.component.css'],
})
export class ModalShopComponent implements OnInit {
  constructor() {}
  productosCar: ProductosI[] = [];
  total:number = 0;

  ngOnInit(): void {}

  showP() {
    console.log(this.productosCar);
  }

  addProduct(product: ProductosI) {
    console.log(product);
    if (this.productosCar.indexOf(product) > -1) {
      this.productosCar.forEach( function
        (productosCar) {
          if(productosCar.id === product.id){
            productosCar.cant++;
          }
        }
      );
    } else {
      this.productosCar.push(product);
    }
    this.calTotal();
    this.showP();
  }

  onDelete(prod: ProductosI) {
    if (this.productosCar.indexOf(prod) > -1) {
      this.productosCar.forEach(
        (productosCar) =>{
          if((productosCar.id === prod.id) && (productosCar.cant > 1)){
            productosCar.cant--;
          }else if((productosCar.id === prod.id) && (productosCar.cant <= 1)){
            let ind = this.Exist(productosCar);
            console.log(ind);
            if (ind === 0) {
              this.productosCar.shift();
            } else if(ind === 1){
              this.productosCar.pop();
            }
          }
        }
      );
      this.calTotal();
    }
  }

  Alldelete(){
    this.productosCar = [];
    this.total = 0;
    console.log(this.productosCar)
  }

  calTotal(){
    this.total = 0;
    this.productosCar.forEach((prodcutosCar) =>{
      let subtotal = prodcutosCar.precio*prodcutosCar.cant;
      this.total += subtotal;
    })
  }

  Exist(value: ProductosI): number{
    let index = -1;
    for(let i = 0; i<this.productosCar.length; i++){
      if (value == this.productosCar[i]) {
        index = i;
      }
      
    }
    return index;
  }
}
