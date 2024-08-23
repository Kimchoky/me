/* could be run on both client/server side */
import { browser } from '$app/environment';
import crypto from 'node:crypto';

/**
 * returns iterator from start to end.
 * c.f.) iterate(0, 2) will return 0, 1, 2 in order.
 * @param {number} start 
 * @param {number} end 
 */
export function* iterate(start, end) {
    for (let i = start; i <= end; i++)
        yield i;
}

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

export function pickOne(arr = new Array) {
    if (!arr || arr.length === 0) return null;
    const index = randomInt(0, arr.length - 1)
    console.log('index', index, arr[index]);
    return arr[index];
}