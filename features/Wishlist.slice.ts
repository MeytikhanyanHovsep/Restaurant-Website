import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { WishlistElm, WishlistState } from "@/types/WishlistSlice";
import { Product } from "@/types/ProductSliceTypes";

const loadWishlist = () => {
    if (typeof window !== "undefined") {
        const storedWishlist = localStorage.getItem("wishlist");
        return storedWishlist ? JSON.parse(storedWishlist) : [];
    }
    return [];
};

const saveWishlist = (wishlist: WishlistElm[]) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
};

const initialState: WishlistState = {
    items: [],
    products: null,
};

if (typeof window !== "undefined") {
    initialState.items = loadWishlist();
}

export const fetchProducts = createAsyncThunk(
    "wishlist/fetchProducts",
    async () => {
        let wishlist = loadWishlist();
        if (wishlist.length > 1) {
            wishlist = wishlist.join(",");
        } else {
            wishlist = wishlist[0];
        }
        try {
            const response = await fetch(
                `https://restaurantapi-production-a6ca.up.railway.app/products/cart?ids=${wishlist}`
            );
            const data = await response.json();

            return data;
        } catch (error) {
            return [];
        }
    }
);

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        setItem: (state, { payload }: PayloadAction<number>) => {
            const item = state.items.find((e) => e === payload);
            if (item) {
                state.items = state.items.filter((e) => e != payload);
                state.products =
                    state.products?.filter((e) => e.id != payload) || null;
            } else {
                state.items.unshift(payload);
            }
            saveWishlist(state.items);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchProducts.fulfilled,
            (state, action: PayloadAction<Product[]>) => {
                state.products = action.payload;
            }
        );
    },
});

export default wishlistSlice.reducer;
export const { setItem } = wishlistSlice.actions;
