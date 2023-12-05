import { rupiahFormat } from "./castings";
import { CourseDocument } from "../db/courses";

interface CartSummaryResult {
    price: {
        raw: number;
        formatted: string;
    };
    sale_discount: {
        raw: number;
        formatted: string;
    };
    sub_total: {
        raw: number;
        formatted: string;
    };
    total_items: number;
}

export const CartSummary = (cart: CourseDocument[]) => {
    // ================== Adjust Course Pricing Below ================== //

    const totalSaleDiscount = cart.reduce((acc: number, item: CourseDocument) => {
        if (item.is_discount) {
            return acc + item.price - item.discount_price
        }
        return acc
    }, 0)

    const subTotal = cart.reduce((acc: number, item: CourseDocument) => {
        const total = item.is_discount ? item.discount_price : item.price
        return acc + total
    }, 0)

    const cartSummaryResult: CartSummaryResult = {
        price: {
            raw: subTotal,
            formatted: rupiahFormat(subTotal)
        },
        sale_discount: {
            raw: totalSaleDiscount,
            formatted: rupiahFormat(totalSaleDiscount)
        },
        sub_total: {
            raw: subTotal,
            formatted: rupiahFormat(subTotal)
        },
        total_items: cart.length,
    }

    return cartSummaryResult
}