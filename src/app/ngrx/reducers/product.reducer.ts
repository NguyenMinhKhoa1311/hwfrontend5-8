import { createReducer, on } from "@ngrx/store";
import { ProductState } from "../states/product.state";
import * as ProductAction from "../actions/product.actions";
import { state } from "@angular/animations";

export const initualState: ProductState = {
    isLoading: false,
    isSuccess: false,
    productList: [],
    error: ""
};
export const ProductReducer = createReducer(
    initualState,
    on(ProductAction.get,(state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isLoading: true,
            isSuccess: false,
            error: '',
        };
        return newState;
    }),
    on(ProductAction.getSuccess, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isLoading: false,
            isSuccess: true,
            productList: action.productList,
        }        
        return newState;
    }),
    on(ProductAction.getFailure, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isLoading: false,
            isSuccess: false,
            error: action.error,
        }        
        console.log(newState.error)
        return newState;
    })
)