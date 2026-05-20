import * as React from "react";
import type {TrainingCriteria} from "@/types/TrainingCriteria.ts";
import type {ChartData} from "@/types/ChartData.ts";
import type {ConfigureInputWeight} from "@/types/ConfigureInputWeight.ts";
import type {InputDataSetHolder} from "@/types/InputDataSetHolder.ts";
import type {TrainedResults} from "@/types/TrainedResults.ts";

export type ConfigurationCardProps = {
    configureInputHookProps: {
        configureInput: number
        setConfigureInput: React.Dispatch<React.SetStateAction<number>>
    }
    configureWeightHookProps: {
        configureWeight: number
        setConfigureWeight: React.Dispatch<React.SetStateAction<number>>
    }
    inputDataSetHolderHookProps: {
        inputDataSetHolder: InputDataSetHolder[]
        setInputDataSetHolder: React.Dispatch<React.SetStateAction<InputDataSetHolder[]>>
    }
    selectedConfigureInputWeightHookProps: {
        selectedConfigureInputWeight: ConfigureInputWeight[]
        setSelectedConfigureInputWeight:  React.Dispatch<React.SetStateAction<ConfigureInputWeight[]>>
    }
    configureBiasHookProps: {
        configureBias: number
        setConfigureBias: React.Dispatch<React.SetStateAction<number>>
    }
    selectedTrainingCriteriaHookProps: {
        selectedTrainingCriteria: TrainingCriteria[]
        setSelectedTrainingCriteria: React.Dispatch<React.SetStateAction<TrainingCriteria[]>>
    }
    learningRateHookProps: {
        learningRate: number
        setLearningRate: React.Dispatch<React.SetStateAction<number>>
    }
    calculateCycleHookProps: {
        calculateCycle: number
        setCalculateCycle: React.Dispatch<React.SetStateAction<number>>
    }
    progressHookProps: {
        progress: number
        setProgress: React.Dispatch<React.SetStateAction<number>>
    }
    outputLogHookProps: {
        outputLog: string
        setOutputLog: React.Dispatch<React.SetStateAction<string>>
    }
    chartDataHookProps: {
        chartData: ChartData[]
        setChartData:  React.Dispatch<React.SetStateAction<ChartData[]>>
    }
    visualizationInputWeightHookProps: {
        visualizationInputWeight: ConfigureInputWeight[],
        setVisualizationInputWeight: React.Dispatch<React.SetStateAction<ConfigureInputWeight[]>>
    }
    visualizationBiasHookProps: {
        visualizationBias: number
        setVisualizationBias: React.Dispatch<React.SetStateAction<number>>
    }
    trainedResultsHookProps: {
        trainedResults: TrainedResults
        setTrainedResults: React.Dispatch<React.SetStateAction<TrainedResults>>
    }
}