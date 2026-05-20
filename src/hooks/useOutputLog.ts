import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useOutputLog = () => {
    const { outputLog: outputLogDefaultValue } = getHookDefaultValues()
    const [ outputLog, setOutputLog ] = useState<string>(outputLogDefaultValue)
    return {
        outputLog: outputLog,
        setOutputLog: setOutputLog
    }
}

export default useOutputLog