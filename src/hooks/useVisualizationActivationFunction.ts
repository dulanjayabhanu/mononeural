import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useVisualizationActivationFunction = () => {
    const { activationFunction: visualizationActivationFunctionDefaultValue } = getHookDefaultValues()
    const [ visualizationActivationFunction, setVisualizationActivationFunction ] = useState<number | null>(visualizationActivationFunctionDefaultValue)
    return {
        visualizationActivationFunction: visualizationActivationFunction,
        setVisualizationActivationFunction: setVisualizationActivationFunction
    }
}

export default useVisualizationActivationFunction