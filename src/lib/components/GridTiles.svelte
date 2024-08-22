<script>
	import { base } from "$app/paths";
	import { iterate } from "$lib/utils";
	import SvgLoader from "./SvgLoader.svelte";

    /** @type { Array<import('$lib/types/app').GridTilesItem> } */
    export let items;

    /** @type { { [key:string]: string|number } } */
    export let cssStyles = {};

    const cssVarStyles = Object.entries(cssStyles)
        .map(([k, v]) => `--${k}:${v}`)
        .join(';');

    /** @param {number} level */
    function getTechLevelText(level) {
        switch(level) {
            default: return 'No skills';
            case 1: return 'Novice';
            case 2: return 'Intermeidate';
            case 3: return 'Expert';
        }
    }
</script>

<div class="grid gap-3 justify-around
    grid-cols-[repeat(2,minmax(10rem,0.5fr))] gap-x-10 
    sm:grid-cols-3 
    md:!grid-cols-4 
    lg:!grid-cols-5 lg:gap-x-5"
    style={cssVarStyles}>

    {#each items as item}
    {#if item.name}
    <div class="flex flex-col justify-stretch items-center content-center p-2 relative
        hover:scale-105 transition-transform
        border bg-opacity-30 
        border-slate-400 bg-slate-300 
        dark:border-slate-600 dark:bg-slate-700">
        
        <div class="_icon flex flex-grow items-center justify-center p-4">
            {#if item.icon}
            <iconify-icon icon={item.icon} width="7vw"/>
            {:else if item.image}
            <img src={base}{item.image} alt={item.name} />
            {:else if item.svg}
            <SvgLoader url={item.svg} />
            {/if}
        </div>

        <a class="!m-0 cursor-pointer" href={item.href}>{item.name}</a>

        {#if item.stars}
        <div class="absolute right-0 top-0 flex" data-toolip={getTechLevelText(item.stars)}>
            {#each iterate(1, item.maxStars ?? 3) as step }
            <svg xmlns="http://www.w3.org/2000/svg" width=".8rem" height=".8rem" viewBox="0 0 16 16">
                <path class="_star {step <= item.stars ? '_fill' : '_empty'}" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            {/each}
        </div>
        {/if}
    </div> 
    {/if}   
    {/each}
</div>


<style>
    ._star { stroke: #9b9b9b; }
    ._star._fill { fill: #ebcb16; }
    ._star._empty { fill: none; }
    [data-toolip]::before {
        position: absolute;
        top: -1.2rem;
        right: 0;
        content: attr(data-toolip);
        opacity: 0;
        background-color: lightyellow;
        font-size: .8rem;
        color: #373737;
        padding: 0 .5em;
    }
    [data-toolip]:hover::before {
        opacity: 1;
    }
</style>