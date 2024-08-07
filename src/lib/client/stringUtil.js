import { browser } from '$app/environment';
import crypto from 'node:crypto';

/**
 * Generates randomized hex string of given length
 * @returns { string }
*/
export function randomHexString(length = 5) {
    if (browser) { // CSR
         return Math.random().toString(36).substring(2, 2 + length);
    }
    else { // SSR
        return crypto.randomBytes(length).toString('hex');
    }
}