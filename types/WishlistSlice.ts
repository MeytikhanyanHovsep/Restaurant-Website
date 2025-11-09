import { Product } from "./ProductSliceTypes";

export type WishlistElm = number;

export type WishlistState = {
    items: WishlistElm[];
    products: Product[] | null;
};
