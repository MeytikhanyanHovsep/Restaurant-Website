"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/GlobalTypes";
import { fetchProducts, setTotalSum } from "@/features/Cart.slice";
import CartItem from "@/components/cartDetails/cartItem";
import CartFooter from "@/components/cartDetails/cartFooter";
import HeadMenu from "@/components/pagesDetails/headMain";
import Title from "@/components/currents/title";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useRouter } from "nextjs-toploader/app";
import CartItemSkelet from "@/components/skeletons/cartItemSkelet";
import Button from "@/components/currents/button";
import Image from "next/image";

export default function Cart() {
    const [isClient, setIsClient] = useState(false);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const router = useRouter();

    const items = useSelector((state: RootState) => state.cart.cart);
    const products = useSelector((state: RootState) => state.cart.products);
    const totalSum = useSelector((state: RootState) => state.cart.totalSum);

    useEffect(() => {
        setIsClient(true);

        if (!products || products.length !== items.length) {
            dispatch(fetchProducts());
        } else {
            dispatch(setTotalSum({ items, products }));
        }
    }, [items, products, router]);

    if (!isClient) return null;

    return (
        <>
            <HeadMenu page="Cart" title="Your Cart" />
            <section className="container flex flex-col md:gap-[30px] sm:gap-[10px] gap-[50px]">
                {items?.length ? (
                    <>
                        <Title text="cart">Your Shopping Cart</Title>
                        <table className="cart w-full">
                            <tbody>
                                {products && products.length > 0
                                    ? products.map((product, i) => {
                                          const cartItem = items.find(
                                              (item) => item.id === product.id
                                          );
                                          return (
                                              <CartItem
                                                  key={product.id}
                                                  initQty={
                                                      cartItem
                                                          ? cartItem.qty
                                                          : 1
                                                  }
                                                  prod={product}
                                                  ind={i % 2}
                                              />
                                          );
                                      })
                                    : Array.from({ length: 3 }).map((_, i) => (
                                          <CartItemSkelet key={i} />
                                      ))}
                            </tbody>
                            {products && products.length > 0 && (
                                <CartFooter totalSum={totalSum} />
                            )}
                        </table>
                    </>
                ) : (
                    <div className="flex flex-col items-center sm:mt-[-15px] gap-[20px]">
                        <Image
                            src="/images/empty-cart.png"
                            alt="Empty Cart"
                            width={250}
                            height={250}
                        />
                        <p className="text-[25px] sm:mt-[-25px] sm:text-[20px] text-center nunito font-[600]">
                            Your cart is empty
                        </p>
                        <Button url="/menu">Continue Shopping</Button>
                    </div>
                )}
            </section>
        </>
    );
}
