"use client";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/currents/title";
import { Heebo } from "next/font/google";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";

type People = {
    name: string;
    type: string;
};

export default function OurTeam() {
    const people: People[] = [
        {
            name: "Daryl Shular",
            type: "Sous Chef",
        },
        {
            name: "David Pawl",
            type: "Fish Chef",
        },
        {
            name: "Brian Beland",
            type: "Commis Chef",
        },
        {
            name: "Craig Terry",
            type: "Roast Chef",
        },
    ];

    return (
        <section className="container flex flex-col items-center gap-[50px] md:gap-[30px] sm:gap-[10px]">
            <Title text="team members" center={true}>
                our master chefs
            </Title>
            <div className="grid grid-cols-4 md:grid-cols-2 gap-[24px] justify-between ">
                {people.map((e, i) => (
                    <motion.div
                        key={i}
                        className="shadow-xl group relative rounded-[2px] sm:p-[10px] p-[24px] flex flex-col items-center w-full overflow-hidden text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: i / 7,
                            ease: "easeIn",
                            type: "spring",
                        }}
                        viewport={{ once: true, margin: "-150px" }}
                    >
                        <Image
                            src={`/images/team/team-${i + 1}.jpg`}
                            width={250}
                            height={250}
                            alt=""
                            className="w-full z-[5] object-cover rounded-full"
                        />
                        <h4
                            className={
                                " mt-[24px] sm:mt-[10px] text-deep leading-[24px] sm:text-[16px] text-[20px] font-[800] nunito"
                            }
                        >
                            {e.name}
                        </h4>
                        <p
                            className={
                                "text-gray leading-[20px] text-[14px] font-[400]"
                            }
                        >
                            {e.type}
                        </p>
                        <div className="flex absolute transition-all duration-[0.5s] pt-[50px] group-hover:bottom-0 group-hover:opacity-100 bg-[white] opacity-0 bottom-[-30px] justify-center w-full gap-[5px]">
                            <Link
                                href="#"
                                className="bg-current p-[10px] rounded-t-[50px] pb-[15px]"
                            >
                                <Facebook
                                    width={20}
                                    height={20}
                                    className="text-[white]"
                                />
                            </Link>
                            <Link
                                href="#"
                                className="bg-current p-[10px] rounded-t-[50px] pb-[15px]"
                            >
                                <Instagram
                                    width={20}
                                    height={20}
                                    className="text-[white]"
                                />
                            </Link>
                            <Link
                                href="#"
                                className="bg-current p-[10px] rounded-t-[50px] pb-[15px]"
                            >
                                <Twitter
                                    width={20}
                                    height={20}
                                    className="text-[white]"
                                />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
