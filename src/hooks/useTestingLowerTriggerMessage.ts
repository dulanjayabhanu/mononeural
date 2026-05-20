import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useTestingLowerTriggerMessage = () => {
    const { testingLowerTriggerMessage: testingLowerTriggerMessageDefaultValue } = getHookDefaultValues()
    const [ testingLowerTriggerMessage, setTestingLowerTriggerMessage ] = useState<string>(testingLowerTriggerMessageDefaultValue)
    return {
        testingLowerTriggerMessage: testingLowerTriggerMessage,
        setTestingLowerTriggerMessage: setTestingLowerTriggerMessage
    }
}

export default useTestingLowerTriggerMessage