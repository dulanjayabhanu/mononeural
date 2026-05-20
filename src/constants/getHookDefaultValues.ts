import getNavigationOrigins from "@/constants/getNavigationOrigins.ts";

const getHookDefaultValues = () => {
    const { artificialNeuronTrainerPage } = getNavigationOrigins()
    return {
        configureInput: 0,
        configureWeight: 0.1,
        configureBias: 0,
        inputDataSetHolder: [],
        selectedConfigureInputWeight: [],
        trainingCriteria: {
            id: 0,
            inputDataSet: [],
            expectedOutput: 0
        },
        selectedTrainingCriteria: [],
        expectedOutput: 0,
        calculateCycle: 400,
        learningRate: 0.5,
        progress: 0,
        outputLog: "",
        chartData: [],
        activationFunction: 0,
        trainedResults: {
            weights: [],
            bias: 0,
            navigationOrigin: artificialNeuronTrainerPage,
        },
        maxHumanInputValue: 0,
        minHumanInputValue: 0,
        targetHumanInputValue: 0,
        targetBooleanHumanInputValue: "True",
        downloadFullTrainingLog: "",
        siriOrbColors: {
            bg: "oklch(0.704 0.191 22.216)",
            c1: "oklch(0.577 0.245 27.325)",
            c2: "oklch(0.546 0.245 262.881)",
            c3: "oklch(0.685 0.169 237.323)",
        },
        minCalculateCycles: 400,
        maxCalculateCycles: 4_000,
        calculateCycleStep: 200,
        deepTrainingMode: false,
        testingConfigureInputWeights: [],
        testingConfigureInputWeight: {
            id: 0,
            weight: 0.1,
            input: 0,
            min: 0,
            max: 100,
            label: "N/A",
        },
        testingCriteria: [],
        testingConfigureBias: 0,
        testingLowerTriggerMessage: "Negative",
        testingHigherTriggerMessage: "Positive",
        testingResults: [],
        trainedResultsForTesting: {
            weights: [],
            bias: 0,
            navigationOrigin: artificialNeuronTrainerPage,
        },
        preTrainedNeuronExampleInternalData: [],
        documentationReadableContent: {
            id: "",
            title: "",
            description: "",
            image: {
                src: "",
                alt: "",
                figure: "",
            },
            isDocumentSubPageContentRenderInSideBar: false,
            sections: [],
            previousPageId: "",
            nextPageId: "",
            subPages: [],
        },
        documentImage: {
            src: "",
            alt: "",
            figure: "",
        }
    }
}

export default getHookDefaultValues