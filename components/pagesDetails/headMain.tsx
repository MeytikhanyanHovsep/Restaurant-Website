"use client";
import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heebo } from "next/font/google";
import { motion } from "framer-motion";

type Props = {
    page: string;
    secPage?: string;
    title: string;
};

const HeadMain = memo(function ({ page, title, secPage = "" }: Props) {
    return (
        <main className="flex w-full sm:mb-[-20px] mb-[-50px] py-[120px] sm:py-[80px] justify-center items-center relative bg-[#0f172be8] overflow-hidden flex-col gap-[15px] sm:gap-[5px]">
            <Image
                width={1000}
                height={1000}
                className="h-full w-full object-cover z-[-1] absolute top-0 left-0"
                alt=""
                src={"/images/main.jpg"}
            />
            <motion.h4
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.5,
                    type: "spring",
                    ease: "easeIn",
                }}
                className={
                    " text-[65px] text-center nunito lg:text-[55px] sm:text-[36px] capitalize text-[#fff] font-[800]"
                }
            >
                {title}
            </motion.h4>
            <motion.div
                className={
                    "font-[500] items-center flex gap-[10px] uppercase leading-[24px]"
                }
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.5,
                    type: "spring",
                    ease: "easeIn",
                }}
            >
                <Link href="/" className="text-current">
                    home
                </Link>
                <span className="text-gray text-[18px] font-[600]">/</span>
                {secPage ? (
                    <Link href={"/" + secPage} className="text-current">
                        {secPage}
                    </Link>
                ) : (
                    <p className="text-[#fff]">pages</p>
                )}
                <span className=" text-gray text-[18px] font-[600]">/</span>
                <p className="text-[#fff]">{page}</p>
            </motion.div>
        </main>
    );
});
export default HeadMain;
