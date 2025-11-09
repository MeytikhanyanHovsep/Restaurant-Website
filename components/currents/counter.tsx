"use client";

import {
    animate,
    motion,
    useInView,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
    value: number;
    duration: number;
};

export default function Counter({ duration, value }: Props) {
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));
    const numberRef = useRef(null);
    const isInView = useInView(numberRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: duration });
            return () => controls.stop();
        }
    }, [isInView, count]);

    return <motion.span ref={numberRef}>{rounded}</motion.span>;
}
