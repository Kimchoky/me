import { browser } from "$app/environment";

function getCookies() {
    
    /** @type { {[key: string]: string} } */
    const cookies = {}
    document.cookie.split(';').forEach(entry => {
        const sp = entry.split('=');
        if (sp.length >= 2 && !!sp[0].trim()) {
            const name = (''+sp[0]).trim();
            const value = (''+sp.slice(1).join('=')).trim();
            cookies[name] = value;
        }
    });
    return cookies;
}

export function getCookie(name = '') {
    return getCookies()[name];
}


/** 
 * @param name { string }
 * @param value { string|null }
 */
export function setCookie(name, value) {
    browser && (document.cookie = `${name}=${value};max-age=31536000;path=/`);
}