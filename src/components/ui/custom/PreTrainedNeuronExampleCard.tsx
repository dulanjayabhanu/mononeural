import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useNavigate} from "react-router";
import type {PreTrainedNeuronExampleCardProps} from "@/types/props/PreTrainedNeuronExampleCardProps.ts";
import {Badge} from "@/components/ui/badge.tsx";
import {Pointer} from "lucide-react";

const PreTrainedNeuronExampleCard = (
    {
        preTrainedNeuronExampleInternalData,
    }: PreTrainedNeuronExampleCardProps ) => {
    const navigate = useNavigate()

    const handleSwitchBetweenExampleToTesting = (): void => {
        navigate(
            "/tester",
            {
                state: {...preTrainedNeuronExampleInternalData}
            }
        )
    }

    return (
        <Card
            className="relative w-full pt-0 select-none hover:cursor-pointer"
            onClick={() =>
                handleSwitchBetweenExampleToTesting()
            }
        >
            <img
                src={`/${preTrainedNeuronExampleInternalData.id}.svg`}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-90 dark:brightness-80"
            />
            <CardHeader className="relative overflow-hidden">
                <CardTitle>{preTrainedNeuronExampleInternalData.title}</CardTitle>
                <CardDescription className="h-auto md:h-35">
                    {preTrainedNeuronExampleInternalData.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-full flex flex-row gap-2 flex-wrap">
                    <Badge variant="outline">Inputs <span className="text-muted-foreground opacity-60">&nbsp;&bull;&nbsp;</span> {preTrainedNeuronExampleInternalData.inputLabels.length}</Badge>
                    <Badge variant="outline">Learning Rate <span className="text-muted-foreground opacity-60">&nbsp;&bull;&nbsp;</span> {preTrainedNeuronExampleInternalData.learningRate}</Badge>
                    <Badge variant="outline">Cycles <span className="text-muted-foreground opacity-60">&nbsp;&bull;&nbsp;</span> {new Intl.NumberFormat('en-us').format(preTrainedNeuronExampleInternalData.cycleCount)}</Badge>
                </div>
                <p className="flex flex-row gap-2 justify-center items-center text-muted-foreground text-xs opacity-60 pt-6">
                    <Pointer size={14} />
                    Click to test in neuron simulator
                </p>
            </CardContent>
        </Card>
    )
}

export default PreTrainedNeuronExampleCard