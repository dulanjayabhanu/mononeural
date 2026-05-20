import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";
import type {InputDataSetHolder} from "@/types/InputDataSetHolder.ts";

const useInputDataSetHolder = () => {
    const { inputDataSetHolder: inputDataSetHolderDefaultValue } = getHookDefaultValues()
    const [ inputDataSetHolder, setInputDataSetHolder ] = useState<InputDataSetHolder[]>(inputDataSetHolderDefaultValue)
    return {
        inputDataSetHolder: inputDataSetHolder,
        setInputDataSetHolder: setInputDataSetHolder
    }
}

export default useInputDataSetHolder