import { Product } from "./ProductSliceTypes";

export type CartElm = {
    id: number;
    qty: number;
};

export type CartState = {
    cart: CartElm[];
    products: Product[] | null;
    totalSum: number;
};
