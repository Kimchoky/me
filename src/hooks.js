const translated = {
    //'/test': '/api/test',
}

export function reroute({ url }) {
    if (url.pathname in translated) {
        const translatedUrl = translated[url.pathname];
        console.log(`url reroute : [${url.pathname}] <--- [${translatedUrl}]`)
        return translatedUrl;
    }
}

