<script>
	import SnakeGame from "$lib/components/SnakeGame.svelte";

    let showSnake = false;
</script>


<div class="flex flex-col justify-center items-center h-full min-h-[500px] gap-3">
    
    <div class="">
        <h1 class="gradient-heading 
            from-pink-500 to-violet-500">
            Error</h1>
        <h3 class="gradient-heading
            from-red-500 to-yellow-500">
            404: Page not found.</h3>
    </div>

    <div>
        <span>Play snake game!</span>
        <button >Play</button>
    </div>
    
    {#if showSnake}
    <SnakeGame />
    {/if
    }
</div>