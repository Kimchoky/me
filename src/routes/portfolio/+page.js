export async function load() {

    /** @type { Array<import("$lib/types/app").PortfolioPageItem>} */
    const list = [
        { id: 'appleMusic-100', name: 'Sticky I', image: '/images/portfolio/apple-100.png', cssClass: 'text-white', href: './appleMusic-100' },
        { id: 'canvas-1', name: 'Background Canvas I', image: '/images/portfolio/snowy-canvas.png', cssClass: 'text-white', href: 'Canvas1' },
    ];

    return {
        list
    }
}