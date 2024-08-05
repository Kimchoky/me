<script>
    import { gLoading } from '$lib/stores/environments';
    import { onMount } from "svelte";
    import themeEnv from '$lib/environments/preferedColorScheme';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
	import NavBar from './NavBar.svelte';


    export let menuList;

    /** @type {'dark'|'light'|null}*/
    let theme = null;
    let isDarkTheme = false;
    $gLoading = true;
    
    onMount(() => {
        console.log('Header OnMount')
        theme = themeEnv.getTheme();
    });

    $: {
        if (theme) { 
            themeEnv.toggle(theme);
            isDarkTheme = theme === 'dark';
            $gLoading = false;
        }
    }

    function changeTheme() {
        theme = isDarkTheme ? 'dark' : 'light';
    }

</script>

<div class="flex justify-between p-1">
    <div class="inline-flex ">
        <div>Logo</div>
        <div>Site name</div>
    </div>
    <div>
        <!-- Nav -->
        <NavBar {menuList} direction="row" />
    </div>
    <div>
        <!-- Theme selector -->
        <label class="inline-flex items-center cursor-pointer gap-2">
            <FontAwesomeIcon icon={faSun} class="text-orange-300 dark:text-white"/>
            <input type="checkbox" role="switch" bind:checked={isDarkTheme} on:change={changeTheme} >
            <FontAwesomeIcon icon={faMoon} class="text-black dark:text-yellow-400" />
        </label>
    </div>
</div>