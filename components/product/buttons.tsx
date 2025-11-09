import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart as Cart, Heart, CircleCheck } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem } from "@/features/Cart.slice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { setItem } from "@/features/Wishlist.slice";
type Props = {
    id: number;
    isFavourite: boolean;
};

export default function Buttons({ id, isFavourite }: Props) {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const [added, setAdded] = useState<boolean>(false);

    const addToCart = () => {
        const duration: number = 2500;
        if (added) return;

        dispatch(addItem(id));
        setAdded(true);

        setTimeout(() => setAdded(false), duration);
    };

    return (
        <>
            <AnimatePresence>
                <motion.button
                    onClick={addToCart}
                    className={` bg-current drop-shadow-[8px_8px_5px_#00000020] sm:text-[14px] hover:text-current justify-center hover:bg-[transparent] border-[2px] border-current text-[white] p-[10px] sm:p-[5px] transition-colors rounded-[2px] capitalize relative overflow-hidden`}
                >
                    {added && (
                        <motion.div
                            className="-translate-y-1/2 -translate-x-1/2 absolute left-1/2"
                            initial={{ top: "-10%", opacity: 0 }}
                            animate={
                                added
                                    ? {
                                          top: "50%",
                                          opacity: 1,
                                      }
                                    : { top: "-10%", opacity: 0 }
                            }
                            transition={{
                                duration: 0.3,
                                ease: "easeIn",
                                delay: 0.8,
                            }}
                        >
                            <CircleCheck width={30} height={30} />
                        </motion.div>
                    )}
                    <motion.div
                        className="-translate-x-1/2 -translate-y-1/2 top-1/2 absolute"
                        initial={{ left: "0%", opacity: 0 }}
                        animate={
                            added
                                ? {
                                      left: ["-10%", "110%"],
                                      opacity: 1,
                                  }
                                : { left: "0%", opacity: 0 }
                        }
                        transition={{
                            left: { duration: 1, ease: "easeInOut" },
                            opacity: { duration: 0 },
                        }}
                    >
                        <Cart
                            width={30}
                            height={30}
                            className="sm:max-w-[25px]"
                        />
                    </motion.div>
                    <motion.div
                        className="flex items-center  justify-center gap-[5px]"
                        initial={{ opacity: 1 }}
                        animate={added ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        Add to<span className="sm:hidden"> Cart</span>
                        <Cart
                            width={22}
                            height={22}
                            className=" sm:max-w-[18px] sm:max-h-[18px] max-w-[22px] max-h-[22px]"
                        />
                    </motion.div>
                </motion.button>
            </AnimatePresence>
            <motion.button
                className="absolute top-[10px] z-[10] duration-150 p-[5px] hover:scale-[1.1] left-[10px] sm:left-[5px] sm:top-[5px]"
                onClick={() => dispatch(setItem(id))}
            >
                <Heart
                    fill={isFavourite ? "red" : "none"}
                    stroke={isFavourite ? "transparent" : "red"}
                    width={25}
                    className="sm:w-[20px] sm:h-[20px]"
                    height={25}
                />
            </motion.button>
        </>
    );
}
