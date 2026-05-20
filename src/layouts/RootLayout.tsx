import {Outlet, ScrollRestoration} from "react-router";
import {Suspense} from "react";

const RootLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Suspense fallback={
                <div className="w-full h-screen flex flex-col items-center justify-center">
                    <img src="/mononeural-dark-logo.svg" alt="MonoNeural Logo" loading="lazy" className="h-10 md:h-12 w-auto invert-0 animate-ping"/>
                </div>
            }>
                <Outlet />
            </Suspense>
        </>
    )
}

export default RootLayout