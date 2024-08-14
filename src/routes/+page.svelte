<script>
	import { base } from "$app/paths";
    
    export let data;

    const { techs, projects } = data;

    /** @param tech { {name:string, href:string, icon?:string|null, image?:string|null, svg?: string|null } } */
    function handleMouseOver(tech) {

    }

    /** @param {string} path */
    async function getSvg(path) {
        return fetch(`${base}${path}?raw`);
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
    <div class="logo-cloud grid-cols-3 md:!grid-cols-4 lg:!grid-cols-5 gap-4">
        {#each techs as tech}
        {#if tech.name}
        <a href={tech.href} class="logo-item flex flex-col justify-center items-center">
            <div class="_tech">
                {#if tech.icon}
                <iconify-icon icon={tech.icon} width="7vw"/>
                {:else if tech.image}
                <img src={base}{tech.image} alt={tech.name} />
                {:else if tech.svg}
                    {#await getSvg(tech.svg)}
                        <div>Loading...</div>
                    {:then res}    
                        {#await res.text() then svg}
                            {@html svg}    
                        {/await}
                    {/await}
                {/if}
            </div>
            <div class="text-xs !m-0 pt-1">{tech.name}</div>
        </a> 
        {/if}   
        {/each}
    </div>
</section>
    
<section class="p-4">
    <div class="text-center text-[1.5rem] md:text-[2rem] lg:text-[3rem]">Projects</div>
    <div class="text-right"><button type="button" class="btn btn-sm variant-filled">See more</button></div>
    <hr class="text-slate-600 my-4">
    <div class="logo-cloud grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 gap-4">
        {#each techs as tech}
        {#if !!tech.name}
        <a href={tech.href} class="logo-item flex justify-center items-center">
            <div class="_tech">
                {#if tech.icon}
                <iconify-icon icon={tech.icon} width="7svw"/>
                {:else if tech.image}
                <img src={base}{tech.image} alt={tech.name} />
                {/if}
                <!-- <div class="pt-4">{tech.name}</div> -->
            </div>
        </a>    
        {/if}
        {/each}
    </div>
</section>

<style>

    ._titleText {
        /* font-size: max(min(14vw, 8rem), 3rem); */
        line-height: 1em;
    }

    a:hover {
        transform: scale(1.2);
        transform-origin: center;
        transition-property: transform;
        transition-duration: .3s;
    }


    
</style>