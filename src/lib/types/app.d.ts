import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface Sample {
    name: string,
    age: number,
    nickname?: string,
}

export interface MenuItem {
    href: string,
    name: string,
    icon?: string,
}


export interface GridTilesItem {
    id: string,
    parentId?: string,
    name: string,
    year?: number,  /* participated in year */
    icon?: string,  /* iconify-icon id */   
    image?: string, /* url of an image(png, jpg, gif, ...) */
    svg?: string,   /*  */
    href?: string,  /* url to link */
    stars?: number, /* number of stars */
    maxStars?: number, /* maximum number of stars */
}

export interface PortfolioPageItem {
    id: string, 
    name: string,
    href: string,
    image?: string,
    cssClass?: string,
}