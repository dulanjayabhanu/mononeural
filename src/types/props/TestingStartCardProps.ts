import type {TestingConfigureInputWeight} from "@/types/TestingConfigureInputWeight.ts";
import  {type Dispatch, type SetStateAction} from "react";
import type {SiriOrbColors} from "@/types/SiriOrbColors.ts";
import * as React from "react";
import type {TrainedResults} from "@/types/TrainedResults.ts";

export type TestingStartCardProps = {
    testingConfigureInputWeightHookProps: {
        testingConfigureInputWeight: TestingConfigureInputWeight,
        setTestingConfigureInputWeight: Dispatch<SetStateAction<TestingConfigureInputWeight>>
    }
    testingConfigureInputWeightsHookProps: {
        testingConfigureInputWeights: TestingConfigureInputWeight[],
        setTestingConfigureInputWeights: Dispatch<SetStateAction<TestingConfigureInputWeight[]>>
    }
    testingCriteriaHookProps: {
        testingCriteria: TestingConfigureInputWeight[][]
        setTestingCriteria: Dispatch<SetStateAction<TestingConfigureInputWeight[][]>>
    }
    testingConfigureBiasHookProps: {
        testingConfigureBias: number,
        setTestingConfigureBias: Dispatch<SetStateAction<number>>
    }
    testingLowerTriggerMessageHookProps: {
        testingLowerTriggerMessage: string,
        setTestingLowerTriggerMessage: Dispatch<SetStateAction<string>>
    }
    testingHigherTriggerMessageHookProps: {
        testingHigherTriggerMessage: string,
        setTestingHigherTriggerMessage: Dispatch<SetStateAction<string>>
    }
    testingResultsHookProps: {
        testingResults: number[][]
        setTestingResults: Dispatch<SetStateAction<number[][]>>
    }
    siriOrbColorsHookProps: {
        siriOrbColors: SiriOrbColors
        setSiriOrbColors: React.Dispatch<React.SetStateAction<SiriOrbColors>>
    }
    trainedResultsForTestingHookProps: {
        trainedResultsForTesting: TrainedResults,
        setTrainedResultsForTesting: Dispatch<SetStateAction<TrainedResults>>
    }
}