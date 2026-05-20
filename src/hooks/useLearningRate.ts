import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import {useState} from "react";

const useLearningRate = () => {
    const { learningRate: learningRateDefaultValue } = getHookDefaultValues()
    const [ learningRate, setLearningRate ] = useState<number>(learningRateDefaultValue)
    return {
        learningRate: learningRate,
        setLearningRate: setLearningRate
    }
}

export default useLearningRate