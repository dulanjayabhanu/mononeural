import {useState} from "react";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";

const useConfigureInput = () => {
    const { configureInput: configureInputDefaultValue } = getHookDefaultValues()
    const [ configureInput, setConfigureInput ] = useState<number>(configureInputDefaultValue)
    return {
        configureInput: configureInput,
        setConfigureInput: setConfigureInput
    }
}

export default useConfigureInput