import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useTestingHigherTriggerMessage = () => {
    const { testingHigherTriggerMessage: testingHigherTriggerMessageDefaultValue } = getHookDefaultValues()
    const [ testingHigherTriggerMessage, setTestingHigherTriggerMessage ] = useState<string>(testingHigherTriggerMessageDefaultValue)
    return {
        testingHigherTriggerMessage: testingHigherTriggerMessage,
        setTestingHigherTriggerMessage: setTestingHigherTriggerMessage
    }
}

export default useTestingHigherTriggerMessage