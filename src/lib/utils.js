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
    return arr[index];
}

/** Returns parent route of given route string. 
 * @param { string | null } route
*/
export function getParentRoute(route) {
    const routeParts = (route || '/').split('/').filter(Boolean);
    routeParts.pop();
    return '/' + routeParts.join('/');
}


/**
 * Returns light/dark color for given background-color.
 * @param { string } bgColor
 * @param { string } lightColor
 * @param { string } darkColor
 */
export function pickTextColorBasedOnBgColor(bgColor, lightColor, darkColor) {

    console.log('piccccc', bgColor, lightColor, darkColor);

    let r = 0, g = 0, b = 0;
    let color = bgColor;
    if (bgColor.charAt(0) === '#') {
        color = bgColor.substring(1, 7);
        r = parseInt(color.substring(0, 2), 16); // hexToR
        g = parseInt(color.substring(2, 4), 16); // hexToG
        b = parseInt(color.substring(4, 6), 16); // hexToB
    }
    else if (bgColor.startsWith('rgb')) {
        const regExec = /rgb[a]?\(([ \d]+),([ \d]+),([ \d]+)\)/.exec(bgColor);
        if (regExec?.length === 4) {
            r = parseInt(regExec[1]);
            g = parseInt(regExec[2]);
            b = parseInt(regExec[3]);
        }
    }
    const uicolors = [r / 255, g / 255, b / 255];
    const c = uicolors.map((col) => {
      if (col <= 0.03928) {
        return col / 12.92;
      }
      return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    const L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
    return (L > 0.179) ? darkColor : lightColor;
}