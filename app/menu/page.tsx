"use client";
import BestProducts from "@/components/product/bestProducts";
import Categories from "@/components/product/categories";
import HeadMain from "@/components/pagesDetails/headMain";

export default function Menu() {
    return (
        <>
            <HeadMain page="menu" title="our menu" />
            <Categories />
            <BestProducts />
        </>
    );
}
