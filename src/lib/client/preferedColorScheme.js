import { isDarkMode } from "$lib/stores/environments";
import { getCookie, setCookie } from "$lib/client/cookie";
import { browser } from "$app/environment";

/** @type { () => 'dark'|'light'|null }  */
function getFromLocalStorage() {
    const theme = localStorage.getItem('theme');
    switch (theme) {
        case 'dark': return 'dark';
        case 'light': return 'light';
        default: return null;
    }
}
/** @param theme {'dark'|'light'} */
function setToLocalStorage(theme) {
    localStorage.setItem('theme',  theme);
}


/** @type { ()=> 'dark'|'light' } */
function getOriginScheme() {
    const prefersColorScheme = window.matchMedia( '(prefers-color-scheme: dark)' ).matches;
    const theme = prefersColorScheme ? 'dark' : 'light';
    return theme;
}


/** @param theme { string | null | undefined } */
function toggle(theme) {
    if (!browser) return;

    if (theme === null || (theme !== 'dark' && theme !== 'light'))
       theme = getTheme();
    
    setCookie('theme', theme);

    
    if (theme === 'dark') {
        isDarkMode.set(true);
        document.documentElement.classList.add('dark');
    }
    else  {
        isDarkMode.set(false);
        document.documentElement.classList.remove('dark');
    }
    
}

/** @type { () => 'dark'|'light' } */
function getTheme() {
    // return getFromLocalStorage() ?? getOriginScheme();
    let theme = getCookie('theme');
    if (theme === 'dark' || theme === 'light')
        return theme;
    else 
        return getOriginScheme();
}


export default { toggle, getTheme, isDarkMode }