import type {TestingConfigureInputWeight} from "@/types/TestingConfigureInputWeight.ts";
import type {NavigationOrigin} from "@/types/NavigationOrigin.ts";

export type PreTrainedNeuronExampleInternalData = {
    id: string
    navigationOrigin: NavigationOrigin
    title: string
    description: string
    learningRate: number
    cycleCount: number
    inputLabels: string[]
    weights: number[]
    bias: number
    testDataSet: TestingConfigureInputWeight[][]
    negativePredictionMessage: string
    positivePredictionMessage: string
}