import NavBar from "@/components/ui/custom/NavBar.tsx";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import Footer1 from "@/components/smoothui/footer-1";
import {Toaster} from "@/components/ui/sonner.tsx";
import Cta1 from "@/components/smoothui/custom/cta-1";
import {lazy, useEffect, useRef} from "react";
import TestingConfigurationCard from "@/components/ui/custom/TestingConfigurationCard.tsx";
import TestingCriteriaCard from "@/components/ui/custom/TestingCriteriaCard.tsx";
import TestingStartCard from "@/components/ui/custom/TestingStartCard.tsx";
import TestingResultsCard from "@/components/ui/custom/TestingResultsCard.tsx";
import useTestingConfigureInputWeights from "@/hooks/useTestingConfigureInputWeights.ts";
import useTestingConfigureInputWeight from "@/hooks/useTestingConfigureInputWeight.ts";
import useTestingCriteria from "@/hooks/useTestingCriteria.ts";
import useTestingConfigureBias from "@/hooks/useTestingConfigureBias.ts";
import useTestingLowerTriggerMessage from "@/hooks/useTestingLowerTriggerMessage.ts";
import useTestingHigherTriggerMessage from "@/hooks/useTestingHigherTriggerMessage.ts";
import useTestingResults from "@/hooks/useTestingResults.ts";
import useSiriOrbColors from "@/hooks/useSiriOrbColors.ts";
import MainAnimateBackground from "@/components/ui/custom/MainAnimateBackground.tsx";
import {useLocation} from "react-router";
import useTrainedResultsForTesting from "@/hooks/useTrainedResultsForTesting.ts";
import type {TestingConfigureInputWeight} from "@/types/TestingConfigureInputWeight.ts";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import getNavigationOrigins from "@/constants/getNavigationOrigins.ts";
import type {TrainedResults} from "@/types/TrainedResults.ts";
import {ContextMenu, ContextMenuTrigger} from "@/components/ui/context-menu.tsx";

export const MainContextMenuContent = lazy(() => import("@/components/ui/custom/MainContextMenuContent.tsx"))

const ArtificialNeuronTesterPage = () => {
    const location = useLocation()
    const trainedResults = location.state
    const { artificialNeuronTrainerPage, preTrainedNeuronPage } = getNavigationOrigins()

    const { testingConfigureInputWeight, setTestingConfigureInputWeight } = useTestingConfigureInputWeight()
    const { testingConfigureInputWeights, setTestingConfigureInputWeights } = useTestingConfigureInputWeights()
    const { testingCriteria, setTestingCriteria } = useTestingCriteria()
    const { testingConfigureBias, setTestingConfigureBias } = useTestingConfigureBias()
    const { testingLowerTriggerMessage, setTestingLowerTriggerMessage } = useTestingLowerTriggerMessage()
    const { testingHigherTriggerMessage, setTestingHigherTriggerMessage } = useTestingHigherTriggerMessage()
    const { testingResults, setTestingResults } = useTestingResults()
    const { siriOrbColors, setSiriOrbColors } = useSiriOrbColors()
    const { trainedResultsForTesting, setTrainedResultsForTesting } = useTrainedResultsForTesting()

    const neuronTestStudioRef = useRef<HTMLDivElement>(null)

    const syncTestingConfigureInputWeights = () => {
        if (trainedResultsForTesting.weights.length > 0) {
            const { testingConfigureInputWeight: testingConfigureInputWeightDefaultValue } = getHookDefaultValues()

            const testingConfigureInputWeights: TestingConfigureInputWeight[] = trainedResultsForTesting.weights.map((weight, index) => (
                {
                    id: index + 1,
                    weight: weight,
                    input: testingConfigureInputWeightDefaultValue.input,
                    min: testingConfigureInputWeightDefaultValue.min,
                    max: testingConfigureInputWeightDefaultValue.max,
                    label: trainedResults?.navigationOrigin === preTrainedNeuronPage ? trainedResults.inputLabels[index] : testingConfigureInputWeightDefaultValue.label,
                }
            ))

            setTestingConfigureInputWeights(testingConfigureInputWeights)
        }
    }

    const syncTestingConfigureBias = () => {
        if (trainedResultsForTesting.weights.length > 0)
            setTestingConfigureBias(trainedResultsForTesting.bias)
    }

    const syncTestingCriteria = () => {
        if (trainedResults?.navigationOrigin === preTrainedNeuronPage)
            setTestingCriteria(trainedResults.testDataSet)
    }

    const syncNegativeAndPositivePredictionMessage = () => {
        const {
            testingLowerTriggerMessage: testingLowerTriggerMessageDefaultValue,
            testingHigherTriggerMessage: testingHigherTriggerMessageDefaultValue,
        } = getHookDefaultValues()
        if (trainedResults?.navigationOrigin === preTrainedNeuronPage) {
            setTestingLowerTriggerMessage(trainedResults?.negativePredictionMessage || testingLowerTriggerMessageDefaultValue)
            setTestingHigherTriggerMessage(trainedResults?.positivePredictionMessage || testingHigherTriggerMessageDefaultValue)
        }
    }

    const syncTestingConfigureInputWeightMinAndMaxValues = () => {
        if (testingCriteria.length > 0) {
            const dummyTestingCriteria = testingCriteria[0]
            setTestingConfigureInputWeights((prevState) =>
                [...prevState].map((testingConfigureInputWeight, index) => (
                    {
                        ...testingConfigureInputWeight,
                        min: dummyTestingCriteria[index].min,
                        max: dummyTestingCriteria[index].max,
                    }
                ))
            )
        }
    }

    useEffect(() => {
        if (trainedResults?.navigationOrigin === artificialNeuronTrainerPage) {
            setTrainedResultsForTesting(trainedResults)

        } else if (trainedResults?.navigationOrigin === preTrainedNeuronPage) {
            const filteredTrainedResults: TrainedResults = {
                weights: trainedResults.weights,
                bias: trainedResults.bias,
                navigationOrigin: trainedResults.navigationOrigin,
            }
            setTrainedResultsForTesting(filteredTrainedResults)
        }
    }, [])

    useEffect(() => {
        syncTestingConfigureInputWeights()
        syncTestingConfigureBias()

        if (trainedResults?.navigationOrigin === preTrainedNeuronPage) {
            syncTestingCriteria()
            syncNegativeAndPositivePredictionMessage()
            syncTestingConfigureInputWeightMinAndMaxValues()
        }
    }, [trainedResultsForTesting])

    useEffect(() => {
        document.title = "Artificial Neuron Tester - MonoNeural"
    }, [])

    return (
        <main className="w-full h-full flex flex-col gap-4 relative">

            <ContextMenu>
                <ContextMenuTrigger>

                    <MainAnimateBackground />
                    <NavBar />
                    <BackToTopFab />
                    <Toaster />

                    <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-10 px-6 pb-6">

                        <section className="w-full grid grid-cols-1 gap-10">
                            <Cta1
                                title={"Test Your Artificial Neuron"}
                                description={"Input test data and evaluate your trained neuron's predictions. Configure prediction thresholds and analyze results."}
                                firstActionButtonProps={
                                    {
                                        label: "Start Testing",
                                        path: ""
                                    }
                                }
                                secondActionButtonProps={
                                    {
                                        label: "View Documentation",
                                        path: "/docs"
                                    }
                                }
                                targetAutoScrollRef={neuronTestStudioRef}
                            />
                        </section>

                        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10" ref={neuronTestStudioRef}>
                            <TestingConfigurationCard
                                testingConfigureInputWeightHookProps={
                                    {
                                        testingConfigureInputWeight: testingConfigureInputWeight,
                                        setTestingConfigureInputWeight: setTestingConfigureInputWeight
                                    }
                                }
                                testingConfigureInputWeightsHookProps={
                                    {
                                        testingConfigureInputWeights: testingConfigureInputWeights,
                                        setTestingConfigureInputWeights: setTestingConfigureInputWeights
                                    }
                                }
                                testingCriteriaHookProps={
                                    {
                                        testingCriteria: testingCriteria,
                                        setTestingCriteria: setTestingCriteria
                                    }
                                }
                                testingResultsHookProps={
                                    {
                                        testingResults: testingResults,
                                        setTestingResults: setTestingResults
                                    }
                                }
                                trainedResultsForTestingHookProps={
                                    {
                                        trainedResultsForTesting: trainedResultsForTesting,
                                        setTrainedResultsForTesting: setTrainedResultsForTesting
                                    }
                                }
                            />
                            <TestingCriteriaCard
                                testingConfigureInputWeightsHookProps={
                                    {
                                        testingConfigureInputWeights: testingConfigureInputWeights,
                                        setTestingConfigureInputWeights: setTestingConfigureInputWeights
                                    }
                                }
                                testingCriteriaHookProps={
                                    {
                                        testingCriteria: testingCriteria,
                                        setTestingCriteria: setTestingCriteria
                                    }
                                }
                                testingConfigureBiasHookProps={
                                    {
                                        testingConfigureBias: testingConfigureBias,
                                        setTestingConfigureBias: setTestingConfigureBias
                                    }
                                }
                                testingLowerTriggerMessageHookProps={
                                    {
                                        testingLowerTriggerMessage: testingLowerTriggerMessage,
                                        setTestingLowerTriggerMessage: setTestingLowerTriggerMessage
                                    }
                                }
                                testingHigherTriggerMessageHookProps={
                                    {
                                        testingHigherTriggerMessage: testingHigherTriggerMessage,
                                        setTestingHigherTriggerMessage: setTestingHigherTriggerMessage
                                    }
                                }
                                trainedResultsForTestingHookProps={
                                    {
                                        trainedResultsForTesting: trainedResultsForTesting,
                                        setTrainedResultsForTesting: setTrainedResultsForTesting
                                    }
                                }
                            />
                        </section>

                        <section className="w-full flex flex-col lg:flex-row gap-10">
                            <TestingStartCard
                                testingConfigureInputWeightHookProps={
                                    {
                                        testingConfigureInputWeight: testingConfigureInputWeight,
                                        setTestingConfigureInputWeight: setTestingConfigureInputWeight
                                    }
                                }
                                testingConfigureInputWeightsHookProps={
                                    {
                                        testingConfigureInputWeights: testingConfigureInputWeights,
                                        setTestingConfigureInputWeights: setTestingConfigureInputWeights
                                    }
                                }
                                testingCriteriaHookProps={
                                    {
                                        testingCriteria: testingCriteria,
                                        setTestingCriteria: setTestingCriteria
                                    }
                                }
                                testingConfigureBiasHookProps={
                                    {
                                        testingConfigureBias: testingConfigureBias,
                                        setTestingConfigureBias: setTestingConfigureBias
                                    }
                                }
                                testingLowerTriggerMessageHookProps={
                                    {
                                        testingLowerTriggerMessage: testingLowerTriggerMessage,
                                        setTestingLowerTriggerMessage: setTestingLowerTriggerMessage
                                    }
                                }
                                testingHigherTriggerMessageHookProps={
                                    {
                                        testingHigherTriggerMessage: testingHigherTriggerMessage,
                                        setTestingHigherTriggerMessage: setTestingHigherTriggerMessage
                                    }
                                }
                                testingResultsHookProps={
                                    {
                                        testingResults: testingResults,
                                        setTestingResults: setTestingResults
                                    }
                                }
                                siriOrbColorsHookProps={
                                    {
                                        siriOrbColors: siriOrbColors,
                                        setSiriOrbColors: setSiriOrbColors
                                    }
                                }
                                trainedResultsForTestingHookProps={
                                    {
                                        trainedResultsForTesting: trainedResultsForTesting,
                                        setTrainedResultsForTesting: setTrainedResultsForTesting
                                    }
                                }
                            />
                        </section>

                        <section className="w-full flex flex-col lg:flex-row gap-10">
                            <TestingResultsCard
                                testingConfigureInputWeightsHookProps={
                                    {
                                        testingConfigureInputWeights: testingConfigureInputWeights,
                                        setTestingConfigureInputWeights: setTestingConfigureInputWeights
                                    }
                                }
                                testingResultsHookProps={
                                    {
                                        testingResults: testingResults,
                                        setTestingResults: setTestingResults
                                    }
                                }
                                testingLowerTriggerMessageHookProps={
                                    {
                                        testingLowerTriggerMessage: testingLowerTriggerMessage,
                                        setTestingLowerTriggerMessage: setTestingLowerTriggerMessage
                                    }
                                }
                                testingHigherTriggerMessageHookProps={
                                    {
                                        testingHigherTriggerMessage: testingHigherTriggerMessage,
                                        setTestingHigherTriggerMessage: setTestingHigherTriggerMessage
                                    }
                                }
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

export default ArtificialNeuronTesterPage