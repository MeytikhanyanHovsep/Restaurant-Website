"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
    text: string;
    children: ReactNode;
    center?: boolean;
};

export default function Title({ text, children, center }: Props) {
    const textBox = useRef<HTMLDivElement | null>(null);

    const isInView = useInView(textBox, {
        once: true,
        margin: "-150px",
    });

    return (
        <motion.div
            ref={textBox}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                type: "spring",
                duration: 1,
                ease: "easeIn",
            }}
            className={"flex flex-col" + (center ? " items-center" : "")}
        >
            <h3
                className={`pacifico capitalize after:content-["---"] after:text-[30px] after:rounded-md font-[400] after:ml-[5px] after:text-current text-current text-[20px] ${
                    center
                        ? ' text-center before:content-["---"] before:text-[30px] before:rounded-md before:ml-[5px] before:text-current'
                        : ""
                }`}
            >
                {text.replace("#", "")}
            </h3>
            <h5
                className={
                    " text-[35px] nunito sm:text-[25px] capitalize text-deep sm:whitespace-normal whitespace-nowrap font-[800]"
                }
            >
                {children}
            </h5>
        </motion.div>
    );
}
