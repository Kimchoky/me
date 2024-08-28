<script>
    
	import { onMount } from "svelte";
	import { iterate, randomInt } from "$lib/utils";
	import SongFrame from "./SongFrame.svelte";

    export let data;
    const SONGS_TOWARD_NUM = 5;
    const SONGS_BACKWARD_NUM = 5;

    /** @type { Array<SongData> }*/
    const wholeList = data.billboardHot100
    .map(songData => Object.assign({
        color: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
    }, songData))
    .sort((a, b) => a.this_week - b.this_week);

    /** @type { Array<{songData: SongData, dimensionData: DimensionData}> } */
    let visibleList;
    let progress = 0;
    let currentSong = wholeList[0];
    /** @type DOMRect */
    let stickyRect;
    let currPx = 0, topPx = 0, bottomPx = 0;

    const defaultDimensionData = {
        width: 12,
        height: 14,
        scale: 1,
        left: 0,
        bottom: 0,
        skewY: 15,
        rotateY: 60,
        sizeUnit: 'rem',
        posUnit: '%',
        zIndex: 20,
    }
    
    doAnimate();

    function doAnimate() {

        const index = Math.min(wholeList.length -1, wholeList.length - 1 - Math.floor(progress));
        currentSong = wholeList[index];
        
        const fromIndex = Math.max(0, index - SONGS_TOWARD_NUM);
        const toIndex = Math.min(wholeList.length - 1, index + SONGS_BACKWARD_NUM);

        visibleList = wholeList.slice(fromIndex, toIndex + 1).map((songData, i) => {
            // translate(-50%, -50%) skewY(15deg) rotateY(60deg);

            let { left, bottom, width, height, scale, skewY, rotateY, zIndex } = defaultDimensionData;
            
            zIndex = zIndex + (100 - i);
            scale = 0.7;

            if (fromIndex + i < index) {
                left = width + i * 5;
            }
            else if (fromIndex + i === index) {
                scale = 1.2;
                left = 50;
                bottom= 50;
                skewY = 0;
                rotateY = 0;
            }
            else if (fromIndex + i > index) {
                left = (100 - SONGS_BACKWARD_NUM * width) + (i * 5);
            }

            return {
                songData,
                dimensionData: Object.assign({}, defaultDimensionData, {
                    left, bottom,
                    width, height, scale,
                    skewY, rotateY,
                    zIndex,
                })
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

<div class="">
    <h2>Apple Music 100</h2>
    <p>Scroll animates song charts to flow. Implemented using sticky position.</p>
</div>

<div id="dv-container" class="relative h-[2000vh] bg-green-800">
    <div id="dv-sticky" class="sticky top-0 flex flex-col justify-between h-[100svh] overflow-hidden">

        {#each visibleList as item, index (item.songData.this_week)}
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




<div class="">
    <p>End of chart.</p>
</div>
