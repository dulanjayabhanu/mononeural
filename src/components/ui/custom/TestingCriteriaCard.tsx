import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {MoreHorizontalIcon, SlidersHorizontal, Trash} from "lucide-react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Field, FieldLabel} from "@/components/ui/field.tsx";
import {Input} from "@/components/ui/input.tsx";
import type {TestingCriteriaCardProps} from "@/types/props/TestingCriteriaCardProps.ts";
import Scrubber from "@/components/smoothui/scrubber";
import getNavigationOrigins from "@/constants/getNavigationOrigins.ts";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";

const TestingCriteriaCard = (
    {
        testingConfigureInputWeightsHookProps,
        testingCriteriaHookProps,
        testingConfigureBiasHookProps,
        testingLowerTriggerMessageHookProps,
        testingHigherTriggerMessageHookProps,
        trainedResultsForTestingHookProps,
    }: TestingCriteriaCardProps) => {

    const { preTrainedNeuronPage } = getNavigationOrigins()
    const { testingConfigureInputWeight: testingConfigureInputWeightDefaultValue } = getHookDefaultValues()
    const removeTestingCriteria = (targetIndex: number) => {
        testingCriteriaHookProps.setTestingCriteria((prevState) =>
            [...prevState].filter((_, index) =>
                index !== targetIndex
            )
        )
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-2">
                    <SlidersHorizontal size="18"/>
                    Prediction Configuration
                </CardTitle>
                <CardDescription>
                    Review test cases and configure prediction output labels. Set bias and define meaningful messages for neuron predictions.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <Card className="w-full" size="sm">
                        <CardHeader>
                            <CardTitle>Test Dataset</CardTitle>
                            <CardDescription>All test input combinations. Each row represents one prediction test.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-70 lg:h-80 max-h-70 lg:max-h-80 overflow-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>#.</TableHead>
                                            {testingConfigureInputWeightsHookProps.testingConfigureInputWeights.length < 1 ? (
                                                <TableHead>Input</TableHead>
                                            ) : testingConfigureInputWeightsHookProps.testingConfigureInputWeights.map((testingConfigureInputWeight, index) => (
                                                <TableHead key={testingConfigureInputWeight.id} className="capitalize">{testingConfigureInputWeight.label.length > 0 && testingConfigureInputWeight.label !== testingConfigureInputWeightDefaultValue.label ? (testingConfigureInputWeight.label) : (`Input ${index + 1}`)}</TableHead>
                                            ))}
                                            {trainedResultsForTestingHookProps.trainedResultsForTesting.navigationOrigin !== preTrainedNeuronPage ? (
                                                <TableHead className="text-right">Action</TableHead>
                                            ) : null}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {testingCriteriaHookProps.testingCriteria.length < 1 ? (
                                            <TableRow>
                                                <TableCell colSpan={(testingConfigureInputWeightsHookProps.testingConfigureInputWeights.length < 1 ? 1 : testingConfigureInputWeightsHookProps.testingConfigureInputWeights.length) + 2} className="text-center py-26 lg:py-32 text-muted-foreground">No Results</TableCell>
                                            </TableRow>
                                        ) : (testingCriteriaHookProps.testingCriteria.map((testingConfigureInputWeights, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="font-medium">{index + 1}.</TableCell>
                                                {testingConfigureInputWeights.map((testingConfigureInputWeight) => (
                                                    <TableCell
                                                        className="font-medium"
                                                        key={testingConfigureInputWeight.id}
                                                    >{testingConfigureInputWeight.input}</TableCell>
                                                ))}
                                                {trainedResultsForTestingHookProps.trainedResultsForTesting.navigationOrigin !== preTrainedNeuronPage ? (
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
                                                                        removeTestingCriteria(index)
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
                    {trainedResultsForTestingHookProps.trainedResultsForTesting.weights.length < 1 ? (
                        <Scrubber
                            decimals={2}
                            label="Bias Term (-5 to +5)"
                            max={5}
                            min={-5}
                            step={0.1}
                            ticks={54}
                            onValueChange={(v) =>
                                testingConfigureBiasHookProps.setTestingConfigureBias(Number(v.toFixed(2)))
                            }
                            value={testingConfigureBiasHookProps.testingConfigureBias}
                        />
                    ) : (
                        <Scrubber
                            decimals={2}
                            label="Bias Term"
                            max={testingConfigureBiasHookProps.testingConfigureBias}
                            min={testingConfigureBiasHookProps.testingConfigureBias}
                            step={0}
                            ticks={0}
                            value={testingConfigureBiasHookProps.testingConfigureBias}
                        />
                    )}
                    <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                            Negative Prediction Label
                        </FieldLabel>
                        <Input
                            type="text"
                            id="checkout-7j9-card-number-uw1"
                            autoComplete="off"
                            placeholder="Negative"
                            maxLength={30}
                            onChange={(e) =>
                                testingLowerTriggerMessageHookProps.setTestingLowerTriggerMessage(e.target.value)
                            }
                            value={testingLowerTriggerMessageHookProps.testingLowerTriggerMessage}
                            readOnly={trainedResultsForTestingHookProps.trainedResultsForTesting.navigationOrigin === preTrainedNeuronPage}
                        />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-number-uw2">
                            Positive Prediction Label
                        </FieldLabel>
                        <Input
                            type="text"
                            id="checkout-7j9-card-number-uw2"
                            autoComplete="off"
                            maxLength={30}
                            placeholder="Positive"
                            onChange={(e) =>
                                testingHigherTriggerMessageHookProps.setTestingHigherTriggerMessage(e.target.value)
                            }
                            value={testingHigherTriggerMessageHookProps.testingHigherTriggerMessage}
                            readOnly={trainedResultsForTestingHookProps.trainedResultsForTesting.navigationOrigin === preTrainedNeuronPage}
                        />
                    </Field>
                </div>
            </CardContent>
        </Card>
    )
}

export default TestingCriteriaCard