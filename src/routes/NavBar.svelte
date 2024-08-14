<script>
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
    <ul class="rounded-lg p-4 {ulClasses[direction]}
               border 
              bg-[rgba(235,235,235,.8)] border-gray-300
              dark:bg-[rgba(30,30,30,.8)] dark:border-gray-500">
        {#each menuList as menu, idx (menu.href) }
        <li class="">
            <a href={menu.href} class="flex hover:!bg-pink-200 dark:hover:!bg-gray-500 ">
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