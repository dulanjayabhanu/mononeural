import type {DocumentationReadableContentProps} from "@/types/props/DocumentationReadableContentProps.ts";
import type {DocumentElement} from "@/types/DocumentElement.ts";
import getDocumentElements from "@/constants/getDocumentElements.ts";
import type {DocumentSectionContent} from "@/types/DocumentSectionContent.ts";
import SmoothButton from "@/components/smoothui/smooth-button";
import {ChevronLeft, ChevronRight} from "lucide-react";
import extractDocumentNavigationPageContents from "@/utils/extractDocumentNavigationPageContents.ts";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";
import React from "react";
import DocumentationImageCard from "@/components/ui/custom/DocumentationImageCard.tsx";
import MobileNavigationMenuForDocumentation from "@/components/ui/custom/MobileNavigationMenuForDocumentation.tsx";
import {SidebarTrigger} from "@/components/ui/sidebar.tsx";

const DocumentationReadableContent = (
    {
        documentationReadableContentHookProps,
    }: DocumentationReadableContentProps ) => {

    const { documentImage: documentImageDefaultValue } = getHookDefaultValues()
    const { p, list } = getDocumentElements()

    const handleDynamicDocumentSubContentRender = (targetDocumentSubSection: DocumentSectionContent) => {
        const renderElementType: DocumentElement = targetDocumentSubSection.renderElement
        switch (renderElementType) {
            case p:
                return (
                    <React.Fragment>
                        {targetDocumentSubSection.content.map((documentSubSectionContent, index) => (
                            <p className="leading-7" key={index}>
                                {documentSubSectionContent}
                            </p>
                        ))}
                    </React.Fragment>
                )
            case list:
                return (
                    <ul className="ml-6 list-disc [&>li]:mt-2">
                        {targetDocumentSubSection.content.map((documentSubSectionContent, index) => (
                            <li className="leading-7" key={index}>
                                {documentSubSectionContent}
                            </li>
                        ))}
                    </ul>
                )
        }
    }

    const handleDocumentNavigationContent = (isForwardNavigation: boolean) => {
        const { documentationReadableContent: documentationReadableContentDefaultValue } = getHookDefaultValues()
        const navigateDocumentContent = extractDocumentNavigationPageContents(
            documentationReadableContentHookProps.documentationReadableContent.previousPageId,
            documentationReadableContentHookProps.documentationReadableContent.nextPageId
        )
        if (isForwardNavigation &&
            navigateDocumentContent.nextDocumentPageContent.id !== documentationReadableContentDefaultValue.nextPageId)
            documentationReadableContentHookProps.setDocumentationReadableContent(
                {
                    ...navigateDocumentContent.nextDocumentPageContent
                }
            )
        if (!isForwardNavigation &&
            navigateDocumentContent.previousDocumentPageContent.id !== documentationReadableContentDefaultValue.previousPageId)
            documentationReadableContentHookProps.setDocumentationReadableContent(
                {
                    ...navigateDocumentContent.previousDocumentPageContent
                }
            )
        autoScrollToDocumentationPageContent()
    }

    const autoScrollToDocumentationPageContent = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className="w-full max-w-4xl flex flex-col gap-4 px-4 lg:px-14 pt-10 pb-6 z-10 relative">
            <div className="fixed top-15 left-2 flex flex-row z-50 justify-end gap-4 py-6 md:py-0 ps-2 md:pe-0 md:hidden">
                <MobileNavigationMenuForDocumentation
                    documentationReadableContentHookProps={documentationReadableContentHookProps}
                />
            </div>
            <div className="absolute top-0 right-0 w-full flex flex-row justify-between gap-4 py-6 md:py-0 pe-2 md:pe-0">
                <SidebarTrigger className="z-20 opacity-0 2xl:opacity-100" />
                <div className="w-full flex flex-row justify-end gap-2">
                    {documentationReadableContentHookProps.documentationReadableContent.previousPageId ? (
                        <SmoothButton
                            variant="secondary"
                            size="icon"
                            onClick={() =>
                                handleDocumentNavigationContent(false)
                            }
                        >
                            <ChevronLeft />
                        </SmoothButton>
                    ) : null}
                    {documentationReadableContentHookProps.documentationReadableContent.nextPageId ? (
                        <SmoothButton
                            variant="secondary"
                            size="icon"
                            onClick={() =>
                                handleDocumentNavigationContent(true)
                            }
                        >
                            <ChevronRight />
                        </SmoothButton>
                    ) : null}
                </div>
            </div>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-10 md:mt-0">
                {documentationReadableContentHookProps.documentationReadableContent.title}
            </h2>
            {documentationReadableContentHookProps.documentationReadableContent.image.src !== documentImageDefaultValue.src ? (
                <DocumentationImageCard
                    documentImage={documentationReadableContentHookProps.documentationReadableContent.image}
                />
            ) : null}
            <p className="leading-7">
                {documentationReadableContentHookProps.documentationReadableContent.description}
            </p>
            {documentationReadableContentHookProps.documentationReadableContent.sections.map((documentSubSection) => (
                <React.Fragment key={documentSubSection.id}>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">
                        {documentSubSection.title}
                    </h4>
                    {documentSubSection.image.src !== documentImageDefaultValue.src ? (
                        <DocumentationImageCard
                            documentImage={documentSubSection.image}
                        />
                    ) : null}
                    {handleDynamicDocumentSubContentRender(documentSubSection) || null}
                </React.Fragment>
            ))}
            <div className={`w-full flex flex-col md:flex-row gap-4 ${documentationReadableContentHookProps.documentationReadableContent.nextPageId && documentationReadableContentHookProps.documentationReadableContent.previousPageId ? 
                "justify-between" : documentationReadableContentHookProps.documentationReadableContent.nextPageId && !documentationReadableContentHookProps.documentationReadableContent.previousPageId ? 
                    "justify-end" : !documentationReadableContentHookProps.documentationReadableContent.nextPageId && documentationReadableContentHookProps.documentationReadableContent.previousPageId ?
                "justify-start" : ""
            } py-8`}>
                {documentationReadableContentHookProps.documentationReadableContent.previousPageId ? (
                    <SmoothButton
                        className="capitalize"
                        variant="secondary"
                        size="sm"
                        onClick={() =>
                            handleDocumentNavigationContent(false)
                        }
                    >
                        <ChevronLeft />
                        {documentationReadableContentHookProps.documentationReadableContent.previousPageId.replaceAll("-", " ")}
                    </SmoothButton>
                ) : null}
                {documentationReadableContentHookProps.documentationReadableContent.nextPageId ? (
                    <SmoothButton
                        className="capitalize"
                        variant="secondary"
                        size="sm"
                        onClick={() =>
                            handleDocumentNavigationContent(true)
                        }
                    >
                        {documentationReadableContentHookProps.documentationReadableContent.nextPageId.replaceAll("-", " ")}
                        <ChevronRight />
                    </SmoothButton>
                ) : null}
            </div>
        </div>
    )
}

export default DocumentationReadableContent