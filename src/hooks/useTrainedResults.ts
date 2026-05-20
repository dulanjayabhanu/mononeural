import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";
import type {TrainedResults} from "@/types/TrainedResults.ts";

const useTrainedResults = () => {
    const { trainedResults: trainedResultsDefaultValues } = getHookDefaultValues()
    const [ trainedResults, setTrainedResults ] = useState<TrainedResults>(trainedResultsDefaultValues)
    return {
        trainedResults: trainedResults,
        setTrainedResults: setTrainedResults
    }
}

export default useTrainedResults