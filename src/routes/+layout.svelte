<script>
    
    import "../app.css";
    import 'iconify-icon';

    import { gLoading } from '$lib/stores/environments';
    import Loader from '$lib/components/Loader.svelte';    
	import Header from "./Header.svelte";

	import NavBar from "./NavBar.svelte";
    import menuList from '$lib/json/menuList.json';
	import { base } from "$app/paths";

    export let data;
    
    /** @type { Array<import('$lib/types/app.d.ts').MenuItem> } */
    const basedMenuList = menuList.map(v => Object.assign(v, { href: `${base}${v.href}` }));

    

</script>

<Loader show={$gLoading}/>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
    <!-- Header -->
    <header class="sticky top-0 z-10 bg-red-500/80 backdrop-blur-sm p-4">
        <Header menuList={basedMenuList}/>
    </header>
    <!-- Grid Columns -->
    <div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
        <!-- Left Sidebar. -->
        <aside class="bg-yellow-500 p-4 hidden lg:block">
            <NavBar menuList={basedMenuList} direction="col"/>
        </aside>
        <!-- Main Content -->
        <main class="space-y-4 bg-green-500 p-4">
            
            <slot />
            
            <div>
                {#each Array(10).fill(0) as item}
                    <div class="h-40">dummy block</div>
                {/each}
            </div>

        </main>
    </div>
    <!-- Footer -->
    <footer class="bg-blue-500 p-4">

    </footer>
</div>

