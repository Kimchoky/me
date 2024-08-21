<script>
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

    export let url;

    const ERROR_SVG = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linecap="round">
            <circle cx="12" cy="12" r="10" stroke-width="2" />
            <path stroke-width="2" d="M7.881 16.244c.493-.427 1.142-.735 1.842-.937A8.3 8.3 0 0 1 12 15c.786 0 1.57.103 2.277.307c.7.202 1.35.51 1.842.937" />
            <circle cx="9" cy="10" r="1.25" fill="currentColor" stroke-width="0.5" />
            <circle cx="15" cy="10" r="1.25" fill="currentColor" stroke-width="0.5" />
        </g>
    </svg>`;
    

	/** @param url {string} */
	export async function getSvg(url) {
		if (!browser) return;

		if (url.startsWith('/')) url = location.origin + base + url;

		if (url.endsWith('.svg')) url = url + '?raw';

		return fetch(url)
        .then((res) => {
            console.log('SvgLoader', res);
            if (res.ok)
                return res.text();
            else
                return ERROR_SVG;
        });
	}
</script>

{#await getSvg(url)}
    <div class="relative w-full h-full">
        <div class="_gra absolute w-[calc(100%-1rem)] h-[calc(100%-1rem)] translate-x-2"><!-- show this while loading --></div>
    </div>
{:then svg}
    {@html svg}
{/await}

<style>
	:root {
		--overlay-color-1: #8f8f8f;
		--overlay-color-2: #4d4d4d;
		--anim-duration: 1s;
	}

    ._gra:after,
	._gra:before {
		content: '';
		display: block;
		position: absolute;
        border-radius: .5rem;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	._gra:before {
		background: linear-gradient(135deg, var(--overlay-color-2) 0%, var(--overlay-color-1) 100%);
		animation: OpacityAnim var(--anim-duration) ease-in-out 0s infinite alternate;
	}
	._gra:after {
		background: linear-gradient(135deg, var(--overlay-color-1) 0%, var(--overlay-color-2) 100%);
		animation: OpacityAnim var(--anim-duration) ease-in-out calc(-1 * var(--anim-duration)) infinite alternate;
	}

	@keyframes OpacityAnim {
		0%   { opacity: 1; }
		100% { opacity: 0; }
	}
</style>
