<script>
    import { gLoading } from '$lib/stores/environments';
    import { onMount } from "svelte";
    import themeEnv from '$lib/client/preferedColorScheme';

	import NavBar from './NavBar.svelte';
	import ToggleSwitch from '$lib/components/ToggleSwitch.svelte';
	import { base } from '$app/paths';
	import SiteLogo from '$lib/components/SiteLogo.svelte';
	import { slide } from 'svelte/transition';

    

    export let menuList;

    /** @type {'dark'|'light'|null}*/
    let theme = null;
    let isDarkTheme = false;
    $gLoading = true;
    
    onMount(() => {
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
    
    let showMenu = false;

    function menuClickHandler() {
        console.log(11);
        showMenu = !showMenu;
    }
</script>

<div class="grid grid-cols-[1fr_1fr]">
    <div class="flex">
        <img src="{base}/images/js.svg" alt="javascript" class="w-7 h-7 shadow-[0_0_5px_rgba(0,0,0,.4)] dark:shadow-none">
        <SiteLogo cssClass="pl-2 pt-2" stroke="#222" fill="#222" />
    </div>

    <div class="absolute right-0 flex justify-end">

        <div class="flex flex-col items-end">
            <div class="pr-2">
                <button on:click={()=>showMenu=!showMenu}>
                    <iconify-icon icon="mdi:hamburger-menu" width="2rem" />
                </button>
            </div>
            <!-- Nav -->
            {#if showMenu}
            <div transition:slide={{duration: 300}}>
                <NavBar {menuList} direction="col" />
            </div>
            {/if}
        </div>

        <!-- Theme selector -->
        <ToggleSwitch bind:checked={isDarkTheme} on:change={changeTheme} width={4} height={2} size={2}>
            <svelte:fragment slot="inactive">
                <iconify-icon icon="meteocons:clear-day-fill" width="2rem" />
            </svelte:fragment>
            <svelte:fragment slot="active">
                <iconify-icon icon="meteocons:starry-night-fill" width="2rem" />
            </svelte:fragment>
        </ToggleSwitch>

    </div>
    
</div>