
import { Product } from "src/app/models/product.model";

export interface ProductState{
    isLoading: boolean;
    isSuccess: boolean;
    isDelSuccess: boolean;
    isDelloading: boolean;
    isAddSuccess: boolean;
    isAddloading: boolean;
    isUpSuccess: boolean;
    isUpLoading: boolean;
    productList: Product[];
    error: string;
}