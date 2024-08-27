<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';

    const id = $page.params['id'];
    // const currentData = list.find(v => v.id === id);
    
    export let data;

</script>

<div class="top-0">
	<a href="{base}/portfolio">👈 Go back</a>
	<!-- <h1>{currentData?.name}</h1> -->
</div>

<slot />
