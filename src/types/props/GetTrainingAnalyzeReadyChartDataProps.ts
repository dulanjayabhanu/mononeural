import type {ChartData} from "@/types/ChartData.ts";
import React from "react";

export type GetTrainingAnalyzeReadyChartDataProps = {
    chartDataHookProps: {
        chartData: ChartData[]
        setChartData: React.Dispatch<React.SetStateAction<ChartData[]>>
    }
}