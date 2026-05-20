import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useConfigureWeight = () => {
    const { configureWeight: configureWeightDefaultValue } = getHookDefaultValues()
    const [ configureWeight, setConfigureWeight ] = useState<number>(configureWeightDefaultValue)
    return {
        configureWeight: configureWeight,
        setConfigureWeight: setConfigureWeight
    }
}

export default useConfigureWeight