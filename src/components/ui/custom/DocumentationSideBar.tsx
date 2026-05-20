import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
    SidebarRail
} from "@/components/ui/sidebar.tsx";
import {FileText} from "lucide-react";
import getDocumentationContent from "@/constants/getDocumentationContent.ts";
import type {DocumentPageContent} from "@/types/DocumentPageContent.ts";
import type {DocumentationSideBarProps} from "@/types/props/DocumentationSideBarProps.ts";
import {Kbd, KbdGroup} from "@/components/ui/kbd.tsx";

const DocumentationSideBar = (
    {
        documentationReadableContentHookProps,
    }: DocumentationSideBarProps ) => {
    const documentationContent: DocumentPageContent[] = getDocumentationContent()

    return (
        <Sidebar className="mt-14 pb-20">
            <SidebarHeader className="pt-10">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-card text-foreground">
                                    <FileText className="size-4"/>
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="font-medium">Documentation</span>
                                    <span className="">v1.0.0</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                {documentationContent.map((documentPageContent) => (
                    <SidebarGroup key={documentPageContent.id}>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    onClick={() =>
                                        documentationReadableContentHookProps.setDocumentationReadableContent(
                                            {
                                                ...documentPageContent
                                            }
                                        )
                                    }
                                >
                                    <a href={"#"} className="font-medium">
                                        {documentPageContent.title}
                                    </a>
                                </SidebarMenuButton>
                                {documentPageContent.isDocumentSubPageContentRenderInSideBar ? (
                                    <SidebarMenuSub>
                                        {documentPageContent.subPages.map((documentPageContent) => (
                                            <SidebarMenuSubItem key={documentPageContent.id}>
                                                <SidebarMenuSubButton
                                                    asChild
                                                    onClick={() =>
                                                        documentationReadableContentHookProps.setDocumentationReadableContent(
                                                            {
                                                                ...documentPageContent
                                                            }
                                                        )
                                                    }
                                                >
                                                    <a href={"#"}>{documentPageContent.title}</a>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                ) : null}
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter className="pt-6 select-none">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="text-xs text-muted-foreground">
                            Press
                            <KbdGroup>
                                <Kbd>Ctrl</Kbd>
                                <span>+</span>
                                <Kbd>B</Kbd>
                            </KbdGroup>
                            to toggle sidebar
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

export default DocumentationSideBar