import {Card, CardContent, CardTitle} from "@/components/ui/card.tsx";
import SiriOrb from "@/components/smoothui/siri-orb";
import SmoothButton from "@/components/smoothui/smooth-button";
import {FlaskConical, RotateCcw} from "lucide-react";
import type {TestingStartCardProps} from "@/types/props/TestingStartCardProps.ts";
import testArtificialNeuron from "@/services/testArtificialNeuron.ts";
import {useEffect} from "react";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import triggerNotification from "@/services/triggerNotification.ts";
import getNavigationOrigins from "@/constants/getNavigationOrigins.ts";

const TestingStartCard = (
    {
        testingConfigureInputWeightHookProps,
        testingConfigureInputWeightsHookProps,
        testingCriteriaHookProps,
        testingConfigureBiasHookProps,
        testingLowerTriggerMessageHookProps,
        testingHigherTriggerMessageHookProps,
        testingResultsHookProps,
        siriOrbColorsHookProps,
        trainedResultsForTestingHookProps,
    }: TestingStartCardProps ) => {

    const resetTestingResults = (): void => {
        const { testingResults: testingResultsDefaultValue } = getHookDefaultValues()
        testingResultsHookProps.setTestingResults(testingResultsDefaultValue)
    }

    const resetTestingCriteria = (): void => {
        const { testingCriteria: testingCriteriaDefaultValue } = getHookDefaultValues()
        testingCriteriaHookProps.setTestingCriteria(testingCriteriaDefaultValue)
    }

    const resetApp = () => {
        const {
            testingConfigureInputWeight: testingConfigureInputWeightDefaultValue,
            testingConfigureInputWeights: testingConfigureInputWeightsDefaultValue,
            testingConfigureBias: testingConfigureBiasDefaultValue,
            testingLowerTriggerMessage: testingLowerTriggerMessageDefaultValue,
            testingHigherTriggerMessage: testingHigherTriggerMessageDefaultValue,
        } = getHookDefaultValues()
        testingConfigureInputWeightHookProps.setTestingConfigureInputWeight(testingConfigureInputWeightDefaultValue)
        testingConfigureInputWeightsHookProps.setTestingConfigureInputWeights(testingConfigureInputWeightsDefaultValue)
        testingConfigureBiasHookProps.setTestingConfigureBias(testingConfigureBiasDefaultValue)
        testingLowerTriggerMessageHookProps.setTestingLowerTriggerMessage(testingLowerTriggerMessageDefaultValue)
        testingHigherTriggerMessageHookProps.setTestingHigherTriggerMessage(testingHigherTriggerMessageDefaultValue)
        resetTestingCriteria()
    }

    const resetAppForTrainedResults = () => {
        const {
            testingLowerTriggerMessage: testingLowerTriggerMessageDefaultValue,
            testingHigherTriggerMessage: testingHigherTriggerMessageDefaultValue,
        } = getHookDefaultValues()
        testingLowerTriggerMessageHookProps.setTestingLowerTriggerMessage(testingLowerTriggerMessageDefaultValue)
        testingHigherTriggerMessageHookProps.setTestingHigherTriggerMessage(testingHigherTriggerMessageDefaultValue)
        resetTestingCriteria()
        resetTestingResults()
        resetInputInTestingConfigureInputWeights()
    }

    const resetAppForPreTrainedNeuronExampleInternalData = () => {
        resetTestingResults()
        resetInputInTestingConfigureInputWeights()
    }

    const resetInputInTestingConfigureInputWeights = (): void => {
        testingConfigureInputWeightsHookProps.setTestingConfigureInputWeights((prevState) =>
            [...prevState].map((testingConfigureInputWeight) => (
                {
                    ...testingConfigureInputWeight,
                    input: testingConfigureInputWeight.min
                }
            ))
        )
    }

    const handleAppReset = () => {
        const { artificialNeuronTrainerPage, preTrainedNeuronPage } = getNavigationOrigins()
        if (trainedResultsForTestingHookProps.trainedResultsForTesting.navigationOrigin === artificialNeuronTrainerPage)
            resetAppForTrainedResults()
        else if (trainedResultsForTestingHookProps.trainedResultsForTesting.navigationOrigin === preTrainedNeuronPage)
            resetAppForPreTrainedNeuronExampleInternalData()
        else
            resetApp()
    }

    const handleTestArtificialNeuron = (): void => {
        let message: string = "success"

        if (testingCriteriaHookProps.testingCriteria.length === 0)
            message = "First add real data sets"
        else if (testingLowerTriggerMessageHookProps.testingLowerTriggerMessage.length < 1 || testingHigherTriggerMessageHookProps.testingHigherTriggerMessage.length < 1)
            message = "Configure trigger messages first"
        else if (testingLowerTriggerMessageHookProps.testingLowerTriggerMessage === testingHigherTriggerMessageHookProps.testingHigherTriggerMessage)
            message = "Trigger messages are must be different"

        if (message === "success") {
            testArtificialNeuron(
                {
                    testingCriteriaHookProps: testingCriteriaHookProps,
                    testingConfigureBiasHookProps: testingConfigureBiasHookProps,
                    testingResultsHookProps: testingResultsHookProps,
                    siriOrbColorsHookProps: siriOrbColorsHookProps,
                }
            )
        } else {
            triggerNotification(
                "warning",
                message,
                "top-center"
            )
        }
    }

    useEffect(() => {
        resetTestingResults()
    }, [testingConfigureInputWeightsHookProps.testingConfigureInputWeights])

    return (
        <Card className="w-full max-w-md mx-auto rounded-2xl md:rounded-full">
            <CardContent className="w-full max-w-4xl flex flex-col h-full gap-4 text-center md:text-start">
                <div className="w-full flex flex-col md:flex-row gap-4">
                    <div className="flex justify-center align-center">
                        <SiriOrb
                            animationDuration={15}
                            colors={siriOrbColorsHookProps.siriOrbColors}
                            size="90px"
                            className="transition-all duration-500 ease-in-out"
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center gap-2">
                        <CardTitle>Test Your Trained Neuron</CardTitle>
                        <div className="w-full flex flex-col md:flex-row gap-2">
                            <SmoothButton
                                variant="default"
                                size="sm"
                                onClick={() =>
                                    handleTestArtificialNeuron()
                                }
                            >
                                <FlaskConical size={18} />
                                Test Neuron
                            </SmoothButton>
                            <SmoothButton
                                variant="destructive"
                                size="sm"
                                onClick={() =>
                                    handleAppReset()
                                }
                            >
                                <RotateCcw size="18" />
                                Reset Testing
                            </SmoothButton>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default TestingStartCard