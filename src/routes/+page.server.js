    /** @type { Array<{name:string, href:string, icon?:string|null, image?:string|null, svg?: string|null }> }*/
    const techs = [
        { name: 'Java', href: 'https://www.java.com', icon: 'logos:java' },
        { name: 'Spring', href: 'https://www.java.com', icon: 'devicon:spring' },
        { name: 'Javascript', href: 'https://developer.mozilla.org/ko/docs/Web/JavaScript', icon: 'logos:javascript' },
        { name: 'jQuery', href: 'https://jquery.com/', icon: 'mdi:jquery' },
        { name: 'SvelteKit', href: 'https://kit.svelte.dev', icon: 'logos:svelte-icon' },
        { name: 'Node.js', href: 'https://nodejs.org', icon: 'logos:nodejs-icon' },
        { name: 'Tailwind', href: 'https://tailwindcss.com', icon: 'logos:tailwindcss-icon' },
        { name: 'SkeletonUI', href: 'https://www.skeleton.dev', svg: '/images/skeletonUi.svg' },
        { name: 'Iconify', href: 'https://icon-sets.iconify.design', icon: 'line-md:iconify1' },
        { name: 'NPM', href: 'https://www.npmjs.com/', icon: 'logos:npm-icon' },
        { name: '', href: '', icon: '' },
        { name: '', href: '', icon: '' },
    ]

    /** @type { Array<{name:string, href:string, icon?:string|null, image?:string|null, svg?: string|null }> }*/
    const projects = [

    ]

    export function load() {
        return {
            techs,
            projects,
        }
    }