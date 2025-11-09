import Link from "next/link";
import { ChevronRight as Arrow } from "lucide-react";
import { pages } from "@/app/constants";
import { motion } from "framer-motion";

import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Youtube,
    Twitter,
} from "lucide-react";

export default function Footer() {
    const contactIconsStyle = "min-w-[20px] min-h-[20px]";
    const titleStyle =
        "pacifico text-[26px] sm:text-[22px] font-[400] leading-[29px] text-current mb-[20px] sm:mb-[10px]";

    const contacts = [
        {
            text: "123 Street, New York, USA",
            icon: (
                <MapPin width={20} className={contactIconsStyle} height={20} />
            ),
        },
        {
            text: "+374-337-799-40",
            icon: (
                <Phone width={20} className={contactIconsStyle} height={20} />
            ),
        },
        {
            text: "info@gmail.com",
            icon: <Mail width={20} className={contactIconsStyle} height={20} />,
        },
    ];

    const social = [
        {
            icon: <Facebook width={20} fill="white" height={20} />,
            link: "#",
        },
        {
            icon: <Instagram width={20} height={20} />,
            link: "#",
        },
        {
            icon: <Youtube width={20} height={20} />,
            link: "#",
        },
        {
            icon: <Twitter width={20} fill="white" height={20} />,
            link: "#",
        },
    ];

    return (
        <footer className="w-full bg-deep md:pb-[66px] sm:pt-[60px] pt-[100px]">
            <div className="container">
                <div className="grid text-[white] gap-[24px] sm:grid-cols-1 sm:gap-[50px] lg:grid-cols-2 grid-cols-4 w-full">
                    <motion.ul
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col gap-[7px] nunito"
                    >
                        <li className={titleStyle}>Company ---</li>
                        {pages.map((e, i) => (
                            <li
                                key={i}
                                className="font-[400] leading-[22.5px] duration-[0.5s] hover:tracking-[0.5px] transition-all capitalize"
                            >
                                <Link
                                    className="flex items-center gap-[3px]"
                                    href={`/${i == 0 ? "" : e}`}
                                >
                                    <Arrow
                                        width={20}
                                        className="min-w-[20px] mb-[2px] min-h-[20px]"
                                        height={20}
                                    />
                                    {e}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                    <motion.ul
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                        className=" flex flex-col gap-[7px] nunito"
                    >
                        <li className={titleStyle}>Contacts ---</li>
                        {contacts.map((e, i) => (
                            <li
                                key={i}
                                className="font-[400] leading-[24px] duration-[0.5s] hover:tracking-[0.5px] transition-all "
                            >
                                <p className="flex items-center gap-[10px]">
                                    {e.icon}
                                    {e.text}
                                </p>
                            </li>
                        ))}

                        <li className="flex mt-[16px] gap-[7px] text-[white] transition-all duration-[0.5s] items-stretch justify-start">
                            {social.map((e, i) => (
                                <Link
                                    key={i}
                                    href={"/" + e.link}
                                    className="min-h-[36px] hover:bg-[white] hover:text-current rounded-full border-[1px] grid place-items-center border-[white] min-w-[36px]"
                                >
                                    {e.icon}
                                </Link>
                            ))}
                        </li>
                    </motion.ul>
                    <motion.ul
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                        }}
                        className=" flex flex-col gap-[7px] nunito"
                    >
                        <li className={titleStyle}>Opening ---</li>
                        <li
                            className={" text-[20px] leading-[24px] font-[400]"}
                        >
                            Monday - Saturday
                        </li>
                        <li className={" leading-[24px] mb-[8px] font-[400]"}>
                            09AM - 09PM
                        </li>
                        <li
                            className={" text-[20px] leading-[24px] font-[400]"}
                        >
                            Sunday
                        </li>
                        <li>10AM - 8PM</li>
                    </motion.ul>
                    <motion.ul
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className=" flex flex-col nunito gap-[8px]"
                    >
                        <li className={titleStyle}>Newsletter ---</li>
                        <li className={" leading-[24px] mb-[10px] font-[400]"}>
                            Dolor amet sit justo amet elitr clita ipsum elitr
                            est.
                        </li>
                        <li className="p-[8px] px-[10px] lg:px-[5px] border-current border-[1px] bg-[white] flex gap-[7px] rounded-[2px] sm:w-full sm:max-w-full bg-white lg:max-w-[200px]">
                            <input
                                type="email"
                                className={
                                    " w-full bg-[transparent] leading-[24px]"
                                }
                                placeholder="Your email"
                                onFocus={(e) => e.target.blur()}
                            />
                            <button
                                className={
                                    " bg-current items-center xl:text-[14px] transition-colors hover:bg-current sm:min-w-[100px] text-[white] px-[12px] py-[8px] leading text-center max-w-max rounded-[2px] uppercase"
                                }
                            >
                                signup
                            </button>
                        </li>
                    </motion.ul>
                </div>
                <div className="flex flex-col gap-[22px] text-[white] border-t-[1px] py-[25px] border-[#ffffff1a] mt-[50px] font-[500] laeding-[23px] text-[15px]">
                    <p>Copyright c 2024 Dscode | All rights reserved</p>
                    <p>Distributed By ThemeWagon</p>
                </div>
            </div>
        </footer>
    );
}
