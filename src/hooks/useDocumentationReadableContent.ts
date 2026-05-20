import type {DocumentPageContent} from "@/types/DocumentPageContent.ts";
import {useState} from "react";
import getDocumentationContent from "@/constants/getDocumentationContent.ts";

const useDocumentationReadableContent = () => {
    const documentationContent: DocumentPageContent[] = getDocumentationContent()
    const [ documentationReadableContent, setDocumentationReadableContent ] = useState<DocumentPageContent>(documentationContent[0])
    return {
        documentationReadableContent: documentationReadableContent,
        setDocumentationReadableContent: setDocumentationReadableContent
    }
}

export default useDocumentationReadableContent