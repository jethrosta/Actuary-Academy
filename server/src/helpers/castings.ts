export const rupiahFormat = (number: any) => Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
}).format(number);

export const isDateExpired = (isoDateString: string): boolean => {
    const inputDate = new Date(isoDateString);
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 7);
    return inputDate < currentDate;
}