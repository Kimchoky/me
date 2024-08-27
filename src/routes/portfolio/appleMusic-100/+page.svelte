<script>
    
	import { onMount } from "svelte";
	import { iterate, randomInt } from "$lib/utils";
	import SongFrame from "./SongFrame.svelte";

    export let data;

    /** @type { Array<SongData> }*/
    const wholeList = data.billboardHot100
    .map(songData => Object.assign({
        color: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
    }, songData))
    .sort((a, b) => b.this_week - a.this_week);

    /** @type { Array<{songData: SongData, dimensionData: DimensionData}> } */
    let visibleList = wholeList
    .filter(songData => songData.this_week >= wholeList.length - 1)
    .map((songData, i) => ({
        songData,
        dimensionData: {
            width: 10,
            height: 10,
            x: 1 * i,
            y: 1 * i,
            widthUnit: '%',
            heightUnit: '%',
            xUnit: '%',
            yUnit: '%',
        },
    }));
    

    let progress = 0;
    let currentSong = wholeList[0];
    /** @type DOMRect */
    let stickyRect;
    let currPx = 0, topPx = 0, bottomPx = 0;

    function doAnimate() {

        const index = Math.min(Math.floor(progress), wholeList.length - 1);
        currentSong = wholeList[index];
        
        visibleList = wholeList.slice(index - 3, index + 3).map((songData, i) => {
            return {
                songData,
                dimensionData: {
                    x: i * 10,
                    y: i * 10,
                }
            };
        });
        
    }


    /** @param {Event} e */
    function handleScroll(e) {
        if (e.type !== 'scroll') return;

        currPx = window.scrollY;
        bottomPx = stickyRect.bottom - window.innerHeight;
        const percentage = Number(((currPx - topPx) / (bottomPx - topPx) * 100).toFixed(2));

        progress = Math.min(100, Math.max(0, percentage));

        doAnimate();

    }

    onMount(()=>{
        const containerEl = document.getElementById('dv-container');
        if (containerEl) {
            window.scrollTo(0, 0);
            stickyRect = containerEl.getBoundingClientRect();
            topPx = stickyRect.top;
        }
    });

</script>

<svelte:window on:scroll={handleScroll} />

<div class="bg-blue-300">
    <p>Some stroy....</p>
</div>

<div id="dv-container" class="relative h-[2000vh] bg-green-800">
    <div id="dv-sticky" class="sticky top-0 flex flex-col justify-between h-[100svh] overflow-hidden">

        {#each visibleList as item, index}
            <SongFrame id="song-{index}" bind:songData={item.songData} bind:dimensionData={item.dimensionData} />
        {/each}

        <div class="text-left">
            <h1 class="inline">progress: {progress}%</h1>
        </div>
        <div class="_slide-container text-center ">
            <div>Rank: {currentSong.this_week}</div>
        </div>
        <div class="text-right">
            <h1>{progress} Bottom</h1>
        </div>
    </div>
</div>




<div class="bg-blue-300">
    <p>Some stroy....</p>
</div>
