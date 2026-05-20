import type {Dispatch, SetStateAction} from "react";
import type {TestingConfigureInputWeight} from "@/types/TestingConfigureInputWeight.ts";
import type {TrainedResults} from "@/types/TrainedResults.ts";

export type TestingConfigurationCardProps = {
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
    testingResultsHookProps: {
        testingResults: number[][]
        setTestingResults: Dispatch<SetStateAction<number[][]>>
    }
    trainedResultsForTestingHookProps: {
        trainedResultsForTesting: TrainedResults,
        setTrainedResultsForTesting: Dispatch<SetStateAction<TrainedResults>>
    }
}