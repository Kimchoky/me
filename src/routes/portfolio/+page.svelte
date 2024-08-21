<script>
	import { browser } from "$app/environment";

    const list = [
        { category: 'css', id: 'css-sticky-0', name: 'Sticky' },
        { category: 'd3', id: 'd3-physics-0', name: 'Physics' },
    ];

    const currentPath = browser ? location.href : '';
</script>

<div class="grid grid-flow-col gap-4">
    {#each list as item}
        <a class="border shadow-md bg-slate-300 hover:scale-105 transition-transform cursor-pointer"
            href={currentPath}/{item.id}>
            <div>
                {item.category}
            </div>
            <div>
                {item.name}
            </div>
        </a>
    {/each}
</div>