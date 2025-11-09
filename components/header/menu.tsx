import Link from "next/link";
import React, { memo } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { pages } from "@/app/constants";

type Props = {
    searchToggle: boolean;
    menuToggle: boolean;
};

const Menu = memo(function ({ searchToggle, menuToggle }: Props) {
    const path: string = usePathname();

    return (
        <motion.ul
            initial={{ opacity: 0, zIndex: 100 }}
            animate={{
                ...(searchToggle
                    ? { opacity: 0, zIndex: -1 }
                    : { opacity: 1, zIndex: 100 }),
                ...(menuToggle ? { top: 0 } : { top: "100%" }),
            }}
            transition={
                menuToggle
                    ? {
                          duration: 1,
                          type: "spring",
                          ease: "easeIn",
                      }
                    : {
                          duration: 0.5,
                          type: "spring",
                          ease: "easeIn",
                      }
            }
            className="flex overflow-hidden md:fixed md:bg-deep md:left-0 md:flex-col md:min-w-full md:h-full max-w-max gap-[25px] md:gap-[45px] mx-auto items-center md:z-[20] justify-center transition-transform duration-500"
        >
            {pages.map((e, i) => (
                <li key={i}>
                    <Link
                        href={`/${i == 0 ? "" : e}`}
                        className={`capitalize transition-colors duration-[0.2s] leading-[22px] text-[16px] md:text-[25px] font-[600] nunito hover:text-current ${
                            path.includes(e) || (e == "home" && path == "/")
                                ? "text-current"
                                : "text-[white]"
                        }`}
                    >
                        {e}
                    </Link>
                </li>
            ))}
        </motion.ul>
    );
});
export default Menu;
