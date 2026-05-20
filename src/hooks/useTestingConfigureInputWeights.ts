import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";
import type {TestingConfigureInputWeight} from "@/types/TestingConfigureInputWeight.ts";

const useTestingConfigureInputWeights = () => {
    const { testingConfigureInputWeights: testingConfigureInputWeightsDefaultValue } = getHookDefaultValues()
    const [ testingConfigureInputWeight, setTestingConfigureInputWeight ] = useState<TestingConfigureInputWeight[]>(testingConfigureInputWeightsDefaultValue)
    return {
        testingConfigureInputWeights: testingConfigureInputWeight,
        setTestingConfigureInputWeights: setTestingConfigureInputWeight
    }
}

export default useTestingConfigureInputWeights