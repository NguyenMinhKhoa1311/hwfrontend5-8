
import { Product } from "src/app/models/product.model";

export interface ProductState{
    isLoading: boolean;
    isSuccess: boolean;
    productList: Product[];
    error: string;
}