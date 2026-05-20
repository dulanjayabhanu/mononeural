import type {NavigationOrigin} from "@/types/NavigationOrigin.ts";

const getNavigationOrigins = (): {
    artificialNeuronTrainerPage: NavigationOrigin,
    preTrainedNeuronPage: NavigationOrigin } => {
    return {
        artificialNeuronTrainerPage: "ArtificialNeuronTrainerPage",
        preTrainedNeuronPage: "PreTrainedNeuronPage"
    }
}

export default getNavigationOrigins