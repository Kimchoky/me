<script>
	import Button from "../lib/components/button.svelte";
	import { Avatar } from '@skeletonlabs/skeleton';
</script>


<div class="container mx-auto p-8 space-y-8">
    <div class="h1">
        <div>Web</div>
        <div>Development</div>
        <div>Expert</div>
    </div>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div>
        <Avatar src="https://i.pravatar.cc/" />
    </div>
	<section>
		<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
		<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
	</section>
</div>