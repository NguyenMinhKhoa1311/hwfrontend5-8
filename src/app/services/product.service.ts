import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  getProduct(){
    return this.httpClient.get<Product[]>("http://localhost:3000/product");
  }
  deleteProduct(id:string){
    return this.httpClient.delete<Product>(`http://localhost:3000/product/delete/${id}`)
  }
  addProduct(product:Product){
    return this.httpClient.post<Product>(`http://localhost:3000/product/create`,product)
  }
}
