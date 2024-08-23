<script>
	import { browser } from "$app/environment";
	import { base } from "$app/paths";
	import { pickOne } from "$lib/utils";

    export let data;

    const { list } = data;

    const currentPath = browser ? location.href : '';

    const colorPool = [
        '#b8c3d3',
        '#cedabf',
        '#e1c1d0',
        '#efd1cd',
        '#fdecce',
    ]

</script>
<div class="h-full flex">
    <div class="flex justify-around items-center">
        {#each list as item}
        <div class="relative hover:scale-110 transition-transform 
            border-black dark:border-white
            {item.cssClass}"
            style="background-color: {pickOne(colorPool)}">

            
            <a href={currentPath}/{item.id}
                class="cursor-pointer block min-h-[20vh]">
                {#if item.image}
                <img src="{base}{item.image}" alt={item.name} 
                    class="w-full h-full object-cover">
                {/if}
            </a>
            

            <div class="absolute left-0 bottom-0 text-3xl p-2">
                {item.name}
            </div>

        </div>
        {/each}
    </div>
</div>