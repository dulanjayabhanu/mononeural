import type {GetTrainingAnalyzeReadyChartDataProps} from "@/types/props/GetTrainingAnalyzeReadyChartDataProps.ts";
import type {ChartReadyData} from "@/types/records/ChartReadyData.ts";

const getTrainingAnalyzeChartReadyData = ({ chartDataHookProps }: GetTrainingAnalyzeReadyChartDataProps): ChartReadyData[] => {

    return chartDataHookProps.chartData.map((chartData) => {
        const chartReadyData: ChartReadyData = {
            cycle: chartData.cycle,
            bias: chartData.bias,
            error: chartData.error,
        }
        chartData.weights.forEach((weight, index) => {
            chartReadyData[`weight${index + 1}`] = weight
        })
        return chartReadyData
    })
}

export default getTrainingAnalyzeChartReadyData