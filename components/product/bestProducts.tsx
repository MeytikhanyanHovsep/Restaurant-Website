import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBestProducts } from "@/features/Products.slice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import ProdItem from "./prodItem";
import { RootState } from "@/types/GlobalTypes";
import { Product } from "@/types/ProductSliceTypes";
import ProductsBox from "./productsBox";
import Title from "../currents/title";

export default function BestProducts() {
    const products: Product[] | null = useSelector(
        (state: RootState) => state.products.bestProducts
    );
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    useEffect(() => {
        if (!products) dispatch(fetchBestProducts());
    }, []);
    return (
        <section className="container flex flex-col items-center gap-[20px] sm:gap-[10px]">
            <Title text="best meals" center={true}>
                recommended foods
            </Title>
            {
                <Suspense fallback={<>...loading</>}>
                    {products?.length && <ProductsBox products={products} />}
                </Suspense>
            }
        </section>
    );
}
