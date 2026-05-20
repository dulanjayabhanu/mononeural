import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";
import type {TrainingCriteria} from "@/types/TrainingCriteria.ts";

const useTrainingCriteria = () => {
    const { trainingCriteria: trainingCriteriaDefaultValue } = getHookDefaultValues()
    const [ trainingCriteria, setTrainingCriteria ] = useState<TrainingCriteria>(trainingCriteriaDefaultValue)
    return {
        trainingCriteria: trainingCriteria,
        setTrainingCriteria: setTrainingCriteria
    }
}

export default useTrainingCriteria