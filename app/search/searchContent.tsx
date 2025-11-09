"use client";
import React, { useEffect, useState } from "react";
import Title from "@/components/currents/title";
import HeadMain from "@/components/pagesDetails/headMain";
import ProductsBox from "@/components/product/productsBox";
import { RootState } from "@/types/GlobalTypes";
import { Product } from "@/types/ProductSliceTypes";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
    clearSearchProducts,
    fetchSearchProducts,
} from "@/features/Products.slice";
import Image from "next/image";

export default function SearchContent() {
    const path = useSearchParams();
    const searchValue: string = path.get("value") || "";
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const products: Product[] | null = useSelector(
        (state: RootState) => state.products.search
    );
    const [lastSearchValue, setLastSearchValue] = useState<string>("");

    useEffect(() => {
        if (!products || lastSearchValue != searchValue) {
            dispatch(clearSearchProducts());
            setLastSearchValue(searchValue);
            dispatch(fetchSearchProducts(searchValue));
        }
    }, [searchValue]);

    return (
        <>
            <HeadMain page="search" title="search results" />
            <section className="container" id="products-box">
                {products && products.length == 0 ? (
                    <div className="flex flex-col items-center sm:mt-[-15px] sm:gap-[0px] gap-[20px]">
                        <Image
                            src="/images/search-no-results.png"
                            alt="No Results"
                            width={250}
                            height={250}
                        />
                        <p className="text-[25px] sm:text-[20px] sm:mt-[-5px] text-center nunito font-[600]">
                            No results
                        </p>
                    </div>
                ) : (
                    <Title text="searching">results of - {searchValue}</Title>
                )}
                <ProductsBox products={products} />
            </section>
        </>
    );
}
