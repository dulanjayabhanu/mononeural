import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useMinHumanInputValue = () => {
    const { minHumanInputValue: minHumanInputDefaultValue } = getHookDefaultValues()
    const [ minHumanInputValue, setMinHumanInputValue ] = useState<number>(minHumanInputDefaultValue)
    return {
        minHumanInputValue: minHumanInputValue,
        setMinHumanInputValue: setMinHumanInputValue
    }
}

export default useMinHumanInputValue