import {ArrowUpIcon} from "lucide-react";
import {useEffect, useState} from "react";
import SmoothButton from "@/components/smoothui/smooth-button";

const BackToTopFab = () => {
    const [pageScrolled, setPageScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handlePageScroll = (): void => {
            setPageScrolled(window.scrollY > 200)
        }
        window.addEventListener("scroll", handlePageScroll)
        return () => window.removeEventListener("scroll", handlePageScroll)
    }, [])

    return pageScrolled ? (
        <SmoothButton
            variant="default"
            size="icon"
            className="fixed z-50 bottom-14 right-5"
            onClick={() => (
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        )}>
            <ArrowUpIcon />
        </SmoothButton>
    ) : null
}

export default BackToTopFab