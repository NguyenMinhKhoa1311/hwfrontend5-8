import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartState } from 'src/app/ngrx/states/cart.state';
import { ProductState } from 'src/app/ngrx/states/product.state';
import *as  ProductAction from '../../../../ngrx/actions/product.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogdetailComponent } from '../dialogdetail/dialogdetail.component';

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
  isUpSuccess$ = this.store.select('product', 'isUpSuccess')
  addproductForm!: FormGroup;
  constructor(private store: Store<{ product: ProductState }>, private storeCart: Store<{ cart: CartState }>, private dialog: MatDialog) {
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
    });

    this.isUpSuccess$.subscribe(value => {
      console.log(value)
      if (value) {
        this.store.dispatch(ProductAction.get());
      }
    });
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
  addProduct(product: Product) {
    if(!(product.name)||!(product.description)||!(product.price)||!(product.imgSrc)){
      alert("nhập vào chi tiết sản phẩm đi thiếu kìa ")
    }
    else{
      this.store.dispatch(ProductAction.addproduct({ product }))
    }

  }
  openDialog(product: Product): void {
    const dialogRef = this.dialog.open(DialogdetailComponent, {
      data: product,
    });
  }


}
