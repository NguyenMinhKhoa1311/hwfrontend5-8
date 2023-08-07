
import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";


export const get = createAction('[product] get product');
export const getSuccess = createAction(
    '[product] get product success',
     props<{productList: Product[]}>()
    );
export const getFailure = createAction(
    '[product] get product failure',
    props<{error: any}>()
);