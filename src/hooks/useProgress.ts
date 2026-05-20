import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useProgress = () => {
    const { progress: progressDefaultValue } = getHookDefaultValues()
    const [ progress, setProgress ] = useState<number>(progressDefaultValue)
    return {
        progress: progress,
        setProgress: setProgress
    }
}

export default useProgress