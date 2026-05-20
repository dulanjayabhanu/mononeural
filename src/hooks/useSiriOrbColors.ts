import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import type {SiriOrbColors} from "@/types/SiriOrbColors.ts";
import {useState} from "react";

const useSiriOrbColors = () => {
    const { siriOrbColors: siriOrbColorsDefaultValue } = getHookDefaultValues()
    const [ siriOrbColors, setSiriOrbColors ] = useState<SiriOrbColors>(siriOrbColorsDefaultValue)
    return {
        siriOrbColors: siriOrbColors,
        setSiriOrbColors: setSiriOrbColors
    }
}

export default useSiriOrbColors