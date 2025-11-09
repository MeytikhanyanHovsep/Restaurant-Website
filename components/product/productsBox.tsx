"use client";

import React, { useState, useEffect, useMemo, useDeferredValue } from "react";
import { useSelector } from "react-redux";
import { MdOutlineNavigateNext as Arrow } from "react-icons/md";
import ProdItem from "./prodItem";
import { Product } from "@/types/ProductSliceTypes";
import { RootState } from "@/types/GlobalTypes";
import ProdItemSkelet from "../skeletons/prodItemSkelet";

type Props = {
    products: Product[] | null;
    category?: string;
};

export default function ProductsBox({ products, category = "" }: Props) {
    const [cardsView, setCardsView] = useState<number>(0);
    const wishlistItems = useSelector(
        (state: RootState) => state.wishlist.items
    );
    const [wishlist, setWishList] = useState<number[]>([]);

    const deferredProducts = useDeferredValue(products);

    const activeProducts: Product[] | null = useMemo(() => {
        if (!deferredProducts || !deferredProducts.length) return null;

        const filtered = category
            ? deferredProducts.filter((p) => category.includes(p.category))
            : deferredProducts;

        return filtered.slice(cardsView * 24, (cardsView + 1) * 24);
    }, [cardsView, deferredProducts, category]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWishList(wishlistItems);
        }
    }, [wishlistItems]);

    return (
        <>
            <div
                id="products-box"
                className="grid gap-[20px] sm:gap-x-[10px] w-full mt-[30px] products-box sm:grid-cols-2 xs:grid-cols-1"
            >
                {products && activeProducts ? (
                    <>
                        {activeProducts.map((elm) => (
                            <ProdItem
                                key={elm.id}
                                {...elm}
                                isFavourite={
                                    wishlist?.includes(elm.id) || false
                                }
                            />
                        ))}
                        {activeProducts.length < 4 ? (
                            <>
                                {Array.from({
                                    length: 4 - activeProducts.length,
                                }).map((_, i) => (
                                    <span key={i} className="sm:hidden"></span>
                                ))}
                            </>
                        ) : null}
                    </>
                ) : !products || products?.length != 0 ? (
                    Array.from({ length: 8 }).map((_, i) => (
                        <ProdItemSkelet key={i} />
                    ))
                ) : null}
            </div>

            {products && products.length > 24 && (
                <ChangingPages
                    setCardsView={setCardsView}
                    cardsView={cardsView}
                    prodsLength={products.length}
                />
            )}
        </>
    );
}

type CardsProps = {
    setCardsView: React.Dispatch<React.SetStateAction<number>>;
    cardsView: number;
    prodsLength: number;
};

function ChangingPages({ setCardsView, cardsView, prodsLength }: CardsProps) {
    const changePage = (up: boolean) => {
        const canUp = cardsView < Math.ceil(prodsLength / 24) - 1;
        if ((canUp && up) || (cardsView > 0 && !up)) {
            const box = document.getElementById("products-box");
            box?.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                setCardsView((prev) => prev + (up ? 1 : -1));
            }, 500);
        }
    };

    return (
        <div className="flex items-center nunito justify-center mt-[70px] sm:mt-[40px] gap-[15px]">
            <Arrow
                className={`h-[50px] w-[30px] rotate-180 ${
                    cardsView < 1 ? "opacity-50" : "cursor-pointer"
                }`}
                onClick={() => changePage(false)}
            />
            <span className="w-[60px] h-[60px] grid place-items-center border-2 sm:text-[20px] font-[800] border-current text-[25px] md:w-[50px] md:h-[50px]">
                {cardsView + 1}
            </span>
            <Arrow
                className={`h-[50px] w-[30px] ${
                    cardsView + 1 > Math.ceil(prodsLength / 24) - 1
                        ? "opacity-50"
                        : "cursor-pointer"
                }`}
                onClick={() => changePage(true)}
            />
        </div>
    );
}
