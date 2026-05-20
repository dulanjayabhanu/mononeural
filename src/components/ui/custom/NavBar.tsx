import {useEffect} from "react";
import usePageScroll from "@/hooks/usePageScroll.ts";
import {Link} from "react-router";
import MobileNavigationMenu from "@/components/ui/custom/MobileNavigationMenu.tsx";
import MainNavigationMenu from "@/components/ui/custom/MainNavigationMenu.tsx";
import ThemeToggler from "@/components/ui/custom/ThemeToggler.tsx";
import {useTheme} from "@/components/theme-provider.tsx";
import GitHubStarsAnimation from "@/components/smoothui/custom/github-stars-animation";

const NavBar = () => {
    const {pageScrolled, setPageScrolled} = usePageScroll()
    const { theme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setPageScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed w-full top-0 z-50 ${pageScrolled ? "backdrop-blur bg-background/20 border-b" : ""}`}>
            <section className="flex h-18 sm:h-14 items-center justify-between mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 overflow-visible">

                <div className="flex items-center gap-8">
                    <Link to={"/"} className="flex items-center gap-2">
                        <img src={theme !== "dark" ? "/mononeural-light-logo.svg" : "/mononeural-dark-logo.svg"} alt="ScreenPath logo" loading="lazy" className="h-10 md:h-8 w-auto invert-0"/>
                        <span className="sr-only">Home</span>
                    </Link>
                    <div className="hidden md:block">
                        <MainNavigationMenu />
                    </div>
                </div>

                <div className="flex flex-row items-center gap-2">
                    <div className="flex-row gap-4 hidden md:block">
                        <div className="flex flex-row gap-4">
                            <GitHubStarsAnimation
                                maxAvatars={0}
                                owner="dulanjayabhanu"
                                repo="mononeural"
                                showAvatars={false}
                            />
                            <ThemeToggler />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:hidden">
                        <MobileNavigationMenu />
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default NavBar