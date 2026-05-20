import {lazy, StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";

export const RootLayout = lazy(() => import("@/layouts/RootLayout"))
export const HomePage = lazy(() => import("@/pages/HomePage"))
export const ArtificialNeuronTrainerPage = lazy(() => import("@/pages/ArtificialNeuronTrainerPage"))
export const ArtificialNeuronTesterPage = lazy(() => import("@/pages/ArtificialNeuronTesterPage"))
export const PreTrainedNeuronPage = lazy(() => import("@/pages/PreTrainedNeuronPage"))
export const DocumentationPage = lazy(() => import("@/pages/DocumentationPage"))
export const PrivacyPage = lazy(()=> import("@/pages/PrivacyPage"))
export const TermsPage = lazy(()=> import("@/pages/TermsPage"))
export const FileNotFoundPage = lazy(() => import("@/pages/FileNotFoundPage"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <FileNotFoundPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/trainer",
                element: <ArtificialNeuronTrainerPage />
            },
            {
                path: "/tester",
                element: <ArtificialNeuronTesterPage />
            },
            {
                path: "/examples",
                element: <PreTrainedNeuronPage />
            },
            {
                path: "/docs",
                element: <DocumentationPage />
            },
            {
                path: "/privacy",
                element: <PrivacyPage />
            },
            {
                path: "/terms",
                element: <TermsPage />
            },
        ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider
          defaultTheme="dark"
          storageKey="vite-ui-theme"
      >
          <Suspense fallback={
              <div className="w-full h-screen flex flex-col items-center justify-center">
                  <img src="/mononeural-dark-logo.svg" alt="MonoNeural Logo" loading="lazy" className="h-10 md:h-12 w-auto invert-0 animate-ping"/>
              </div>
          }>
              <RouterProvider router={router} />
          </Suspense>
      </ThemeProvider>
  </StrictMode>,
)
