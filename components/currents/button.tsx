import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
    url: string;
    children: React.ReactNode;
};

export default function Button({ children, url }: Props) {
    return (
        <motion.button
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{
                duration: 1.5,
                type: "spring",
                ease: "easeIn",
            }}
            viewport={{ once: true, margin: "-100px" }}
            className=" max-w-max"
        >
            <Link
                href={url}
                className={
                    " bg-current items-center nunito font-[500] text-[16px] transition-colors text-[white] px-[48px] hover:bg-[#bd7f21] py-[16px] md:py-[8px] md:px-[16px] leading text-center rounded-[2px] uppercase"
                }
            >
                {children}
            </Link>
        </motion.button>
    );
}
