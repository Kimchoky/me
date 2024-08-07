<script>
    /** @type {'row'|'col'}*/
    export let direction = "row";

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
            <a href={menu.href}>{menu.name}</a>
        </li>
        {/each}
    </ul>
    {/if}
</nav>

<style>
    
</style>