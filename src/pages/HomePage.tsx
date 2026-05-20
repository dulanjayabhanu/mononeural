import NavBar from "@/components/ui/custom/NavBar.tsx";
import Header5 from "@/components/smoothui/header-5";
import Footer1 from "@/components/smoothui/footer-1";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import MainAnimateBackground from "@/components/ui/custom/MainAnimateBackground.tsx";
import {lazy, useEffect} from "react";
import {Toaster} from "@/components/ui/sonner.tsx";
import {ContextMenu, ContextMenuTrigger} from "@/components/ui/context-menu.tsx";
import BasicAccordion from "@/components/smoothui/custom/basic-accordion";
import type {FaqContent} from "@/types/FaqContent.ts";
import getFaqContent from "@/constants/getFaqContent.ts";

export const MainContextMenuContent = lazy(() => import("@/components/ui/custom/MainContextMenuContent.tsx"))

const HomePage = () => {
    const faqContent: FaqContent[] = getFaqContent()

    useEffect(() => {
        document.title = "MonoNeural - Build, Train & Test Artificial Neurons Visually"
    }, [])
    return (
        <main className="w-full h-full flex flex-col relative">

            <ContextMenu>
                <ContextMenuTrigger>

                    <MainAnimateBackground />
                    <NavBar />
                    <BackToTopFab />
                    <Toaster />

                    <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10 p-6">
                        <section className="w-full px-6 flex flex-row items-center gap-2">
                            <Header5 />
                        </section>
                        <section className="w-full max-w-4xl mx-auto px-0 md:px-6 pb-10 flex flex-col items-center gap-2">
                            <h2 className="scroll-m-20 pb-8 text-3xl font-semibold tracking-tight first:mt-0">
                                Frequently Asked Questions
                            </h2>
                            <BasicAccordion
                                allowMultiple={false}
                                defaultExpandedIds={[1]}
                                items={faqContent}
                            />
                        </section>
                    </div>

                    <Footer1 />

                </ContextMenuTrigger>
                <MainContextMenuContent />
            </ContextMenu>

        </main>
    )
}

export default HomePage