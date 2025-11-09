"use client";
import Title from "../currents/title";
import Link from "next/link";
import Image from "next/image";
import { productsCategories } from "@/app/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Categories() {
    const categories: any = productsCategories;

    return (
        <div className="container flex flex-col md:gap-[30px] sm:gap-[10px] items-center gap-[50px]">
            <Title text="food menu" center={true}>
                all categories
            </Title>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    800: {
                        slidesPerView: 5,
                        centeredSlides: false,
                    },
                    600: {
                        centeredSlides: true,
                        initialSlide: 2,
                        slidesPerView: 4,
                        spaceBetween: 10,
                        loop: false,
                    },
                    0: {
                        loop: true,
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                }}
                className=" w-full swiper !py-0 pb-[30px]"
            >
                {Object.keys(categories).map((e, i) => (
                    <SwiperSlide className="swiper-slide max-h-min !sm:max-w-[180px] my-[10px]">
                        <div key={i}>
                            <Link
                                href={"/menu/" + e}
                                className="flex items-center gap-[2px] bg-white flex-col rounded-[2px] p-[25px] shadow-md "
                            >
                                <Image
                                    src={`/images/categories/${e}.png`}
                                    width={100}
                                    height={100}
                                    className="mb-[10px] lg:max-w-[70px] max-w-[100px] object-contain rounded-full aspect-square"
                                    alt={e}
                                />
                                <h6
                                    className={
                                        " text-[20px] nunito lg:text-[18px] leading-[24px] font-[800] capitalize"
                                    }
                                >
                                    {e}
                                </h6>
                                <p
                                    className={
                                        " text-gray leading-[21px] text-[14px] lg:text-[12px] font-[400]"
                                    }
                                >
                                    {categories[e]} {e}
                                </p>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
