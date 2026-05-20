import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ChessQueen, Copy, MoreHorizontalIcon} from "lucide-react";
import type {TrainingResultsCardProps} from "@/types/props/TrainingResultsCardProps.ts";
import ButtonCopy from "@/components/smoothui/button-copy";
import copyToClipBoard from "@/services/copyToClipBoard.ts";
import AnimatedTooltip from "@/components/smoothui/animated-tooltip";
import triggerNotification from "@/services/triggerNotification.ts";

const TrainingResultsCard = (
    {
        trainedResultsHookProps
    }: TrainingResultsCardProps) => {

    const triggerFinalBiasCopy = async () => {
        if (trainedResultsHookProps.trainedResults.weights.length > 0)
            await copyToClipBoard(String(trainedResultsHookProps.trainedResults.bias))
        else
            triggerNotification(
                "warning",
                "Train the Neuron First",
                "top-center"
            )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-row items-center gap-2">
                    <ChessQueen size="18" />
                    Trained Neuron Parameters
                </CardTitle>
                <CardDescription>
                    Export your trained weights and bias for use in external applications or further experimentation.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4">
                    <Card className="w-full" size="sm">
                        <CardHeader>
                            <CardTitle>Trained Weights</CardTitle>
                            <CardDescription>Final weight values after training completion. Copy individual weights or use the export feature to get all parameters at once.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-70 overflow-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>#.</TableHead>
                                            <TableHead>Input</TableHead>
                                            <TableHead>Final Weight</TableHead>
                                            <TableHead className="text-right">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {trainedResultsHookProps.trainedResults.weights.length < 1 ? (
                                            <TableRow>
                                                <TableCell colSpan={4} className="text-center py-27 text-muted-foreground">No Results</TableCell>
                                            </TableRow>
                                        ) : (trainedResultsHookProps.trainedResults.weights.map((weight, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>Input {index + 1}</TableCell>
                                                <TableCell>{weight}</TableCell>
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
                                                                variant="default"
                                                                onClick={async () =>
                                                                    await copyToClipBoard(String(weight))
                                                                }
                                                            >
                                                                <Copy />
                                                                Copy
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        )))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="w-full" size="sm">
                        <CardHeader>
                            <CardTitle>Final Bias Value</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-row justify-between gap-4">
                                {trainedResultsHookProps.trainedResults.weights.length < 1 ? (
                                    <p className="leading-7 not-first:mt-6 text-muted-foreground">No Results</p>
                                ) : (
                                    <p className="leading-7 not-first:mt-6">
                                        {trainedResultsHookProps.trainedResults.bias}
                                    </p>
                                )}
                                <AnimatedTooltip content="Copy bias value to clipboard" placement="left">
                                    <ButtonCopy
                                        className="border-border bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
                                        duration={500}
                                        loadingDuration={500}
                                        onCopy={async () =>
                                            await triggerFinalBiasCopy()
                                        }
                                    />
                                </AnimatedTooltip>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    )
}

export default TrainingResultsCard