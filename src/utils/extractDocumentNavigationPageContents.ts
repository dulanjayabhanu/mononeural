import getDocumentationContent from "@/constants/getDocumentationContent.ts";
import type {DocumentPageContent} from "@/types/DocumentPageContent.ts";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";

const extractDocumentNavigationPageContents = (
    previousPageId: string,
    nextPageId: string
): Record<"previousDocumentPageContent" | "nextDocumentPageContent", DocumentPageContent> => {

    const documentationContent = getDocumentationContent()
    const { documentationReadableContent: documentationReadableContentDefaultValue } = getHookDefaultValues()
    const filteredDocumentPageContent: Record<"previousDocumentPageContent" | "nextDocumentPageContent", DocumentPageContent> = {
        previousDocumentPageContent: documentationReadableContentDefaultValue,
        nextDocumentPageContent: documentationReadableContentDefaultValue,
    }

    const recursiveDocumentPageContentRead = (targetDocumentPageContent: DocumentPageContent) => {
        if (targetDocumentPageContent.id === previousPageId){
            filteredDocumentPageContent.previousDocumentPageContent = {
                ...targetDocumentPageContent
            }
            if (previousPageId !== documentationReadableContentDefaultValue.previousPageId &&
                nextPageId === documentationReadableContentDefaultValue.nextPageId)
                return
        }

        if (targetDocumentPageContent.id === nextPageId){
            filteredDocumentPageContent.nextDocumentPageContent = {
                ...targetDocumentPageContent
            }
            if (previousPageId == documentationReadableContentDefaultValue.previousPageId &&
                nextPageId !== documentationReadableContentDefaultValue.nextPageId)
                return
        }

        if (previousPageId !== documentationReadableContentDefaultValue.previousPageId &&
            nextPageId !== documentationReadableContentDefaultValue.nextPageId &&
            filteredDocumentPageContent.previousDocumentPageContent.id !== documentationReadableContentDefaultValue.nextPageId &&
            filteredDocumentPageContent.nextDocumentPageContent.id !== documentationReadableContentDefaultValue.nextPageId)
            return

        targetDocumentPageContent.subPages.forEach((documentPageContent) => {
            recursiveDocumentPageContentRead(documentPageContent)
        })
    }

    documentationContent.forEach((documentPageContent) => {
        recursiveDocumentPageContentRead(documentPageContent)
    })

    return filteredDocumentPageContent
}

export default extractDocumentNavigationPageContents