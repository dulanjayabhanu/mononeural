import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useDeepTrainingMode = () => {
    const { deepTrainingMode: deepTrainingModeDefaultValues } = getHookDefaultValues()
    const [ deepTrainingMode, setDeepTrainingMode ] = useState<boolean>(deepTrainingModeDefaultValues)
    return {
        deepTrainingMode: deepTrainingMode,
        setDeepTrainingMode: setDeepTrainingMode
    }
}

export default useDeepTrainingMode