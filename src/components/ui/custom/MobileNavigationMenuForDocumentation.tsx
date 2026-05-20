import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {
    FileText,
} from "lucide-react";
import SmoothButton from "@/components/smoothui/smooth-button";
import type {
    MobileNavigationMenuForDocumentationProps
} from "@/types/props/MobileNavigationMenuForDocumentationProps.ts";
import getDocumentationContent from "@/constants/getDocumentationContent.ts";
import type {DocumentPageContent} from "@/types/DocumentPageContent.ts";

const MobileNavigationMenuForDocumentation = (
    {
        documentationReadableContentHookProps,
    }: MobileNavigationMenuForDocumentationProps ) => {
    const documentationContent: DocumentPageContent[] = getDocumentationContent()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SmoothButton
                    variant="default"
                    size="default"
                >
                    <FileText className="size-4"/>Documentation
                </SmoothButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-65 p-4 m-4 border" align="start">
                {documentationContent.map((documentPageContent) =>
                    documentPageContent.isDocumentSubPageContentRenderInSideBar ? (
                        <DropdownMenuGroup key={documentPageContent.id}>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger
                                    onClick={() =>
                                        documentationReadableContentHookProps.setDocumentationReadableContent(
                                            {
                                                ...documentPageContent
                                            }
                                        )
                                    }
                                >
                                    {documentPageContent.title}
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent className="p-2 border">
                                        {documentPageContent.subPages.map((documentSubPageContent) =>
                                            <DropdownMenuItem
                                                key={documentSubPageContent.id}
                                                onClick={() =>
                                                    documentationReadableContentHookProps.setDocumentationReadableContent(
                                                        {
                                                            ...documentSubPageContent
                                                        }
                                                    )
                                                }
                                            >
                                                {documentSubPageContent.title}
                                            </DropdownMenuItem>
                                        )}
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                        </DropdownMenuGroup>
                    ) : (
                        <DropdownMenuGroup
                            key={documentPageContent.id}
                            onClick={() =>
                                documentationReadableContentHookProps.setDocumentationReadableContent(
                                    {
                                        ...documentPageContent
                                    }
                                )
                            }
                        >
                            <DropdownMenuItem>
                                {documentPageContent.title}
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    )
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MobileNavigationMenuForDocumentation