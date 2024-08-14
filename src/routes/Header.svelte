<script>
    import { gLoading } from '$lib/stores/environments';
    import { onMount } from "svelte";
    import themeEnv from '$lib/client/preferedColorScheme';

	import NavBar from './NavBar.svelte';
	import ToggleSwitch from '$lib/components/ToggleSwitch.svelte';
	import { base } from '$app/paths';
	import SiteLogo from '$lib/components/SiteLogo.svelte';
	import { fade, slide, crossfade } from 'svelte/transition';
	import { randomHexString } from '$lib/client/stringUtil';
	import { browser } from '$app/environment';

    const id_hamburger = randomHexString();

    export let menuList;
    export let siteTheme;

    /** @type {'dark'|'light'|null}*/
    let theme = siteTheme;
    let isDarkTheme = false;
    $gLoading = true;
    
    $: {
        if (theme) { 
            themeEnv.toggle(theme);
            isDarkTheme = theme === 'dark';
            $gLoading = false;
        }

        if (browser && showMenu) {
            document.body.addEventListener('click', handleHamburgerClose);
        }
    }

    function changeTheme() {
        theme = isDarkTheme ? 'dark' : 'light';
    }
    
    let showMenu = false;

    function handleHamburgerClose() {
        showMenu = false;
        document.body.removeEventListener('click', handleHamburgerClose);
    }
</script>

<div class="grid grid-cols-[1fr_1fr]">
    <div class="flex">
        <img src="{base}/images/js.svg" alt="javascript" class="w-7 h-7 shadow-[0_0_5px_rgba(0,0,0,.4)] dark:shadow-none">
        <SiteLogo cssClass="pl-2 pt-2" stroke="#222" fill="#222" />
    </div>

    <div class="absolute right-0 flex justify-end items-center">

        <!-- Theme selector -->
        <ToggleSwitch bind:checked={isDarkTheme} on:change={changeTheme} width={3} height={1.2} size={1.5}>
            <svelte:fragment slot="inactive">
                <iconify-icon icon="meteocons:clear-day-fill" width="1.5rem" />
            </svelte:fragment>
            <svelte:fragment slot="active">
                <iconify-icon icon="meteocons:starry-night-fill" width="1.5rem" />
            </svelte:fragment>
        </ToggleSwitch>

        <!-- mobile -->
        <div class="flex flex-col items-end relative pl-4 pr-2">
            <button on:click|stopPropagation={()=>showMenu=!showMenu}
                class="flex items-center rounded-md 
                    bg-pink-200 dark:bg-gray-700
                    focus:bg-pink-300 focus:dark:bg-gray-500">
                    <div class="w-8 h-8">
                        {#if showMenu}
                        <iconify-icon class="" icon="mdi:keyboard-arrow-down" width="100%" />
                        {:else}
                        <iconify-icon class="" icon="mdi:hamburger-menu" width="100%" />
                        {/if}
                    </div>
                    <span class="hidden lg:inline-block pl-1">MENU</span>
            </button>
            <!-- Nav -->
            {#if showMenu}
            <div id="{id_hamburger}" class="absolute top-10" transition:slide={{duration: 300}}>
                <NavBar {menuList} direction="col" />
            </div>
            {/if}
        </div>

 

    </div>
    
</div>