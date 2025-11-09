"use client";

import { motion } from "framer-motion";

import {
    ChefHat,
    Utensils,
    ShoppingCart,
    Headphones,
    Truck,
    Leaf,
    ShieldCheck,
    PhoneCall,
} from "lucide-react";
type Props = {
    full?: boolean;
};

export default function Services({ full }: Props) {
    const iconStyle = "w-[50px] sm:w-[40px] sm:h-[40px] h-[50px] text-current";
    const services = [
        {
            title: "Master Chefs",
            icon: <ChefHat className={iconStyle} />,
        },
        {
            title: "Quality Food",
            icon: <Utensils className={iconStyle} />,
        },
        {
            title: "Online Order",
            icon: <ShoppingCart className={iconStyle} />,
        },
        {
            title: "24/7 Service",
            icon: <Headphones className={iconStyle} />,
        },
        {
            title: "Fast Delivery",
            icon: <Truck className={iconStyle} />,
        },
        {
            title: "Fresh Ingredients",
            icon: <Leaf className={iconStyle} />,
        },
        {
            title: "Secure Payment",
            icon: <ShieldCheck className={iconStyle} />,
        },
        {
            title: "Customer Support",
            icon: <PhoneCall className={iconStyle} />,
        },
    ];

    return (
        <section
            className={
                " container sm:mt-[20px] grid grid-cols-4 lg:grid-cols-2 gap-[10px]"
            }
        >
            {services
                .slice(0, full ? services.length : services.length / 2)
                .map((e, i) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                delay: i / 5,
                                ease: "easeIn",
                                type: "spring",
                            }}
                            viewport={{ once: true, margin: "-150px" }}
                            key={i}
                            className="flex shadow-lg text-[#bbbbbb] bg-[white] text-start sm:px-[10px] sm:pb-[10px] sm:pt-[15px] px-[24px] pt-[40px] pb-[24px] font-[600] gap-[16px] items-start rounded-[2px] flex-col"
                        >
                            {e.icon}
                            <h5 className="text-deep nunito mb-[-8px] text-[20px] font-[800]">
                                {e.title}
                            </h5>
                            <p
                                className={
                                    "font-heebo text-gray sm:text-[14px] font-[400] leading-[24px]"
                                }
                            >
                                Diam elitr kasd sed at elitr sed ipsum justo
                                dolor sed clita amet
                            </p>
                        </motion.div>
                    );
                })}
        </section>
    );
}
