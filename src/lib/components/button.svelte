<script>
    // import { colors } from '$lib/types/sample';

    
    export let cssStyle = '';
    // export let color = 'primary';

    // console.log('color', color, colors.button[color][0]);

</script>


<div class="inline-block">
    <button
        type="button" 
        class="inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold shadow-sm  sm:ml-3 sm:w-auto
             text-white bg-red-600 hover:bg-red-500 hover:text-gray-50"
        style="color: {'white'};
               background-color: {'blue'};
            {cssStyle}">
    <slot />
    </button>
</div>



