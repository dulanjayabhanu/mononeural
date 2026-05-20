import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Field,} from "@/components/ui/field.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import type {TrainingLogCardProps} from "@/types/props/TrainingLogCardProps.ts";
import AnimatedProgressBar from "@/components/smoothui/animated-progress-bar";
import {NotebookPen} from "lucide-react";
import AnimatedTooltip from "@/components/smoothui/animated-tooltip";
import downloadStringContent from "@/services/downloadStringContent.ts";
import copyToClipBoard from "@/services/copyToClipBoard.ts";
import ButtonCopy from "@/components/smoothui/button-copy";
import ButtonDownload from "@/components/smoothui/custom/button-download";
import triggerNotification from "@/services/triggerNotification.ts";

const TrainingLogCard = (
    {
        progressHookProps,
        outputLogHookProps,
        downloadFullTrainingLogHookProps,
        calculatingCycleHookProps,
    }: TrainingLogCardProps ) => {

    const triggerTrainingSummaryCopy = async () => {
        if (outputLogHookProps.outputLog.length > 0)
            await copyToClipBoard(outputLogHookProps.outputLog)
        else
            triggerNotification(
                "warning",
                "Train the Neuron First",
                "top-center"
            )
    }

    const triggerFullTrainingLogDownload = () => {
        if (downloadFullTrainingLogHookProps.downloadFullTrainingLog.length > 0)
            downloadStringContent(
                downloadFullTrainingLogHookProps.downloadFullTrainingLog,
                `training-log-(${calculatingCycleHookProps.calculatingCycle}_cycles)`,
                "log"
            )
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
                    <NotebookPen size="18" />
                    Training Summary & Progress
                </CardTitle>
                <CardDescription>Monitor real-time training progress and view detailed performance metrics. Copy the summary or download the complete training log with cycle-by-cycle data.</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col h-full gap-2">
                <div className="w-full flex flex-row gap-4">
                    <div className="w-full">
                        <AnimatedProgressBar
                            color="#2a2b2d"
                            label={`Training Progress: ${progressHookProps.progress}%`}
                            value={progressHookProps.progress}
                        />
                    </div>
                    <div className="w-fit lg:w-full flex flex-row gap-2 justify-end items-end">
                        <AnimatedTooltip content="Copy summary to clipboard" placement="left">
                            <ButtonCopy
                                className="border-border bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
                                duration={500}
                                loadingDuration={500}
                                onCopy={async () =>
                                    await triggerTrainingSummaryCopy()
                                }
                            />
                        </AnimatedTooltip>
                        <AnimatedTooltip content="Download full training log (cycle-by-cycle data)" placement="left">
                            <ButtonDownload
                                className="border-border border-border bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
                                duration={500}
                                loadingDuration={500}
                                onDownload={() =>
                                    triggerFullTrainingLogDownload()
                                }
                            />
                        </AnimatedTooltip>
                    </div>
                </div>
                <Field className="w-full h-full">
                    <Textarea
                        style={{
                            fontFamily: "monospace"
                        }}
                        className="h-full min-h-100 max-h-100 text-[9px] sm:text-sm text-muted-foreground cursor-default hover:cursor-default"
                        id="textarea-message"
                        placeholder={`Training will begin when you click "Start Training". Summary and metrics will appear here.`}
                        readOnly={true}
                        value={outputLogHookProps.outputLog}
                    />
                </Field>
            </CardContent>
        </Card>
    )
}

export default TrainingLogCard