import { Product } from "@/types/ProductSliceTypes";
import { ProductsState } from "@/types/ProductSliceTypes";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductsState = {
    products: null,
    search: null,
    bestProducts: null,
    product: null,
};

export const fetchProductsCategory = createAsyncThunk<Product[], string>(
    "products/fetchProductsCategory",
    async (category: string): Promise<Product[]> => {
        console.log(
            `https://restaurantapinest.vercel.app/products?category=${category}`
        );
        const response = await fetch(
            `https://restaurantapinest.vercel.app/products?category=${category}`
        );
        const data = await response.json();
        return data;
    }
);

export const fetchBestProducts = createAsyncThunk(
    "products/fetchBestProducts",
    async () => {
        const response = await fetch(
            `https://restaurantapinest.vercel.app/products/bests`
        );
        const data = await response.json();
        return data;
    }
);

export const fetchProduct = createAsyncThunk(
    "products/fetchProduct",
    async (id: number) => {
        const response = await fetch(
            `https://restaurantapinest.vercel.app/products/${id}`
        );
        const data = await response.json();
        return data;
    }
);

export const fetchSearchProducts = createAsyncThunk(
    "products/fetchSearchProducts",

    async (value: string) => {
        const response = await fetch(
            `https://restaurantapinest.vercel.app/products/search?text=${value}`
        );
        const data = await response.json();

        if (data) {
            return data;
        }

        return [];
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        clearProducts: (state) => {
            state.products = null;
        },
        clearSearchProducts: (state) => {
            state.search = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchProduct.fulfilled,
                (state, action: PayloadAction<null | Product>) => {
                    state.product = action.payload;
                }
            )

            .addCase(
                fetchProductsCategory.fulfilled,
                (state, action: PayloadAction<Product[] | null>) => {
                    state.products = action.payload;
                }
            )
            .addCase(
                fetchSearchProducts.fulfilled,
                (state, action: PayloadAction<Product[]>) => {
                    state.search = action.payload;
                }
            )
            .addCase(
                fetchBestProducts.fulfilled,
                (state, action: PayloadAction<Product[]>) => {
                    state.bestProducts = action.payload;
                }
            );
    },
});

export const { clearProducts, clearSearchProducts } = productsSlice.actions;
export default productsSlice.reducer;
