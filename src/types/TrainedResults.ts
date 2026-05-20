import type {NavigationOrigin} from "@/types/NavigationOrigin.ts";

export type TrainedResults = {
    weights: number[]
    bias: number
    navigationOrigin: NavigationOrigin
}