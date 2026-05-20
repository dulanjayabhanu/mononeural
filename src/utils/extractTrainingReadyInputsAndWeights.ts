import type {ConfigureInputWeight} from "@/types/ConfigureInputWeight.ts";

const extractTrainingReadyInputsAndWeights = (inputWeights: ConfigureInputWeight[]) => {
    const inputs: number[] = []
    const weights: number[] = []
    const rawInputWeights: ConfigureInputWeight[] = [...inputWeights]

    rawInputWeights.map((inputWeight) => {
        inputs.push(inputWeight.input)
        weights.push(inputWeight.weight)
    })
    return {
        inputs: inputs,
        weights: weights,
    }
}

export default extractTrainingReadyInputsAndWeights