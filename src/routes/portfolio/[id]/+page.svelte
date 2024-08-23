<script>
	import { base } from "$app/paths";
	import { page } from "$app/stores";
    import Loader from '$lib/components/Loader.svelte';

    /** @type { {[key:string]: Promise<import('svelte').ComponentType> } }*/
    const components = {
        'Sticky1': import('./Sticky1.svelte').then(c=>c.default),
        'Canvas1': import('./Canvas1.svelte').then(c=>c.default),
    }

    export let data;
    const { list } = data;

    const id = $page.params['id'];
    const currentData = list.find(v => v.id === id);

</script>

<div class="top-0">
    <a href="{base}/portfolio">👈 Go back</a>
    <h1>{currentData?.name}</h1>
</div>


<!-- Dynamically loads component -->
{#if currentData?.component}
{#await components[currentData.component] then component}
    <svelte:component this={component} />
{/await}
{/if}