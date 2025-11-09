"use client";
import React, { Suspense } from "react";
import SearchContent from "./searchContent";

export default function SearchPage() {
    return (
        <Suspense
            fallback={<div className="text-center mt-20">Loading...</div>}
        >
            <SearchContent />
        </Suspense>
    );
}
