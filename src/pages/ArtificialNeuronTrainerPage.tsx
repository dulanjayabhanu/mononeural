import useConfigureInput from "@/hooks/useConfigureInput.ts";
import useConfigureWeight from "@/hooks/useConfigureWeight.ts";
import useConfigureBias from "@/hooks/useConfigureBias.ts";
import useSelectedConfigureInputWeight from "@/hooks/useSelectedConfigureInputWeight.ts";
import useTrainingCriteria from "@/hooks/useTrainingCriteria.ts";
import useSelectedTrainingCriteria from "@/hooks/useSelectedTrainingCriteria.ts";
import useExpectedOutput from "@/hooks/useExpectedOutput.ts";
import useCalculateCycle from "@/hooks/useCalculateCycle.ts";
import useLearningRate from "@/hooks/useLearningRate.ts";
import useProgress from "@/hooks/useProgress.ts";
import useOutputLog from "@/hooks/useOutputLog.ts";
import useChartData from "@/hooks/useChartData.ts";
import useInputDataSetHolder from "@/hooks/useInputDataSetHolder.ts";
import useVisualizationInputWeight from "@/hooks/useVisualizationInputWeight.ts";
import useVisualizationBias from "@/hooks/useVisualizationBias.ts";
import useVisualizationActivationFunction from "@/hooks/useVisualizationActivationFunction.ts";
import useTrainedResults from "@/hooks/useTrainedResults.ts";
import NavBar from "@/components/ui/custom/NavBar.tsx";
import Footer1 from "@/components/smoothui/footer-1";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import useDownloadFullTrainingLog from "@/hooks/useDownloadFullTrainingLog.ts";
import useSiriOrbColors from "@/hooks/useSiriOrbColors.ts";
import useMinCalculateCycles from "@/hooks/useMinCalculateCycles.ts";
import useMaxCalculateCycles from "@/hooks/useMaxCalculateCycles.ts";
import useCalculateCycleStep from "@/hooks/useCalculateCycleStep.ts";
import useDeepTrainingMode from "@/hooks/useDeepTrainingMode.ts";
import {Toaster} from "@/components/ui/sonner.tsx";
import Cta1 from "@/components/smoothui/custom/cta-1";
import {lazy, useEffect, useRef} from "react";
import MainAnimateBackground from "@/components/ui/custom/MainAnimateBackground.tsx";
import {ContextMenu, ContextMenuTrigger} from "@/components/ui/context-menu.tsx";

export const ConfigurationCard = lazy(() => import("@/components/ui/custom/ConfigurationCard.tsx"))
export const TrainingCriteriaCard = lazy(() => import("@/components/ui/custom/TrainingCriteriaCard.tsx"))
export const TrainingLogCard = lazy(() => import("@/components/ui/custom/TrainingLogCard.tsx"))
export const TrainingAnalyzeChart = lazy(() => import("@/components/ui/custom/TrainingAnalyzeChart.tsx"))
export const ArtificialNeuronVisualization = lazy(() => import("@/components/ui/custom/ArtificialNeuronVisualization.tsx"))
export const TrainingResultsCard = lazy(() => import("@/components/ui/custom/TrainingResultsCard.tsx"))
export const TrainingToTestingSwitchCard = lazy(() => import("@/components/ui/custom/TrainingToTestingSwitchCard.tsx"))
export const TrainingStartCard = lazy(() => import("@/components/ui/custom/TrainingStartCard.tsx"))
export const MainContextMenuContent = lazy(() => import("@/components/ui/custom/MainContextMenuContent.tsx"))

const ArtificialNeuronTrainerPage= () => {
    const { configureInput, setConfigureInput } = useConfigureInput()
    const { configureWeight, setConfigureWeight } = useConfigureWeight()
    const { configureBias, setConfigureBias } = useConfigureBias()
    const { inputDataSetHolder, setInputDataSetHolder } = useInputDataSetHolder()
    const { selectedConfigureInputWeight, setSelectedConfigureInputWeight } = useSelectedConfigureInputWeight()
    const { trainingCriteria, setTrainingCriteria } = useTrainingCriteria()
    const { selectedTrainingCriteria, setSelectedTrainingCriteria } = useSelectedTrainingCriteria()
    const { expectedOutput, setExpectedOutput } = useExpectedOutput()
    const { calculateCycle, setCalculateCycle } = useCalculateCycle()
    const { learningRate, setLearningRate } = useLearningRate()
    const { minCalculateCycle, setMinCalculateCycle } = useMinCalculateCycles()
    const { maxCalculateCycle, setMaxCalculateCycle } = useMaxCalculateCycles()
    const { calculateCycleStep, setCalculateCycleStep } = useCalculateCycleStep()

    const { progress, setProgress } = useProgress()
    const { outputLog, setOutputLog } = useOutputLog()
    const { chartData, setChartData } = useChartData()
    const { trainedResults, setTrainedResults } = useTrainedResults()
    const { downloadFullTrainingLog, setDownloadFullTrainingLog } = useDownloadFullTrainingLog()
    const { siriOrbColors, setSiriOrbColors } = useSiriOrbColors()
    const { deepTrainingMode, setDeepTrainingMode } = useDeepTrainingMode()

    const { visualizationInputWeight, setVisualizationInputWeight } = useVisualizationInputWeight()
    const { visualizationBias, setVisualizationBias } = useVisualizationBias()
    const { visualizationActivationFunction, setVisualizationActivationFunction } = useVisualizationActivationFunction()

    const neuronTrainerStudioRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.title = "Artificial Neuron Trainer - MonoNeural"
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
                                title={"Train Your First Artificial Neuron"}
                                description={"Build, configure, and train a single-layer neural network from scratch. Define inputs, set weights and bias, run training iterations, and visualize how your neuron learns. No coding required."}
                                firstActionButtonProps={
                                    {
                                        label: "Start Building",
                                        path: "",
                                    }
                                }
                                secondActionButtonProps={
                                    {
                                        label: "View Documentation",
                                        path: "/docs"
                                    }
                                }
                                targetAutoScrollRef={neuronTrainerStudioRef}
                            />
                        </section>

                        <section className="w-full grid grid-cols-1 gap-10">
                            <ArtificialNeuronVisualization
                                visualizationInputWeightHookProps={
                                    {
                                        visualizationInputWeight: visualizationInputWeight,
                                        setVisualizationInputWeight: setVisualizationInputWeight
                                    }
                                }
                                visualizationBiasHookProps={
                                    {
                                        visualizationBias: visualizationBias,
                                        setVisualizationBias: setVisualizationBias
                                    }
                                }
                                visualizationActivationFunctionHookProps={
                                    {
                                        visualizationActivationFunction: visualizationActivationFunction,
                                        setVisualizationActivationFunction: setVisualizationActivationFunction
                                    }
                                }
                                neuronTrainerStudioRef={neuronTrainerStudioRef}
                            />
                        </section>

                        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <ConfigurationCard
                                configureInputHookProps={
                                    {
                                        configureInput: configureInput,
                                        setConfigureInput: setConfigureInput
                                    }
                                }
                                configureWeightHookProps={
                                    {
                                        configureWeight: configureWeight,
                                        setConfigureWeight: setConfigureWeight
                                    }
                                }
                                inputDataSetHolderHookProps={
                                    {
                                        inputDataSetHolder: inputDataSetHolder,
                                        setInputDataSetHolder: setInputDataSetHolder
                                    }
                                }
                                selectedConfigureInputWeightHookProps={
                                    {
                                        selectedConfigureInputWeight: selectedConfigureInputWeight,
                                        setSelectedConfigureInputWeight: setSelectedConfigureInputWeight
                                    }
                                }
                                configureBiasHookProps={
                                    {
                                        configureBias: configureBias,
                                        setConfigureBias: setConfigureBias
                                    }
                                }
                                selectedTrainingCriteriaHookProps={
                                    {
                                        selectedTrainingCriteria: selectedTrainingCriteria,
                                        setSelectedTrainingCriteria: setSelectedTrainingCriteria
                                    }
                                }
                                learningRateHookProps={
                                    {
                                        learningRate: learningRate,
                                        setLearningRate: setLearningRate
                                    }
                                }
                                calculateCycleHookProps={
                                    {
                                        calculateCycle: calculateCycle,
                                        setCalculateCycle: setCalculateCycle
                                    }
                                }
                                progressHookProps={
                                    {
                                        progress: progress,
                                        setProgress: setProgress
                                    }
                                }
                                outputLogHookProps={
                                    {
                                        outputLog: outputLog,
                                        setOutputLog: setOutputLog
                                    }
                                }
                                chartDataHookProps={
                                    {
                                        chartData: chartData,
                                        setChartData: setChartData
                                    }
                                }
                                visualizationInputWeightHookProps={
                                    {
                                        visualizationInputWeight: visualizationInputWeight,
                                        setVisualizationInputWeight: setVisualizationInputWeight
                                    }
                                }
                                visualizationBiasHookProps={
                                    {
                                        visualizationBias: visualizationBias,
                                        setVisualizationBias: setVisualizationBias
                                    }
                                }
                                trainedResultsHookProps={
                                    {
                                        trainedResults: trainedResults,
                                        setTrainedResults: setTrainedResults
                                    }
                                }
                            />
                            <TrainingCriteriaCard
                                inputDataSetHolderHookProps={
                                    {
                                        inputDataSetHolder: inputDataSetHolder,
                                        setInputDataSetHolder: setInputDataSetHolder
                                    }
                                }
                                selectedConfigureInputWeightHookProps={
                                    {
                                        selectedConfigureInputWeight: selectedConfigureInputWeight,
                                        setSelectedConfigureInputWeight: setSelectedConfigureInputWeight
                                    }
                                }
                                trainingCriteriaHookProps={
                                    {
                                        trainingCriteria: trainingCriteria,
                                        setTrainingCriteria: setTrainingCriteria
                                    }
                                }
                                selectedTrainingCriteriaHookProps={
                                    {
                                        selectedTrainingCriteria: selectedTrainingCriteria,
                                        setSelectedTrainingCriteria: setSelectedTrainingCriteria
                                    }
                                }
                                expectedOutputHookProps={
                                    {
                                        expectedOutput: expectedOutput,
                                        setExpectedOutput: setExpectedOutput
                                    }
                                }
                                calculatingCycleHookProps={
                                    {
                                        calculatingCycle: calculateCycle,
                                        setCalculatingCycle: setCalculateCycle
                                    }
                                }
                                learningRateHookProps={
                                    {
                                        learningRate: learningRate,
                                        setLearningRate: setLearningRate
                                    }
                                }
                                minCalculateCycleHookProps={
                                    {
                                        minCalculateCycle: minCalculateCycle,
                                        setMinCalculateCycle: setMinCalculateCycle
                                    }
                                }
                                maxCalculateCycleHookProps={
                                    {
                                        maxCalculateCycle: maxCalculateCycle,
                                        setMaxCalculateCycle: setMaxCalculateCycle
                                    }
                                }
                                calculateCycleStepHookProps={
                                    {
                                        calculateCycleStep: calculateCycleStep,
                                        setCalculateCycleStep: setCalculateCycleStep
                                    }
                                }
                                deepTrainingModeHookProps={
                                    {
                                        deepTrainingMode: deepTrainingMode,
                                        setDeepTrainingMode: setDeepTrainingMode
                                    }
                                }
                            />
                        </section>

                        <section className="w-full flex flex-col items-center gap-6">
                            <TrainingStartCard
                                selectedConfigureInputWeightHookProps={
                                    {
                                        selectedConfigureInputWeight: selectedConfigureInputWeight,
                                        setSelectedConfigureInputWeight: setSelectedConfigureInputWeight
                                    }
                                }
                                configureBiasHookProps={
                                    {
                                        configureBias: configureBias,
                                        setConfigureBias: setConfigureBias
                                    }
                                }
                                selectedTrainingCriteriaHookProps={
                                    {
                                        selectedTrainingCriteria: selectedTrainingCriteria,
                                        setSelectedTrainingCriteria: setSelectedTrainingCriteria
                                    }
                                }
                                learningRateHookProps={
                                    {
                                        learningRate: learningRate,
                                        setLearningRate: setLearningRate
                                    }
                                }
                                calculateCycleHookProps={
                                    {
                                        calculateCycle: calculateCycle,
                                        setCalculateCycle: setCalculateCycle
                                    }
                                }
                                progressHookProps={
                                    {
                                        progress: progress,
                                        setProgress: setProgress
                                    }
                                }
                                outputLogHookProps={
                                    {
                                        outputLog: outputLog,
                                        setOutputLog: setOutputLog
                                    }
                                }
                                chartDataHookProps={
                                    {
                                        chartData: chartData,
                                        setChartData: setChartData
                                    }
                                }
                                trainedResultsHookProps={
                                    {
                                        trainedResults: trainedResults,
                                        setTrainedResults: setTrainedResults
                                    }
                                }
                                inputDataSetHolderHookProps={
                                    {
                                        inputDataSetHolder: inputDataSetHolder,
                                        setInputDataSetHolder: setInputDataSetHolder
                                    }
                                }
                                configureInputHookProps={
                                    {
                                        configureInput: configureInput,
                                        setConfigureInput: setConfigureInput
                                    }
                                }
                                configureWeightHookProps={
                                    {
                                        configureWeight: configureWeight,
                                        setConfigureWeight: setConfigureWeight
                                    }
                                }
                                visualizationInputWeightHookProps={
                                    {
                                        visualizationInputWeight: visualizationInputWeight,
                                        setVisualizationInputWeight: setVisualizationInputWeight
                                    }
                                }
                                visualizationBiasHookProps={
                                    {
                                        visualizationBias: visualizationBias,
                                        setVisualizationBias: setVisualizationBias
                                    }
                                }
                                downloadFullTrainingLogHookProps={
                                    {
                                        downloadFullTrainingLog: downloadFullTrainingLog,
                                        setDownloadFullTrainingLog: setDownloadFullTrainingLog
                                    }
                                }
                                siriOrbColorsHookProps={
                                    {
                                        siriOrbColors: siriOrbColors,
                                        setSiriOrbColors: setSiriOrbColors
                                    }
                                }
                                minCalculateCycleHookProps={
                                    {
                                        minCalculateCycle: minCalculateCycle,
                                        setMinCalculateCycle: setMinCalculateCycle
                                    }
                                }
                                calculateCycleStepHookProps={
                                    {
                                        calculateCycleStep: calculateCycleStep,
                                        setCalculateCycleStep: setCalculateCycleStep
                                    }
                                }
                            />
                        </section>

                        <section className="w-full grid grid-cols-1 gap-10">
                            <TrainingLogCard
                                progressHookProps={
                                    {
                                        progress: progress,
                                        setProgress: setProgress
                                    }
                                }
                                outputLogHookProps={
                                    {
                                        outputLog: outputLog,
                                        setOutputLog: setOutputLog
                                    }
                                }
                                downloadFullTrainingLogHookProps={
                                    {
                                        downloadFullTrainingLog: downloadFullTrainingLog,
                                        setDownloadFullTrainingLog: setDownloadFullTrainingLog
                                    }
                                }
                                calculatingCycleHookProps={
                                    {
                                        calculatingCycle: calculateCycle,
                                        setCalculatingCycle: setCalculateCycle
                                    }
                                }
                            />
                        </section>

                        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <TrainingAnalyzeChart
                                chartDataHookProps={
                                    {
                                        chartData: chartData,
                                        setChartData: setChartData
                                    }
                                }
                            />
                            <TrainingResultsCard
                                trainedResultsHookProps={
                                    {
                                        trainedResults: trainedResults,
                                        setTrainedResults: setTrainedResults
                                    }
                                }
                            />
                        </section>

                        <section className="w-full flex flex-col items-center gap-6">
                            <TrainingToTestingSwitchCard
                                trainedResultsHookProps={
                                    {
                                        trainedResults: trainedResults,
                                        setTrainedResults: setTrainedResults
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

export default ArtificialNeuronTrainerPage
