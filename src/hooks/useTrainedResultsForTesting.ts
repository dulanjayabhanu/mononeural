import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";
import type {TrainedResults} from "@/types/TrainedResults.ts";

const useTrainedResultsForTesting = () => {
    const { trainedResultsForTesting: trainedResultsForTestingDefaultValue } = getHookDefaultValues()
    const [ trainedResultsForTesting, setTrainedResultsForTesting ] = useState<TrainedResults>(trainedResultsForTestingDefaultValue)
    return {
        trainedResultsForTesting: trainedResultsForTesting,
        setTrainedResultsForTesting: setTrainedResultsForTesting
    }
}

export default useTrainedResultsForTesting