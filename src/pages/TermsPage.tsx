import MainAnimateBackground from "@/components/ui/custom/MainAnimateBackground.tsx";
import NavBar from "@/components/ui/custom/NavBar.tsx";
import BackToTopFab from "@/components/ui/custom/BackToTopFab.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";
import Footer1 from "@/components/smoothui/footer-1";
import {lazy, useEffect} from "react";
import {Link} from "react-router";
import {ContextMenu, ContextMenuTrigger} from "@/components/ui/context-menu.tsx";

export const MainContextMenuContent = lazy(() => import("@/components/ui/custom/MainContextMenuContent.tsx"))

const TermsPage = () => {

    useEffect(() => {
        document.title = "Terms and Conditions - MonoNeural"
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
                                Terms and Conditions
                            </h2>
                            <p className="text-muted-foreground">Last updated: May 16, 2026</p>
                            <p className="leading-7 not-first:mt-2">
                                Welcome to MonoNeural. These Terms and Conditions govern your access to and use of the MonoNeural platform and related services.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                By accessing or using MonoNeural, you agree to comply with these Terms. If you do not agree with any part of these Terms, please discontinue use of the platform.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                1. About MonoNeural
                            </h3>
                            <p className="leading-7 not-first:mt-6">
                                MonoNeural is an educational and experimental web platform designed to help users learn artificial intelligence concepts through interactive artificial neuron training and testing tools.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                The platform allows users to:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Configure artificial neuron inputs and weights</li>
                                <li>Train a single artificial neuron</li>
                                <li>Test prediction scenarios</li>
                                <li>Analyze parameter evolution</li>
                                <li>Export logs and trained parameters</li>
                                <li>Explore pre-trained neuron examples</li>
                                <li>Learn neural network fundamentals through documentation and visualizations</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural is intended primarily for educational, research, and demonstration purposes.
                            </p>
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                2. Acceptance of Terms
                            </h3>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>You are legally permitted to use the platform in your jurisdiction</li>
                                <li>You will use the platform responsibly and lawfully</li>
                                <li>You understand that the platform is provided for educational and experimental purposes</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                Your continued use of MonoNeural constitutes acceptance of these Terms and any future updates.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                3. Educational Use Disclaimer
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural is not intended to provide:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Financial advice</li>
                                <li>Medical advice</li>
                                <li>Legal advice</li>
                                <li>Employment decisions</li>
                                <li>Academic grading decisions</li>
                                <li>Production-grade AI decision systems</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                Predictions generated by the platform are experimental outputs created for learning purposes only.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                Users should not rely on MonoNeural predictions for real-world critical decisions.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                4. User Responsibilities
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                When using MonoNeural, you agree that you will not:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Use the platform for unlawful activities</li>
                                <li>Attempt to disrupt or damage platform functionality</li>
                                <li>Reverse engineer or abuse platform infrastructure</li>
                                <li>Upload malicious content or scripts</li>
                                <li>Misrepresent AI-generated outputs as certified professional systems</li>
                                <li>Use the platform in ways that violate applicable laws or regulations</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                You are responsible for the data you enter into the platform and any files you download or export.
                            </p>


                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                5. Intellectual Property
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                Unless otherwise stated, MonoNeural and its original content, branding, interface design, graphics, documentation, and source code are protected by applicable intellectual property laws.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                Open-source libraries, frameworks, and third-party resources remain the property of their respective owners.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural may include technologies and tools from projects such as:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>
                                    <a
                                        href="https://react.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                    >React</a>
                                </li>
                                <li>
                                    <a
                                        href="https://vite.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                    >Vite</a>
                                </li>
                                <li>
                                    <a
                                        href="https://tailwindcss.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                    >Tailwind CSS</a>
                                </li>
                                <li>
                                    <a
                                        href="https://ui.shadcn.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                    >shadcn/ui</a>
                                </li>
                                <li>
                                    <a
                                        href="https://smoothui.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                    >SmoothUI</a>
                                </li>
                                <li>
                                    <a
                                        href="https://reactflow.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                    >React Flow</a>
                                </li>
                                <li>
                                    <a
                                        href="https://reactbits.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                    >React Bits</a>
                                </li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                All respective trademarks belong to their owners.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                6. Open Source Notice
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural may be distributed as an open-source project.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                Open-source portions of the platform may be governed by separate license terms included within the project repository.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                Users must comply with all applicable open-source licenses when copying, modifying, or redistributing project code.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                7. Availability and Platform Changes
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                We reserve the right to:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Modify platform features</li>
                                <li>Improve or redesign interfaces</li>
                                <li>Add or remove functionality</li>
                                <li>Temporarily suspend availability</li>
                                <li>Update technical infrastructure</li>
                                <li>Discontinue parts of the platform</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                We are not liable for interruptions, temporary downtime, or feature changes.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                8. Exported Files and User Data
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural allows users to export logs, summaries, and trained parameters.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                Users are solely responsible for:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Reviewing exported content</li>
                                <li>Securing downloaded files</li>
                                <li>Managing local storage</li>
                                <li>Preventing unauthorized access to exported data</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural is not responsible for data loss occurring on user devices.
                            </p>


                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                9. Limitation of Liability
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                To the fullest extent permitted by law, MonoNeural and its maintainer shall not be liable for:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>Indirect damages</li>
                                <li>Data loss</li>
                                <li>Business interruption</li>
                                <li>Prediction inaccuracies</li>
                                <li>Misinterpretation of outputs</li>
                                <li>Browser performance issues</li>
                                <li>Device-related failures</li>
                                <li>Any damages resulting from platform use</li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                The platform is provided on an “as is” and “as available” basis without warranties of any kind.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                10. Third-Party Services
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                MonoNeural may rely on external services for hosting, deployment, fonts, analytics, or development workflows.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                These services may include:
                            </p>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                <li>
                                    <a
                                        href="https://vercel.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                    >Vercel</a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                    >GitHub</a>
                                </li>
                            </ul>
                            <p className="leading-7 not-first:mt-2">
                                We are not responsible for third-party service interruptions or policies.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                11. Privacy
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                Your use of MonoNeural is also governed by our &nbsp;
                                <Link
                                    to={"/privacy"}
                                    className="font-semibold hover:text-muted-foreground transition-all duration-300"
                                >
                                    Privacy Policy
                                </Link>.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                Please review the &nbsp;
                                <Link
                                    to={"/privacy"}
                                    className="font-semibold underline underline-offset-4 decoration-2 hover:text-muted-foreground transition-all duration-300"
                                >
                                    Privacy Policy
                                </Link> to understand how information may be processed while using the platform.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                12. Termination
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                We reserve the right to restrict or terminate access to MonoNeural if users violate these Terms or misuse the platform.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                13. Governing Law
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                These Terms shall be governed and interpreted in accordance with applicable laws and regulations without regard to conflict of law principles.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                14. Changes to These Terms
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                These Terms and Conditions may be updated periodically.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                The “Last updated” date at the top of this page indicates the latest revision.
                            </p>
                            <p className="leading-7 not-first:mt-2">
                                Continued use of MonoNeural after updates constitutes acceptance of the revised Terms.
                            </p>

                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
                                15. Contact
                            </h3>
                            <p className="leading-7 not-first:mt-2">
                                For questions regarding these Terms and Conditions, please contact:
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

export default TermsPage