<script>
	import { onMount } from "svelte";
    import themeEnv from '$lib/environments/theme';
    import "../app.css";


    onMount(() => {
        const isDarkTheme = localStorage.getItem('theme');
        themeEnv.init();
    })
</script>

<div class="text-xs fixed right-0 top-0 bg-cyan-800 text-white w-36 flex flex-col justify-center">
    <div class="flex justify-between">
        <div>Media : </div>
        <div>
            <span class="sm:hidden">Mobile</span>
            <span class="hidden sm:inline md:hidden">Small Tablet</span>
            <span class="hidden md:inline lg:hidden">Large Tablet</span>
            <span class="hidden lg:inline xl:hidden">Desktop</span>
            <span class="hidden xl:inline">Wide Desktop</span>
        </div>
    </div>

    <div class="flex justify-between">
        <div>color-scheme : </div>
        <div>
            <span class="inline dark:hidden">Light</span>
            <span class="hidden dark:inline">Dark</span>
        </div>
    </div>
</div>  

<slot />