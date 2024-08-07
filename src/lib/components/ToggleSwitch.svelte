<script>
	import { randomHexString } from "$lib/client/stringUtil";
	import { slide } from "svelte/transition";
    const inputId = randomHexString(6);
    const divId = randomHexString(6);

    export let width = '4rem';
    export let height = '1rem';
    export let checked = false;  // default: Light mode
    export let size = '1.2rem'; // size of (in)active handle

    $: cssStyles = {
        width,
        height,
        checked,
        size,
    }

    // dynamically write cssVar
    $: cssVarStyles = Object.entries(cssStyles)
        .map(([k, v]) => `--${k}:${v}`)
        .join(';');

</script>


<div class="inline-block" style={cssVarStyles}>
    <label class="border-purple-300 border rounded-full relative"
        for={inputId}>
        <input class="hidden"
            id={inputId} type="checkbox" aria-checked="{checked}" bind:checked on:change >
        <div class="_handle absolute rounded-full bg-white w-8 h-8 flex items-center {checked?'_checked':''}">
            <div class="absolute">
                <slot name="inactive" />
            </div>
            <div class="absolute hidden">
                <slot name="active" />
            </div>
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
        transform:  translateX(0);
        transition: all 1s;
    }

    div._handle._checked {
        transform: translate(calc(var(--width) - (var(--size) * 2)), var(--height));
    }
</style>