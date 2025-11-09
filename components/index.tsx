"use client";
import React, { ReactNode } from "react";
import Header from "./header";
import { Provider } from "react-redux";
import { store } from "@/features/store";
import Footer from "./footer";
import NextTopLoader from "nextjs-toploader";

type Props = {
    children: ReactNode;
};

export default function Components({ children }: Props) {
    return (
        <>
            <NextTopLoader
                color="#fea116"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={false}
                showSpinner={false}
                easing="ease"
                speed={200}
                shadow="0 0 10px #fea116,0 0 5px #fea116"
                zIndex={1600}
                showAtBottom={false}
            />
            <Provider store={store}>
                <Header />
                {children}
                <Footer />
            </Provider>
        </>
    );
}
