import { createReducer, on } from "@ngrx/store";
import { ProductState } from "../states/product.state";
import * as ProductAction from "../actions/product.actions";
import { state } from "@angular/animations";

export const initualState: ProductState = {
    isLoading: false,
    isSuccess: false,
    isDelloading: false,
    isDelSuccess: false,
    isAddSuccess:false,
    isAddloading:false,
    isUpSuccess:false,
    isUpLoading:false,
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
    }),
    on(ProductAction.deleteProduct,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isDelLoading: true,
            isDelSuccess: false,
            error: '',
        };
        return newState;
    }),
    on(ProductAction.deleteProductSuccess, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isDelLoading: false,
            isDelSuccess: true,
        }        
        return newState;
    }),
    on(ProductAction.deleteProductFailure, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isDelLoading: false,
            isDelSuccess: false,
            error: action.error,
        }        
        console.log(newState.error)
        return newState;
    }),
    on(ProductAction.addproduct,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isAddLoading: true,
            isAddSuccess: false,
            error: '',
        };
        return newState;
    }),
    on(ProductAction.addProductSuccess, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isAddLoading: false,
            isAddSuccess: true,
        }        
        return newState;
    }),
    on(ProductAction.addProductFailure, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isAddLoading: false,
            isAddSuccess: false,
            error: action.error,
        }        
        console.log(newState.error)
        return newState;
    }),

    on(ProductAction.updateProduct,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isUpLoading: true,
            isUpSuccess: false,
            error: '',
        };
        return newState;
    }),
    on(ProductAction.updateProductSuccess, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isUpLoading: false,
            isUpSuccess: true,
        }        
        return newState;
    }),
    on(ProductAction.updateProducttFailure, (state, action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isUpLoading: false,
            isUpSuccess: false,
            error: action.error,
        }        
        console.log(newState.error)
        return newState;
    }),
)