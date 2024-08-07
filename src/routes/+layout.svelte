<script>
    
    import "../app.css";

    import { gLoading } from '$lib/stores/environments';
    import Loader from '$lib/components/Loader.svelte';    
	import Header from "./Header.svelte";
    import { AppShell } from '@skeletonlabs/skeleton';

    import "@fortawesome/free-regular-svg-icons/faSun";
    import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
    import { config } from '@fortawesome/fontawesome-svg-core';
	import NavBar from "./NavBar.svelte";
    config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

    export let data;
    
</script>

<Loader show={$gLoading}/>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
    <!-- Header -->
    <header class="sticky top-0 z-10 bg-red-500/80 backdrop-blur-sm p-4">
        <Header menuList={data?.menuList}/>
    </header>
    <!-- Grid Columns -->
    <div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
        <!-- Left Sidebar. -->
        <aside class="bg-yellow-500 p-4 hidden lg:block">
            <NavBar menuList={data?.menuList} direction="col"/>
        </aside>
        <!-- Main Content -->
        <main class="space-y-4 bg-green-500 p-4">
            <slot />
            <div class="h-80">1</div>
            <div class="h-80">1</div>
            <div class="h-80">1</div>
            <div class="h-80">1</div>
            <div class="h-80">1</div>
            <div class="h-80">1</div>
            <div class="h-80">1</div>
            <div class="h-80">1</div>
        </main>
    </div>
    <!-- Footer -->
    <footer class="bg-blue-500 p-4">

    </footer>
</div>

