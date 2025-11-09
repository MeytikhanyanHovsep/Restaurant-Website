import type { Metadata } from "next";
import "./globals.css";
import Components from "@/components";

// https://themewagon.github.io/restoran/index.html
// ssh -R 80:localhost:3000 serveo.net
// ngrok http 3000

//            |
//            |
//           \ /
//            .

// //////////  searhc aneluc araji tary koruma   //////////

export const metadata: Metadata = {
    title: "Restaurant",
    description: "Restaurant for fast foods",
    icons: {
        icon: "/icons/logo.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`  heebo flex flex-col justify-between items-start md:gap-[80px] sm:gap-[50px] gap-[100px] max-w-[100vw] overflow-x-hidden`}
            >
                <Components>{children}</Components>
            </body>
        </html>
    );
}
