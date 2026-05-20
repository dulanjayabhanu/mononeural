import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useCalculateCycle = () => {
    const { calculateCycle: calculateCycleDefaultValue } = getHookDefaultValues()
    const [ calculateCycle, setCalculateCycle ] = useState<number>(calculateCycleDefaultValue)
    return {
        calculateCycle: calculateCycle,
        setCalculateCycle: setCalculateCycle
    }
}

export default useCalculateCycle