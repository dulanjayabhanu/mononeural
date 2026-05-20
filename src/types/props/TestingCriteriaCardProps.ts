import type {TestingConfigureInputWeight} from "@/types/TestingConfigureInputWeight.ts";
import type {Dispatch, SetStateAction} from "react";
import type {TrainedResults} from "@/types/TrainedResults.ts";

export type TestingCriteriaCardProps = {
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
    trainedResultsForTestingHookProps: {
        trainedResultsForTesting: TrainedResults,
        setTrainedResultsForTesting: Dispatch<SetStateAction<TrainedResults>>
    }
}