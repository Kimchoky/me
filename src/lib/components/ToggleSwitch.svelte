<script>
	import { randomHexString } from "$lib/client/stringUtil";
	import { slide } from "svelte/transition";
    const inputId = randomHexString(6);
    const divId = randomHexString(6);

    export let width = '4rem';
    export let height = '1rem';
    export let checked = false;  // default: Light mode

    $: cssStyles = {
        width,
        height,
        checked,
    }

    // dynamically write cssVar
    $: cssVarStyles = Object.entries(cssStyles)
        .map(([k, v]) => `--${k}:${v}`)
        .join(';');

</script>


<div class="inline-block" style={cssVarStyles}>
    <label class="_label h-8 border-purple-300 border rounded-full relative"
        style="width: {width};"
        for={inputId}>
        <input class="hidden"
            id={inputId} type="checkbox" aria-checked="{checked}" bind:checked on:change >
        <div class="id--handle absolute {checked?'checked':''}">
            <div class="_absolute">
                <slot name="inactive" />
            </div>
            <div class="absolute hidden">
                <slot name="active" />
            </div>
        </div>
    </label>
</div>

<style>
    div.id--handle {
        transform:  translateX(0);
        transition: all 1s;
    }
    div.id--handle.checked {
        transform: translateX(var(--width));
    }
</style>