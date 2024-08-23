    /** @type { Array<import('$lib/types/app').GridTilesItem> }*/
    const techs = [
        { id: 'Java/JSP', name: 'Java/JSP', stars: 3, href: 'https://www.java.com', icon: 'logos:java' },
        { id: 'Javascript', name: 'Javascript', stars: 3, href: 'https://developer.mozilla.org/ko/docs/Web/JavaScript', icon: 'logos:javascript' },
        { id: 'Spring', name: 'Spring', stars: 3, href: 'https://www.java.com', icon: 'devicon:spring' },
        { id: 'SvelteKit', name: 'SvelteKit', stars: 2, href: 'https://kit.svelte.dev', icon: 'logos:svelte-icon' },
        { id: 'Vite', name: 'Vite', stars: 1, href: 'https://ko.vitejs.dev/', icon: 'logos:vitejs' },
        { id: 'Node.js', name: 'Node.js', stars: 2, href: 'https://nodejs.org', icon: 'logos:nodejs-icon' },
        { id: 'jQuery', name: 'jQuery', stars: 3, href: 'https://jquery.com/', icon: 'mdi:jquery' },
        { id: 'Tailwind', name: 'Tailwind', stars: 2, href: 'https://tailwindcss.com', icon: 'logos:tailwindcss-icon' },
        { id: 'D3.js', name: 'D3.js', stars: 2, href: 'https://d3js.org/', icon: 'logos:d3' },
        // { name: 'Iconify', href: 'https://icon-sets.iconify.design', icon: 'line-md:iconify1' },
        // { name: 'NPM', href: 'https://www.npmjs.com/', icon: 'logos:npm-icon' },
    ]

    const customers = [
        { name: '대법원', id: 'scourt', image: '/images/ci-scourt.png', },
        { name: '예금보험공사', id: 'kdic', image: '/images/ci-kdic.png', },
        { id: 'ebs', name: 'EBS', image: '/images/ci-ebs.png', },
    ]

    /** @type { Array<import('$lib/types/app').GridTilesItem> }*/
    const projects = [
        { id:'gdrs', name: '후견등기정보시스템', parentId: 'scourt', year: 2024 },
        { id:'egdrs', name: '전자후견등기시스템', parentId: 'scourt', year:2024, href: 'https://egdrs.scourt.go.kr',  },
        { id:'tgm', name: 'The GreatMinds', parentId: 'ebs', year: 2022, href: 'https://www.thegreatminds.com/',  },
        { id:'kdic', name: '차세대 시스템 고도화', parentId: 'kdic', year: 2023, },
    ]

    export function load() {
        return {
            techs,
            customers,
            projects,
        }
    }