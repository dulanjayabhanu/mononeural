import type {DocumentPageContent} from "@/types/DocumentPageContent.ts";
import type {Dispatch, SetStateAction} from "react";

export type MobileNavigationMenuForDocumentationProps = {
    documentationReadableContentHookProps: {
        documentationReadableContent: DocumentPageContent
        setDocumentationReadableContent:  Dispatch<SetStateAction<DocumentPageContent>>
    }
}