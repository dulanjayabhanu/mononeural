import MainAnimateBackground from "@/components/ui/custom/MainAnimateBackground.tsx";
import NavBar from "@/components/ui/custom/NavBar.tsx";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";
import Footer1 from "@/components/smoothui/footer-1";
import {lazy, useEffect} from "react";
import {ContextMenu, ContextMenuTrigger} from "@/components/ui/context-menu.tsx";

export const MainContextMenuContent = lazy(() => import("@/components/ui/custom/MainContextMenuContent.tsx"))

const PrivacyPage = () => {

    useEffect(() => {
        document.title = "Privacy Policy - MonoNeural"
    }, [])

    return (
        <main className="w-full h-full flex flex-col gap-4 relative">

            <ContextMenu>
                <ContextMenuTrigger>

                    <MainAnimateBackground />
                    <NavBar />
                    <BackToTopFab />
                    <Toaster />

                    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-10 px-6 pb-6">

                        <section className="w-full max-w-4xl flex flex-col gap-4 z-10 py-10 mt-10">
                            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                                Privacy Policy
                            </h2>
                            <p className="text-muted-foreground">Last updated: May 2026</p>
                            <p className="leading-7 not-first:mt-2">
                                Welcome to MonoNeural. Your privacy is important to us, and we are committed to being transparent about how your information is handled when using our platform.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural is an educational web application designed to help users learn artificial intelligence concepts by building, training, and testing artificial neurons directly in their browser. This Privacy Policy explains what information may be processed while you use the platform, how that information is handled, and your rights regarding your data.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                By using MonoNeural, you agree to the practices described in this Privacy Policy.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                1. Information We Collect
                            </h3>
                            <p className="leading-7 not-first:mt-6">
                                MonoNeural is designed to minimize data collection. Most functionality operates entirely within your browser.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                Depending on how you use the platform, the following types of information may be processed.
                            </p>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-4">
                                1.1 Information You Provide
                            </h4>
                            <p className="leading-7 not-first:mt-2">
                                When using the Artificial Neuron Trainer or Artificial Neuron Tester, you may enter data such as:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Custom neuron inputs</li>
                                <li>Input labels</li>
                                <li>Weight values</li>
                                <li>Bias values</li>
                                <li>Training criteria</li>
                                <li>Learning rates</li>
                                <li>Training cycle settings</li>
                                <li>Prediction labels</li>
                                <li>Test datasets</li>
                                <li>Downloaded training logs</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                This information is used only to provide the functionality of the platform and is generally processed locally within your browser.
                            </p>
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-4">
                                1.2 Automatically Collected Technical Information
                            </h4>
                            <p className="leading-7 not-first:mt-2">
                                Like most modern web applications, certain technical information may be collected automatically to ensure platform reliability and performance, including:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Device type</li>
                                <li>Screen resolution</li>
                                <li>Language preferences</li>
                                <li>IP address (processed by hosting providers)</li>
                                <li>General usage diagnostics</li>
                                <li>Error logs</li>
                                <li>Performance metrics</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                This information may be collected by infrastructure providers such as &nbsp;
                                <a
                                    href="https://vercel.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                >Vercel</a>&nbsp;
                                for hosting, analytics, security, and operational purposes.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                2. How Your Data Is Used
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                Any information processed through MonoNeural is used solely to provide and improve the platform.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                This may include:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Rendering artificial neuron visualizations</li>
                                <li>Performing training calculations</li>
                                <li>Running prediction tests</li>
                                <li>Displaying charts and logs</li>
                                <li>Enabling export and download features</li>
                                <li>Improving platform stability and performance</li>
                                <li>Diagnosing technical issues</li>
                                <li>Protecting platform security</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                We do not use your data for advertising purposes.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                3. Local Browser Processing
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                A core privacy principle of MonoNeural is local-first processing.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                Most training, testing, and calculation activities occur entirely inside your browser. This means:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Your neuron configurations remain on your device</li>
                                <li>Training calculations are executed locally</li>
                                <li>Prediction testing happens locally</li>
                                <li>Generated logs remain under your control</li>
                                <li>Enabling export and download features</li>
                                <li>Exported files are downloaded directly to your device</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural does not intentionally transmit your training datasets or neuron parameters to external servers unless future features explicitly state otherwise.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                4. Cookies and Local Storage
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural may use browser storage technologies such as:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Local Storage</li>
                                <li>Session Storage</li>
                                <li>Temporary browser cache</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                These technologies may be used to:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Preserve application state</li>
                                <li>Remember tool settings</li>
                                <li>Maintain temporary navigation context</li>
                                <li>Improve user experience</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                These stored values remain on your device and can be cleared at any time through your browser settings.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural currently does not use advertising cookies.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                5. Downloaded Files
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural allows users to export:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Training summaries</li>
                                <li>Full training logs</li>
                                <li>Trained neuron parameters</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                These files are generated locally and downloaded directly to your device.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                You are solely responsible for managing, storing, and securing downloaded files.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                6. Third-Party Services
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural may rely on trusted third-party services to operate the platform.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                These may include:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>
                                    <a
                                        href="https://vercel.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                    >Vercel</a> for web hosting and deployment</li>
                                <li>
                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                    >GitHub</a> for open-source project hosting and development collaboration</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                These providers may process limited technical information according to their own privacy policies.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                We encourage users to review the privacy practices of these services separately.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                7. Data Security
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                We take reasonable measures to protect the reliability and security of MonoNeural.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                However, no website or internet transmission can be guaranteed to be completely secure. Users should avoid entering highly sensitive personal, financial, or confidential data into the platform.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural is intended for educational and experimental purposes.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                8. Children’s Privacy
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural is designed for general educational use and is not specifically directed toward children under the age of 13.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                We do not knowingly collect personal information from children.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                If you believe personal data from a child has been provided through the platform, please contact us so appropriate action can be taken.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                9. Your Rights
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                Depending on your jurisdiction, you may have rights regarding your information, including:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Access to information</li>
                                <li>Request correction</li>
                                <li>Request deletion</li>
                                <li>Restrict certain processing</li>
                                <li>Withdraw consent where applicable</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                Because MonoNeural primarily processes data locally in your browser, many of these controls can also be exercised directly by clearing browser data.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                10. Changes to This Privacy Policy
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                This Privacy Policy may be updated from time to time to reflect changes in the platform, technology, or legal requirements.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                The “Last updated” date at the top of this page will indicate the latest revision.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                Continued use of MonoNeural after changes become effective constitutes acceptance of the updated policy.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                11. Contact
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                For privacy-related questions or concerns regarding MonoNeural, please contact:
                            </p>
                            <span className="font-bold">Dulanjaya Bhanu</span>
                            <span className="text-sm font-medium -mt-2">MonoNeural Project Maintainer</span>
                        </section>

                    </div>

                    <Footer1 />

                </ContextMenuTrigger>
                <MainContextMenuContent />
            </ContextMenu>

        </main>
    )
}

export default PrivacyPage