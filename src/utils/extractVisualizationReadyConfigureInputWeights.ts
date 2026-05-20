import type {ConfigureInputWeight} from "@/types/ConfigureInputWeight.ts";

const extractVisualizationReadyConfigureInputWeights = (
    weights: number[],
    targetConfigureInputWeights: ConfigureInputWeight[]
): ConfigureInputWeight[] => {
    return targetConfigureInputWeights.map((inputWeight, index) => (
        {
            ...inputWeight,
            weight: weights[index]
        }
    ))
}

export default extractVisualizationReadyConfigureInputWeights