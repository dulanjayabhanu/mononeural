import type {TrainedResults} from "@/types/TrainedResults.ts";
import React from "react";

export type TrainingResultsCardProps = {
    trainedResultsHookProps: {
        trainedResults: TrainedResults
        setTrainedResults: React.Dispatch<React.SetStateAction<TrainedResults>>
    }
}