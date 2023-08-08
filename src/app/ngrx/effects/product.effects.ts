import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { ProductService } from '../../services/product.service'
import * as ProductAction from '../actions/product.actions'
import { catchError, exhaustMap, map, of } from 'rxjs'


@Injectable()
export class ProductEffect {
    constructor(private productService: ProductService, private action$: Actions) { }
    get$ = createEffect(() => this.action$.pipe(
        ofType(ProductAction.get),
        exhaustMap((action) =>
            this.productService.getProduct(action.idToken).pipe(
                map((products) => {
                    return ProductAction.getSuccess({ productList: products })
                }),
                catchError((error) => of(ProductAction.getFailure({error})))
            )
        )
    )
    )
    deleteProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductAction.deleteProduct),
      exhaustMap((action) =>
        this.productService.deleteProduct(action.id,action.idToken).pipe(
          map(() => ProductAction.deleteProductSuccess()),
          catchError((error) => of(ProductAction.deleteProductFailure({ error })))
        )
      )
    )
  );
  addProduct$ = createEffect(() =>
  this.action$.pipe(
    ofType(ProductAction.addproduct),
    exhaustMap((action) =>
      this.productService.addProduct(action.product,action.idToken).pipe(
        map(() => ProductAction.addProductSuccess()),
        catchError((error) => of(ProductAction.addProductFailure({ error })))
      )
    )
  )
);

updateProduct$ = createEffect(() =>
this.action$.pipe(
  ofType(ProductAction.updateProduct),
  exhaustMap((action) =>
    this.productService.updateProduct(action.product,action.idToken).pipe(
      map(() => ProductAction.updateProductSuccess()),
      catchError((error) => of(ProductAction.updateProducttFailure({ error })))
    )
  )
)
);
}