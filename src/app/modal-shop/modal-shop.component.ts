import { Component, Input, OnInit, ɵɵi18nPostprocess } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';

import { ProductosI } from '../share/productos';

@Component({
  selector: 'app-modal-shop',
  templateUrl: './modal-shop.component.html',
  styleUrls: ['./modal-shop.component.css'],
})
export class ModalShopComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  constructor() {}
  productosCar: ProductosI[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.initConfig();
  }

  showP() {
    console.log(this.productosCar);
  }

  addProduct(product: ProductosI) {
    console.log(product);
    if (this.productosCar.indexOf(product) > -1) {
      this.productosCar.forEach(function (productosCar) {
        if (productosCar.id === product.id) {
          productosCar.cant++;
        }
      });
    } else {
      this.productosCar.push(product);
    }
    this.calTotal();
    this.showP();
  }

  onDelete(prod: ProductosI) {
    if (this.productosCar.indexOf(prod) > -1) {
      this.productosCar.forEach((productosCar) => {
        if (productosCar.id === prod.id && productosCar.cant > 1) {
          productosCar.cant--;
        } else if (productosCar.id === prod.id && productosCar.cant <= 1) {
          let ind = this.Exist(productosCar);
          console.log(ind);
          if (ind === 0) {
            this.productosCar.shift();
          } else if (ind === 1) {
            this.productosCar.pop();
          }
        }
      });
      this.calTotal();
    }
  }

  Alldelete() {
    this.productosCar = [];
    this.total = 0;
    this.showP();
  }

  calTotal() {
    this.total = 0;
    this.productosCar.forEach((prodcutosCar) => {
      let subtotal = prodcutosCar.precio * prodcutosCar.cant;
      this.total += subtotal;
    });
  }

  Exist(value: ProductosI): number {
    let index = -1;
    for (let i = 0; i < this.productosCar.length; i++) {
      if (value == this.productosCar[i]) {
        index = i;
      }
    }
    return index;
  }

  //configuracion paypal
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'MXN',
      clientId: 'AZ5k6x3i407zym8l8U5dB3ianW7oQAdoRMgYC3TrYwTqyENHmF4UaNbJf0Znqr0RQTqfJwrJH5en9rwm',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'MXN',
                value: this.total.toString(),
                breakdown: {
                  item_total: {
                    currency_code: 'MXN',
                    value: this.total.toString(),
                  },
                },
              },
              items: this.getProductsCard()
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
        alert("Compra exitosa, gracias por su preferencia");
        this.Alldelete();
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
        alert("A ocurrido un error");
        this.Alldelete();
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

  getProductsCard(): any[] {
    const prods: any[] = [];
    let prod = {};
    this.productosCar.forEach((it: ProductosI) => {
      prod = {
        name: it.descripcion,
        quantity: it.cant,
        unit_amount: {
          currency_code: 'MXN',
          value: it.precio,
        }
      };
      prods.push(prod);
    });
    console.log(prods);
    return prods
  }
}
