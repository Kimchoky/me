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