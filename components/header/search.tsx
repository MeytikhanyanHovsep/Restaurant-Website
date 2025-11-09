"use client";
import React, { useRef, useEffect, useState, FormEvent, memo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "nextjs-toploader/app";
import { Search as SearchIcon } from "lucide-react";

type Props = {
    searchToggle: boolean;
    setSearchToggle: any;
};

const Search = memo(function ({ searchToggle, setSearchToggle }: Props) {
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [focusedOnce, setFocusedOnce] = useState(false);

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const text = searchRef.current?.value || "";
        if (text.length > 0) {
            router.push(
                "/search?value=" +
                    (text
                        .trim()
                        .match(/[a-z]+/g)
                        ?.join(" ") || "")
            );
        }

        // clear value & close search toggle
        if (searchRef.current) {
            searchRef.current.value = "";
        }
        setSearchToggle(false);
        setFocusedOnce(false);

        // Delay blur slightly to avoid losing first character
        setTimeout(() => {
            searchRef.current?.blur();
        }, 200);
    };

    useEffect(() => {
        if (searchToggle && !focusedOnce) {
            searchRef.current?.focus();
            setFocusedOnce(true);
        }

        if (!searchToggle) setFocusedOnce(false);
    }, [searchToggle]);

    return (
        <motion.form
            inputMode="search"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            initial={{ opacity: 0, zIndex: -1 }}
            transition={{ type: "spring", duration: 0.5 }}
            animate={{
                ...(searchToggle
                    ? { opacity: 1, zIndex: 100, width: "100%" }
                    : { opacity: 0, zIndex: -1, width: "50%" }),
            }}
            className="overflow-hidden md:top-0 md:py-[20px] md:border-b-[1px] md:border-[white] md:left-0 md:translate-x-0 md:rounded-none md:translate-y-0 md:left-50% md:shadow-none md:w-full md:bg-deep bg-white py-[5px] px-[20px] md:fixed  rounded-[3px] absolute top-1/2 -translate-y-1/2 w-full left-1/2 -translate-x-1/2 shadow-sm shadow-[#ffffff21] gap-[20px] flex"
            onSubmit={handleSearch}
        >
            <input
                type="text"
                className="w-full outline-none bg-[transparent] lg:text-[16px] text-[white] text-[20px]"
                ref={searchRef}
                placeholder="Search..."
                onBlur={() => setSearchToggle(false)}
            />
            <button>
                <SearchIcon
                    className={`duration-[0.3s] text-[white] transition-opacity${
                        searchToggle ? " opacity-1" : ""
                    }`}
                    color="white"
                    width={20}
                    height={20}
                />
            </button>
        </motion.form>
    );
});
export default Search;
