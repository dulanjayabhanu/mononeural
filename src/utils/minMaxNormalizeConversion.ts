const minMaxNormalizeConversion = (
    maxValue: number,
    minValue: number,
    targetValue: number): number => {
    if (maxValue > minValue && targetValue <= maxValue && targetValue >= minValue)
        return (targetValue - minValue) / (maxValue - minValue)
    else
        return 0
}

export default minMaxNormalizeConversion