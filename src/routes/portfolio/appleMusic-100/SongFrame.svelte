<script>
    export let id;
    
    export let songData;
    export let dimensionData;

</script>

<div id={id}
    class="absolute transition-[left, bottom] duration-200 flex flex-col border border-slate-800" 
    style="background-color: {songData.color};
        z-index: {dimensionData.zIndex};
        transform: translate({dimensionData.translate}) skewY({dimensionData.skewY}) rotateY({dimensionData.rotateY}) scale({dimensionData.scale});
        top: {dimensionData.top}; left: {dimensionData.left};
        width: {dimensionData.width}; height: {dimensionData.height};
        {dimensionData.cssStyle} ">
    {#if songData.imageUrl}
    <img src={songData.imageUrl} alt={songData.song} />
    {:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
        <path fill="currentColor" stroke="currentColor" stroke-width=".2" d="M12 11a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m0 5.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5s-2 4.5-4.5 4.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
    </svg>
    {/if}
    <!-- <div class="p-2">
        <div class="overflow-hidden text-ellipsis whitespace-nowrap">{songData.song}</div>
        <div class="overflow-hidden text-ellipsis whitespace-nowrap">{songData.artist}</div>
    </div> -->

</div>