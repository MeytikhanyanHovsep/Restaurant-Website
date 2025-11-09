import { ProductsState } from "@/types/ProductSliceTypes";
import { CartState } from "@/types/CartSliceTypes";
import { WishlistState } from "./WishlistSlice";

export type RootState = {
    products: ProductsState;
    cart: CartState;
    wishlist: WishlistState;
};
