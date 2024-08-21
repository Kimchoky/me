<script>
	import { page } from "$app/stores";

    const id = $page.params['id'];
</script>

<div>
    <div>
        <a href="javascript:history.back(-1);">👈 Go back</a>
    </div>
    <h1>{id}</h1>
</div>