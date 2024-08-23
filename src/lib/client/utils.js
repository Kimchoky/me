import { browser } from '$app/environment';
import crypto from 'node:crypto';

/**
 * Generates randomized hex string of given length
 * @returns { string }
*/
export function randomHexString(length = 8) {
    if (browser) { // CSR
         return Math.random().toString(36).substring(2, 2 + length);
    }
    else { // SSR
        return crypto.randomBytes(length).toString('hex');
    }
}

export function randomInt(start = 1, end = 10) {
    if (browser) {
        const arr = new Uint32Array(1);
        window.crypto.getRandomValues(arr);
        return (arr[0] % (end + start)) + start;
    }
    else {
        return 0;
    }
}