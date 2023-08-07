
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from 'src/app/ngrx/states/cart.state';
import * as CartAction from '../../../../ngrx/actions/cart.actions'
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  cartList$ = this.store.select((state) => state.cart.cartList);
  total$ = this.store.select((state) => state.cart.total)
  constructor(private store: Store<{cart: CartState}>){
    console.log('hello')
    console.log(this.cartList$)
  }
  removeProductFromCart(product: Product){
    this.store.dispatch(CartAction.removeProductFromCart({product}))
  }
  clearAllCart(){
    this.store.dispatch(CartAction.clearAllCart()) 
  }
  addProductToStock(product: Product){
    this.store.dispatch(CartAction.addProductToStock({product}))
  }
  removeProductFromStock(product: Product){
    this.store.dispatch(CartAction.removeProductFromStock({product}))
  }

}
