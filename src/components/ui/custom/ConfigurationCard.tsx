import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {MoreHorizontalIcon, Plus, SlidersHorizontal, Trash} from "lucide-react";
import type {ConfigurationCardProps} from "@/types/props/ConfigurationCardProps.ts";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import type {ConfigureInputWeight} from "@/types/ConfigureInputWeight.ts";
import getInstanceDefaultValues from "@/constants/getInstanceDefaultValues.ts";
import {useEffect} from "react";
import Scrubber from "@/components/smoothui/scrubber";
import SmoothButton from "@/components/smoothui/smooth-button";
import HumanInputNormalizer from "@/components/ui/custom/HumanInputNormalizer.tsx";
import triggerNotification from "@/services/triggerNotification.ts";

const ConfigurationCard = (
    {
        configureInputHookProps,
        configureWeightHookProps,
        inputDataSetHolderHookProps,
        selectedConfigureInputWeightHookProps,
        configureBiasHookProps,
        selectedTrainingCriteriaHookProps,
        progressHookProps,
        outputLogHookProps,
        chartDataHookProps,
        visualizationInputWeightHookProps,
        visualizationBiasHookProps,
        trainedResultsHookProps,
    }: ConfigurationCardProps ) => {

    const addInputWeight = (input: number, weight: number): void => {
        if(input >= 0 && input <= 1 && weight >= 0 && weight <= 1) {
            selectedConfigureInputWeightHookProps.setSelectedConfigureInputWeight((prevState) => {
                addInputDataSetHolder(
                    {
                        id: (prevState.length > 0 ? prevState[prevState.length - 1].id : 0) + 1,
                        input: input,
                        weight: weight,
                    }
                )
                return [
                    ...prevState,
                    {
                        id: (prevState.length > 0 ? prevState[prevState.length - 1].id : 0) + 1,
                        input: input,
                        weight: weight,
                    }
                    ]
                }
            )
            resetInitialInputAndWeight()
            triggerNotification(
                "success",
                "Configure Input & Weight added successfully",
                "top-center"
            )
        }
    }

    const removeInputWeight = (id: number): void => {
        selectedConfigureInputWeightHookProps.setSelectedConfigureInputWeight((prevState) =>
            prevState.filter((inputWeight) =>
                inputWeight.id !== id
            )
        )
        removeInputDataSetHolder(id)
    }

    const addInputDataSetHolder = (inputWeight: ConfigureInputWeight): void => {
        const { inputDataSetHolder: inputDataSetHolderDefaultValue } = getInstanceDefaultValues()

        inputDataSetHolderHookProps.setInputDataSetHolder((prevState) =>
            [
                ...prevState,
                {
                    id: inputWeight.id,
                    value: inputDataSetHolderDefaultValue
                }
            ]
        )
    }

    const removeInputDataSetHolder = (id: number): void => {
        inputDataSetHolderHookProps.setInputDataSetHolder((prevState) =>
            prevState.filter((inputDataSetHolder) =>
                inputDataSetHolder.id !== id
            )
        )
    }

    const resetInitialInputAndWeight = (): void => {
        const { configureInput, configureWeight } = getHookDefaultValues()
        configureInputHookProps.setConfigureInput(configureInput)
        configureWeightHookProps.setConfigureWeight(configureWeight)
    }

    const triggerInitialBiasRelatedUpdates = (bias: number) => {
        configureBiasHookProps.setConfigureBias(bias)
        visualizationBiasHookProps.setVisualizationBias(bias)
    }

    const resetProgressData = (): void => {
        const { progress } = getHookDefaultValues()
        progressHookProps.setProgress(progress)
    }

    const resetTrainingLogData = (): void => {
        const { outputLog } = getHookDefaultValues()
        outputLogHookProps.setOutputLog(outputLog)
    }

    const resetTrainingChartData = (): void => {
        const { chartData: chartDataDefaultValues } = getHookDefaultValues()
        chartDataHookProps.setChartData(chartDataDefaultValues)
    }

    const resetTrainingResults = (): void => {
        const { trainedResults: trainedResultsDefaultValues } = getHookDefaultValues()
        trainedResultsHookProps.setTrainedResults(trainedResultsDefaultValues)
    }

    useEffect(() => {
        visualizationInputWeightHookProps.setVisualizationInputWeight(
            [ ...selectedConfigureInputWeightHookProps.selectedConfigureInputWeight ]
        )
        resetProgressData()
        resetTrainingLogData()
        resetTrainingChartData()
        resetTrainingResults()
    }, [selectedConfigureInputWeightHookProps.selectedConfigureInputWeight])

    useEffect(() => {
        resetProgressData()
        resetTrainingLogData()
        resetTrainingChartData()
        resetTrainingResults()
    }, [selectedTrainingCriteriaHookProps.selectedTrainingCriteria])

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-2">
                    <SlidersHorizontal size="18"/>
                    Input & Weight Configuration
                </CardTitle>
                <CardDescription>
                    Define your neuron's input signals and their corresponding weights. Add multiple input-weight pairs to build your training dataset.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-4">
                    <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex flex-col items-end gap-1">
                            <Scrubber
                                decimals={2}
                                label="Input Signal (0-1)"
                                max={1}
                                min={0}
                                onValueChange={(v) =>
                                    configureInputHookProps.setConfigureInput(Number(v.toFixed(2)))
                                }
                                step={0.1}
                                ticks={9}
                                value={configureInputHookProps.configureInput}
                            />
                            <HumanInputNormalizer
                                humanInputNormalizerTargetHookProps={
                                    {
                                        humanInputNormalizerTarget: configureInputHookProps.configureInput,
                                        humanInputNormalizerSetter: configureInputHookProps.setConfigureInput
                                    }
                                }
                            />
                        </div>
                        <Scrubber
                            decimals={2}
                            label="Weight Value (0.1-1)"
                            max={1}
                            min={0.1}
                            onValueChange={(v) =>
                                configureWeightHookProps.setConfigureWeight(Number(v.toFixed(2)))
                            }
                            step={0.1}
                            ticks={9}
                            value={configureWeightHookProps.configureWeight}
                        />
                    </div>
                    <SmoothButton
                        variant="default"
                        onClick={() =>
                            addInputWeight(
                                configureInputHookProps.configureInput,
                                configureWeightHookProps.configureWeight
                            )
                        }
                    >
                        <Plus size="18"/>
                        Add Input-Weight Pair
                    </SmoothButton>
                </div>
                <div className="flex flex-col gap-4">
                    <Card className="w-full" size="sm">
                        <CardHeader>
                            <CardTitle>Configured Inputs</CardTitle>
                            <CardDescription>Review and manage all input-weight pairs. Remove any pair using the delete action.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-70 lg:h-125 max-h-70 lg:max-h-125 overflow-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>#.</TableHead>
                                            <TableHead>Input</TableHead>
                                            <TableHead>Weight</TableHead>
                                            <TableHead className="text-right">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.length < 1 ? (
                                            <TableRow>
                                                <TableCell colSpan={4} className="text-center py-26 lg:py-54 text-muted-foreground">No Results</TableCell>
                                            </TableRow>
                                        ) : (selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.map((selectedConfigureInputWeight, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{index + 1}.</TableCell>
                                                    <TableCell className="font-medium">{selectedConfigureInputWeight.input}</TableCell>
                                                    <TableCell>{selectedConfigureInputWeight.weight}</TableCell>
                                                    <TableCell className="text-right">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button variant="ghost" size="icon" className="size-8">
                                                                    <MoreHorizontalIcon />
                                                                    <span className="sr-only">Open menu</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuItem
                                                                    variant="destructive"
                                                                    onClick={() =>
                                                                        removeInputWeight(selectedConfigureInputWeight.id)
                                                                    }>
                                                                    <Trash />
                                                                    Delete
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <div className="grid w-full grid-cols-1 gap-2">
                        <Scrubber
                            decimals={2}
                            label="Bias Term (-5 to +5)"
                            max={5}
                            min={-5}
                            onValueChange={(v) =>
                                triggerInitialBiasRelatedUpdates(Number(v.toFixed(2)))
                            }
                            step={0.1}
                            ticks={54}
                            value={configureBiasHookProps.configureBias}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ConfigurationCard