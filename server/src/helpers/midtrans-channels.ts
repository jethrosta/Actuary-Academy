export const channels = (channel: string) => {
    const channels = ['bri', 'bca', 'bni', 'mandiri', 'permata', 'gopay', 'shopeepay', 'alfamart', 'indomaret'];
    return channels.includes(channel);
}