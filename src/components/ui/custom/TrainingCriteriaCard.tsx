import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Field, FieldContent, FieldGroup, FieldLabel, FieldTitle} from "@/components/ui/field.tsx";
import {Button} from "@/components/ui/button.tsx";
import {
    AlertTriangleIcon,
    MaximizeIcon,
    MinimizeIcon,
    MoreHorizontalIcon,
    Plus,
    Scale, Telescope,
    Trash
} from "lucide-react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import type {TrainingCriteriaCardProps} from "@/types/props/TrainingCriteriaCardProps.ts";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible.tsx";
import {useEffect, useState} from "react";
import type {ConfigureInputWeight} from "@/types/ConfigureInputWeight.ts";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import type {InputDataSetHolder} from "@/types/InputDataSetHolder.ts";
import getInstanceDefaultValues from "@/constants/getInstanceDefaultValues.ts";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import Scrubber from "@/components/smoothui/scrubber";
import SmoothButton from "@/components/smoothui/smooth-button";
import GenerateHumanInputNormalizer from "@/components/ui/custom/GenerateHumanInputNormalizer.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Alert, AlertTitle} from "@/components/ui/alert.tsx";
import triggerNotification from "@/services/triggerNotification.ts";

const TrainingCriteriaCard = (
    {
        selectedConfigureInputWeightHookProps,
        trainingCriteriaHookProps,
        selectedTrainingCriteriaHookProps,
        inputDataSetHolderHookProps,
        expectedOutputHookProps,
        calculatingCycleHookProps,
        minCalculateCycleHookProps,
        maxCalculateCycleHookProps,
        calculateCycleStepHookProps,
        learningRateHookProps,
        deepTrainingModeHookProps,
    }: TrainingCriteriaCardProps ) => {
    const {
        minCalculateCycles,
        maxCalculateCycles,
        calculateCycleStep,
    } = getHookDefaultValues()
    const {
        minDeepCalculateCycles,
        maxDeepCalculateCycles,
        deepCalculateCycleStep,
    } = getInstanceDefaultValues()

    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    const updateInput = (configureInputWeight: ConfigureInputWeight): void => {
        trainingCriteriaHookProps.setTrainingCriteria((prevState) => {
            const foundedInputWeight = prevState.inputDataSet.find((inputWeight) =>
                inputWeight.id === configureInputWeight.id
            )

            let newInputDataSet: ConfigureInputWeight[]

            if(foundedInputWeight) {
                newInputDataSet = prevState.inputDataSet.map((inputWeight) =>
                    inputWeight.id === configureInputWeight.id ?
                        { ...inputWeight, input: configureInputWeight.input } :
                        inputWeight
                )
            }else {
                newInputDataSet = [...prevState.inputDataSet, configureInputWeight];
            }

            return {
                ...prevState,
                inputDataSet: newInputDataSet
            }
        })
    }

    const addTrainingCriteria = (): void => {
        if(selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.length > 0 &&
            trainingCriteriaHookProps.trainingCriteria.inputDataSet.length == selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.length){
            selectedTrainingCriteriaHookProps.setSelectedTrainingCriteria((prevState) =>
                [
                    ...prevState,
                    {
                        id: (prevState.length > 0 ? prevState[prevState.length - 1].id : 0) + 1,
                        inputDataSet: trainingCriteriaHookProps.trainingCriteria.inputDataSet.map((inputWeight) => (
                            {
                                ...inputWeight
                            }
                        )),
                        expectedOutput: expectedOutputHookProps.expectedOutput
                    }
                ]
            )
            resetInputDataSetHolder()
            resetTrainingCriteria()
            resetExpectedOutput()
            triggerNotification(
                "success",
                "Training criterion added successfully",
                "top-center"
            )
        } else {
            triggerNotification(
                "warning",
                "Configure Input & Weight Required",
                "top-center"
            )
        }
    }

    const removeTrainingCriteria = (id: number): void => {
        selectedTrainingCriteriaHookProps.setSelectedTrainingCriteria((prevState) =>
            prevState.filter((trainingCriteria) =>
                trainingCriteria.id !== id
            )
        )
    }

    const updateInputDataSetHolder = (configureInputWeight: ConfigureInputWeight): void => {
        inputDataSetHolderHookProps.setInputDataSetHolder((prevState) => {
            const inputDataSetHolder: InputDataSetHolder[] = [...prevState]
            const validInputDataSetHolders: InputDataSetHolder[] = inputDataSetHolder.filter((inputDataSetHolder) =>
                inputDataSetHolder.id !== configureInputWeight.id
            )
            validInputDataSetHolders.push(
                {
                    id: configureInputWeight.id,
                    value: configureInputWeight.input
                }
            )
            return validInputDataSetHolders
        })
    }

    const triggerInputDataSetValueUpdate = (configureInputWeight: ConfigureInputWeight): void => {
        updateInput(configureInputWeight)
        updateInputDataSetHolder(configureInputWeight)
    }

    const initializeTrainingCriteriaInputs = (): void => {
        const { inputDataSet: inputDataSetDefaultValue } = getInstanceDefaultValues()
        trainingCriteriaHookProps.setTrainingCriteria((prevState) => (
            {
                ...prevState,
                inputDataSet: selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.map((inputWeight) => (
                    {
                        ...inputWeight,
                        input: inputDataSetDefaultValue
                    }
                ))
            }
        ))
    }

    const resetInputDataSetHolder = (): void => {
        const { inputDataSetHolder: defaultValue } = getInstanceDefaultValues()
        inputDataSetHolderHookProps.setInputDataSetHolder((prevState) =>
            prevState.map((item) => (
                {
                    ...item,
                    value: defaultValue
                }
            ))
        )
    }

    const resetTrainingCriteria = (): void => {
        const {
            configureInput: configureInputDefaultValue,
            expectedOutput: expectedOutputDefaultValue,
        } = getHookDefaultValues()

        trainingCriteriaHookProps.setTrainingCriteria((prevState) => (
            {
                ...prevState,
                inputDataSet: prevState.inputDataSet.map((inputWeight) => (
                    {
                        ...inputWeight,
                        input: configureInputDefaultValue
                    }
                    )),
                expectedOutput: expectedOutputDefaultValue
            }
        ))
    }

    const resetSelectedTrainingCriteria = (): void => {
        const { selectedTrainingCriteria: selectedTrainingCriteriaDefaultValue } = getHookDefaultValues()
        selectedTrainingCriteriaHookProps.setSelectedTrainingCriteria(selectedTrainingCriteriaDefaultValue)
    }

    const resetExpectedOutput = (): void => {
        const { expectedOutput: expectedOutputDefaultValue } = getHookDefaultValues()
        expectedOutputHookProps.setExpectedOutput(expectedOutputDefaultValue)
    }

    const resetLearningRate = (): void => {
        const { learningRate: learningRateDefaultValue } = getHookDefaultValues()
        learningRateHookProps.setLearningRate(learningRateDefaultValue)
    }

    const resetCalculateCycles = (): void => {
        const { calculateCycle: calculateCycleDefaultValue } = getHookDefaultValues()
        calculatingCycleHookProps.setCalculatingCycle(calculateCycleDefaultValue)
    }

    useEffect(() => {
        resetExpectedOutput()
        resetSelectedTrainingCriteria()
        resetInputDataSetHolder()
        resetLearningRate()
        resetCalculateCycles()
        initializeTrainingCriteriaInputs()
        deepTrainingModeHookProps.setDeepTrainingMode(false)
    }, [selectedConfigureInputWeightHookProps.selectedConfigureInputWeight])

    useEffect(() => {
        if (deepTrainingModeHookProps.deepTrainingMode) {
            minCalculateCycleHookProps.setMinCalculateCycle(minDeepCalculateCycles)
            maxCalculateCycleHookProps.setMaxCalculateCycle(maxDeepCalculateCycles)
            calculateCycleStepHookProps.setCalculateCycleStep(deepCalculateCycleStep)
            calculatingCycleHookProps.setCalculatingCycle(minDeepCalculateCycles)
        } else {
            minCalculateCycleHookProps.setMinCalculateCycle(minCalculateCycles)
            maxCalculateCycleHookProps.setMaxCalculateCycle(maxCalculateCycles)
            calculateCycleStepHookProps.setCalculateCycleStep(calculateCycleStep)
            calculatingCycleHookProps.setCalculatingCycle(minCalculateCycles)
        }
    }, [deepTrainingModeHookProps.deepTrainingMode])

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-2">
                    <Scale size="20" />
                    Training Configuration
                </CardTitle>
                <CardDescription>
                    Define your training dataset with multiple input-output pairs and configure learning parameters. Each criterion represents one training example.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-4">
                    <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="flex w-full items-start gap-2"
                    >
                        <FieldGroup className={selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.length > 1 ? "grid w-full grid-cols-1 md:grid-cols-2 gap-2" : "grid w-full grid-cols-1 gap-2"}>
                            {selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.length < 1 ? (
                                <Field className="w-full col-span-2">
                                    <FieldLabel htmlFor="radius-x">
                                        Input Data Set
                                    </FieldLabel>
                                    <div className="w-full p-4 border rounded-xl text-center">
                                        <p className="leading-7 text-muted-foreground">No Results</p>
                                    </div>
                                </Field>
                            ) : (selectedConfigureInputWeightHookProps.selectedConfigureInputWeight
                                    .slice(0, 2)
                                    .map((inputWeight, index) =>
                                        <div
                                            key={inputWeight.id}
                                            className="flex flex-col items-end gap-1"
                                        >
                                            <Scrubber
                                                key={index}
                                                decimals={2}
                                                label={`Input ${index + 1} (0-1)`}
                                                max={1}
                                                min={0}
                                                onValueChange={(v) =>
                                                    triggerInputDataSetValueUpdate(
                                                        {
                                                            ...inputWeight,
                                                            input: Number(v.toFixed(2))
                                                        }
                                                    )
                                                }
                                                step={0.1}
                                                ticks={9}
                                                value={inputDataSetHolderHookProps.inputDataSetHolder.find((inputDataSetHolder) => inputDataSetHolder.id === inputWeight.id)?.value || 0}
                                            />
                                            <GenerateHumanInputNormalizer
                                                inputDataSetHolderHookProps={inputDataSetHolderHookProps}
                                                trainingCriteriaHookProps={trainingCriteriaHookProps}
                                                targetConfigureWeight={inputWeight}
                                            />
                                        </div>
                                    )
                            )}
                            <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
                                {selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.length > 2 ? (
                                    selectedConfigureInputWeightHookProps.selectedConfigureInputWeight
                                        .slice(2, selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.length)
                                        .map((inputWeight, index) =>
                                            <div
                                                key={inputWeight.id}
                                                className="flex flex-col items-end gap-1"
                                            >
                                                <Scrubber
                                                    key={index}
                                                    decimals={2}
                                                    label={`Input ${index + 3} (0-1)`}
                                                    max={1}
                                                    min={0}
                                                    onValueChange={(v) =>
                                                        triggerInputDataSetValueUpdate(
                                                            {
                                                                ...inputWeight,
                                                                input: Number(v.toFixed(2))
                                                            }
                                                        )
                                                    }
                                                    step={0.1}
                                                    ticks={9}
                                                    value={inputDataSetHolderHookProps.inputDataSetHolder.find((inputDataSetHolder) => inputDataSetHolder.id === inputWeight.id)?.value || 0}
                                                />
                                                <GenerateHumanInputNormalizer
                                                    inputDataSetHolderHookProps={inputDataSetHolderHookProps}
                                                    trainingCriteriaHookProps={trainingCriteriaHookProps}
                                                    targetConfigureWeight={inputWeight}
                                                />
                                            </div>
                                        )
                                ) : null}
                            </CollapsibleContent>
                        </FieldGroup>
                        {selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.length > 2 ? (
                            <CollapsibleTrigger asChild>
                                <SmoothButton
                                    variant="default"
                                    size={"icon"}
                                    className="h-9 flex justify-center align-center p-2"
                                >
                                    {isOpen ? <MinimizeIcon /> : <MaximizeIcon />}
                                </SmoothButton>
                            </CollapsibleTrigger>
                        ) : null}
                    </Collapsible>
                    <Scrubber
                        decimals={2}
                        label="Target Output (0-1)"
                        max={1}
                        min={0}
                        onValueChange={(v) =>
                            expectedOutputHookProps.setExpectedOutput(Number(v.toFixed(2)))
                        }
                        step={0.1}
                        ticks={9}
                        value={expectedOutputHookProps.expectedOutput}
                    />
                    <SmoothButton
                        variant="default"
                        onClick={() =>
                            addTrainingCriteria()
                        }
                    >
                        <Plus size="18"/>
                        Add Criterion
                    </SmoothButton>
                </div>
                <div className="flex flex-col gap-4">
                    <Card className="w-full" size="sm">
                        <CardHeader>
                            <CardTitle>	Training Dataset</CardTitle>
                            <CardDescription>Review all training examples. Each row represents one training iteration. Delete rows to modify your dataset.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-70 overflow-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>#.</TableHead>
                                            {selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.length < 1 ? (
                                                <React.Fragment>
                                                    <TableHead>Input</TableHead>
                                                </React.Fragment>
                                            ) : (selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.map((inputWeight, index) =>
                                                <TableHead key={inputWeight.id}>Input {index + 1}</TableHead>
                                            ))}
                                            <TableHead>Expected Output</TableHead>
                                            <TableHead className="text-right">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {selectedTrainingCriteriaHookProps.selectedTrainingCriteria.length < 1 ? (
                                            <TableRow>
                                                <TableCell colSpan={selectedConfigureInputWeightHookProps.selectedConfigureInputWeight.length + 4} className="text-center py-27 text-muted-foreground">No Results</TableCell>
                                            </TableRow>
                                        ) : (selectedTrainingCriteriaHookProps.selectedTrainingCriteria.map((selectedTrainingCriteria, index) => (
                                                <TableRow key={index}>
                                                    <TableCell className="font-medium">{index + 1}.</TableCell>
                                                    {selectedTrainingCriteria.inputDataSet.map((inputData, index) =>
                                                        <TableCell key={index} className="font-medium">{inputData.input}</TableCell>
                                                    )}
                                                    <TableCell>{selectedTrainingCriteria.expectedOutput}</TableCell>
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
                                                                        removeTrainingCriteria(selectedTrainingCriteria.id)
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
                <div className="grid w-full grid-cols-1 gap-4">
                    <Scrubber
                        decimals={2}
                        label="Learning Rate (Step Size)"
                        max={1}
                        min={0.1}
                        onValueChange={(v) =>
                            learningRateHookProps.setLearningRate(Number(v.toFixed(2)))
                        }
                        step={0.1}
                        ticks={8}
                        value={learningRateHookProps.learningRate}
                    />
                    <div className="flex flex-col w-full gap-2">
                        <Scrubber
                            decimals={0}
                            label="Training Iterations"
                            max={maxCalculateCycleHookProps.maxCalculateCycle}
                            min={minCalculateCycleHookProps.minCalculateCycle}
                            onValueChange={(v) =>
                                calculatingCycleHookProps.setCalculatingCycle(v)
                            }
                            step={calculateCycleStepHookProps.calculateCycleStep}
                            ticks={((maxCalculateCycleHookProps.maxCalculateCycle - minCalculateCycleHookProps.minCalculateCycle) / calculateCycleStepHookProps.calculateCycleStep) - 1}
                            value={calculatingCycleHookProps.calculatingCycle}
                        />
                    </div>
                    <FieldLabel>
                        <Field orientation="horizontal">
                            <Checkbox
                                id="toggle-checkbox-2"
                                name="toggle-checkbox-2"
                                checked={deepTrainingModeHookProps.deepTrainingMode}
                                onCheckedChange={() =>
                                    deepTrainingModeHookProps.setDeepTrainingMode((prevState) => !prevState)
                                }
                            />
                            <FieldContent>
                                <FieldTitle>
                                    Deep Training Mode
                                    <Telescope size="18" />
                                </FieldTitle>
                                <div className="flex flex-col gap-2">
                                    <div className="w-full">
                                        <p>Enable extended training cycles for complex patterns. Requires significant processing power.</p>
                                    </div>
                                    {deepTrainingModeHookProps.deepTrainingMode ? (
                                        <Alert className="w-full border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
                                            <AlertTriangleIcon />
                                            <AlertTitle>High-Performance Training Warning</AlertTitle>
                                            <div className="w-full flex flex-row">
                                                <ul className="list-disc [&>li]:mt-2">
                                                    <li>
                                                        <p>Extended Processing Time</p>
                                                        <p>Higher training cycles (4,000-20,000) require more computational resources. Training may take minutes.</p>
                                                    </li>
                                                    <li>
                                                        <p>Browser Performance</p>
                                                        <p>Your browser tab may become unresponsive during training. Avoid switching tabs or using other applications during this process.</p>
                                                    </li>
                                                    <li>
                                                        <p>Large Log Files</p>
                                                        <p>Full training logs may exceed 400MB+. Ensure sufficient disk space before download.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Alert>
                                    ) : null}
                                </div>
                            </FieldContent>
                        </Field>
                    </FieldLabel>
                </div>
            </CardContent>
        </Card>
    )
}

export default TrainingCriteriaCard