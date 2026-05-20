import type {Dispatch, SetStateAction} from "react";
import type {TestingConfigureInputWeight} from "@/types/TestingConfigureInputWeight.ts";

export type TestingResultsCardProps = {
    testingConfigureInputWeightsHookProps: {
        testingConfigureInputWeights: TestingConfigureInputWeight[],
        setTestingConfigureInputWeights: Dispatch<SetStateAction<TestingConfigureInputWeight[]>>
    }
    testingResultsHookProps: {
        testingResults: number[][]
        setTestingResults: Dispatch<SetStateAction<number[][]>>
    }
    testingLowerTriggerMessageHookProps: {
        testingLowerTriggerMessage: string,
        setTestingLowerTriggerMessage: Dispatch<SetStateAction<string>>
    }
    testingHigherTriggerMessageHookProps: {
        testingHigherTriggerMessage: string,
        setTestingHigherTriggerMessage: Dispatch<SetStateAction<string>>
    }
}