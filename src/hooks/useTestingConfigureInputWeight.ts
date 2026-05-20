import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";
import type {TestingConfigureInputWeight} from "@/types/TestingConfigureInputWeight.ts";

const useTestingConfigureInputWeight = () => {
    const { testingConfigureInputWeight: testingConfigureInputWeightDefaultValue } = getHookDefaultValues()
    const [ testingConfigureInputWeight, setTestingConfigureInputWeight ] = useState<TestingConfigureInputWeight>(testingConfigureInputWeightDefaultValue)
    return {
        testingConfigureInputWeight: testingConfigureInputWeight,
        setTestingConfigureInputWeight: setTestingConfigureInputWeight
    }
}

export default useTestingConfigureInputWeight