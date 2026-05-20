import DarkVeil from "@/components/DarkVeil.tsx";
import {useTheme} from "@/components/theme-provider.tsx";

const MainAnimateBackground = () => {
    const { theme } = useTheme()
    if (theme !== "dark")
        return null

    return (
        <div className="absolute w-full top-0 left-0 right-0 h-screen overflow-x-hidden">
            <DarkVeil
                hueShift={20}
                noiseIntensity={0}
                scanlineIntensity={0}
                speed={0.4}
                scanlineFrequency={0}
                warpAmount={0}
                resolutionScale={1}
            />
        </div>
    )
}

export default MainAnimateBackground