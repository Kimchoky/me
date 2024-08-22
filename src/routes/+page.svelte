<script>
	import { base } from "$app/paths";
	import SvgLoader from "$lib/components/SvgLoader.svelte";
	import GridTiles from "$lib/components/GridTiles.svelte";

    export let data;

    const { techs, customers, projects } = data;
    projects.forEach(p => {
        const c = customers.find(v => v.id === p.parentId);
        if (c && !p.image)
            p.image = c.image;
    })

</script>

<section
    class="_titleText pb-10 text-[3rem] md:text-[5rem] lg:text-[7rem]
        gradient-text bg-gradient-to-b
        from-red-400 via-purple-400 to-pink-500">
    <div>Web</div>
    <div>Development</div>
    <div>Expert</div>
</section>

<section
    class="">
    <article>
        <p>Here goes my personal info.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in enim sed justo viverra gravida sodales non erat. Sed consequat sem turpis, nec fringilla ex congue quis. Sed vel massa ullamcorper, aliquam lectus in, aliquam mi. Mauris finibus sed turpis nec tincidunt. Quisque in nisi nibh. Morbi finibus, arcu vitae ornare congue, libero purus blandit dolor, a mattis ex tellus at risus. Donec a euismod quam. Etiam dictum laoreet ornare. Duis sit amet facilisis felis. Aliquam nec luctus sem. Vestibulum facilisis, justo vel commodo interdum, tellus mauris imperdiet velit, quis molestie lectus velit quis ex. Fusce aliquet justo nec urna facilisis, ac finibus dui congue. Fusce ac erat sit amet augue porttitor facilisis quis ac nibh. In hac habitasse platea dictumst. Cras nec lobortis est. Curabitur elit neque, sodales nec diam eu, accumsan finibus dolor.</p>
    </article>
</section>



<section class="p-4">
    <div class="text-center text-[1.5rem] md:text-[2rem] lg:text-[3rem]">Techs</div>
    <div class="text-right"><button type="button" class="btn btn-sm variant-filled">See more</button></div>
    <hr class="text-slate-600 my-4">
    <GridTiles items={techs} />
</section>
    
<section class="p-4">
    <div class="text-center text-[1.5rem] md:text-[2rem] lg:text-[3rem]">Projects</div>
    <div class="text-right"><button type="button" class="btn btn-sm variant-filled">See more</button></div>
    <hr class="text-slate-600 my-4">
    <GridTiles items={projects} cssStyles={{}} />
   
</section>

<style>

    ._titleText {
        /* font-size: max(min(14vw, 8rem), 3rem); */
        line-height: 1em;
    }

    ._icon {
        display: flex;
        width: calc(100% - 5rem);
        height: 100%;
    }

    a:hover {
        transform: scale(1.2);
        transform-origin: center;
        transition-property: transform;
        transition-duration: .3s;
    }


    
</style>