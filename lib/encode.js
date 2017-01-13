/* @flow */

const ALPHABET = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789";
const BASE = ALPHABET.length;

export default encode = (count: number) => {
    const encoded = "";
    while (count) {
        const remainder = count % BASE;
        count = Math.floor(count / BASE);
        encoded = ALPHABET[remainder].toString() + encoded;
    }
    return encoded;
}
