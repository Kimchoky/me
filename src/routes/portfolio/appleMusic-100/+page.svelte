<script>
    
	import { onMount } from "svelte";
	import { iterate, randomInt } from "$lib/utils";
	import SongFrame from "./SongFrame.svelte";

    export let data;

    const config = {
        height: 500, /*vh*/
        animations: [
            {
                id: 'item-x',
                animateType: 1,
            },
        ]
    }

    /** @type { Array<SongData> }*/
    const wholeList = data.billboardHot100.map(songData => 
        Object.assign({
            color: `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
        }, songData));

    /** @type { Array<{songData: SongData, dimensionData: DimensionData}> } */
    let visibleList = wholeList
    .filter(songData => songData.this_week >= wholeList.length - 1)
    .map((songData, i) => ({
        songData,
        dimensionData: {
            width: 10,
            height: 10,
            x: randomInt(0, 100),
            y: randomInt(0, 100),
            widthUnit: '%',
            heightUnit: '%',
            xUnit: '%',
            yUnit: '%',
        },
    }));
    

    let progress = 0;
    /** @type DOMRect */
    let stickyRect;
    let currPx = 0, topPx = 0, bottomPx = 0;

    function doAnimate() {

        /* TEMPORARY ANIMATE */
        visibleList = visibleList.map((d, index) => {
            d.dimensionData.x = randomInt(0, 100);
            d.dimensionData.y = randomInt(0, 100);
            return d;
        });
        
        config.animations.forEach(c => {
            const el = document.getElementById(c.id);
            if (!el) return;
            
            switch (c.animateType) {
                case 1: animateType1(el, c);
            }
        })
    }

    function animateType1(element, item) {
        let x = progress + '%';
        let y = progress / 2 + '%';
        element.style.transform = `translate(${x}, ${y})`;
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
            <h1 class="inline">Top {currPx} {progress}%</h1>
        </div>
        <div class="_slide-container text-center ">
            <div>topPx: {topPx}, bottomPx: {bottomPx}</div>
            <div id="item-0" class="_slide">
                <h1>동해물과</h1>
            </div>
            <div id="item-1" class="_slide">
                <h1>백두산이</h1>
            </div>
            <div id="item-2" class="_slide">
                <h1>마르고 닳도록</h1>
            </div>
        </div>
        <div class="text-right">
            <h1>{progress} Bottom</h1>
        </div>
    </div>
</div>




<div class="bg-blue-300">
    <p>Some stroy....</p>
</div>
