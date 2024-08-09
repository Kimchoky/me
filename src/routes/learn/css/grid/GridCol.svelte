<script>
	let cellCount = 9;
	$: cells = new Array(cellCount).fill(0).map((v, i) => ({
		key: i,
        width: 0,
        height: 0,
	}));

    const classNames = [
        'grid-cols-[100px_1fr]',
        'grid-cols-[1fr_.5fr]',
    ];

    let gridColClass = classNames[0];

</script>

<h1>Interactive Grid CSS</h1>

<div>
	<div class="grid gap-1 {gridColClass}">
		{#each cells as cell, idx (cell.key)}
			<div class="border border-slate-500"
                bind:clientWidth={cell.width} bind:clientHeight={cell.height}
            >Cell #{cell.key} [{cell.width} x {cell.height}]</div>
		{/each}
	</div>
	<div class="flex items-center gap-2">
        {#each classNames as className, index}
        <label><input type="radio" name="radioGroup1" on:click={()=>{gridColClass = className}} value={className} checked={index === 0}>{className}</label>
        {/each}
    </div>
</div>
