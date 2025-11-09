import { combineReducers } from "redux";
import ProductsSlice from "./Products.slice";
import CartSlice from "./Cart.slice";
import WishlistSlice from "./Wishlist.slice";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
    products: ProductsSlice,
    cart: CartSlice,
    wishlist: WishlistSlice,
});

export const store = configureStore({
    reducer,
});

export default store;
