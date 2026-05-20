import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Input} from "@/components/ui/input.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {
    ChevronsDown, ChevronsUp, Minus,
    MoreHorizontalIcon,
    Plus,
    SlidersHorizontal,
    Trash
} from "lucide-react";
import Scrubber from "@/components/smoothui/scrubber";
import SmoothButton from "@/components/smoothui/smooth-button";
import type {TestingConfigurationCardProps} from "@/types/props/TestingConfigurationCardProps.ts";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {Field} from "@/components/ui/field.tsx";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";
import triggerNotification from "@/services/triggerNotification.ts";
import getNavigationOrigins from "@/constants/getNavigationOrigins.ts";

const TestingConfigurationCard = (
    {
        testingConfigureInputWeightHookProps,
        testingConfigureInputWeightsHookProps,
        testingCriteriaHookProps,
        trainedResultsForTestingHookProps,
    }: TestingConfigurationCardProps ) => {

    const { preTrainedNeuronPage } = getNavigationOrigins()

    const addTestingConfigureWeight = (weight: number): void => {
        const { testingConfigureInputWeight: testingConfigureWeightDefaultValue } = getHookDefaultValues()
        testingConfigureInputWeightsHookProps.setTestingConfigureInputWeights((prevState) =>
            [
                ...prevState,
                {
                    id: prevState.length < 1 ? 1 : prevState[prevState.length - 1].id + 1,
                    weight: weight,
                    input: testingConfigureWeightDefaultValue.input,
                    min: testingConfigureWeightDefaultValue.min,
                    max: testingConfigureWeightDefaultValue.max,
                    label: testingConfigureWeightDefaultValue.label,
                }
            ]
        )
        resetTestingConfigureWeight()
        resetTestingCriteria()
        triggerNotification(
            "success",
            "Input added successfully",
            "top-center"
        )
    }

    const removeTestConfigureInputWeight = (id: number): void => {
        testingConfigureInputWeightsHookProps.setTestingConfigureInputWeights((prevState) =>
            [...prevState].filter((testingConfigureInputWeight) =>
                testingConfigureInputWeight.id !== id
            )
        )
        resetTestingCriteria()
    }

    const updateTestingConfigureInputWeight = (targetId: number, targetLabel: string | null, targetMin: number | null, targetMax: number | null, targetInput: number | null): void => {
        const { testingConfigureInputWeight: testingConfigureInputWeightDefaultValue } = getHookDefaultValues()

        testingConfigureInputWeightsHookProps.setTestingConfigureInputWeights((prevState) => {
            const newTestingConfigureInputWeights = [...prevState]
            newTestingConfigureInputWeights.forEach((testingConfigureInputWeight) => {
                if (testingConfigureInputWeight.id === targetId) {
                    if (targetLabel !== null)
                        testingConfigureInputWeight.label = targetLabel
                    if (targetInput !== null) {
                        if(targetInput >= testingConfigureInputWeight.min && targetInput <= testingConfigureInputWeight.max) {
                            testingConfigureInputWeight.input = targetInput
                        }else{
                            testingConfigureInputWeight.input = testingConfigureInputWeight.min
                        }
                    }
                    if (targetMin !== null) {
                        if(targetMin < testingConfigureInputWeight.max) {
                            testingConfigureInputWeight.min = targetMin
                        }else{
                            testingConfigureInputWeight.min = testingConfigureInputWeightDefaultValue.min
                        }
                        testingConfigureInputWeight.input = testingConfigureInputWeight.min
                    }
                    if (targetMax !== null) {
                        if(targetMax > testingConfigureInputWeight.min) {
                            testingConfigureInputWeight.max = targetMax
                        }else{
                            testingConfigureInputWeight.max = testingConfigureInputWeightDefaultValue.max
                        }
                        testingConfigureInputWeight.input = testingConfigureInputWeight.min
                    }
                    return
                }
            })
            return newTestingConfigureInputWeights
        })
    }

    const addTestingCriteria = (): void => {
        const targetTestingConfigureInputWeights = testingConfigureInputWeightsHookProps.testingConfigureInputWeights.map((testingConfigureInputWeight) => (
            {
                ...testingConfigureInputWeight
            }
        ))
        let isTestingCriteriaAddValid: boolean = true
        testingCriteriaHookProps.testingCriteria.forEach((testingConfigureInputWeight) => {
            let matchInputWeightCount: number = 0
            targetTestingConfigureInputWeights.forEach((targetTestingConfigureInputWeight, index) => {
                if (targetTestingConfigureInputWeight.input === testingConfigureInputWeight[index].input)
                    matchInputWeightCount ++
            })

            if (matchInputWeightCount === testingConfigureInputWeight.length) {
                isTestingCriteriaAddValid = false
                return
            }
        })
        if (isTestingCriteriaAddValid) {
            testingCriteriaHookProps.setTestingCriteria((prevState) =>
                [
                    ...prevState,
                    targetTestingConfigureInputWeights
                ]
            )
            resetInputInTestingConfigureInputWeights()
            triggerNotification(
                "success",
                "Data set added successfully",
                "top-center"
            )
        } else {
            triggerNotification(
                "warning",
                "Duplicate data set",
                "top-center"
            )
        }
    }

    const resetInputInTestingConfigureInputWeights = (): void => {
        testingConfigureInputWeightsHookProps.setTestingConfigureInputWeights((prevState) =>
            [...prevState].map((testingConfigureInputWeight) => (
                {
                    ...testingConfigureInputWeight,
                    input: testingConfigureInputWeight.min
                }
            ))
        )
    }

    const resetTestingConfigureWeight = (): void => {
        const { testingConfigureInputWeight: testingConfigureInputWeightDefaultValue } = getHookDefaultValues()
        testingConfigureInputWeightHookProps.setTestingConfigureInputWeight(testingConfigureInputWeightDefaultValue)
    }

    const resetTestingCriteria = (): void => {
        const { testingCriteria: testingCriteriaDefaultValue } = getHookDefaultValues()
        testingCriteriaHookProps.setTestingCriteria(testingCriteriaDefaultValue)
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-2">
                    <SlidersHorizontal size="18"/>
                    Weight & Input Setup
                </CardTitle>
                <CardDescription>
                    Configure neuron weights and define your input data with labels. Add multiple real-world data combinations to test predictions.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {trainedResultsForTestingHookProps.trainedResultsForTesting.weights.length < 1 ? (
                    <div className="w-full flex flex-col gap-4">
                        <div className="grid w-full">
                            <Scrubber
                                decimals={2}
                                label="Weight Value (0.1-1)"
                                max={1}
                                min={0.1}
                                step={0.1}
                                ticks={9}
                                onValueChange={(v) =>
                                    testingConfigureInputWeightHookProps.setTestingConfigureInputWeight((prevState) => (
                                        {
                                            ...prevState,
                                            weight: Number(v.toFixed(2))
                                        }
                                    ))
                                }
                                value={testingConfigureInputWeightHookProps.testingConfigureInputWeight.weight}
                            />
                        </div>
                        <SmoothButton
                            variant="default"
                            onClick={() =>
                                addTestingConfigureWeight(testingConfigureInputWeightHookProps.testingConfigureInputWeight.weight)
                            }
                        >
                            <Plus size="18"/>
                            Add Weight
                        </SmoothButton>
                    </div>
                ) : null}
                <div className="flex flex-col gap-4">
                    <Card className="w-full" size="sm">
                        <CardHeader>
                            <CardTitle>Configured Weights & Inputs</CardTitle>
                            <CardDescription>Define labels for each input, provide real data values, and specify the normalization range (min-max).</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className={trainedResultsForTestingHookProps.trainedResultsForTesting.weights.length > 0 ?
                                "h-70 lg:h-115 max-h-115 lg:max-h-115 overflow-auto" : "h-70 lg:h-90 max-h-90 lg:max-h-90 overflow-auto"}>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>#.</TableHead>
                                            <TableHead>Label</TableHead>
                                            <TableHead>Input Value</TableHead>
                                            <TableHead>Range (Min - Max)</TableHead>
                                            {testingConfigureInputWeightsHookProps.testingConfigureInputWeights.length < 1 ? (
                                                <TableHead className="text-right">Action</TableHead>
                                            ) : null}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {testingConfigureInputWeightsHookProps.testingConfigureInputWeights.length < 1 ? (
                                            <TableRow>
                                                <TableCell colSpan={5} className="text-center py-26 lg:py-36 text-muted-foreground">No Results</TableCell>
                                            </TableRow>
                                        ) : (testingConfigureInputWeightsHookProps.testingConfigureInputWeights.map((testingConfigureInputWeight, index) => (
                                            <TableRow key={testingConfigureInputWeight.id}>
                                                <TableCell className="font-medium">{index + 1}.</TableCell>
                                                <TableCell className="font-medium">
                                                    <Input
                                                        type="text"
                                                        id={`label${index + 1}`}
                                                        autoComplete="off"
                                                        className="w-fit max-w-28 md:max-w-32 lg:max-w-35"
                                                        onChange={(e) =>
                                                            updateTestingConfigureInputWeight(testingConfigureInputWeight.id, e.target.value, null, null, null)
                                                        }
                                                        value={testingConfigureInputWeight.label}
                                                        readOnly={trainedResultsForTestingHookProps.trainedResultsForTesting.navigationOrigin === preTrainedNeuronPage}
                                                    />
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    <Input
                                                        type="number"
                                                        id={`weight-value${index + 1}`}
                                                        className="w-fit max-w-28 md:max-w-32 lg:max-w-30"
                                                        onChange={(e) =>
                                                            updateTestingConfigureInputWeight(testingConfigureInputWeight.id, null, null, null, Number(e.target.value))
                                                        }
                                                        value={testingConfigureInputWeight.input}
                                                    />
                                                </TableCell>
                                                <TableCell className="font-medium">
                                                    <div className="max-w-60 flex flex-row items-center gap-1">
                                                        <Field>
                                                            <InputGroup>
                                                                <InputGroupInput
                                                                    type="number"
                                                                    id={`min-range${index + 1}`}
                                                                    className="w-fit max-w-20 md:max-w-32 lg:max-w-14"
                                                                    onChange={(e) =>
                                                                        updateTestingConfigureInputWeight(testingConfigureInputWeight.id, null, Number(e.target.value),null, null)
                                                                    }
                                                                    value={testingConfigureInputWeight.min}
                                                                    readOnly={trainedResultsForTestingHookProps.trainedResultsForTesting.navigationOrigin === preTrainedNeuronPage}
                                                                />
                                                                <InputGroupAddon align="inline-start">
                                                                    <ChevronsDown />
                                                                </InputGroupAddon>
                                                            </InputGroup>
                                                        </Field>
                                                        <Minus />
                                                        <Field>
                                                            <InputGroup>
                                                                <InputGroupInput
                                                                    type="number"
                                                                    id={`max-range${index + 1}`}
                                                                    className="w-fit max-w-20 md:max-w-32 lg:max-w-16"
                                                                    onChange={(e) =>
                                                                        updateTestingConfigureInputWeight(testingConfigureInputWeight.id, null, null, Number(e.target.value), null)
                                                                    }
                                                                    value={testingConfigureInputWeight.max}
                                                                    readOnly={trainedResultsForTestingHookProps.trainedResultsForTesting.navigationOrigin === preTrainedNeuronPage}
                                                                />
                                                                <InputGroupAddon align="inline-end">
                                                                    <ChevronsUp />
                                                                </InputGroupAddon>
                                                            </InputGroup>
                                                        </Field>
                                                    </div>
                                                </TableCell>
                                                {trainedResultsForTestingHookProps.trainedResultsForTesting.weights.length < 1 ? (
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
                                                                        removeTestConfigureInputWeight(testingConfigureInputWeight.id)
                                                                    }
                                                                >
                                                                    <Trash />
                                                                    Delete
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </TableCell>
                                                ) : null}
                                            </TableRow>
                                        )))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <SmoothButton
                        variant="default"
                        onClick={() =>
                            addTestingCriteria()
                        }
                    >
                        <Plus size="18"/>
                        Add Test Case
                    </SmoothButton>
                </div>
            </CardContent>
        </Card>
    )
}

export default TestingConfigurationCard