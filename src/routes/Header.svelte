<script>
    import { gLoading } from '$lib/stores/environments';
    import { onMount } from "svelte";
    import themeEnv from '$lib/client/preferedColorScheme';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
	import NavBar from './NavBar.svelte';
	import { AppBar } from '@skeletonlabs/skeleton';
	import ToggleSwitch from '$lib/components/ToggleSwitch.svelte';
	import { base } from '$app/paths';


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
        console.log(isDarkTheme)
        theme = isDarkTheme ? 'dark' : 'light';
    }

</script>


<AppBar>
    <svelte:fragment slot="lead">
        <img src="{base}/images/js.svg" alt="javascript" class="w-7 h-7   ">
        <span class="p-2 noto-sans-kr">Jungsoo Kim</span>
    </svelte:fragment>
    <svelte:fragment slot="headline"></svelte:fragment>
    <svelte:fragment slot="trail">
        <div>
            <!-- Nav -->
            <NavBar {menuList} direction="row" />
        </div>
        <div>
            <!-- Theme selector -->
            <ToggleSwitch bind:checked={isDarkTheme} on:change={changeTheme} >
                <svelte:fragment slot="inactive">
                    <FontAwesomeIcon icon={faSun} class="text-orange-300 dark:text-white"/>                        
                </svelte:fragment>
                <svelte:fragment slot="active">
                    <FontAwesomeIcon icon={faMoon} class="text-black dark:text-yellow-400" />
                </svelte:fragment>
            </ToggleSwitch>
        </div>
    </svelte:fragment>
</AppBar>