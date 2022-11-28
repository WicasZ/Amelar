import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import {ViewProductComponent} from './view-product/view-product.component'
import { ModalShopComponent } from './modal-shop/modal-shop.component';

const routes: Routes = [
  {path: 'aboutus', component: AboutusComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'buy',component:ViewProductComponent},
  {path:'compra', component:ModalShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
