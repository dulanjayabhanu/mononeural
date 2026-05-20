import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useTargetHumanInputValue = () => {
    const { targetHumanInputValue: targetHumanInputDefaultValue } = getHookDefaultValues()
    const [ targetHumanInputValue, setTargetHumanInputValue ] = useState<number>(targetHumanInputDefaultValue)
    return {
        targetHumanInputValue: targetHumanInputValue,
        setTargetHumanInputValue: setTargetHumanInputValue
    }
}

export default useTargetHumanInputValue