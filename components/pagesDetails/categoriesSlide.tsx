"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { productsCategories } from "@/app/constants";

export default function CategoriesSlide() {
    const category: string = usePathname().split("/")[2];
    const categories: string[] = Object.keys(productsCategories);

    return (
        <div className="container cursor-pointer sm:mb-[-20px] mb-[-40px]">
            <Swiper
                initialSlide={categories.indexOf(category)}
                centeredSlides={true}
                modules={[Navigation]}
                className="w-full swiper"
                breakpoints={{
                    1000: {
                        navigation: false,
                        slidesPerView: 5,
                    },
                    600: {
                        loop: false,
                        slidesPerView: 4,
                    },
                    0: {
                        slidesPerView: 2,
                        navigation: true,

                        loop: true,
                    },
                }}
            >
                {categories.map((e, i) => (
                    <SwiperSlide
                        key={i}
                        className=" grid place-items-stretch max-h-[60px]"
                    >
                        <Link
                            href={`/menu/${e}`}
                            className={
                                "flex justify-center nunito font-[800] bg-white items-center min-h-full gap-[10px] sm:gap-[7px] relative border-b-gray duration-150 transition-colors hover:text-current border-b-[1px] px-[20px] sm:px-[5px] pb-[15px] " +
                                (category == e
                                    ? "before:content-[''] before:w-full text-current before:h-[3px] before:bottom-[-1px] before:left-0 before:absolute before:bg-current"
                                    : " text-deep")
                            }
                        >
                            <Image
                                src={
                                    "/icons/" +
                                    e.slice(0, e.length - 1) +
                                    ".png"
                                }
                                className="max-w-[40px] md:max-w-[30px] sm:max-w-[25px] object-contain"
                                width={40}
                                height={40}
                                alt=""
                            />
                            <p className="font-bold md:text-[18px] sm:text-[16px] capitalize text-[20px]">
                                {e}
                            </p>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
