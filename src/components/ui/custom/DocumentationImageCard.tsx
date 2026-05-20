import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import type {DocumentationImageCardProps} from "@/types/props/DocumentationImageCardProps.ts";

const DocumentationImageCard = (
    {
        documentImage,
    }: DocumentationImageCardProps ) => {
    return (
        <div className="w-full max-w-xl">
            <figure className="w-full">
                <AspectRatio ratio={16 / 9} className="rounded-xl bg-muted">
                    <img
                        src={`/docs/${documentImage.src}`}
                        alt={documentImage.alt}
                        className="w-full rounded-xl object-cover aspect-video brightness-90 dark:brightness-80 border"
                    />
                </AspectRatio>
                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                    {documentImage.figure}
                </figcaption>
            </figure>
        </div>
    )
}

export default DocumentationImageCard