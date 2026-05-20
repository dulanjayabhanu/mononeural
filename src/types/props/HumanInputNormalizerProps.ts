import React from "react";

export type HumanInputNormalizerProps = {
    humanInputNormalizerTargetHookProps: {
        humanInputNormalizerTarget: number
        humanInputNormalizerSetter: React.Dispatch<React.SetStateAction<number>>
    }
}