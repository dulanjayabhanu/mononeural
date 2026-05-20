import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useTargetBooleanHumanInputValue = () => {
    const { targetBooleanHumanInputValue: targetBooleanHumanInputDefaultValue } = getHookDefaultValues()
    const [ targetBooleanHumanInputValue, setTargetBooleanHumanInputValue ] = useState<string>(targetBooleanHumanInputDefaultValue)
    return {
        targetBooleanHumanInputValue: targetBooleanHumanInputValue,
        setTargetBooleanHumanInputValue: setTargetBooleanHumanInputValue
    }
}

export default useTargetBooleanHumanInputValue