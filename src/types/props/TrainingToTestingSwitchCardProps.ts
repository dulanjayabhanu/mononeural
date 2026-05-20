import type {TrainedResults} from "@/types/TrainedResults.ts";
import * as React from "react";

export type TrainingToTestingSwitchCardProps = {
    trainedResultsHookProps: {
        trainedResults: TrainedResults
        setTrainedResults: React.Dispatch<React.SetStateAction<TrainedResults>>
    }
}