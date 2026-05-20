import type {TestArtificialNeuronProps} from "@/types/props/TestArtificialNeuronProps.ts";
import minMaxNormalizeConversion from "@/utils/minMaxNormalizeConversion.ts";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";

const testArtificialNeuron = (
    {
        testingCriteriaHookProps,
        testingConfigureBiasHookProps,
        testingResultsHookProps,
        siriOrbColorsHookProps,
    }: TestArtificialNeuronProps ) => {
    const testedResults: number[][] = []

    testingCriteriaHookProps.testingCriteria.forEach((testingConfigureInputWeights) => {
        let weightedSum: number = 0
        const testedResultCriteria: number[] = []

        testingConfigureInputWeights.forEach((testingConfigureInputWeight) => {
            const normalizedInput: number = minMaxNormalizeConversion(
                testingConfigureInputWeight.max,
                testingConfigureInputWeight.min,
                testingConfigureInputWeight.input
            )
            weightedSum += testingConfigureInputWeight.weight * normalizedInput
            testedResultCriteria.push(testingConfigureInputWeight.input)
        })

        weightedSum += testingConfigureBiasHookProps.testingConfigureBias
        const activationFunction: number = 1 / (1 + Math.exp(weightedSum * -1))
        testedResultCriteria.push(activationFunction)

        testedResults.push(testedResultCriteria)
    })

    testingResultsHookProps.setTestingResults(testedResults)

    const { siriOrbColors: siriOrbColorsDefaultValue } = getHookDefaultValues()
    siriOrbColorsHookProps.setSiriOrbColors(
        {
            bg: "oklch(0.922 0 0)",
            c1: "oklch(0.886 0.234 143.574)",
            c2: "oklch(0.852 0.199 91.936)",
            c3: "oklch(0.546 0.245 262.881)",
        }
    )
    setTimeout(() => {
        siriOrbColorsHookProps.setSiriOrbColors(siriOrbColorsDefaultValue)
    }, 4000)
}

export default testArtificialNeuron