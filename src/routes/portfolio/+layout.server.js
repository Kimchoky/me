export async function load() {

    /** @type { Array<import("$lib/types/app").PortfolioPageItem>} */
    const list = [
        { id: 'css-sticky-1', name: 'Sticky I', image: '/images/portfolio/apple-100.png', cssClass: 'text-white', component: 'Sticky1' },
        { id: 'canvas-1', name: 'Background Canvas I', image: '/images/portfolio/snowy-canvas.png', cssClass: 'w-[45%] text-white', component: 'Canvas1' },
    ];

    return {
        list
    }
}