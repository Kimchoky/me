    /** @type { Array<{name:string, level:1|2|3, href?:string, icon?:string|null, image?:string|null, svg?: string|null }> }*/
    const techs = [
        { name: 'Java/JSP', level: 3, href: 'https://www.java.com', icon: 'logos:java' },
        { name: 'Javascript', level: 3, href: 'https://developer.mozilla.org/ko/docs/Web/JavaScript', icon: 'logos:javascript' },
        { name: 'Spring', level: 3, href: 'https://www.java.com', icon: 'devicon:spring' },
        { name: 'SvelteKit', level: 2, href: 'https://kit.svelte.dev', icon: 'logos:svelte-icon' },
        { name: 'Vite', level: 1, href: 'https://ko.vitejs.dev/', icon: 'logos:vitejs' },
        { name: 'Node.js', level: 2, href: 'https://nodejs.org', icon: 'logos:nodejs-icon' },
        { name: 'jQuery', level: 3, href: 'https://jquery.com/', icon: 'mdi:jquery' },
        { name: 'Tailwind', level: 2, href: 'https://tailwindcss.com', icon: 'logos:tailwindcss-icon' },
        { name: 'D3.js', level: 2, href: 'https://d3js.org/', icon: 'logos:d3' },
        // { name: 'Iconify', href: 'https://icon-sets.iconify.design', icon: 'line-md:iconify1' },
        // { name: 'NPM', href: 'https://www.npmjs.com/', icon: 'logos:npm-icon' },
    ]

    /** @type { Array<{name:string, customer: string, href?:string, icon?:string|null, image?:string|null, svg?: string|null }> }*/
    const projects = [
        { name: '후견등기정보시스템', customer: '대법원' },
        { name: '전자후견등기시스템', customer: '대법원', href: 'https://egdrs.scourt.go.kr' }
    ]

    export function load() {
        return {
            techs,
            projects,
        }
    }