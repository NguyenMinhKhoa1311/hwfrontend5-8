import { Product } from "src/app/models/product.model";

export interface CartState{
    cartList: Product[];
    productList: Product[];
    total: number;
}