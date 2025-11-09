"use client";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/ProductSliceTypes";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Star, Trash2 } from "lucide-react";
import { removeItem, changeItemQty } from "@/features/Cart.slice";
import { motion } from "framer-motion";

type Props = {
    prod: Product;
    initQty: number;
    ind: number;
};

const CartItem = memo(function ({ prod, initQty, ind }: Props) {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const [qty, setQty] = useState<number | string>(initQty);
    const [isRemoved, setIsRemoved] = useState<boolean>(false);
    const { name, image, price, rating, id, category } = prod;

    const handleBlur = () => {
        setQty(Math.floor(+qty));
        if (+qty > 999) setQty(999);
        else if (+qty < 1) setQty(1);
        if (qty == 0) return dispatch(removeItem(id));
        return dispatch(changeItemQty({ id, qty: Math.floor(+qty) }));
    };

    const getPrice = () => {
        const totalPrice = `${price * +qty}`;
        return totalPrice.slice(0, totalPrice.indexOf(".") + 3);
    };

    const setProdQty = (num: number) => {
        if (typeof qty == "number")
            if ((qty > 1 && num < 0) || (qty < 999 && num > 0)) {
                setQty(qty + num);
                dispatch(changeItemQty({ id, qty: qty + num }));
            }
    };

    return (
        <motion.tr
            className={
                "border-[2px] border-[#f2f2f2]" + (ind ? " bg-[#f2f2f2]" : "")
            }
            initial={{ x: 0, opacity: 1 }}
            animate={isRemoved ? { x: "300%", opacity: 0 } : {}}
            transition={{ duration: 1 }}
        >
            <td className="hidden [@media(min-width:850px)]:table-cell pl-[20px] py-[20px]">
                <div className="flex justify-start">
                    <Link href={`/menu/${category}/${id}`}>
                        <Image
                            src={image}
                            width={110}
                            height={110}
                            alt={""}
                            unoptimized
                            onError={(e) =>
                                (e.currentTarget.src = "/icons/unloaded.png")
                            }
                            className="w-[110px] aspect-square rounded-[2px] object-cover"
                        />
                    </Link>
                </div>
            </td>
            <td className="hidden [@media(min-width:850px)]:table-cell nunito font-[600] text-[20px]">
                {name}
            </td>

            <td className="hidden [@media(min-width:850px)]:table-cell px-[10px]">
                <div className="flex justify-center items-center gap-x-1.5">
                    <button
                        type="button"
                        className="w-[40px] h-[40px] inline-flex justify-center items-center gap-x-2 text-[23px] font-medium rounded-[2px] border border-[gray] bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                        onClick={() => setProdQty(-1)}
                    >
                        -
                    </button>
                    <input
                        className="p-0 max-w-[50px] min-w-[50px] overflow-hidden text-center text-[18px] bg-[transparent] outline-none border-0 text-gray-800 focus:ring-0"
                        type="number"
                        value={qty}
                        onBlur={handleBlur}
                        onChange={(e) => setQty(e.target.value)}
                    />
                    <button
                        type="button"
                        className="w-[40px] h-[40px] inline-flex justify-center items-center gap-x-2 text-[23px] font-medium rounded-[2px] border border-[gray] bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                        onClick={() => setProdQty(1)}
                    >
                        +
                    </button>
                </div>
            </td>
            <td className="hidden [@media(min-width:850px)]:table-cell">
                <p className="text-[20px] justify-center nunito font-[600] flex gap-[3px] items-center">
                    <span className="text-[23px] text-current">$</span>
                    {getPrice()}
                </p>
            </td>
            <td className="pr-[50px] hidden [@media(min-width:850px)]:table-cell">
                <div className="flex items-center nunito font-[600] gap-[3px] text-[20px]">
                    <Star className="text-current w-[23px] pb-[3px] h-[23px]" />
                    <span>{rating}</span>
                </div>
            </td>
            <td className="hidden [@media(min-width:850px)]:table-cell">
                <button
                    onClick={() => {
                        dispatch(removeItem(id));
                        setIsRemoved(true);
                    }}
                    className="cursor-pointer"
                >
                    <Trash2 className="text-current w-[30px] h-[30px]" />
                </button>
            </td>

            <td
                colSpan={6}
                className="hidden [@media(max-width:849px)]:table-cell px-[10px] py-[15px] border-t border-gray-200"
            >
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 justify-between">
                        <div className="flex items-center gap-3">
                            <Link href={`/menu/${category}/${id}`}>
                                <Image
                                    width={100}
                                    height={100}
                                    alt={name}
                                    unoptimized
                                    src={image}
                                    onError={(e) =>
                                        (e.currentTarget.src =
                                            "/icons/unloaded.png")
                                    }
                                    className="w-[80px] h-[80px] object-cover rounded-[3px]"
                                />
                            </Link>
                            <div>
                                <p className="text-[16px] font-[600] leading-tight">
                                    {name}
                                </p>
                                <div className="flex items-center nunito font-[600] gap-[3px] text-[15px] text-gray-600">
                                    <Star className="text-current w-[18px] h-[18px]" />
                                    <span>{rating}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                dispatch(removeItem(id));
                                setIsRemoved(true);
                            }}
                            className="cursor-pointer"
                        >
                            <Trash2 className="text-current w-[25px] h-[25px]" />
                        </button>
                    </div>

                    <div className="flex justify-between items-center mt-1">
                        <div className="flex items-center gap-x-1.5">
                            <button
                                type="button"
                                className="w-[35px] h-[35px] flex justify-center items-center text-[20px] rounded-[2px] border border-gray-400"
                                onClick={() => setProdQty(-1)}
                            >
                                -
                            </button>
                            <input
                                className="p-0 w-[45px] text-center text-[16px] bg-[transparent] outline-none border-0 text-gray-800"
                                type="number"
                                value={qty}
                                onBlur={handleBlur}
                                onChange={(e) => setQty(e.target.value)}
                            />
                            <button
                                type="button"
                                className="w-[35px] h-[35px] flex justify-center items-center text-[20px] rounded-[2px] border border-gray-400"
                                onClick={() => setProdQty(1)}
                            >
                                +
                            </button>
                        </div>

                        <p className="text-[17px] sm:text-[16px] font-[500] flex items-center gap-[3px]">
                            <span className="text-[19px] nunito font-[600] text-current">
                                $
                            </span>
                            {getPrice()}
                        </p>
                    </div>
                </div>
            </td>
        </motion.tr>
    );
});
export default CartItem;
