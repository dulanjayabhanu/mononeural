import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import type {TestingConfigureInputWeight} from "@/types/TestingConfigureInputWeight.ts";
import {useState} from "react";

const useTestingCriteria = () => {
    const { testingCriteria: testingCriteriaDefaultValue } = getHookDefaultValues()
    const [ testingCriteria, setTestingCriteria ] = useState<TestingConfigureInputWeight[][]>(testingCriteriaDefaultValue)
    return {
        testingCriteria: testingCriteria,
        setTestingCriteria: setTestingCriteria,
    }
}

export default useTestingCriteria