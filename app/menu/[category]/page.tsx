"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearProducts,
    fetchProductsCategory,
} from "@/features/Products.slice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/types/GlobalTypes";
import { usePathname } from "next/navigation";
import { Product as ProductType } from "@/types/ProductSliceTypes";
import Title from "@/components/currents/title";
import ProductsBox from "@/components/product/productsBox";
import HeadMain from "@/components/pagesDetails/headMain";
import { productsCategories } from "@/app/constants";
import CategoriesSlide from "@/components/pagesDetails/categoriesSlide";

export default function Category() {
    const products: ProductType[] | null = useSelector(
        (state: RootState) => state.products.products
    );
    const categories = Object.keys(productsCategories);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const category: string = usePathname().split("/")[2];

    useEffect(() => {
        if (categories?.includes(String(category))) {
            if (!products?.length || category != products[0].category) {
                dispatch(clearProducts());
                dispatch(fetchProductsCategory(category));
            }
        }
    }, [dispatch]);

    return (
        <>
            <HeadMain page={category} secPage="menu" title="our menu" />
            <CategoriesSlide />
            <section id="products-box" className="container">
                <Title text="our menu">All {category}</Title>
                <ProductsBox category={category} products={products || []} />
            </section>
        </>
    );
}
