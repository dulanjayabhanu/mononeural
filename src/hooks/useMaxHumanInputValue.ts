import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useMaxHumanInputValue = () => {
    const { maxHumanInputValue: maxHumanInputDefaultValue } = getHookDefaultValues()
    const [ maxHumanInputValue, setMaxHumanInputValue ] = useState<number>(maxHumanInputDefaultValue)
    return {
        maxHumanInputValue: maxHumanInputValue,
        setMaxHumanInputValue: setMaxHumanInputValue
    }
}

export default useMaxHumanInputValue