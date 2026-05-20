import type {GetChartConfigProps} from "@/types/props/GetChartConfigProps.ts";
import type {ChartConfig} from "@/types/records/ChartConfig.ts";

const getChartConfig = ({ chartDataHookProps }: GetChartConfigProps) => {

    const chartConfig: ChartConfig = {}

    for (let i = 0; i < chartDataHookProps.chartData[0]?.weights.length; i++) {
        chartConfig[`weight${i + 1}`] = {
            label: `Weight ${i + 1}`,
            color: `var(--chart-${i + 1})`
        }
    }
    chartConfig["bias"] = {
        label: "Bias",
        color: `var(--chart-${chartDataHookProps.chartData[0]?.weights.length + 1})`
    }
    chartConfig["error"] = {
        label: "Error",
        color: `var(--chart-${chartDataHookProps.chartData[0]?.weights.length + 2})`
    }
    return chartConfig
}

export default getChartConfig