import type {TrainingCriteria} from "@/types/TrainingCriteria.ts";
import extractTrainingReadyInputsAndWeights from "@/utils/extractTrainingReadyInputsAndWeights.ts";

const extractTrainingReadyCriteriaInputsAndExpectedOutputs = (trainingCriteriaArray: TrainingCriteria[]) => {
    const criteriaInputs: number[][] = []
    const expectedOutputs: number[] = []
    const rawTrainingCriteriaArray: TrainingCriteria[] = [ ...trainingCriteriaArray ]

    rawTrainingCriteriaArray.map((trainingCriteria) => {
        criteriaInputs.push(
            extractTrainingReadyInputsAndWeights(trainingCriteria.inputDataSet).inputs
        )
        expectedOutputs.push(trainingCriteria.expectedOutput)
    })
    return {
        criteriaInputs: criteriaInputs,
        expectedOutputs: expectedOutputs,
    }
}

export default extractTrainingReadyCriteriaInputsAndExpectedOutputs