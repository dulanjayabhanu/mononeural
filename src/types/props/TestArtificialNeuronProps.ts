import type {TestingConfigureInputWeight} from "@/types/TestingConfigureInputWeight.ts";
import  {type Dispatch, type SetStateAction} from "react";
import type {SiriOrbColors} from "@/types/SiriOrbColors.ts";
import * as React from "react";

export type TestArtificialNeuronProps = {
    testingCriteriaHookProps: {
        testingCriteria: TestingConfigureInputWeight[][]
        setTestingCriteria: Dispatch<SetStateAction<TestingConfigureInputWeight[][]>>
    }
    testingConfigureBiasHookProps: {
        testingConfigureBias: number,
        setTestingConfigureBias: Dispatch<SetStateAction<number>>
    }
    testingResultsHookProps: {
        testingResults: number[][]
        setTestingResults: Dispatch<SetStateAction<number[][]>>
    }
    siriOrbColorsHookProps: {
        siriOrbColors: SiriOrbColors
        setSiriOrbColors: React.Dispatch<React.SetStateAction<SiriOrbColors>>
    }
}