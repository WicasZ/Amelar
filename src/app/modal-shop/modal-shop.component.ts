import { Component, Input, OnInit, ɵɵi18nPostprocess } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

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

  ngOnInit(): void {}

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
    console.log(this.productosCar);
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
      currency: 'MXM',
      clientId:
        'Aat_vgA4bWbJSlSLXeLEJy7piGsAa8qakj_WsTGOr_9nM91dVTXMbX3_0JMpnzmHiUV9cAbYa1S1Wp0f',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'MXM',
                value: '9.99',
                breakdown: {
                  item_total: {
                    currency_code: 'MXM',
                    value: '9.99',
                  },
                },
              },
              items: [
                {
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'MXM',
                    value: '9.99',
                  },
                },
              ],
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
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
