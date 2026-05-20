import type {ConfigureInputWeight} from "@/types/ConfigureInputWeight.ts";
import React, {type RefObject} from "react";

export type ArtificialNeuronVisualizationProps = {
    visualizationInputWeightHookProps: {
        visualizationInputWeight: ConfigureInputWeight[],
        setVisualizationInputWeight: React.Dispatch<React.SetStateAction<ConfigureInputWeight[]>>
    }
    visualizationBiasHookProps: {
        visualizationBias: number
        setVisualizationBias: React.Dispatch<React.SetStateAction<number>>
    }
    visualizationActivationFunctionHookProps: {
        visualizationActivationFunction: number | null
        setVisualizationActivationFunction: React.Dispatch<React.SetStateAction<number | null>>
    }
    neuronTrainerStudioRef: RefObject<HTMLDivElement | null>
}