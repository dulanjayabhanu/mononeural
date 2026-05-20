import type {DocumentElement} from "@/types/DocumentElement.ts";

const getDocumentElements = (): Record<string, DocumentElement> => {
    return {
        h1: "h1",
        h3: "h3",
        p: "p",
        list: "list",
        fragment: "Fragment",
    }
}
export default getDocumentElements