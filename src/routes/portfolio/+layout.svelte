<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { getParentRoute } from '$lib/utils.js';

	$: parentRoute = getParentRoute($page.route.id);
    
    export let data;

</script>

<div class="top-0">
	<a href="{base}{parentRoute}">👈 Go back</a>
</div>

<slot />
