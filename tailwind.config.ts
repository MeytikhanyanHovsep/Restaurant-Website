import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xl: { max: "1100px" },
            lg: { max: "1000px" },
            md: { max: "850px" },
            sm: { max: "550px" },
            xs: { max: "320px" },
        },
        colors: {
            deep: "#0F172B",
            current: "#fea116",
            gray: "#666565",
        },
        // extend: {
        //     fontFamily: {
        //         nunito: ["Nunito", "sans-serif"],
        //         pacifico: ["Pacifico", "sans-serif"],
        //         heebo: ["Heebo", "sans-serif"],
        //     },
        // },
    },
    plugins: [],
} satisfies Config;
