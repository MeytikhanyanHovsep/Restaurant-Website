"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CartItemSkelet() {
    return (
        <tr className="align-middle">
            <td className="p-3">
                <Skeleton width={80} height={80} borderRadius={3} />
            </td>
            <td className="p-3">
                <div className="flex flex-col gap-2">
                    <Skeleton width={120} height={18} />
                    <Skeleton width={60} height={15} />
                </div>
            </td>
            <td className="p-3 text-right">
                <div className="flex flex-col items-end gap-2">
                    <Skeleton width={60} height={20} />
                    <Skeleton width={90} height={30} />
                </div>
            </td>
        </tr>
    );
}
