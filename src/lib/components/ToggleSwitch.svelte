<script>
	import { randomHexString } from "$lib/client/utils";
    import { fade } from 'svelte/transition';

    const inputId = randomHexString(6);
    const UNIT = 'rem';

    /** width(rem) of switch rail */
    export let width = 4;
    /** height(rem) of switch rail */
    export let height = 1;
    /** size(rem) of switch handle */
    export let size = 1.2; // size of (in)active handle
    export let checked = false;  // default: Light mode

    $: handleTop = Math.abs(height - size) / 2 * (height < size ? -1 : 1);
    $: handleRight = width - size;
    $: cssStyles = {
        width,
        height,
        size,
        handleTop,
        handleRight,
    }

    // dynamically write cssVar
    $: cssVarStyles = Object.entries(cssStyles)
        .map(([k, v]) => `--${k}:${v}${UNIT}`)
        .join(';');

</script>

<div class="contents" style={cssVarStyles}>
    <label class="rounded-full relative bg-slate-400"
        for={inputId}>
        <!-- invisible check element -->
        <input class="hidden"
            id={inputId} type="checkbox" aria-checked="{checked}" bind:checked on:change >
        <!-- Switch Handle -->
        <div class="_handle absolute rounded-full flex justify-center items-center cursor-pointer
                    bg-white shadow-[0_0_10px_rgba(100,100,0,.7)]
                    dark:bg-gray-700 dark:shadow-[0_0_10px_rgba(255,255,255,.7)]
                    {checked?'_checked':''}">
            <!-- Inner icons (transition bewteen inactive/active) -->    
            {#if !checked}
            <div class="_inactive flex" transition:fade={{ duration: 200 }}>
                <slot name="inactive" />
            </div>
            {:else}
            <div class="_active flex" transition:fade={{ duration: 200 }} >
                <slot name="active" />
            </div>
            {/if}
        </div>
    </label>
</div>

<style>
    label {
        width: var(--width);
        height: var(--height);
    }

    div._handle {
        width: var(--size);
        height: var(--size);
        top: var(--handleTop) ;
        transform:  translateX(0);
        transition: all 1s;
    }

    div._handle._checked {
        transform: translateX(var(--handleRight));
    }

    div._handle._checked ._inactive { display: none; }
    div._handle:not(._checked) ._active { display: none; }
</style>