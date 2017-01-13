/* @flow */

const ALPHABET = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789";
const BASE = ALPHABET.length;

const encode = (count: number) => {
    let encoded = "";
    while (count) {
        const remainder = count % BASE;
        count = Math.floor(count / BASE);
        encoded = ALPHABET[remainder].toString() + encoded;
    }
    return encoded;
};

export default encode;
