"use client"
import {ArrowDown, ChartNoAxesCombined} from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart"
import getChartConfig from "@/constants/getChartConfig.ts";
import type {TrainingAnalyzeChartProps} from "@/types/props/TrainingAnalyzeChartProps.ts";
import getTrainingAnalyzeChartReadyData from "@/utils/getTrainingAnalyzeChartReadyData.ts";
import type {ChartConfig} from "@/types/records/ChartConfig.ts";
import type {ChartReadyData} from "@/types/records/ChartReadyData.ts";
import React from "react";

const TrainingAnalyzeChart = ({ chartDataHookProps }: TrainingAnalyzeChartProps ) => {

    const chartConfig: ChartConfig = getChartConfig(
        {
            chartDataHookProps: chartDataHookProps
        }
    )
    const chartReadyData: ChartReadyData[] = getTrainingAnalyzeChartReadyData(
        {
            chartDataHookProps: chartDataHookProps
        }
    )

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-2">
                    <ChartNoAxesCombined size="18" />
                    Parameter Evolution Chart
                </CardTitle>
                <CardDescription>
                    <div className="flex flex-row items-center">X-axis: Training cycles &nbsp; &bull; &nbsp; Y-axis: Parameter values (Weights, Bias, Error)</div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer className="min-h-50" config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartReadyData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="cycle"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(6, 9)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        {chartDataHookProps.chartData[0]?.weights.map((_, index) => (
                            <Line
                                key={index + 1}
                                dataKey={`weight${index + 1}`}
                                type="monotone"
                                stroke={`var(--color-weight${index + 1})`}
                                strokeWidth={2}
                                dot={false}
                            />
                        ))}
                        <Line
                            dataKey="bias"
                            type="monotone"
                            stroke="var(--sidebar-primary)"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="error"
                            type="monotone"
                            stroke="var(--destructive)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="w-full h-full flex flex-col items-start">
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="flex flex-col gap-2">
                        <div className="w-full flex flex-row items-center gap-2 leading-none font-medium">
                            {chartDataHookProps.chartData.length < 1 ? (
                                <React.Fragment>Error Reduction</React.Fragment>
                            ) : (chartDataHookProps.chartData[0].error === 0 ? (
                                <React.Fragment>Error Reduction: 100.00%<ArrowDown className="w-4 h-4" /></React.Fragment>
                            ) : (
                                <React.Fragment>Error Reduction: {(((chartDataHookProps.chartData[0].error - chartDataHookProps.chartData[chartDataHookProps.chartData.length - 1].error) / chartDataHookProps.chartData[0].error) * 100).toFixed(2)}% <ArrowDown className="w-4 h-4"/></React.Fragment>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            {chartDataHookProps.chartData.length < 1 ? (
                                <React.Fragment>No Results</React.Fragment>
                            ) : (
                                <React.Fragment>Tracked across {chartDataHookProps.chartData.length} training iterations.</React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default TrainingAnalyzeChart