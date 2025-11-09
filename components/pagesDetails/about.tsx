"use client";
import Image from "next/image";
import Title from "../currents/title";
import Button from "../currents/button";
import { FaUtensils } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";
import Counter from "../currents/counter";

type ImageItem = {
    src: string;
    className: string;
    size: number;
};

const counters = [
    { label: "Years of Experience", target: 15 },
    { label: "Professional Chefs", target: 50 },
];

export default function About() {
    const images: ImageItem[] = [
        { src: "about-1", className: "", size: 250 },
        {
            src: "about-2",
            className: "flex justify-start items-end",
            size: 190,
        },
        {
            src: "about-3",
            className: "flex justify-end items-start",
            size: 190,
        },
        { src: "about-4", className: "", size: 250 },
    ];

    return (
        <section className="flex container justify-between lg:flex-col gap-[20px] items-center">
            <Image
                src={`/images/about.png`}
                className="object-contain h-auto w-full max-w-[550px] flex-shrink sm:max-w-full rounded-[2px]"
                width={550}
                height={550}
                alt="Our Work"
            />
            <div className="flex flex-col sm:max-w-full max-w-max xl:max-w-min gap-[24px] justify-center">
                <Title text="about us">
                    Welcome to{" "}
                    <span className="inline-flex">
                        {
                            <FaUtensils className="text-[40px] lg:text-[30px] md:text-[25px] text-current" />
                        }
                    </span>{" "}
                    Restoran
                </Title>
                <p className={"font-heebo text-gray"}>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed
                    stet lorem sit.
                </p>
                <p className={"font-heebo text-gray"}>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                </p>
                <div className=" grid pb-[8px] gap-[20px] sm:gap-[5px] grid-cols-2">
                    <div className="flex gap-[15px] sm:gap-0 items-center border-l-[7px] sm:border-l-[3px] sm:pl-[10px] rounded-[2px] pl-[20px] border-current sm:flex-col">
                        <p className="text-[48px] nunito lg:text-[40px] md:text-[30px] font-[800] text-current">
                            <Counter duration={3} value={15} />
                        </p>
                        <div className="sm:text-center">
                            <p className={"font-heebo text-gray"}>Years of</p>
                            <p className="text-deep nunito uppercase font-[800]">
                                Experience
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-[15px] rounded-[2px] sm:gap-0 items-center border-l-[7px] sm:border-l-[3px] sm:pl-[10px] pl-[20px] border-current sm:flex-col">
                        <p className="text-[48px] nunito lg:text-[40px] md:text-[30px] font-[800] text-current">
                            <Counter duration={3} value={50} />
                        </p>
                        <div className="sm:text-center">
                            <p className={"font-heebo text-gray"}>Popular</p>
                            <p className="text-deep nunito uppercase font-[800]">
                                MASTER CHEFS
                            </p>
                        </div>
                    </div>
                </div>
                <Button url="/about">read more</Button>
            </div>
        </section>
    );
}
