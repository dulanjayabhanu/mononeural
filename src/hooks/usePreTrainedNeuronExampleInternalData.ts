import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import type {PreTrainedNeuronExampleInternalData} from "@/types/PreTrainedNeuronExampleInternalData.ts";
import {useState} from "react";

const usePreTrainedNeuronExampleInternalData = () => {
    const { preTrainedNeuronExampleInternalData: preTrainedNeuronExampleInternalDataDefaultValue } = getHookDefaultValues()
    const [ preTrainedNeuronExampleInternalData, setPreTrainedNeuronExampleInternalData ] = useState<PreTrainedNeuronExampleInternalData[]>(preTrainedNeuronExampleInternalDataDefaultValue)
    return {
        preTrainedNeuronExampleInternalData: preTrainedNeuronExampleInternalData,
        setPreTrainedNeuronExampleInternalData: setPreTrainedNeuronExampleInternalData
    }
}

export default usePreTrainedNeuronExampleInternalData