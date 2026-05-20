import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useCalculateCycleStep = () => {
    const { calculateCycleStep: calculateCycleStepDefaultValue } = getHookDefaultValues()
    const [ calculateCycleStep, setCalculateCycleStep ] = useState<number>(calculateCycleStepDefaultValue)
    return {
        calculateCycleStep: calculateCycleStep,
        setCalculateCycleStep: setCalculateCycleStep
    }
}

export default useCalculateCycleStep