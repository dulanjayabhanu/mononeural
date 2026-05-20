import type {DocumentElement} from "@/types/DocumentElement.ts";
import type {DocumentImage} from "@/types/DocumentImage.ts";

export type DocumentSectionContent = {
    id: string
    title: string
    description: string
    image: DocumentImage
    renderElement: DocumentElement
    content: string[]
}