import React from "react";

export type TrainingLogCardProps = {
    progressHookProps: {
        progress: number
        setProgress: React.Dispatch<React.SetStateAction<number>>
    }
    outputLogHookProps: {
        outputLog: string
        setOutputLog: React.Dispatch<React.SetStateAction<string>>
    }
    downloadFullTrainingLogHookProps: {
        downloadFullTrainingLog: string,
        setDownloadFullTrainingLog: React.Dispatch<React.SetStateAction<string>>
    }
    calculatingCycleHookProps: {
        calculatingCycle: number
        setCalculatingCycle: React.Dispatch<React.SetStateAction<number>>
    }
}