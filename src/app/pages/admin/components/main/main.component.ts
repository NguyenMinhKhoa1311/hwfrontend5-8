import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartState } from 'src/app/ngrx/states/cart.state';
import { ProductState } from 'src/app/ngrx/states/product.state';
import *as  ProductAction  from '../../../../ngrx/actions/product.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  productList$: Observable<Product[]> = this.store.select('product','productList');
  isDelSuccess$ = this.store.select(
    'product','isDelSuccess'
  )
  constructor( private store: Store<{product: ProductState}>, private storeCart: Store<{cart: CartState}>){
    console.log('admin')
    this.store.dispatch(ProductAction.get());

    this.productList$.forEach(item=>{
      console.log(item.length)
    }),
    this.isDelSuccess$.subscribe((value) => {
      console.log(value)
      if(value){
        this.store.dispatch(ProductAction.get());
      }
    })
  }
  deleteProduct(id: string){
    this.store.dispatch(ProductAction.deleteProduct({id}))

  }


}
