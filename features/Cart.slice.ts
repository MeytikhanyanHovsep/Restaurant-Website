import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CartElm, CartState } from "@/types/CartSliceTypes";
import { Product } from "@/types/ProductSliceTypes";

const loadCart = (): any[] => {
    if (typeof window !== "undefined") {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
};

const saveCart = (cart: CartElm[]) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
};

const initialState: CartState = {
    cart: [],
    products: null,
    totalSum: 0,
};

if (typeof window !== "undefined") {
    initialState.cart = loadCart();
}

export const fetchProducts = createAsyncThunk(
    "cart/fetchProducts",
    async () => {
        let ids: string | any[] = loadCart();

        if (ids.length > 1) {
            ids = ids.map((e) => e.id).join(",");
        } else {
            ids = ids[0]["id"];
        }

        try {
            const response = await fetch(
                `https://restaurantapinest.vercel.app/products/cart?ids=${ids}`
            );
            const data = await response.json();

            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getItemQty = (id: number) => {
    const cart: CartElm[] = loadCart();
    const item = cart.find((e) => e.id === id);
    return item ? item.qty : 0;
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, { payload }: PayloadAction<number>) => {
            const item = state.cart.find((e) => e.id === payload);
            if (item) {
                item.qty++;
            } else {
                state.cart.unshift({ id: payload, qty: 1 });
            }
            saveCart(state.cart);
        },
        removeItem: (state, { payload }: PayloadAction<number>) => {
            state.cart = state.cart.filter((el) => el.id !== payload);
            state.products =
                state.products?.filter((el) => el.id !== payload) || null;
            saveCart(state.cart);
        },
        changeItemQty: (state, { payload }: PayloadAction<CartElm>) => {
            const item = state.cart.find((e) => e.id === payload.id);
            const index = state.cart.findIndex((el) => el.id === payload.id);

            if (item) {
                if (payload.qty === 0) state.cart.splice(index, 1);
                else item.qty = payload.qty;
            } else {
                state.cart.unshift({ id: payload.id, qty: payload.qty });
            }
            saveCart(state.cart);
        },
        setTotalSum: (
            state,
            {
                payload,
            }: PayloadAction<{ items: CartElm[]; products: Product[] }>
        ) => {
            const { items, products } = payload;
            state.totalSum = items.reduce(
                (sum, e, i) => sum + e.qty * products[i].price,
                0
            );
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

export const { addItem, removeItem, changeItemQty, setTotalSum } =
    cartSlice.actions;
export default cartSlice.reducer;
