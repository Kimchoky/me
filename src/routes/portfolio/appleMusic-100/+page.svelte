<script>
    
	import { onMount } from "svelte";
	import { iterate, randomInt } from "$lib/utils";
	import SongFrame from "./SongFrame.svelte";

    export let data;
    const SONGS_TOWARD_NUM = 3;
    const SONGS_BACKWARD_NUM = 3;

    /** @type { Array<SongData> }*/
    const wholeList = data.billboardHot100
    .map(songData => Object.assign({
        color: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
    }, songData))
    .sort((a, b) => a.this_week - b.this_week);

    let containerBg = '';
    /** @type { Array<{songData: SongData, dimensionData: DimensionData}> } */
    let visibleList;
    let progress = 0;
    let currentSong = wholeList[0];
    /** @type DOMRect */
    let stickyRect;
    let currPx = 0, topPx = 0, bottomPx = 0;

    const defaultDimensionData = {
        width: 16,
        height: 12,
        scale: 1,
        left: 0,
        top: 50,
        skewY: 12,
        rotateY: 50,
        sizeUnit: 'rem',
        posUnit: '%',
        zIndex: 20,
    }
    
    doAnimate();

    function doAnimate() {

        const index = Math.min(wholeList.length -1, wholeList.length - 1 - Math.floor(progress));
        if (index < 0) return;

        currentSong = wholeList[index];

        if (progress > 0) {
            containerBg = currentSong.color;
        }
        else
            containerBg = '';
        
        const fromIndex = Math.max(0, index - SONGS_TOWARD_NUM);
        const toIndex = Math.min(wholeList.length - 1, index + SONGS_BACKWARD_NUM);

        visibleList = wholeList.slice(fromIndex, toIndex + 1).map((songData, i) => {
            // translate(-50%, -50%) skewY(15deg) rotateY(60deg);

            let { left, top, width, height, scale, skewY, rotateY, zIndex } = defaultDimensionData;
            
            zIndex = zIndex + (100 - i);
            scale = 0.7;

            if (fromIndex + i < index) {
                left = -width + i * 5;
                top = 80 - (i * 1);
            }
            else if (fromIndex + i === index) {
                scale = 1.5;
                left = 50;
                top = 50;
            }
            else if (fromIndex + i > index) {
                left = 100 - width + (i * 5);
                top = 30 - (i * 1);
            }

            return {
                songData,
                dimensionData: Object.assign({}, defaultDimensionData, {
                    left, top,
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

<div class="space-y-4 py-4 px-4 lg:px-20">
    <h2>Apple Music 100</h2>
    <p>Scroll animates song charts to flow. Implemented using sticky position.</p>
</div>

<div id="dv-container" class="relative h-[2000vh] transition-colors" style="background-color: {containerBg}">
    <div id="dv-sticky" class="sticky top-0 flex flex-col justify-between h-[100svh] overflow-hidden">

        <div class="text-center p-12">
            <p class="goldText text-[5rem]">{currentSong.this_week}</p>
        </div>

        {#each visibleList as item, index (item.songData.this_week)}
            <SongFrame id="song-{index}" bind:songData={item.songData} bind:dimensionData={item.dimensionData} />
        {/each}

        <div class="text-right">
            <h1>{progress} Bottom</h1>
        </div>
    </div>
</div>




<div class="">
    <p>End of chart.</p>
</div>


<style>
    .goldText {
        --gold-one: rgba(211, 159, 90, 1);
        --gold-two: rgba(149, 107, 53, 1);
        --gold-three: rgba(172, 125, 69, 1);
        --shadow-line-thickness: .5px;
        --shadow-line-thickness-2: 1px;
        --shadow-line-thickness-3: .0005em;
        filter: drop-shadow(calc(var(--shadow-line-thickness-2)* -1) var(--shadow-line-thickness-2) 0 var(--gold-two)) drop-shadow(var(--shadow-line-thickness-2) 0 0 var(--gold-three));
        background: linear-gradient(45deg, #956732, #d69443, #f2b96e, #fcdd84, #f2b96e, #d69443, #956732, #ca9044, #f2b963);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>