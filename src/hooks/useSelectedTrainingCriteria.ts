import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";
import type {TrainingCriteria} from "@/types/TrainingCriteria.ts";

const useSelectedTrainingCriteria = () => {
    const { selectedTrainingCriteria: selectedTrainingCriteriaDefaultValue } = getHookDefaultValues()
    const [ selectedTrainingCriteria, setSelectedTrainingCriteria ] = useState<TrainingCriteria[]>(selectedTrainingCriteriaDefaultValue)
    return {
        selectedTrainingCriteria: selectedTrainingCriteria,
        setSelectedTrainingCriteria: setSelectedTrainingCriteria
    }
}

export default useSelectedTrainingCriteria