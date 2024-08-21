<script>
	import { base } from "$app/paths";
	import { iterate } from "$lib/utils";
	import SvgLoader from "$lib/components/SvgLoader.svelte";
    import { Popover, Button, Avatar } from 'flowbite-svelte';

    export let data;

    const { techs, projects } = data;

    let preview = {
        href: '',
        timer: -1
    };

    /** @param {number} level */
    function getTechLevelText(level) {
        switch(level) {
            default: return 'No skills';
            case 1: return 'Novice';
            case 2: return 'Intermeidate';
            case 3: return 'Expert';
        }
    }

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
    <div class="grid gap-3 justify-around
        grid-cols-[repeat(2,minmax(10rem,0.5fr))] gap-x-10 
        sm:grid-cols-3 
        md:!grid-cols-4 
        lg:!grid-cols-5 lg:gap-x-5">
        {#each techs as tech}
        {#if tech.name}
        <div class="flex flex-col justify-center items-center content-center p-2
            border bg-opacity-30 relative
            border-slate-400 bg-slate-300 
            dark:border-slate-600 dark:bg-slate-700 ">
            <div class="_icon flex items-center justify-center p-4">
                {#if tech.icon}
                <iconify-icon icon={tech.icon} width="7vw"/>
                {:else if tech.image}
                <img src={base}{tech.image} alt={tech.name} />
                {:else if tech.svg}
                <SvgLoader url={tech.svg} />
                {/if}
            </div>
            <a class="-a-popover text-xs !m-0 cursor-pointer" href={tech.href}>{tech.name}</a>
            <div class="absolute right-0 top-0 flex" data-toolip={getTechLevelText(tech.level)}>
                {#each iterate(1, 3) as step }
                <svg xmlns="http://www.w3.org/2000/svg" width=".8rem" height=".8rem" viewBox="0 0 16 16">
                    <path class="_star {step <= tech.level ? '_fill' : '_empty'}" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                {/each}
            </div>
        </div> 
        {/if}   
        {/each}
    </div>
</section>
    
<section class="p-4">
    <div class="text-center text-[1.5rem] md:text-[2rem] lg:text-[3rem]">Projects</div>
    <div class="text-right"><button type="button" class="btn btn-sm variant-filled">See more</button></div>
    <hr class="text-slate-600 my-4">
    <div class="logo-cloud grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 gap-4">
        {#each projects as project}
        {#if !!project.name}
        <div class="logo-item flex flex-col justify-center items-center">
            <div class="_icon">
                {#if project.icon}
                <iconify-icon icon={project.icon} width="7svw"/>
                {:else if project.image}
                <img src={base}{project.image} alt={project.name} />
                {/if}
            </div>
            <div class="pt-4">{project.name}</div>
        </div>    
        {/if}
        {/each}
    </div>
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

    ._star { stroke: #9b9b9b; }
    ._star._fill { fill: #ebcb16; }
    ._star._empty { fill: none; }
    [data-toolip]::before {
        position: absolute;
        top: -1.2rem;
        right: 0;
        content: attr(data-toolip);
        opacity: 0;
        background-color: lightyellow;
        font-size: .8rem;
        color: #373737;
        padding: 0 .5em;
    }
    [data-toolip]:hover::before {
        opacity: 1;
    }
    
</style>