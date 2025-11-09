"use client";
import { Product } from "@/types/ProductSliceTypes";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useRef, useState } from "react";
import { Star } from "lucide-react";
import Buttons from "./buttons";

type Props = Product;

const ProdItem = memo(function ({
    id,
    name,
    price,
    image,
    rating,
    category,
    isFavourite,
}: Props) {
    const [imageSrc, setImageSrc] = useState(image);

    return (
        <div
            key={id}
            className="bg-white relative overflow-hidden shadow-xl justify-stretch rounded-[2px] grid"
        >
            <Link
                href={`/menu/${category}s/${id}`}
                className='min-h-[200px] sm:aspect-square sm:min-h-0 sm:h-auto sm:max-h-full before:absolute before:content-[""] before:bg-gradient-to-b before:-rotate-45 before:from-[#ffffffaf] before:to-[#ffffff04] relative before:rounded-b-full before:top-[-30px] before:left-[-50px] before:w-[170px] sm:before:h-[50px] sm:before:w-[160px] before:z-[10] before:h-[70px] max-h-[250px] before:backdrop-blur-[1px] h-[250px] overflow-hidden'
            >
                <Image
                    unoptimized
                    src={imageSrc || "/icons/unloaded.png"}
                    width={200}
                    height={200}
                    className="mx-auto w-full rounded-[2px] duration-300 hover:scale-[1.1] transition-transform sm:aspect-square object-cover h-full z-[1]"
                    alt={name}
                    onError={() => setImageSrc("/icons/unloaded.png")}
                />
            </Link>
            <div className="p-[10px] nunito gap-[10px] sm:gap-[5px] flex flex-col justify-between pt-[15px]">
                <h4
                    className={
                        " text-[22px] sm:text-[16px] md:text-[18px] text-deep font-[800] leading-[23px]"
                    }
                >
                    {name}
                </h4>
                <div className="flex font-[600] text-[20px] md:text-[16px] justify-between">
                    <p className="flex items-center gap-[3px]">
                        <span className="text-current md:text-[20px] text-[23px]">
                            $
                        </span>
                        {price}
                    </p>
                    <p className="flex gap-[3px] items-center">
                        <Star
                            fill="#fea116"
                            className="text-current w-[23px] pb-[3px] h-[23px]"
                        />
                        <span>{rating}</span>
                    </p>
                </div>
                <p
                    className={
                        "font-heebo text-gray sm:text-[12px] sm:leading-tight text-[14px]"
                    }
                >
                    Lorem ipsum dolor sit amet consectetur...
                </p>
                <Buttons id={id} isFavourite={isFavourite || false} />
            </div>
        </div>
    );
});

export default ProdItem;
