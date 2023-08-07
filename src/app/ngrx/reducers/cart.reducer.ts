
import {CartState} from "../states/cart.state"
import * as CartAction from "../actions/cart.actions"
import { createReducer, on } from "@ngrx/store"
import { state } from "@angular/animations"


export const initualState: CartState ={
    cartList: [],
    productList: [],
    total:0

}
export const CartReducer = createReducer(
    initualState,
    on(CartAction.addProductToCart, (state, action)=>{
        console.log(action.type);
        const productList = state.productList.map(item=>{
            if(item._id === action.product._id){
                return {
                    ...item,
                    stock: item.quantity +1
                }
            }
            return item;
        });
        const cartList =[...state.cartList,action.product];
        const total = state.total+action.product.price;
        return {
            ...state,
            productList,
            cartList,
            total,
        }
    }),
    on(CartAction.removeProductFromCart, (state, action) =>{
        console.log(action.type);
        const productList = state.productList.map(item=>{
            if(item._id === action.product._id){
                return {
                    ...item,
                    stock: item.quantity -1
                }
            }
            return item;
        });
        const cartList = state.cartList.filter(item=>item._id !== action.product._id);
        const total = state.total-action.product.price;
        return {
            ...state,
            productList,
            cartList,
            total,
        }
    }),
    on(CartAction.addProductToStock, (state, action)=>{
        console.log(action.type);
        const productList = state.productList.map(item=>{
            if(item._id === action.product._id){
                return {
                    ...item,
                    stock: item.stock +1
                }
            }
            return item;
        });
        return {
            ...state,
            productList,
        }
    }),
    on(CartAction.removeProductFromStock, (state,action)=>{
        console.log(action.type);
        const productList = state.productList.map(item=>{
            if(item._id === action.product._id){
                return {
                    ...item,
                    stock: item.stock -1
                }
            }
            return item;
        });
        return {
            ...state,
            productList,
        }
    }),
    on(CartAction.clearAllCart, (state,action) =>{
        console.log(action.type);
        const productList = state.productList.map(item=>{
            return{
                ...item,
                quantity:0,
            }
        })
        return {
            ...state,
            productList,
            cartList: [],
            total: 0,
        }
    })

)