import React, { memo } from "react";

type Props = {
    totalSum: number;
};

const CartFooter = memo(function ({ totalSum }: Props) {
    const getPrice = (totalPrice: string) => {
        return totalPrice.slice(0, totalPrice.indexOf(".") + 3);
    };
    return (
        <tfoot>
            <tr className="text-[25px] sm:text-[18px] nunito mt-[20px] font-bold">
                <td>
                    <span className="font-[500]">Total:</span>
                    {" $"}
                    {getPrice(totalSum + "")}
                </td>
            </tr>
        </tfoot>
    );
});
export default CartFooter;
