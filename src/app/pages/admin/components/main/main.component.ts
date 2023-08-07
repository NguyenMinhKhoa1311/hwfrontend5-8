import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartState } from 'src/app/ngrx/states/cart.state';
import { ProductState } from 'src/app/ngrx/states/product.state';
import *as  ProductAction from '../../../../ngrx/actions/product.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  productList$: Observable<Product[]> = this.store.select('product', 'productList');
  isDelSuccess$ = this.store.select(
    'product', 'isDelSuccess'
  )
  isAddSuccess$ = this.store.select('product', 'isAddSuccess');
  addproductForm!: FormGroup;
  constructor(private store: Store<{ product: ProductState }>, private storeCart: Store<{ cart: CartState }>) {
    console.log('admin')
    this.store.dispatch(ProductAction.get());

    this.productList$.forEach(item => {
      console.log(item.length)
    }),
      this.isDelSuccess$.subscribe((value) => {
        console.log(value)
        if (value) {
          this.store.dispatch(ProductAction.get());
        }
      })
    this.isAddSuccess$.subscribe((value) => {
      console.log(value)
      if (value) {
        this.store.dispatch(ProductAction.get());
      }
    })
  }
  ngOnInit(): void {
    this.addproductForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imgSrc: new FormControl(
        '', [Validators.required]
      ),
    });
  }
  deleteProduct(id: string) {
    this.store.dispatch(ProductAction.deleteProduct({ id }))

  }
  addProduct(product: Product){
    this.store.dispatch(ProductAction.addproduct({product}))
  }



}
