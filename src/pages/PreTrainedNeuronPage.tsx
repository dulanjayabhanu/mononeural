import MainAnimateBackground from "@/components/ui/custom/MainAnimateBackground.tsx";
import NavBar from "@/components/ui/custom/NavBar.tsx";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";
import Cta1 from "@/components/smoothui/custom/cta-1";
import Footer1 from "@/components/smoothui/footer-1";
import {lazy, useEffect, useRef} from "react";
import PreTrainedNeuronExampleCard from "@/components/ui/custom/PreTrainedNeuronExampleCard.tsx";
import usePreTrainedNeuronExampleInternalData from "@/hooks/usePreTrainedNeuronExampleInternalData.ts";
import getPreTrainedNeuronExampleInternalData from "@/constants/getPreTrainedNeuronExampleInternalData.ts";
import {ContextMenu, ContextMenuTrigger} from "@/components/ui/context-menu.tsx";

export const MainContextMenuContent = lazy(() => import("@/components/ui/custom/MainContextMenuContent.tsx"))

const PreTrainedNeuronPage = () => {
    const { preTrainedNeuronExampleInternalData, setPreTrainedNeuronExampleInternalData } = usePreTrainedNeuronExampleInternalData()

    const preTrainedNeuronRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const preTrainedNeuronExampleInternalData = getPreTrainedNeuronExampleInternalData()
        setPreTrainedNeuronExampleInternalData(preTrainedNeuronExampleInternalData)
    }, [])

    useEffect(() => {
        document.title = "Pre-Trained Neuron Examples - MonoNeural"
    }, [])

    return (
        <main className="w-full h-full flex flex-col gap-10 relative">

            <ContextMenu>
                <ContextMenuTrigger>

                    <MainAnimateBackground />
                    <NavBar />
                    <BackToTopFab />
                    <Toaster />

                    <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10 px-6 pb-6">

                        <section className="w-full grid grid-cols-1 gap-10">
                            <Cta1
                                title={"Pre-Trained Neuron Examples"}
                                description={"Explore real-world inspired scenarios powered by pre-trained artificial neurons. Select a case, test different inputs, and observe how the neuron predicts outcomes across various domains like education, finance, health, and business."}
                                firstActionButtonProps={
                                    {
                                        label: "Explore Neurons",
                                        path: "",
                                    }
                                }
                                secondActionButtonProps={
                                    {
                                        label: "",
                                        path: ""
                                    }
                                }
                                targetAutoScrollRef={preTrainedNeuronRef}
                            />
                        </section>

                        <section className="w-full flex flex-col gap-4">
                            <div
                                className="w-full flex flex-col"
                                ref={preTrainedNeuronRef}
                            >
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight py-4">
                                    Pre-Trained Neurons
                                </h4>
                            </div>
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-4">
                                {preTrainedNeuronExampleInternalData.length < 1 ? (
                                    <h1>No Results</h1>
                                ) : preTrainedNeuronExampleInternalData.map((preTrainedNeuronExampleInternalData, index) => (
                                    <PreTrainedNeuronExampleCard
                                        key={index}
                                        preTrainedNeuronExampleInternalData={preTrainedNeuronExampleInternalData}
                                    />
                                ))}
                            </div>
                        </section>

                    </div>

                    <Footer1 />

                </ContextMenuTrigger>
                <MainContextMenuContent />
            </ContextMenu>

        </main>
    )
}

export default PreTrainedNeuronPage