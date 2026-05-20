import type {ChartData} from "@/types/ChartData.ts";
import React from "react";

export type TrainingAnalyzeChartProps = {
    chartDataHookProps: {
        chartData: ChartData[]
        setChartData: React.Dispatch<React.SetStateAction<ChartData[]>>
    }
}