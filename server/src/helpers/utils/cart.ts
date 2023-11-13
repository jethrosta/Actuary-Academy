import { rupiahFormat } from "helpers/castings";

const summaryUtils = (cart: any) => {
    const originalPrice = cart.reduce((acc: any, item: any) => acc + item.course.price, 0)
    const totalSaleDiscount = cart.reduce((acc: any, item: any) => {
        if (item.course.is_discount) {
            return acc + item.course.price - item.course.discount_price
        }
        return acc
    }, 0)
    const subTotal = cart.reduce((acc: any, item: any) => {
        const total = item.course.is_discount ? item.course.discount_price : item.course.price
        return acc + total
    }, 0)

    return {
        price: {
            raw: originalPrice,
            formatted: rupiahFormat(originalPrice)
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
}

export const CartSummaryUtils = (cart: any) => ({
    ...summaryUtils(cart),
})