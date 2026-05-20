import AnimatedToggle from "@/components/smoothui/animated-toggle";
import {useTheme} from "@/components/theme-provider.tsx";

const SunIcon = () => (
    <svg
        aria-hidden="true"
        className="size-full"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" x2="12" y1="1" y2="3" />
        <line x1="12" x2="12" y1="21" y2="23" />
        <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
        <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
        <line x1="1" x2="3" y1="12" y2="12" />
        <line x1="21" x2="23" y1="12" y2="12" />
        <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
        <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
    </svg>
)
const MoonIcon = () => (
    <svg
        aria-hidden="true"
        className="size-full"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
)

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme()

    const handleThemeToggle = (toggleState: boolean) => {
        if (toggleState)
            setTheme("light")
        else
            setTheme("dark")
    }

    return (
        <AnimatedToggle
            checked={theme === "light"}
            icons={
                {
                    on: <SunIcon />,
                    off: <MoonIcon />,
                }
            }
            label="Theme toggle"
            onChange={(v) =>
                handleThemeToggle(v)
            }
            size="lg"
            variant="icon"
        />
    )
}

export default ThemeToggler