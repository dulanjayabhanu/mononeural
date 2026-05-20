import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useMaxCalculateCycles = () => {
    const { maxCalculateCycles: maxCalculateCycleDefaultValue } = getHookDefaultValues()
    const [ maxCalculateCycle, setMaxCalculateCycle ] = useState<number>(maxCalculateCycleDefaultValue)
    return {
        maxCalculateCycle: maxCalculateCycle,
        setMaxCalculateCycle: setMaxCalculateCycle
    }
}

export default useMaxCalculateCycles