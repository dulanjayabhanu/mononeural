import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useTestingResults = () => {
    const { testingResults: testingResultsDefaultValue } = getHookDefaultValues()
    const [ testingResults, setTestingResults ] = useState<number[][]>(testingResultsDefaultValue)
    return {
        testingResults: testingResults,
        setTestingResults: setTestingResults
    }
}

export default useTestingResults