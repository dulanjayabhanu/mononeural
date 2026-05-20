import type {ConfigureInputWeight} from "@/types/ConfigureInputWeight.ts";

export type TrainingCriteria = {
    id: number
    inputDataSet: ConfigureInputWeight[]
    expectedOutput: number
}