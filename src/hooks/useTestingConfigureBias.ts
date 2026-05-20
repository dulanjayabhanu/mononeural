import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useTestingConfigureBias = () => {
    const { testingConfigureBias: testingConfigureBiasDefaultValue } = getHookDefaultValues()
    const [ testingConfigureBias, setTestingConfigureBias ] = useState<number>(testingConfigureBiasDefaultValue)
    return {
        testingConfigureBias: testingConfigureBias,
        setTestingConfigureBias: setTestingConfigureBias
    }
}

export default useTestingConfigureBias