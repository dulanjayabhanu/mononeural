import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useDownloadFullTrainingLog = () => {
    const { downloadFullTrainingLog: downloadFullTrainingLogDefaultValue } = getHookDefaultValues()
    const [ downloadFullTrainingLog, setDownloadFullTrainingLog ] = useState<string>(downloadFullTrainingLogDefaultValue)
    return {
        downloadFullTrainingLog: downloadFullTrainingLog,
        setDownloadFullTrainingLog: setDownloadFullTrainingLog
    }
}

export default useDownloadFullTrainingLog