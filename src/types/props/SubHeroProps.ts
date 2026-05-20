import type {RefObject} from "react";

export type SubHeroProps = {
    title: string
    description: string
    firstActionButtonProps: {
        label: string
        path: string
    }
    secondActionButtonProps: {
        label: string
        path: string
    }
    targetAutoScrollRef: RefObject<HTMLDivElement | null>
}