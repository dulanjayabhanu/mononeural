import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import MainAnimateBackground from "@/components/ui/custom/MainAnimateBackground.tsx";
import {lazy, useEffect, useRef} from "react";
import Cta1 from "@/components/smoothui/custom/cta-1";
import {ContextMenu, ContextMenuTrigger} from "@/components/ui/context-menu.tsx";

export const MainContextMenuContent = lazy(() => import("@/components/ui/custom/MainContextMenuContent.tsx"))

const FileNotFoundPage = () => {

    const fileNotfoundPageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.title = "MonoNeural - Build, Train & Test Artificial Neurons Visually"
    }, [])
    return (
        <main className="w-full h-full flex flex-col relative">

            <ContextMenu>
                <ContextMenuTrigger>

                    <MainAnimateBackground />
                    <BackToTopFab />

                    <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10">
                        <section className="w-full grid grid-cols-1 gap-10">
                            <Cta1
                                title={"Page Not Found"}
                                description={"Looks like your neuron misfired and landed on a non-existent page. Let's recalibrate and get you back home."}
                                firstActionButtonProps={
                                    {
                                        label: "Take Me Home",
                                        path: "/",
                                    }
                                }
                                secondActionButtonProps={
                                    {
                                        label: "",
                                        path: ""
                                    }
                                }
                                targetAutoScrollRef={fileNotfoundPageRef}
                            />
                        </section>
                    </div>

                </ContextMenuTrigger>
                <MainContextMenuContent />
            </ContextMenu>

        </main>
    )
}

export default FileNotFoundPage