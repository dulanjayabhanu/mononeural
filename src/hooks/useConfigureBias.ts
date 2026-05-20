import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useConfigureBias = () => {
    const { configureBias: configureBiasDefaultValue } = getHookDefaultValues()
    const [ configureBias, setConfigureBias ] = useState<number>(configureBiasDefaultValue)
    return {
        configureBias: configureBias,
        setConfigureBias: setConfigureBias
    }
}

export default useConfigureBias