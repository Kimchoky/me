<script>
    
    import "../app.css";
    import 'iconify-icon';

    import { gLoading } from '$lib/stores/environments';
    import Loader from '$lib/components/Loader.svelte';    
	import Header from "./Header.svelte";

    import menuList from '$lib/json/menuList.json';
	import { base } from "$app/paths";
	import { fade, slide } from "svelte/transition";
	import Footer from "./Footer.svelte";
    import themeEnv from '$lib/client/preferedColorScheme';

    export let data;
    
    /** @type { Array<import('$lib/types/app.d.ts').MenuItem> } */
    const basedMenuList = menuList.map(v => Object.assign(v, { href: `${base}${v.href}` }));

    $: isDarkMode = themeEnv.isDarkMode;
</script>


<Loader show={$gLoading}/>

<!-- media indicator -->
<div class="fixed left-0 bottom-0 z-[999] bg-green-300 text-black p-1">
    <span class="sm:hidden sm">smallest</span>
    <span class="hidden sm:block md:hidden">sm</span>
    <span class="hidden md:block lg:hidden">md</span>
    <span class="hidden lg:block xl:hidden">lg</span>
    <span class="hidden xl:block 2xl:hidden">xl</span>
    <span class="hidden 2xl:block">2xl</span>
</div>

<div class="h-screen flex flex-col justify-between">
    
    <!-- background gradient -->
    <div class="fixed w-full h-full -z-50">
        {#if $isDarkMode}
        <div class="absolute w-full h-full bg-gradient-to-bl dark:from-[var(--app-dark-bgGradientFrom)] dark:to-[var(--app-dark-bgGradientTo)]" transition:fade={{delay: 100, duration: 200}}></div>
        {:else}
        <div class="absolute w-full h-full bg-gradient-to-bl from-[var(--app-light-bgGradientFrom)] to-[var(--app-light-bgGradientTo)]" transition:fade={{delay: 100, duration: 200}} ></div>
        {/if}
    </div>
            
    <header class="top-0 z-10 backdrop-blur-sm p-4 w-full h-4rem">
        <Header menuList={basedMenuList} siteTheme={data.theme} />
    </header>
    
    <main class="grow">
        <slot />
    </main>

    <footer class="p-4 ">
        <hr class="p-2 border-gray-400 border-t"/>
        <Footer />
    </footer>
</div>
