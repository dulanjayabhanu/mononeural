const downloadStringContent = (targetContent: string, fileName: string, fileExtension: string): void => {
    const finalFileName: string = `${fileName}-${new Date().toISOString().replace(/[:.]/g, "-")}.${fileExtension}`
    const blob = new Blob(
        [targetContent],
        {
            type: "text/plain"
        }
    )
    const url: string = URL.createObjectURL(blob)

    const link: HTMLAnchorElement = document.createElement("a")
    link.href = url
    link.download = finalFileName
    document.body.appendChild(link)
    link.click()
    document.removeChild(link)

    URL.revokeObjectURL(url)
}

export default downloadStringContent