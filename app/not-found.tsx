import "./globals.css";
import type { Metadata } from "next";
import HeadMain from "@/components/pagesDetails/headMain";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "404 - Page Not Found",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <>
            <HeadMain title="Not Found" page="not-found" />
            <div className="flex container flex-col items-center sm:mt-[-15px] gap-[20px]">
                <Image
                    src="/images/not-found-page.png"
                    alt="Empty Cart"
                    width={250}
                    height={250}
                />
                <p className="text-[25px] sm:mt-[-25px] sm:text-[20px] text-center nunito font-[600]">
                    Page not found
                </p>
                <Link
                    href="/"
                    className={
                        " bg-current items-center nunito font-[500] text-[16px] transition-colors text-[white] px-[48px] hover:bg-[#bd7f21] py-[16px] md:py-[8px] md:px-[16px] leading text-center rounded-[2px] uppercase"
                    }
                >
                    Return home
                </Link>
            </div>
        </>
    );
}
