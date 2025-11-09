"use client";
import React, { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Search,
    ShoppingCart as Cart,
    Home,
    Heart,
    CircleX as Close,
    ChevronUp as Menu,
} from "lucide-react";

type Props = {
    menuToggle: boolean;
    setMenuToggle: any;
    searchToggle: boolean;
    setSearchToggle: any;
    cartSize: number;
    isWishlistActive: boolean;
};

const NavbarItems = memo(function ({
    menuToggle,
    setMenuToggle,
    searchToggle,
    setSearchToggle,
    cartSize,
    isWishlistActive,
}: Props) {
    const path: string = usePathname();

    return (
        <div
            className={`flex items-center md:justify-around md:fixed left-0 bottom-0 md:bg-deep md:w-full lg:gap-[16px] gap-[20px] md:gap-0  md:border-t-[white] md:py-[13px] md:z-[100]${
                menuToggle ? "" : " md:border-t-[1px]"
            }`}
        >
            <Link href={"/"} className="hidden md:block">
                <Home
                    width={20}
                    height={20}
                    className={`${
                        path == "/" ? "text-current" : "text-[white]"
                    } md:w-[25px] md:h-[25px] object-contain`}
                />
            </Link>
            <button
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] relative"
                onClick={() => setSearchToggle(!searchToggle)}
            >
                <Search
                    width={20}
                    height={20}
                    className={`duration-[0.3s] text-[white] md:w-[25px] md:h-[25px] transition-opacity object-contain${
                        searchToggle ? " opacity-0" : ""
                    }`}
                />
                <Close
                    width={20}
                    height={20}
                    className={`duration-[0.3s] md:w-[25px] md:h-[25px] text-[white] absolute top-0 left-0 transition-opacity object-contain${
                        searchToggle ? "" : " opacity-0"
                    }`}
                />
            </button>

            <button
                className="hidden md:block relative bg-current text-[white] p-[5px] rounded-sm shadow-sm shadow-current"
                onClick={() => {
                    setSearchToggle(false);
                    setMenuToggle((e: boolean) => !e);
                }}
            >
                <Menu
                    width={20}
                    height={20}
                    className={`min-w-[30px] min-h-[30px] object-contain transition-transform ${
                        menuToggle ? "rotate-0" : "rotate-180"
                    }`}
                />
            </button>
            <Link href={isWishlistActive ? "/wishlist" : ""}>
                <Heart
                    width={20}
                    height={20}
                    fill={
                        isWishlistActive
                            ? path == "/wishlist"
                                ? "#fea116"
                                : "white"
                            : "none"
                    }
                    stroke={
                        isWishlistActive
                            ? "transparent"
                            : path == "/wishlist"
                            ? "#fea116"
                            : "white"
                    }
                    className="object-contain md:w-[25px] md:h-[25px]"
                />
            </Link>
            <Link href="/cart" className="relative">
                <Cart
                    width={20}
                    height={20}
                    className={`${
                        path == "/cart" ? "text-current" : "text-[white]"
                    } md:w-[25px] md:h-[25px] lg:mr-[10px] md:mr-0 object-contain`}
                />
                {cartSize ? (
                    <span className="absolute nunito top-[-7px] md:w-[16px] md:h-[16px] md:text-[12px] w-[20px] grid place-content-center h-[20px] text-[white] rounded-full bg-current text-[13px] font-bold right-[-7px]">
                        {cartSize > 9 ? "9+" : cartSize}
                    </span>
                ) : null}
            </Link>
        </div>
    );
});
export default NavbarItems;
