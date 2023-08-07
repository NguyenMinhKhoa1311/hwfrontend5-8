import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductState } from 'src/app/ngrx/states/product.state';
import* as ProductAction from '../../../../ngrx/actions/product.actions'

@Component({
  selector: 'app-dialogdetail',
  templateUrl: './dialogdetail.component.html',
  styleUrls: ['./dialogdetail.component.scss']
})
export class DialogdetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public product: Product, private store: Store<{ product: ProductState }>) {
    console.log(this.product)
  }
  addproductForm!: FormGroup;
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
  updateProduct(product: Product){
    product._id = this.product._id
    this.store.dispatch(ProductAction.updateProduct({product}));
  }

}
