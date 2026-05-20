import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";
import type {ConfigureInputWeight} from "@/types/ConfigureInputWeight.ts";

const useVisualizationInputWeight = () => {
    const { selectedConfigureInputWeight: visualizationInputWeightDefaultValue } = getHookDefaultValues()
    const [ visualizationInputWeight, setVisualizationInputWeight ] = useState<ConfigureInputWeight[]>(visualizationInputWeightDefaultValue)
    return {
        visualizationInputWeight: visualizationInputWeight,
        setVisualizationInputWeight: setVisualizationInputWeight
    }
}

export default useVisualizationInputWeight