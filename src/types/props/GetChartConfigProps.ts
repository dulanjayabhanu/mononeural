import type {ChartData} from "@/types/ChartData.ts";
import React from "react";

export type GetChartConfigProps = {
    chartDataHookProps: {
        chartData: ChartData[]
        setChartData: React.Dispatch<React.SetStateAction<ChartData[]>>
    }
}