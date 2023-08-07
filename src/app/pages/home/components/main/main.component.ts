import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductState } from 'src/app/ngrx/states/product.state';
import { ProductService } from 'src/app/services/product.service';
import * as ProductAction from '../../../../ngrx/actions/product.actions'
import * as CartAction from '../../../../ngrx/actions/cart.actions'
import { CartState } from 'src/app/ngrx/states/cart.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  productList$: Observable<Product[]> = this.store.select('product','productList')
  constructor( private store: Store<{product: ProductState}>, private storeCart: Store<{cart: CartState}>){
    console.log('home')
    this.store.dispatch(ProductAction.get());

    this.productList$.forEach(item=>{
      console.log(item.length)
    })
  }
  addProductToCart(product: Product){
    this.storeCart.dispatch(CartAction.addProductToCart({product}))
  }
  

}
