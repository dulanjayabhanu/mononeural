import type {TrainArtificialNeuronProps} from "@/types/props/TrainArtificialNeuronProps.ts";
import extractTrainingReadyInputsAndWeights from "@/utils/extractTrainingReadyInputsAndWeights.ts";
import extractTrainingReadyCriteriaInputsAndExpectedOutputs
    from "@/utils/extractTrainingReadyCriteriaInputsAndExpectedOutputs.ts";
import type {ChartData} from "@/types/ChartData.ts";
import type {ConfigureInputWeight} from "@/types/ConfigureInputWeight.ts";
import extractVisualizationReadyConfigureInputWeights from "@/utils/extractVisualizationReadyConfigureInputWeights.ts";
import getNavigationOrigins from "@/constants/getNavigationOrigins.ts";

const trainArtificialNeuron = (
    {
        selectedConfigureInputWeightHookProps,
        configureBiasHookProps,
        selectedTrainingCriteriaHookProps,
        learningRateHookProps,
        calculateCycleHookProps,
        progressHookProps,
        outputLogHookProps,
        chartDataHookProps,
        trainedResultsHookProps,
        visualizationInputWeightHookProps,
        visualizationBiasHookProps,
        downloadFullTrainingLogHookProps,
        minCalculateCycleHookProps,
        calculateCycleStepHookProps,
    }: TrainArtificialNeuronProps): void => {
    const { inputs, weights } = extractTrainingReadyInputsAndWeights(selectedConfigureInputWeightHookProps.selectedConfigureInputWeight)
    const { criteriaInputs, expectedOutputs } = extractTrainingReadyCriteriaInputsAndExpectedOutputs(selectedTrainingCriteriaHookProps.selectedTrainingCriteria)
    const { artificialNeuronTrainerPage } = getNavigationOrigins()
    let bias: number = configureBiasHookProps.configureBias
    const learningRate: number = learningRateHookProps.learningRate
    const trainingCycles: number = calculateCycleHookProps.calculateCycle

    const chartData: ChartData[] = []
    const shiftingConstant: number = 10
    const progressCountBaseValue: number = (trainingCycles / minCalculateCycleHookProps.minCalculateCycle) * shiftingConstant
    const progressForwardingFactor: number = trainingCycles / progressCountBaseValue
    let progressCounter: number = 0
    let outputLogSection1: string = ""
    let outputLogSection2: string = ""
    let outputLogSection3: string = ""
    let outputLogSection4: string = ""
    let outputLogSection5: string = ""
    let outputLogSection6: string = ""
    const averageMseLosses: number[] = []
    const executionStartTime: Date = new Date()

    outputLogSection1 += "==============================================================================\n"
    outputLogSection1 += "                    ARTIFICIAL NEURON TRAINING LOG\n"
    outputLogSection1 += "==============================================================================\n\n"
    outputLogSection1 += `SESSION ID: AN-${crypto.randomUUID()}\n`
    outputLogSection1 += `START TIME: ${new Date().toUTCString()}\n`
    outputLogSection1 += `MODEL TYPE: Single Neuron Perceptron\n\n`
    outputLogSection1 += "==============================================================================\n"
    outputLogSection1 += "INITIAL CONFIGURATION\n"
    outputLogSection1 += "==============================================================================\n\n"
    outputLogSection1 += "Input Dimensions:          ["

    inputs.map((input, index) =>
        outputLogSection1 += index < inputs.length - 1 ? `${input}, ` : `${input}`
    )

    outputLogSection1 += `]\n`
    outputLogSection1 += `\nLearning Rate (η):         ${learningRate}\n`
    outputLogSection1 += `Total Training Cycles:     ${trainingCycles}\n`
    outputLogSection1 += `Activation Function:       Sigmoid\n\n`
    outputLogSection1 += `Initial Parameters:\n`
    outputLogSection1 += `\t└─ Weights (w):       [`

    weights.map((weight, index) =>
        outputLogSection1 += index < weights.length - 1 ? `${weight}, ` : `${weight}`
    )

    outputLogSection1 += `]\n`
    outputLogSection1 += `\t└─ Bias (b):          ${bias}\n\n`
    outputLogSection2 += "==============================================================================\n"
    outputLogSection2 += "TRAINING PROCESS\n"
    outputLogSection2 += "==============================================================================\n\n"

    for (let i = 0; i < trainingCycles; i++) {

        outputLogSection2 += `┌─ CYCLE ${i + 1} ──────────────────────────────────────────────────────────────────┐\n`
        outputLogSection2 += `│ Timestamp: ${new Date().toUTCString()}                                   \n`
        outputLogSection2 += `│                                                                            \n`

        let chartReadyError: number = 0
        let totalMseError: number = 0

        for (let j = 0; j < criteriaInputs.length; j++) {

            outputLogSection2 += `│ ┌─ Criteria Set ${j + 1} ─────────────────────────────────────────────────────┐   \n`
            outputLogSection2 += `│ │ Inputs:                        [`

            let weightedSum: number = 0
            for (let k = 0; k < criteriaInputs[j].length; k++) {
                weightedSum += weights[k] * criteriaInputs[j][k]
                outputLogSection2 += k < criteriaInputs[j].length - 1 ? `${criteriaInputs[j][k]}, ` : `${criteriaInputs[j][k]}`
            }
            weightedSum += bias

            outputLogSection2 += `]                           \n`
            outputLogSection2 += `│ │ Expected Output:               ${expectedOutputs[j]}                                     \n`
            outputLogSection2 += `│ │                                                                      \n`
            outputLogSection2 += `│ │ Forward Pass:                                                        \n`
            outputLogSection2 += `│ │ \tWeighted Sum (z):            ${weightedSum}                                 \n`

            const activationFunction: number = 1 / (1 + Math.exp(weightedSum * -1))
            const error: number = expectedOutputs[j] - activationFunction
            totalMseError += Math.pow(error, 2)

            outputLogSection2 += `│ │ \tActivation Output (ŷ):       ${activationFunction}  [Sigmoid]       \n`
            outputLogSection2 += `│ │                                                                      \n`
            outputLogSection2 += `│ │ Loss Calculation:                                                    \n`
            outputLogSection2 += `│ │ \tPrediction Error (y - ŷ):    ${error}                 \n`
            outputLogSection2 += `│ │ \tMSE Loss:                    ${Math.pow(error, 2)}                 \n`
            outputLogSection2 += `│ │                                                                      \n`
            outputLogSection2 += `│ │ Parameter Update:                                                    \n`
            outputLogSection2 += `│ │ \tWeight Updates: Δw                                     \n`

            if(j === criteriaInputs[j].length - 1)
                chartReadyError = error

            for (let l = 0; l < criteriaInputs[j].length; l++) {
                const previousWeight: number = weights[l]
                weights[l] += (learningRate * error * criteriaInputs[j][l])

                outputLogSection2 += `│ │   \t└─ w${l + 1}: ${previousWeight} → ${weights[l]}                                           \n`

            }
            const previousBias: number = bias
            bias += (learningRate * error)

            outputLogSection2 += `│ │ \tBias Update: Δb                                     \n`
            outputLogSection2 += `│ │   \t└─ b: ${previousBias} → ${bias}                                           \n`

            outputLogSection2 += `│ │                                                                      \n`
            outputLogSection2 += `│ │ Status: ✓ COMPLETED                                                  \n`
            outputLogSection2 += `│ └──────────────────────────────────────────────────────────────────────┘   \n`

        }

        outputLogSection2 += `│                                                                            \n`
        outputLogSection2 += `│ Cycle ${i + 1} Summary:                                                            \n`
        outputLogSection2 += `│ \tAverage Loss:                ${totalMseError / criteriaInputs.length} (across ${criteriaInputs.length} criteria)       \n`
        outputLogSection2 += `│   Status: ✓ COMPLETED                                                       \n`
        outputLogSection2 += `└─────────────────────────────────────────────────────────────────────────────┘\n\n`

        averageMseLosses.push(totalMseError / criteriaInputs.length)
        chartData.push(
            {
                cycle: `cycle ${i + 1}`,
                weights: [...weights],
                bias: bias,
                error: chartReadyError,
            }
        )

        if (i % progressForwardingFactor === 0 ) {
            progressHookProps.setProgress((++progressCounter / progressCountBaseValue) * 100)
        }
    }

    const executionEndTime: Date = new Date()
    outputLogSection3 += "==============================================================================\n"
    outputLogSection3 += "TRAINING SUMMARY\n"
    outputLogSection3 += "==============================================================================\n\n"
    outputLogSection3 += `Final Parameters:\n`
    outputLogSection3 += `  └─ Weights (w):          [`
    weights.map((weight, index) =>
        outputLogSection3 += index < weights.length - 1 ? `${weight}, ` : `${weight}`
    )
    outputLogSection3 += `]\n`
    outputLogSection3 += `  └─ Bias (b):             ${bias}\n\n`
    outputLogSection3 += `Loss Progress:\n`
    averageMseLosses.map((averageMseLoss, index) => {
        outputLogSection4 += `\tCycle ${index + 1}:  ${averageMseLoss}\n`
    })
    averageMseLosses.map((averageMseLoss, index) => {
        if((index + 1) % calculateCycleStepHookProps.calculateCycleStep == 0 || index === 0)
            outputLogSection5 += `\tCycle ${index + 1}:  ${averageMseLoss}\n`
    })
    outputLogSection6 += `\nConvergence Status:        IN PROGRESS (Loss Decreasing)\n`
    const errorReducedGap: number = chartData.length > 0 ?
        chartData[0].error - chartData[chartData.length - 1].error :
        0
    const errorReducedPercentage: number = chartData.length > 0 ?
        (errorReducedGap / chartData[0].error) * 100 :
        0
    outputLogSection6 += `Error Gap:  ${errorReducedGap} (${errorReducedPercentage}%)\n\n`
    outputLogSection6 += `END TIME: ${new Date().toUTCString()}\n`
    outputLogSection6 += `TOTAL DURATION: ${(executionEndTime.getTime() - executionStartTime.getTime()) / 1000} seconds\n\n`
    outputLogSection6 += "=============================================================================="

    const visualizationReadyConfigureInputWeights: ConfigureInputWeight[] = extractVisualizationReadyConfigureInputWeights(
        weights,
        selectedConfigureInputWeightHookProps.selectedConfigureInputWeight
    )
    visualizationInputWeightHookProps.setVisualizationInputWeight(visualizationReadyConfigureInputWeights)
    visualizationBiasHookProps.setVisualizationBias(bias)

    outputLogHookProps.setOutputLog(`${outputLogSection1}${outputLogSection3}${outputLogSection5}${outputLogSection6}`)
    downloadFullTrainingLogHookProps.setDownloadFullTrainingLog(`${outputLogSection1}${outputLogSection2}${outputLogSection3}${outputLogSection4}${outputLogSection6}`)
    chartDataHookProps.setChartData(chartData)
    trainedResultsHookProps.setTrainedResults({
        weights: weights,
        bias: bias,
        navigationOrigin: artificialNeuronTrainerPage,
    })
}

export default trainArtificialNeuron