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
    console.log("browser scheme : " + theme);
    return theme;
}


function init() {
    toggle(getFromLocalStorage() ?? getOriginScheme());
}


/** @param theme {'dark'| 'light'} */
function toggle(theme) {
    
    console.log('toggle to ', theme); 
    setToLocalStorage(theme);

    if (theme === 'dark')
        document.documentElement.classList.add('dark');
    else 
        document.documentElement.classList.remove('dark');
    
}

export default { init, toggle }