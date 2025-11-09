"use client";
import Image from "next/image";
import Button from "../currents/button";
import { motion } from "framer-motion";

export default function Main() {
    return (
        <main className="flex w-full md:pt-[100px] md:pb-[50px] max-h-[100vh] md:min-h-full md:max-h-full min-h-[100vh] justify-between items-center  relative bg-[#0f172be8] md:h-auto overflow-hidden">
            <Image
                width={1000}
                height={1000}
                unoptimized
                className="min-w-full min-h-full object-cover z-[-1] absolute top-0 left-0"
                alt=""
                src={"/images/main.jpg"}
            />
            <div className="container md:grid-cols-1 md:gap-[50px] text-[white] items-center grid grid-cols-2 gap-[20px]">
                <div className="flex flex-col md:items-center gap-[8px]">
                    <motion.h4
                        className={
                            " text-[65px] md:text-center lg:text-[55px] md:leading-[60px] md:text-[37px] capitalize nunito font-[800] leading-[77px] sm:max-w-[340px]"
                        }
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            type: "spring",
                            ease: "easeIn",
                        }}
                    >
                        Enjoy Our Delicious Meal
                    </motion.h4>
                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.5,
                            type: "spring",
                            ease: "easeIn",
                        }}
                        className={
                            "font-heebo md:text-center sm:mb-[30px] mb-[40px] font-[400]"
                        }
                    >
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit.
                    </motion.p>
                    <Button url="/menu">Book a table</Button>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.5,
                        type: "spring",
                        ease: "easeIn",
                    }}
                    className="flex sm:px-[30px] md:justify-center justify-end object-cover items-center"
                >
                    <Image
                        width={550}
                        height={550}
                        unoptimized
                        className=" anim-spin object-contain aspect-square w-[470px]"
                        alt=""
                        src={"/images/hero.png"}
                    />
                </motion.div>
            </div>
        </main>
    );
}
