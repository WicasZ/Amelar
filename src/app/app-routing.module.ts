import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ModalShopComponent } from './modal-shop/modal-shop.component';
import {ObjectComponent} from './object/object.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: 'aboutus', component: AboutusComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'object',component:ObjectComponent},
  {path:'compra', component:ModalShopComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
