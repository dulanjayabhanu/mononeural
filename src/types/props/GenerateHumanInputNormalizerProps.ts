import type {TrainingCriteria} from "@/types/TrainingCriteria.ts";
import * as React from "react";
import type {InputDataSetHolder} from "@/types/InputDataSetHolder.ts";
import type {ConfigureInputWeight} from "@/types/ConfigureInputWeight.ts";

export type GenerateHumanInputNormalizerProps = {
    trainingCriteriaHookProps: {
        trainingCriteria: TrainingCriteria
        setTrainingCriteria: React.Dispatch<React.SetStateAction<TrainingCriteria>>
    }
    inputDataSetHolderHookProps: {
        inputDataSetHolder: InputDataSetHolder[]
        setInputDataSetHolder: React.Dispatch<React.SetStateAction<InputDataSetHolder[]>>
    }
    targetConfigureWeight: ConfigureInputWeight
}