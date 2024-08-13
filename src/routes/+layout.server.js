

export async function load( { route, url, cookies } ) {
    
    let theme = cookies.get('theme');
    
    // cookies.set('isDarkMode', ''+isDarkModeCookie, { path: '/', httpOnly: false });

    return {
        theme,
    }

}