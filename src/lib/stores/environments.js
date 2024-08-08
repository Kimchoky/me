import { writable } from "svelte/store";



//export const theme = writable('light');

/** global Loading spinner flag  */
export const gLoading = writable(false);


export let isDarkMode = writable(false);