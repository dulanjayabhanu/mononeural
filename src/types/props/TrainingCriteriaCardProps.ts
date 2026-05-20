import * as React from "react";
import type {TrainingCriteria} from "@/types/TrainingCriteria.ts";
import type {ConfigureInputWeight} from "@/types/ConfigureInputWeight.ts";
import type {InputDataSetHolder} from "@/types/InputDataSetHolder.ts";

export type TrainingCriteriaCardProps = {
    inputDataSetHolderHookProps: {
        inputDataSetHolder: InputDataSetHolder[]
        setInputDataSetHolder: React.Dispatch<React.SetStateAction<InputDataSetHolder[]>>
    }
    selectedConfigureInputWeightHookProps: {
        selectedConfigureInputWeight: ConfigureInputWeight[]
        setSelectedConfigureInputWeight:  React.Dispatch<React.SetStateAction<ConfigureInputWeight[]>>
    }
    trainingCriteriaHookProps: {
        trainingCriteria: TrainingCriteria
        setTrainingCriteria: React.Dispatch<React.SetStateAction<TrainingCriteria>>
    }
    selectedTrainingCriteriaHookProps: {
        selectedTrainingCriteria: TrainingCriteria[]
        setSelectedTrainingCriteria: React.Dispatch<React.SetStateAction<TrainingCriteria[]>>
    }
    expectedOutputHookProps: {
        expectedOutput: number
        setExpectedOutput: React.Dispatch<React.SetStateAction<number>>
    }
    calculatingCycleHookProps: {
        calculatingCycle: number
        setCalculatingCycle: React.Dispatch<React.SetStateAction<number>>
    }
    minCalculateCycleHookProps: {
        minCalculateCycle: number
        setMinCalculateCycle: React.Dispatch<React.SetStateAction<number>>
    }
    maxCalculateCycleHookProps: {
        maxCalculateCycle: number
        setMaxCalculateCycle: React.Dispatch<React.SetStateAction<number>>
    }
    calculateCycleStepHookProps: {
        calculateCycleStep: number
        setCalculateCycleStep: React.Dispatch<React.SetStateAction<number>>
    }
    learningRateHookProps: {
        learningRate: number
        setLearningRate: React.Dispatch<React.SetStateAction<number>>
    }
    deepTrainingModeHookProps: {
        deepTrainingMode: boolean,
        setDeepTrainingMode: React.Dispatch<React.SetStateAction<boolean>>
    }
}