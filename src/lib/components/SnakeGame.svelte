<script>
    const typeInput = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
    
    const pixelSize = 1;
    const pixelUnit = 'rem';

    let input = typeInput[0];
    function handleKeydown(e) {
        if (typeInput.includes(e.key))
            input = e.key;
    }

    let apples = 0;

    let matrix;



</script>

<svelte:window on:keydown={handleKeydown} />

<div class="flex flex-col w-full">
    <div class="h-auto bg-white w-full min-w-[500px] min-h-[500px]">
        <div class="border absolute w-30">
            <h4>apples: {apples}</h4>
            <p>Your input : {input}</p>
        </div>
    </div>
</div>