import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";
import type {ChartData} from "@/types/ChartData.ts";

const useChartData = () => {
    const { chartData: chartDataDefaultValue } = getHookDefaultValues()
    const [ chartData, setChartData ] = useState<ChartData[]>(chartDataDefaultValue)
    return {
        chartData: chartData,
        setChartData: setChartData
    }
}

export default useChartData