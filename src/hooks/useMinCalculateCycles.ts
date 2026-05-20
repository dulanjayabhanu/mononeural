import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useMinCalculateCycles = () => {
    const { minCalculateCycles: minCalculateCycleDefaultValue } = getHookDefaultValues()
    const [ minCalculateCycle, setMinCalculateCycle ] = useState<number>(minCalculateCycleDefaultValue)
    return {
        minCalculateCycle: minCalculateCycle,
        setMinCalculateCycle: setMinCalculateCycle
    }
}

export default useMinCalculateCycles