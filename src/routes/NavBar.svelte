<script>
    /** @type {'row'|'col'}*/
    export let direction = "row";

    export let menuList;

</script>

<nav class="list-nav">
    {#if menuList}
    <ul class="">
        {#each menuList as menu, idx (menu.href) }
        <li>
            <a href={menu.href}>{menu.name}</a>
        </li>
        {/each}
    </ul>
    {/if}
</nav>