"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "./menu";
import Search from "./search";
import NavbarItems from "./navbarItems";
import { useSelector } from "react-redux";
import { RootState } from "@/types/GlobalTypes";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
    const [searchToggle, setSearchToggle] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);
    const path = usePathname();
    const cart = useSelector((state: RootState) => state.cart.cart);
    const wishlist = useSelector((state: RootState) => state.wishlist.items);
    const [cartSize, setCartSize] = useState<number>(0);
    const [isWishlistActive, setWishlistActive] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCartSize(cart.length);
            setWishlistActive(!!wishlist.length);
        }
        setMenuToggle(false);
    }, [cart, wishlist, path]);

    return (
        <header className="w-full absolute top-0 left-0 z-[20]">
            <motion.nav
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeIn",
                }}
                className="container md:justify-center gap-[50px] py-[10px] flex justify-between items-center"
            >
                <Link
                    href="/"
                    className="flex gap-[5px] lg:gap-[3px] items-center"
                >
                    <Image
                        className="max-w-[45px] sm:max-w-[25px] lg:max-w-[35px] object-contain"
                        src="/icons/logo.png"
                        width={45}
                        height={45}
                        alt="logo"
                    />
                    <span className="text-current font-bold sm:text-[26px] text-[40px] lg:text-[32px]">
                        Restoran
                    </span>
                </Link>
                <div className="w-full md:absolute relative">
                    <Menu searchToggle={searchToggle} menuToggle={menuToggle} />
                    <Search
                        searchToggle={searchToggle}
                        setSearchToggle={setSearchToggle}
                    />
                </div>
                <NavbarItems
                    menuToggle={menuToggle}
                    setMenuToggle={setMenuToggle}
                    isWishlistActive={isWishlistActive}
                    cartSize={cartSize}
                    searchToggle={searchToggle}
                    setSearchToggle={setSearchToggle}
                />
            </motion.nav>
        </header>
    );
}
