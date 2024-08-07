
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


/** @param theme {'dark'| 'light'|null} */
function toggle(theme) {

    if (theme === null)
       theme = getTheme();
    
    setToLocalStorage(theme);

    if (theme === 'dark')
        document.documentElement.classList.add('dark');
    else 
        document.documentElement.classList.remove('dark');
    
}

function getTheme() {
    return getFromLocalStorage() ?? getOriginScheme();
}

export default { toggle, getTheme }