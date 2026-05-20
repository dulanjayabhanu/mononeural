import {Card, CardContent, CardTitle} from "@/components/ui/card.tsx";
import SmoothButton from "@/components/smoothui/smooth-button";
import {ArrowRight, FlaskConical} from "lucide-react";
import type {TrainingToTestingSwitchCardProps} from "@/types/props/TrainingToTestingSwitchCardProps.ts";
import {useNavigate} from "react-router";
import triggerNotification from "@/services/triggerNotification.ts";
import getNavigationOrigins from "@/constants/getNavigationOrigins.ts";

const TrainingToTestingSwitchCard = (
    {
        trainedResultsHookProps,
    }: TrainingToTestingSwitchCardProps ) => {
    const navigate = useNavigate()
    const handleSwitchBetweenTrainingToTesting = () => {
        const { artificialNeuronTrainerPage } = getNavigationOrigins()
        if (trainedResultsHookProps.trainedResults.weights.length > 0)
            navigate(
                "/tester",
                {
                    state: {
                        ...trainedResultsHookProps.trainedResults,
                        navigationOrigin: artificialNeuronTrainerPage,
                    }
                }
            )
        else
            triggerNotification(
                "warning",
                "Train the Neuron First",
                "top-center"
            )
    }

    return (
        <Card className="w-full max-w-md mx-auto rounded-2xl md:rounded-full">
            <CardContent className="w-full max-w-4xl flex flex-col h-full gap-4 text-center md:text-start">
                <div className="w-full flex flex-col md:flex-row items-center gap-4">
                    <div className="w-20 md:w-26 h-20 flex justify-center bg-linear-to-b from-[#FD4B4E] to-destructive items-center border rounded-full">
                        <FlaskConical
                            className="animate-pulse text-primary-foreground transition-all duration-300"
                            size={30}
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center gap-2">
                        <CardTitle>Test Your Trained Neuron</CardTitle>
                        <div className="w-full flex flex-col md:flex-row gap-2">
                            <SmoothButton
                                variant="default"
                                size="sm"
                                onClick={() =>
                                    handleSwitchBetweenTrainingToTesting()
                                }
                            >
                                <ArrowRight size={18} />
                                Go to Tester
                            </SmoothButton>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default TrainingToTestingSwitchCard