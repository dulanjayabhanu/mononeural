import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useVisualizationBias = () => {
    const { configureBias: visualizationBiasDefaultValue } = getHookDefaultValues()
    const [ visualizationBias, setVisualizationBias ] = useState<number>(visualizationBiasDefaultValue)
    return {
        visualizationBias: visualizationBias,
        setVisualizationBias: setVisualizationBias
    }
}

export default useVisualizationBias