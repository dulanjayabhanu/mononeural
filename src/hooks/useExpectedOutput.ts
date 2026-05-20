import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useExpectedOutput = () => {
    const { expectedOutput: expectedOutputDefaultValue } = getHookDefaultValues()
    const [ expectedOutput, setExpectedOutput ] = useState<number>(expectedOutputDefaultValue)
    return {
        expectedOutput: expectedOutput,
        setExpectedOutput: setExpectedOutput
    }
}

export default useExpectedOutput