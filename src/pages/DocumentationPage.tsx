import NavBar from "@/components/ui/custom/NavBar.tsx";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";
import DocumentationSideBar from "@/components/ui/custom/DocumentationSideBar.tsx";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";
import MainAnimateBackground from "@/components/ui/custom/MainAnimateBackground.tsx";
import useDocumentationReadableContent from "@/hooks/useDocumentationReadableContent.ts";
import DocumentationReadableContent from "@/components/ui/custom/DocumentationReadableContent.tsx";
import {ContextMenu, ContextMenuTrigger} from "@/components/ui/context-menu.tsx";
import {lazy, useEffect} from "react";

export const MainContextMenuContent = lazy(() => import("@/components/ui/custom/MainContextMenuContent.tsx"))

const DocumentationPage = () => {
    const { documentationReadableContent, setDocumentationReadableContent } = useDocumentationReadableContent()

    useEffect(() => {
        document.title = "Documentation - MonoNeural"
    }, [])

    return (
        <main className="w-full h-screen flex flex-col justify-start relative">

            <ContextMenu>
                <ContextMenuTrigger>

                    <MainAnimateBackground />
                    <NavBar />
                    <BackToTopFab />
                    <Toaster />

                    <SidebarProvider>
                        <DocumentationSideBar
                            documentationReadableContentHookProps={
                                {
                                    documentationReadableContent: documentationReadableContent,
                                    setDocumentationReadableContent: setDocumentationReadableContent
                                }
                            }
                        />
                        <div className="w-full relative max-w-7xl mx-auto flex flex-col items-start 2xl:items-center gap-10 px-2 pt-16 pb-6 z-10">
                            <SidebarTrigger className="fixed z-20 opacity-0 md:opacity-100 2xl:opacity-0" />
                            <DocumentationReadableContent
                                documentationReadableContentHookProps={
                                    {
                                        documentationReadableContent: documentationReadableContent,
                                        setDocumentationReadableContent: setDocumentationReadableContent
                                    }
                                }
                            />
                        </div>
                    </SidebarProvider>

                </ContextMenuTrigger>
                <MainContextMenuContent />
            </ContextMenu>

        </main>
    )
}

export default DocumentationPage