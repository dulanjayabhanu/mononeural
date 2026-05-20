import {Card, CardContent, CardTitle,} from "@/components/ui/card.tsx";
import SiriOrb from "@/components/smoothui/siri-orb";
import trainArtificialNeuron from "@/services/trainArtificialNeuron.ts";
import type {TrainingStartCardProps} from "@/types/props/TrainingStartCardProps.ts";
import {Cpu, RotateCcw} from "lucide-react";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import SmoothButton from "@/components/smoothui/smooth-button";
import {useEffect} from "react";
import triggerNotification from "@/services/triggerNotification.ts";

const TrainingStartCard = (
    {
        selectedConfigureInputWeightHookProps,
        configureBiasHookProps,
        selectedTrainingCriteriaHookProps,
        learningRateHookProps,
        calculateCycleHookProps,
        progressHookProps,
        outputLogHookProps,
        chartDataHookProps,
        trainedResultsHookProps,
        inputDataSetHolderHookProps,
        configureInputHookProps,
        configureWeightHookProps,
        visualizationInputWeightHookProps,
        visualizationBiasHookProps,
        downloadFullTrainingLogHookProps,
        siriOrbColorsHookProps,
        minCalculateCycleHookProps,
        calculateCycleStepHookProps,
    }: TrainingStartCardProps) => {

    const triggerArtificialNeuronTraining = () => {
        if (selectedTrainingCriteriaHookProps.selectedTrainingCriteria.length > 0)
            trainArtificialNeuron(
                {
                    selectedConfigureInputWeightHookProps: selectedConfigureInputWeightHookProps,
                    configureBiasHookProps: configureBiasHookProps,
                    selectedTrainingCriteriaHookProps: selectedTrainingCriteriaHookProps,
                    learningRateHookProps: learningRateHookProps,
                    calculateCycleHookProps: calculateCycleHookProps,
                    progressHookProps: progressHookProps,
                    outputLogHookProps: outputLogHookProps,
                    chartDataHookProps: chartDataHookProps,
                    trainedResultsHookProps: trainedResultsHookProps,
                    visualizationInputWeightHookProps: visualizationInputWeightHookProps,
                    visualizationBiasHookProps: visualizationBiasHookProps,
                    downloadFullTrainingLogHookProps: downloadFullTrainingLogHookProps,
                    minCalculateCycleHookProps: minCalculateCycleHookProps,
                    calculateCycleStepHookProps: calculateCycleStepHookProps,
                }
            )
        else
            triggerNotification(
                "warning",
                "Training Criteria Required",
                "top-center"
            )
    }

    const resetApplication = (): void => {
        const {
            configureBias: configureBiasDefaultValue,
            configureInput: configureInputDefaultValue,
            configureWeight: configureWeightDefaultValue,
            selectedConfigureInputWeight: selectedConfigureInputWeightDefaultValue,
            inputDataSetHolder: inputDataSetHolderDefaultValue,
        } = getHookDefaultValues()

        configureBiasHookProps.setConfigureBias(configureBiasDefaultValue)
        visualizationBiasHookProps.setVisualizationBias(configureBiasDefaultValue)
        configureInputHookProps.setConfigureInput(configureInputDefaultValue)
        configureWeightHookProps.setConfigureWeight(configureWeightDefaultValue)
        selectedConfigureInputWeightHookProps.setSelectedConfigureInputWeight(selectedConfigureInputWeightDefaultValue)
        inputDataSetHolderHookProps.setInputDataSetHolder(inputDataSetHolderDefaultValue)
    }

    useEffect(() => {
        if(progressHookProps.progress == 100) {
            const { siriOrbColors: siriOrbColorsDefaultValue } = getHookDefaultValues()
            siriOrbColorsHookProps.setSiriOrbColors(
                {
                    bg: "oklch(0.922 0 0)",
                    c1: "oklch(0.886 0.234 143.574)",
                    c2: "oklch(0.852 0.199 91.936)",
                    c3: "oklch(0.546 0.245 262.881)",
                }
            )
            setTimeout(() => {
                siriOrbColorsHookProps.setSiriOrbColors(siriOrbColorsDefaultValue)
            }, 4000)
        }
    }, [progressHookProps.progress])

    return (
        <Card className="w-full max-w-md mx-auto rounded-2xl md:rounded-full">
            <CardContent className="w-full max-w-4xl flex flex-col h-full gap-4 text-center md:text-start">
                <div className="w-full flex flex-col md:flex-row gap-4">
                    <div className="flex justify-center items-center">
                        <SiriOrb
                            animationDuration={15}
                            colors={siriOrbColorsHookProps.siriOrbColors}
                            size="90px"
                            className="transition-all duration-500 ease-in-out"
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center gap-2">
                        <CardTitle>Ready to Train?</CardTitle>
                        <div className="w-full flex flex-col md:flex-row gap-2">
                            <SmoothButton
                                variant="default"
                                size="sm"
                                onClick={() =>
                                    triggerArtificialNeuronTraining()
                                }
                            >
                                <Cpu size="18" />
                                Start Training
                            </SmoothButton>
                            <SmoothButton
                                variant="destructive"
                                size="sm"
                                onClick={() =>
                                    resetApplication()
                                }
                            >
                                <RotateCcw size="18" />
                                Reset Training
                            </SmoothButton>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default TrainingStartCard