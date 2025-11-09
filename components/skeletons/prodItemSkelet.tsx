import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
type Props = {};

export default function ProdItemSkilet({}: Props) {
    return (
        <div className="bg-white relative overflow-hidden shadow-md rounded-[2px] grid animate-pulse">
            <div className="min-h-[200px] sm:aspect-square sm:min-h-0 sm:h-auto sm:max-h-full max-h-[250px] h-[250px]">
                <Skeleton
                    height={200}
                    width="100%"
                    className="w-full h-full sm:aspect-square"
                />
            </div>

            {/* Content (one block instead of many small skeletons) */}
            <div className="p-[10px] flex flex-col gap-[10px] pt-[15px]">
                <Skeleton width="80%" height={20} />
                <Skeleton width="60%" count={2} height={18} />
                <Skeleton width="100%" height={40} />
            </div>
        </div>
    );
}
