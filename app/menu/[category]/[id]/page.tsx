"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { ThunkDispatch } from "@reduxjs/toolkit";

import { RootState } from "@/types/GlobalTypes";
import { Product } from "@/types/ProductSliceTypes";
import { fetchProduct } from "@/features/Products.slice";
import { changeItemQty, getItemQty } from "@/features/Cart.slice";

import Image from "next/image";
import HeadMain from "@/components/pagesDetails/headMain";
import { FaStar as Star } from "react-icons/fa6";
import BestProducts from "@/components/product/bestProducts";

type Qty = number | string;

export default function SinglePage() {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    // Got
    const prod: Product | null = useSelector(
        (state: RootState) => state.products.product
    );
    const { id } = useParams();
    const initQty: number = getItemQty(Number(id));

    // Made
    const [prodQty, setProdQty] = useState<Qty>(initQty);
    const [updateCart, setUpdateCart] = useState<Boolean>(false);
    const [imageSrc, setImageSrc] = useState<string>("/icons/unloaded.png");

    useEffect(() => {
        if (!prod || prod.id != Number(id)) {
            dispatch(fetchProduct(Number(id)));
        }

        if (updateCart) {
            dispatch(changeItemQty({ id: Number(id), qty: Number(prodQty) }));
            setUpdateCart(false);
        }

        if (prod && prod.id === Number(id)) {
            setImageSrc(prod.image || "/icons/unloaded.png");
        }
    }, [id, updateCart, prod]);

    const changeQty = (value: string | number) => {
        if (value === "") return setProdQty("");

        let num: number = Number(value);
        if (num > -1 && num < 1000) setProdQty(num);

        setUpdateCart(true);
    };

    const handleBlur = () => {
        if (typeof prodQty == "number") {
            if (prodQty < 0) setProdQty(0);
            if (prodQty > 999) setProdQty(999);
        } else setProdQty(0);

        setUpdateCart(true);
    };

    return (
        <>
            <HeadMain
                page={prod?.category || ""}
                secPage="menu"
                title={prod?.name || ""}
            />
            <section className="container ">
                <div className="md:flex-col flex gap-[50px] items-center justify-between">
                    <Suspense fallback={<>loading...</>}>
                        {prod && prod.id == Number(id) && (
                            <>
                                <Image
                                    unoptimized
                                    src={imageSrc}
                                    alt={prod.name}
                                    className="rounded-[2px] aspect-square sm:h-auto h-[400px] w-[400px] object-cover"
                                    onError={() =>
                                        setImageSrc("/icons/unloaded.png")
                                    }
                                    width={400}
                                    height={400}
                                />
                                <div className="flex min-h-full gap-[5px] items-start justify-between flex-col">
                                    <h3 className="nunito text-[30px] md:text-[25px] font-[800]">
                                        {prod.name}
                                    </h3>
                                    <p className="text-[22px] nunito font-[800]">
                                        <span className="text-current mr-[3px] font-[500]">
                                            $
                                        </span>
                                        {prod.price}
                                    </p>
                                    <p className="text-[14px] text-gray ">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book.
                                    </p>
                                    <p className="text-[14px] mt-[5px] text-gray">
                                        <span>Made of </span>
                                        {prod.ingredients.join(", ")}
                                    </p>
                                    <p className="text-[20px] font-[500]">
                                        {prod.weight}g
                                    </p>
                                    <div className="text-[28px] lg:text-[22px] md:text-[20px] flex items-center gap-[5px] font-[700]">
                                        <Star className="w-[40px] md:w-[30px] sm:w-[25px] text-current" />
                                        <span>{prod.rating}</span>
                                    </div>
                                    <div className="text-[28px] lg:text-[25px] text-[#31c03f] md:gap-[10px] mt-[20px] gap-[20px] flex">
                                        <button
                                            className="border-[2px] outline-none rounded-[2px] aspect-square border-current text-current pb-[10px] w-[45px] h-[45px] sm:w-[40px] sm:h-[40px] grid place-items-center"
                                            onClick={() =>
                                                changeQty(Number(prodQty) - 1)
                                            }
                                        >
                                            -
                                        </button>
                                        <input
                                            value={prodQty}
                                            onChange={(e) =>
                                                changeQty(e.target.value)
                                            }
                                            type="number"
                                            className="max-w-[70px] bg-transparent outline-none text-[#303030] sm:text-[20px] text-center"
                                            onBlur={() => handleBlur()}
                                        />
                                        <button
                                            className="border-[2px] outline-none rounded-[2px] aspect-square border-current text-current pb-[10px] w-[45px] h-[45px] sm:w-[40px] sm:h-[40px] grid place-items-center"
                                            onClick={() =>
                                                changeQty(Number(prodQty) + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </Suspense>
                </div>
            </section>
            <BestProducts />
        </>
    );
}
