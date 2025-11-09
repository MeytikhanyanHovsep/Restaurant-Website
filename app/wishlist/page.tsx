"use client";
import React, { useEffect, useState } from "react";
import HeadMain from "@/components/pagesDetails/headMain";
import Title from "@/components/currents/title";
import ProductsBox from "@/components/product/productsBox";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/types/GlobalTypes";
import { fetchProducts } from "@/features/Wishlist.slice";
import { useRouter } from "nextjs-toploader/app";

type Props = {};

export default function Wishlist({}: Props) {
    const router = useRouter();
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const items = useSelector((state: RootState) => state.wishlist.items);
    const products = useSelector((state: RootState) => state.wishlist.products);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (items.length === 0) {
                router.push("/");
            }
            if (!products || products.length !== items.length) {
                dispatch(fetchProducts());
            }
        }
    }, [items, products, router]);

    return (
        <>
            <HeadMain page="wishlist" title="Your Wishlist" />
            <section className="container">
                <Title text="wishlist">Your favourite foods</Title>
                <ProductsBox products={products} />
            </section>
        </>
    );
}
