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

<div class="space-y-4 py-4 px-4 lg:px-20">

    <div class="grid grid-flow-row-dense justify-around items-center
            gap-2 md:gap-6 lg:gap-10
            grid-cols-1 md:grid-cols-2">

        {#each list as item}
        <div class="relative hover:scale-110 transition-transform 
            border-black dark:border-white
            {item.cssClass}"
            style="background-color: {pickOne(colorPool)}">

            
            <a href={currentPath}/{item.id}
                class="cursor-pointer block ">
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