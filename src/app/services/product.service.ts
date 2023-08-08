import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  getProduct(idToken: string){
    console.log(idToken)
    return this.httpClient.get<Product[]>("http://localhost:3000/product",{
      headers: new HttpHeaders({
        Authorization:`${idToken}`
      })
      });
  }
  deleteProduct(id:string,idToken:string){
    return this.httpClient.delete<Product>(`http://localhost:3000/product/delete/${id}`,{
      headers: new HttpHeaders({
        Authorization:`${idToken}`
      })
      })
  }
  addProduct(product:Product,idToken:string){
    return this.httpClient.post<Product>(`http://localhost:3000/product/create`,product,{
      headers: new HttpHeaders({
        Authorization:`${idToken}`
      })
      })
  }
  updateProduct(product:Product,idToken:string){
    return this.httpClient.put<Product>(`http://localhost:3000/product/update/${product._id}`,product,{
      headers: new HttpHeaders({
        Authorization:`${idToken}`
      })
      })
  }
}
