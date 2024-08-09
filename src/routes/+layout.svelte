<script>
    
    import "../app.css";
    import 'iconify-icon';

    import { gLoading } from '$lib/stores/environments';
    import Loader from '$lib/components/Loader.svelte';    
	import Header from "./Header.svelte";

	import NavBar from "./NavBar.svelte";
    import menuList from '$lib/json/menuList.json';
	import { base } from "$app/paths";
	import { slide } from "svelte/transition";

    export let data;
    
    /** @type { Array<import('$lib/types/app.d.ts').MenuItem> } */
    const basedMenuList = menuList.map(v => Object.assign(v, { href: `${base}${v.href}` }));

    

</script>

<Loader show={$gLoading}/>

<!-- media indicator -->
<div class="absolute right-0 top-0 z-[999] bg-green-300 text-black p-1">
    <span class="sm:hidden sm">smallest</span>
    <span class="hidden sm:block md:hidden">sm</span>
    <span class="hidden md:block lg:hidden">md</span>
    <span class="hidden lg:block xl:hidden">lg</span>
    <span class="hidden xl:block 2xl:hidden">xl</span>
    <span class="hidden 2xl:block">2xl</span>
</div>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
    <!-- Header -->
    <header class="sticky top-0 z-10 backdrop-blur-sm p-4">
        <Header menuList={basedMenuList}/>
    </header>
    <!-- Grid Columns -->
    <div class="grid grid-cols-1 lg:grid-cols-[auto]">
        <!-- Left Sidebar. -->
        <!-- 
        <aside class="bg-yellow-500 p-4 hidden lg:block transitionIn={true} transitionInParams={{ duration: 200 }}">
            <NavBar menuList={basedMenuList} direction="col"/>
        </aside>
        -->
        <!-- Main Content -->
        <main class="space-y-4 py-4 
                     px-4 lg:px-20">
            
            <slot />
            
        </main>
    </div>
    <!-- Footer -->
    <footer class="bg-blue-500 p-4">

    </footer>
</div>

