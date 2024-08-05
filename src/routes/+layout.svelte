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

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
    <svelte:fragment slot="header">
        <Header menuList={data?.menuList}/>
    </svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
        <NavBar menuList={data?.menuList}/>
    </svelte:fragment>
	<svelte:fragment slot="sidebarRight"></svelte:fragment>
	<svelte:fragment slot="pageHeader"></svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"></svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
