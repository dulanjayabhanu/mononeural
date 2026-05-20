import type {DocumentSectionContent} from "@/types/DocumentSectionContent.ts";
import type {DocumentImage} from "@/types/DocumentImage.ts";

export type DocumentPageContent = {
    id: string
    title: string
    description: string
    image: DocumentImage
    isDocumentSubPageContentRenderInSideBar: boolean
    sections: DocumentSectionContent[]
    previousPageId: string
    nextPageId: string
    subPages: DocumentPageContent[]
}