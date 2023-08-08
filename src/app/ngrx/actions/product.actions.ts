
import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";


export const get = createAction('[product] get product',props<{idToken:string}>());
export const getSuccess = createAction(
    '[product] get product success',
     props<{productList: Product[]}>()
    );
export const getFailure = createAction(
    '[product] get product failure',
    props<{error: any}>()
);
export const deleteProduct = createAction('[product] delete product',props<{id:string, idToken:string}>())
export const deleteProductSuccess = createAction(
    '[product] delete product success',
    );
export const deleteProductFailure = createAction(
    '[product] delete product failure',
    props<{error: any}>()
)
export const addproduct = createAction('[product] add product',props<{product: Product , idToken: string}>())
export const addProductSuccess = createAction(
    '[product] add product success',
    );
export const addProductFailure = createAction(
    '[product] add product failure',
    props<{error: any}>()
)

export const updateProduct = createAction('[product] update product',props<{product: Product,idToken:string}>())
export const updateProductSuccess = createAction(
    '[product] update product success',
    );
export const updateProducttFailure = createAction(
    '[product] update product failure',
    props<{error: any}>()
)