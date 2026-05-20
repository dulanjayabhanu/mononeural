const copyToClipBoard = async (targetText: string) => {
    await navigator.clipboard.writeText(targetText)
}

export default copyToClipBoard