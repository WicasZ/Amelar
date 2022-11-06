import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ProductosI} from '../share/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private readonly url = '../../assets/backend/Productos.json';

  constructor(private http:HttpClient) { }

  public getProductos(): Observable<ProductosI[]>{
    return this.http.get<ProductosI[]>(this.url);
  }
}
