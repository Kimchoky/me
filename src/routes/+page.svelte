<script>
	import { base } from "$app/paths";

    import SvgSkeletonUi from '../../static/images/skeletonUi.svg';

    /** @type { Array<{name:string, href:string, icon?:string|null, image?:string|null, svg?: string|null }> }*/
    const techs = [
        { name: 'Javscript', href: 'https://developer.mozilla.org/ko/docs/Web/JavaScript', icon: 'logos:javascript' },
        { name: 'SvelteKit', href: 'https://kit.svelte.dev', icon: 'logos:svelte-icon' },
        { name: 'Node.js', href: 'https://nodejs.org', icon: 'logos:nodejs-icon' },
        { name: 'Tailwind', href: 'https://tailwindcss.com', icon: 'logos:tailwindcss-icon' },
        { name: 'SkeletonUI', href: 'https://www.skeleton.dev', svg: SvgSkeletonUi },
        { name: 'Iconify', href: 'https://icon-sets.iconify.design', icon: 'line-md:iconify1' } ,
        { name: 'NPM', href: 'https://www.npmjs.com/', icon: 'logos:npm-icon' } ,
    ]

    /** @param tech { {name:string, href:string, icon?:string|null, image?:string|null, svg?: string|null } } */
    function handleMouseOver(tech) {

    }

</script>

<section>
    <div class="_titleText pb-10
        gradient-text bg-gradient-to-b
        from-red-400 via-purple-400 to-pink-500">
        <div>Web</div>
        <div>Development</div>
        <div>Expert</div>
    </div>
</section>

<section>
    <article>
        Lorem Ipsum...
    </article>
</section>

<section class="p-4">
    <div class="text-center text-[2rem] md:text-[3rem]">Tech/Library/Framework</div>
    <hr class="text-slate-600 my-4">
    <div class="logo-cloud grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 gap-4">
        {#each techs as tech}
        <a href={tech.href} class="logo-item flex justify-center items-center">
            <div class="_tech">
                {#if tech.icon}
                <iconify-icon icon={tech.icon} width="7svw"/>
                {:else if tech.image}
                <img src={base}{tech.image} alt={tech.name} />
                {:else if tech.svg}
                <svelte:component this={tech.svg} />
                {/if}
                <!-- <div class="pt-4">{tech.name}</div> -->
            </div>
        </a>    
        {/each}
    </div>
</section>
    
<section>
    <h1 class="text-center">Projects</h1>
</section>

<style>
    ._titleText {
        font-size: max(min(14vw, 8rem), 3rem);
        line-height: 1em;
    }

    a:hover {
        transform: scale(1.2);
        transform-origin: center;
        transition-property: transform;
        transition-duration: .3s;
    }


    
</style>