<script>
	// import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    // import * as Icons from '@fortawesome/free-solid-svg-icons';
	import { SvelteComponent } from "svelte";
	// import { library } from "@fortawesome/fontawesome-svg-core";

    /** @type {'row'|'col'}*/
    export let direction = "row";

    /** @type { Array<import('$lib/types/app.d.ts').MenuItem> } */
    export let menuList;


    const ulClasses = {
        row: 'flex p-0 ',
        col: 'flex p-0 flex-col',
    }
    
</script>

<nav class="list-nav">
    {#if menuList}
    <ul class={ulClasses[direction]}>
        {#each menuList as menu, idx (menu.href) }
        <li>
            <a href={menu.href} class="flex">
                <div class="flex">
                    {#if menu.icon}
                    <iconify-icon icon={menu.icon} width="1.5em"/>
                    {/if}
                </div>
                <div class="flex">
                    <span>{menu.name}</span>
                </div>
            </a>
        </li>
        {/each}
    </ul>
    {/if}
</nav>

<style>
    
</style>