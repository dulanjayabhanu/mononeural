import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";
import type {ConfigureInputWeight} from "@/types/ConfigureInputWeight.ts";

const useSelectedConfigureInputWeight = () => {
    const { selectedConfigureInputWeight: selectedConfigureInputWeightDefaultValue } = getHookDefaultValues()
    const [ selectedConfigureInputWeight, setSelectedConfigureInputWeight ] = useState<ConfigureInputWeight[]>(selectedConfigureInputWeightDefaultValue)
    return {
        selectedConfigureInputWeight: selectedConfigureInputWeight,
        setSelectedConfigureInputWeight: setSelectedConfigureInputWeight
    }
}

export default useSelectedConfigureInputWeight