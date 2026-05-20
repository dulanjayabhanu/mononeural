import type {DocumentPageContent} from "@/types/DocumentPageContent.ts";
import getHookDefaultValues from "@/constants/getHookDefaultValues.ts";

const getDocumentationContent = (): DocumentPageContent[] => {
    const { documentImage: documentImageDefaultValue } = getHookDefaultValues()
    return [
        {
            id: "introduction",
            title: "Introduction",
            description: "Welcome to MonoNeural. Learn the fundamentals of artificial intelligence by building, training, and testing neurons visually without writing code.",
            image: documentImageDefaultValue,
            isDocumentSubPageContentRenderInSideBar: false,
            sections: [
                {
                    id: "what-is-mononeural",
                    title: "What is MonoNeural?",
                    description: "",
                    image: documentImageDefaultValue,
                    renderElement: "p",
                    content: [
                        "MonoNeural is an interactive web platform designed to teach the core concepts of artificial intelligence through hands-on experimentation.",
                        "Instead of learning only theory, users can build a real artificial neuron, train it with custom datasets, test predictions, and observe how machine learning works internally.",
                        "The platform focuses on simplicity, visualization, and practical learning."
                    ]
                },
                {
                    id: "platform-purpose",
                    title: "Platform Purpose",
                    description: "",
                    image: documentImageDefaultValue,
                    renderElement: "p",
                    content: [
                        "MonoNeural was created to make neural network learning accessible to everyone.",
                        "Many AI tools hide the internal learning process. MonoNeural allows users to see how weights, bias, error reduction, and predictions change during training.",
                        "The goal is to bridge the gap between theory and practical understanding."
                    ]
                },
                {
                    id: "who-is-it-for",
                    title: "Who Is It For?",
                    description: "",
                    image: documentImageDefaultValue,
                    renderElement: "list",
                    content: [
                        "Students learning machine learning fundamentals.",
                        "Developers exploring how neurons work internally.",
                        "Teachers demonstrating AI concepts visually.",
                        "Beginners who want a no-code learning environment.",
                        "Anyone curious about artificial intelligence."
                    ]
                },
                {
                    id: "key-features",
                    title: "Key Features",
                    description: "",
                    image: documentImageDefaultValue,
                    renderElement: "list",
                    content: [
                        "Visual artificial neuron builder.",
                        "Interactive neuron training tool.",
                        "Prediction testing environment.",
                        "Real-time architecture visualization.",
                        "Weight, bias, and error tracking charts.",
                        "Pre-trained example scenarios.",
                        "Export trained parameters.",
                        "Browser-based no-code learning experience."
                    ]
                },
                {
                    id: "how-mononeural-works",
                    title: "How MonoNeural Works",
                    description: "",
                    image: documentImageDefaultValue,
                    renderElement: "list",
                    content: [
                        "Create inputs and assign starting weights.",
                        "Build a training dataset with expected outputs.",
                        "Train the neuron through multiple learning cycles.",
                        "Observe how the neuron adjusts weights and bias.",
                        "Export final trained values.",
                        "Use those values in the testing tool for predictions."
                    ]
                }
            ],
            previousPageId: "",
            nextPageId: "getting-started",
            subPages: [],
        },
        {
            id: "getting-started",
            title: "Getting Started",
            description: "Learn how to access MonoNeural, understand the interface, and begin using the platform efficiently.",
            image: documentImageDefaultValue,
            isDocumentSubPageContentRenderInSideBar: false,
            sections: [
                {
                    id: "accessing-the-platform",
                    title: "Accessing the Platform",
                    description: "",
                    image: documentImageDefaultValue,
                    renderElement: "p",
                    content: [
                        "MonoNeural runs entirely in your web browser and does not require installation.",
                        "Visit the official platform URL to begin using all tools instantly.",
                        "For the best experience, use the latest version of Brave, Chrome, Edge, Firefox, or Safari."
                    ]
                },
                {
                    id: "interface-overview",
                    title: "Interface Overview",
                    description: "",
                    image: {
                        src: "interface-overview.svg",
                        alt: "MonoNeural platform interface showing navigation sidebar, documentation content area, and modern card-based layout.",
                        figure: "MonoNeural uses a clean and responsive interface designed for learning, experimentation, and smooth navigation.",
                    },
                    renderElement: "p",
                    content: [
                        "MonoNeural is designed with a modern card-based interface for clarity and ease of use.",
                        "Each tool is divided into focused subPages such as configuration, controls, results, charts, and summaries.",
                        "The layout is responsive and adapts across desktop, tablet, and mobile devices."
                    ]
                },
                {
                    id: "navigation-guide",
                    title: "Navigation Guide",
                    description: "",
                    image: documentImageDefaultValue,
                    renderElement: "list",
                    content: [
                        "Home Page – Main entry point of the platform.",
                        "Artificial Neuron Trainer – Build and train a neuron.",
                        "Artificial Neuron Tester – Test predictions using weights and bias.",
                        "Pre-Trained Examples – Explore ready-made neuron scenarios.",
                        "Documentation – Learn how every feature works.",
                        "Privacy & Terms – Platform policies and usage information."
                    ]
                },
                {
                    id: "core-subPages-overview",
                    title: "Core subPages Overview",
                    description: "",
                    image: documentImageDefaultValue,
                    renderElement: "p",
                    content: [
                        "The Trainer page is used to teach a neuron using custom datasets.",
                        "The Tester page is used to run predictions with trained parameters.",
                        "The Examples page provides real-world ready-to-use neuron models.",
                        "The Documentation page helps users understand theory and platform usage."
                    ]
                },
                {
                    id: "first-steps",
                    title: "First Steps",
                    description: "",
                    image: documentImageDefaultValue,
                    renderElement: "list",
                    content: [
                        "Open the Artificial Neuron Trainer.",
                        "Create your neuron inputs and weights.",
                        "Add training criteria with expected outputs.",
                        "Run the training process.",
                        "Export final weights and bias.",
                        "Use the Tester tool to evaluate predictions."
                    ]
                }
            ],
            previousPageId: "introduction",
            nextPageId: "artificial-neuron-basics",
            subPages: [],
        },
        {
            id: "artificial-neuron-basics",
            title: "Artificial Neuron Basics",
            description: "Understand the fundamental concepts behind artificial neurons and how they make predictions through weighted calculations and activation functions.",
            image: documentImageDefaultValue,
            isDocumentSubPageContentRenderInSideBar: false,
            sections: [
                {
                    id: "what-is-an-artificial-neuron",
                    title: "What Is an Artificial Neuron?",
                    description: "",
                    image: {
                        src: "what-is-an-artificial-neuron.svg",
                        alt: "Basic artificial neuron diagram showing inputs flowing into a neuron and producing one output.",
                        figure: "A single artificial neuron receives multiple inputs, processes them, and generates one prediction output.",
                    },
                    renderElement: "p",
                    content: [
                        "An artificial neuron is the smallest learning unit in many machine learning systems.",
                        "It receives multiple inputs, applies weights, adds a bias value, and produces an output.",
                        "Artificial neurons are inspired by biological neurons but designed for mathematical computation."
                    ]
                },
                {
                    id: "inputs-weights-bias",
                    title: "Inputs, Weights, and Bias Explained",
                    description: "",
                    image: {
                        src: "input-weight-bias.svg",
                        alt: "Illustration of multiple input values entering an artificial neuron.",
                        figure: "Inputs are the data signals provided to the neuron for decision making.",
                    },
                    renderElement: "list",
                    content: [
                        "Inputs are the values given to the neuron such as marks, income, attendance, or temperature.",
                        "Weights control how strongly each input influences the final decision.",
                        "Bias shifts the decision boundary and helps the neuron learn patterns more accurately.",
                        "Together, inputs, weights, and bias determine the neuron's output."
                    ]
                },
                {
                    id: "weighted-sum",
                    title: "Weighted Sum",
                    description: "",
                    image: {
                        src: "weighted-sum.svg",
                        alt: "Mathematical diagram showing inputs multiplied by weights and added with bias.",
                        figure: "The weighted sum combines all inputs, their weights, and the bias into one internal value.",
                    },
                    renderElement: "p",
                    content: [
                        "The neuron multiplies every input by its matching weight and adds the results together.",
                        "After that, the bias value is added to create the weighted sum.",
                        "This weighted sum becomes the value passed into the activation function."
                    ]
                },
                {
                    id: "activation-function",
                    title: "Activation Function",
                    description: "",
                    image: {
                        src: "activation-function.svg",
                        alt: "Sigmoid activation curve converting raw neuron values into outputs between zero and one.",
                        figure: "The activation function transforms the weighted sum into a usable prediction output.",
                    },
                    renderElement: "p",
                    content: [
                        "An activation function converts the weighted sum into a usable output value.",
                        "It helps the neuron make predictions instead of returning raw mathematical totals.",
                        "Different activation functions exist, but MonoNeural focuses on sigmoid activation."
                    ]
                },
                {
                    id: "sigmoid-function",
                    title: "Sigmoid Function",
                    description: "",
                    image: documentImageDefaultValue,
                    renderElement: "p",
                    content: [
                        "The sigmoid function transforms any number into a value between 0 and 1.",
                        "This makes it ideal for probability-style outputs such as pass or fail, yes or no, approved or rejected.",
                        "Outputs closer to 1 indicate stronger positive confidence, while values closer to 0 indicate negative confidence."
                    ]
                },
                {
                    id: "how-learning-happens",
                    title: "How Learning Happens",
                    description: "",
                    image: documentImageDefaultValue,
                    renderElement: "list",
                    content: [
                        "The neuron makes a prediction using current weights and bias.",
                        "The prediction is compared with the expected correct output.",
                        "The error is calculated.",
                        "Weights and bias are adjusted slightly to reduce the error.",
                        "This process repeats through many training cycles until results improve."
                    ]
                },
                {
                    id: "real-world-use-cases",
                    title: "Real-World Use Cases",
                    description: "",
                    image: documentImageDefaultValue,
                    renderElement: "list",
                    content: [
                        "Student pass or fail prediction.",
                        "Loan approval estimation.",
                        "Customer churn prediction.",
                        "Fitness goal success analysis.",
                        "Employee promotion readiness.",
                        "Admission eligibility screening."
                    ]
                }
            ],
            previousPageId: "getting-started",
            nextPageId: "artificial-neuron-trainer",
            subPages: [],
        },
        {
            id: "artificial-neuron-trainer",
            title: "Artificial Neuron Trainer",
            description: "Build, configure, and train a single artificial neuron through an interactive learning environment. This tool is designed to help users understand how machine learning improves predictions by adjusting weights and bias through repeated training cycles.",
            image: {
                src: "artificial-neuron-trainer.webp",
                alt: "MonoNeural Artificial Neuron Trainer page showing multiple training cards and controls.",
                figure: "The Trainer page contains all tools required to build, train, and analyze a neuron.",
            },
            isDocumentSubPageContentRenderInSideBar: true,
            sections: [],
            previousPageId: "artificial-neuron-basics",
            nextPageId: "trainer-overview",
            subPages: [
                {
                    id: "trainer-overview",
                    title: "Overview",
                    description: "Learn the purpose of the Artificial Neuron Trainer and how it supports AI education.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "what-this-tool-does",
                            title: "What This Tool Does",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "The Artificial Neuron Trainer is an interactive tool that allows users to create and train a single artificial neuron directly in the browser. Instead of relying on hidden machine learning systems, this tool exposes the full learning process so users can understand how predictions are formed and improved.",
                                "Users can configure multiple inputs, assign initial weights, set a bias term, create training examples, and control the number of learning cycles. During training, the neuron continuously compares its predictions with expected outputs and updates internal parameters to reduce error.",
                                "The platform combines practical experimentation with visual feedback, making complex machine learning concepts easier to understand."
                            ]
                        },
                        {
                            id: "when-to-use-it",
                            title: "When To Use It",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "This tool is ideal when learning the foundations of neural networks, exploring how a neuron updates itself during training, or testing custom prediction ideas in a no-code environment. It is also useful for students, educators, and developers who want to understand how weights, bias, and training data work together to produce accurate predictions."
                            ]
                        }
                    ],
                    previousPageId: "artificial-neuron-trainer",
                    nextPageId: "trainer-layout",
                    subPages: []
                },
                {
                    id: "trainer-layout",
                    title: "Tool Layout",
                    description: "Understand each major area of the Trainer page and its role in the workflow.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "neuron-architecture-visualization",
                            title: "Neuron Architecture Visualization",
                            description: "",
                            image: {
                                src: "neuron-architecture-visualization.webp",
                                alt: "Live neuron visualization displaying inputs, connections, weights, and output node.",
                                figure: "Real-time visualization helps users understand how data flows through the neuron.",
                            },
                            renderElement: "p",
                            content: [
                                "This section provides a live graphical representation of the artificial neuron. Inputs are visually connected to the neuron body, showing how information flows into the system. As users add inputs, adjust weights, or complete training, the diagram updates automatically.",
                                "The visualization helps transform abstract neural network concepts into something more intuitive and easier to understand."
                            ]
                        },
                        {
                            id: "input-weight-configuration",
                            title: "Input & Weight Configuration",
                            description: "",
                            image: {
                                src: "input-weight-configuration.webp",
                                alt: "Configuration panel for adding neuron inputs, weights, and initial bias.",
                                figure: "Create inputs, assign starting weights, and define the initial bias value.",
                            },
                            renderElement: "p",
                            content: [
                                "This area is used to define the structural inputs of the neuron. Every input represents a feature or signal that influences prediction outcomes, while each weight controls how strongly that input contributes to the final result.",
                                "Users may create multiple inputs depending on the problem they are solving. An initial bias value can also be configured here to control the starting activation threshold of the neuron."
                            ]
                        },
                        {
                            id: "training-configuration",
                            title: "Training Configuration",
                            description: "",
                            image: {
                                src: "training-configuration.webp",
                                alt: "Training dataset panel showing criteria rows, learning rate, and cycle controls.",
                                figure: "Define training examples and learning settings before starting the neuron training process.",
                            },
                            renderElement: "p",
                            content: [
                                "The Training Configuration section is where learning behavior is defined. Users create training criteria by entering example inputs along with the expected correct output. These examples teach the neuron how to respond to similar data in the future.",
                                "This section also includes learning rate controls, training cycle selection, and advanced processing options such as Deep Training Mode."
                            ]
                        },
                        {
                            id: "ready-to-train",
                            title: "Ready To Train",
                            description: "",
                            image: {
                                src: "ready-to-train.webp",
                                alt: "Training control card with Start Training and Reset buttons.",
                                figure: "Launch or reset the full neuron training process from this control panel.",
                            },
                            renderElement: "p",
                            content: [
                                "This control area contains the main actions required to begin or reset training. Once training starts, the system processes the configured dataset repeatedly and updates neuron parameters based on prediction error."
                            ]
                        },
                        {
                            id: "training-summary-progress",
                            title: "Training Summary & Progress",
                            description: "",
                            image: {
                                src: "training-summary-progress.webp",
                                alt: "Progress bar and training summary log displayed during neuron learning.",
                                figure: "Track live progress and review summary results while training is running.",
                            },
                            renderElement: "p",
                            content: [
                                "During training, this section provides real-time progress updates and a detailed summary of learning activity. Users can monitor how far the process has advanced and review final performance information once training completes.",
                                "Summary logs can be copied quickly, while complete cycle-by-cycle logs can be downloaded for deeper analysis."
                            ]
                        },
                        {
                            id: "parameter-evolution-chart",
                            title: "Parameter Evolution Chart",
                            description: "",
                            image: {
                                src: "parameter-evolution-chart.webp",
                                alt: "Multi-line chart showing weight, bias, and error changes across training cycles.",
                                figure: "Visualize how neuron parameters improve over time during training.",
                            },
                            renderElement: "p",
                            content: [
                                "This chart visually tracks how weights, bias, and error values change across training cycles. It allows users to observe whether the neuron is learning steadily, converging efficiently, or struggling to reduce error."
                            ]
                        },
                        {
                            id: "trained-neuron-parameters",
                            title: "Trained Neuron Parameters",
                            description: "",
                            image: {
                                src: "trained-neuron-parameters.webp",
                                alt: "Final trained weights and bias table with copy actions.",
                                figure: "Use the final learned weights and bias in testing or external applications.",
                            },
                            renderElement: "p",
                            content: [
                                "After training finishes, the final learned weights and bias are displayed in this section. These values represent the neuron's completed state and can be copied for use in the Artificial Neuron Tester or external experiments."
                            ]
                        },
                        {
                            id: "training-to-testing-switch",
                            title: "Training To Testing Switch",
                            description: "",
                            image: {
                                src: "training-to-testing-switch.webp",
                                alt: "Flow showing trained parameters transferred from Trainer page to Tester page.",
                                figure: "Instantly move trained neuron parameters into the Tester for predictions.",
                            },
                            renderElement: "p",
                            content: [
                                "This control area contains the main actions required to begin or reset training. Once training starts, the system processes the configured dataset repeatedly and updates neuron parameters based on prediction error."
                            ]
                        }
                    ],
                    previousPageId: "trainer-overview",
                    nextPageId: "trainer-step-guide",
                    subPages: []
                },
                {
                    id: "trainer-step-guide",
                    title: "Step-by-Step Guide",
                    description: "Follow the recommended workflow for successful neuron training.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "training-process",
                            title: "Training Workflow",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "Begin by creating the required inputs for your scenario and assigning starting weights to each one. After that, set an initial bias value to define the starting activation threshold of the neuron.",
                                "Next, build a training dataset by entering example input combinations and their expected outputs. These examples act as learning references for the neuron.",
                                "Once the dataset is ready, choose a learning rate and training cycle count. Start the training process and monitor the logs, progress indicators, and charts as the neuron improves itself.",
                                "When training is complete, review the final results and export the trained parameters for future testing."
                            ]
                        }
                    ],
                    previousPageId: "trainer-layout",
                    nextPageId: "trainer-advanced-features",
                    subPages: []
                },
                {
                    id: "trainer-advanced-features",
                    title: "Advanced Features",
                    description: "Use advanced tools for more flexible and realistic training scenarios.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "advanced-tools",
                            title: "Advanced Features Explained",
                            description: "",
                            image: {
                                src: "advanced-tools.webp",
                                alt: "Advanced MonoNeural features including normalizer, deep training, logs, and live visuals.",
                                figure: "Advanced tools provide more control, realism, and deeper analysis options.",
                            },
                            renderElement: "p",
                            content: [
                                "The Input Normalizer helps convert real-world values such as marks, salary, or temperature into a standard range between 0 and 1. This improves consistency and allows the neuron to learn more effectively.",
                                "Boolean Input Mode is useful for yes or no style data, where true becomes 1 and false becomes 0. This simplifies binary condition inputs.",
                                "Deep Training Mode unlocks extended cycle ranges for more complex datasets that need additional learning time. Full Log Download provides detailed cycle-by-cycle records of every parameter update.",
                                "Live Graph Visualization continuously updates the neuron diagram and performance charts, creating a more engaging and educational training experience."
                            ]
                        }
                    ],
                    previousPageId: "trainer-step-guide",
                    nextPageId: "trainer-best-practices",
                    subPages: []
                },
                {
                    id: "trainer-best-practices",
                    title: "Best Practices",
                    description: "Recommended strategies for accurate results and better performance.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "best-practices-content",
                            title: "Training Recommendations",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "Use training data that realistically reflects the pattern you want the neuron to learn. Balanced examples containing both positive and negative outcomes usually produce stronger results.",
                                "Normalize numeric inputs whenever possible so all values remain within a consistent range. This helps the learning process remain stable.",
                                "Start with moderate learning rates and cycle counts before increasing them. Larger values may improve results in some cases, but they also increase processing load and may reduce stability.",
                                "Continue training only while meaningful improvements are visible. Excessive cycles often consume resources without providing noticeable gains."
                            ]
                        }
                    ],
                    previousPageId: "trainer-advanced-features",
                    nextPageId: "trainer-troubleshooting",
                    subPages: []
                },
                {
                    id: "trainer-troubleshooting",
                    title: "Troubleshooting",
                    description: "Common issues and how to resolve them effectively.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "troubleshooting-content",
                            title: "Common Problems",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "If training feels slow, reduce the cycle count or simplify the dataset size. Deep Training Mode should only be used when additional learning time is truly necessary.",
                                "If the browser becomes unresponsive, the current workload may be too heavy for the device. Lower training cycles and avoid running other demanding applications simultaneously.",
                                "If prediction quality is poor, review the training examples carefully. Inconsistent outputs or unrealistic data often lead to weak learning performance.",
                                "If the error does not reduce, try adjusting the learning rate, improving dataset quality, or increasing cycles gradually until stable improvement is observed."
                            ]
                        }
                    ],
                    previousPageId: "trainer-best-practices",
                    nextPageId: "artificial-neuron-tester",
                    subPages: []
                }
            ]
        },
        {
            id: "artificial-neuron-tester",
            title: "Artificial Neuron Tester",
            description: "Use trained weights and bias values to test how an artificial neuron responds to real input data. This tool helps users evaluate predictions, understand outputs, and simulate practical scenarios after training is complete.",
            image: {
                src: "artificial-neuron-tester.webp",
                alt: "Artificial Neuron Tester page showing setup controls and results area.",
                figure: "The Tester page evaluates trained neurons using real input data.",
            },
            isDocumentSubPageContentRenderInSideBar: true,
            sections: [],
            previousPageId: "trainer-troubleshooting",
            nextPageId: "tester-overview",
            subPages: [
                {
                    id: "tester-overview",
                    title: "Overview",
                    description: "Understand the purpose of the Artificial Neuron Tester and when to use it.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "what-this-tool-does",
                            title: "What This Tool Does",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "The Artificial Neuron Tester is designed to evaluate predictions using trained neuron parameters. After a neuron has been trained, the final weights and bias can be imported into this tool to test how the model responds to new input values.",
                                "Users can also manually enter their own weights and bias values without using the Trainer tool. This makes the Tester useful for experimentation, demonstrations, and independent prediction testing.",
                                "The platform calculates neuron activation outputs and converts them into meaningful prediction labels based on the rules configured by the user."
                            ]
                        },
                        {
                            id: "when-to-use-it",
                            title: "When To Use It",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "Use this tool after training a neuron when you want to test real scenarios, validate trained results, or explore how different inputs affect predictions. It is also useful when demonstrating AI concepts or manually simulating decision systems with custom parameters."
                            ]
                        }
                    ],
                    previousPageId: "artificial-neuron-tester",
                    nextPageId: "tester-layout",
                    subPages: []
                },
                {
                    id: "tester-layout",
                    title: "Tool Layout",
                    description: "Understand each major section of the Tester page and how it supports prediction workflows.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "weight-input-setup",
                            title: "Weight & Input Setup",
                            description: "",
                            image: {
                                src: "weight-input-setup.webp",
                                alt: "Tester configuration section for weights, labels, values, and ranges.",
                                figure: "Prepare neuron weights and real input values before prediction testing.",
                            },
                            renderElement: "p",
                            content: [
                                "This section is used to configure neuron weights and prepare real input data. Users can manually create weights or automatically load trained weights from the Pre-Trained Examples or Trainer page.",
                                "Each input row supports labels, real values, and normalization ranges so that meaningful real-world data can be converted into neuron-ready values."
                            ]
                        },
                        {
                            id: "prediction-configuration",
                            title: "Prediction Configuration",
                            description: "",
                            image: {
                                src: "prediction-configuration.webp",
                                alt: "Bias and prediction label settings for tester outputs.",
                                figure: "Convert activation outputs into clear human-readable prediction labels.",
                            },
                            renderElement: "p",
                            content: [
                                "This area allows users to set the neuron bias value and define readable output labels for predictions. For example, outputs below a threshold may display Fail, while outputs above the threshold may display Pass.",
                                "This transforms raw activation values into practical human-readable results."
                            ]
                        },
                        {
                            id: "testing-controls",
                            title: "Testing Controls",
                            description: "",
                            image: {
                                src: "testing-controls.webp",
                                alt: "Test Neuron and Reset Testing control buttons.",
                                figure: "Run prediction tests instantly or reset the current testing session.",
                            },
                            renderElement: "p",
                            content: [
                                "Contains the main actions used to run predictions or reset the testing environment. Once triggered, the system evaluates every configured test case using the supplied neuron parameters."
                            ]
                        },
                        {
                            id: "results-table",
                            title: "Results Table",
                            description: "",
                            image: {
                                src: "results-table.webp",
                                alt: "Prediction results table showing inputs, activation values, and final labels.",
                                figure: "Analyze all tested cases in one structured results view.",
                            },
                            renderElement: "p",
                            content: [
                                "Displays all tested cases in a structured format. Each result includes the provided inputs, the final activation output, and the generated prediction label.",
                                "This makes it easy to compare multiple scenarios quickly."
                            ]
                        }
                    ],
                    previousPageId: "tester-overview",
                    nextPageId: "tester-step-guide",
                    subPages: []
                },
                {
                    id: "tester-step-guide",
                    title: "Step-by-Step Guide",
                    description: "Follow this workflow to test a trained neuron successfully.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "testing-process",
                            title: "Testing Workflow",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "Begin by importing trained weights from the Trainer tool or by manually creating custom weights. Once weights are available, define each input and provide real values for testing.",
                                "Add one or more test cases representing the scenarios you want to evaluate. After that, set the neuron bias and configure the labels that should appear for lower and higher prediction ranges.",
                                "Run the testing process to calculate outputs for every test case. Finally, review the activation values and prediction labels shown in the results table."
                            ]
                        }
                    ],
                    previousPageId: "tester-layout",
                    nextPageId: "tester-use-cases",
                    subPages: []
                },
                {
                    id: "tester-use-cases",
                    title: "Use Cases",
                    description: "Explore common real-world examples that can be tested with a single artificial neuron.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "use-cases-content",
                            title: "Example Scenarios",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "Pass or Fail Prediction can evaluate academic performance based on marks, attendance, and assignments.",
                                "Loan Approval scenarios can estimate whether an applicant qualifies using financial indicators such as income and debt ratio.",
                                "Fitness Goal Success predictions can analyze consistency, nutrition, and recovery habits.",
                                "Customer Churn Prediction can estimate whether a customer is likely to leave or remain based on engagement behavior."
                            ]
                        }
                    ],
                    previousPageId: "tester-step-guide",
                    nextPageId: "tester-troubleshooting",
                    subPages: []
                },
                {
                    id: "tester-troubleshooting",
                    title: "Troubleshooting",
                    description: "Resolve common issues that may affect testing results.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "wrong-output",
                            title: "Wrong Output",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "If outputs seem incorrect, verify that all imported weights, bias values, and input ranges match the original training configuration. Even small parameter mistakes can significantly change predictions."
                            ]
                        },
                        {
                            id: "missing-inputs",
                            title: "Missing Inputs",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "Every configured weight should have a matching input value. If the number of inputs does not match the number of weights, predictions may fail or become inaccurate."
                            ]
                        },
                        {
                            id: "threshold-confusion",
                            title: "Threshold Confusion",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "Prediction labels depend on the threshold logic used by the platform. Review which activation values trigger the lower and higher labels so outputs are interpreted correctly."
                            ]
                        }
                    ],
                    previousPageId: "tester-use-cases",
                    nextPageId: "pre-trained-neuron-examples",
                    subPages: []
                }
            ]
        },
        {
            id: "pre-trained-neuron-examples",
            title: "Pre-Trained Neuron Examples",
            description: "Explore ready-to-use artificial neuron models built for practical scenarios. These examples allow users to instantly test trained neurons without manually configuring weights, bias, or datasets.",
            image: {
                src: "pre-trained-neuron-examples.webp",
                alt: "Collection of ready-made neuron scenario cards on the examples page.",
                figure: "Launch pre-trained scenarios instantly and test realistic neuron models.",
            },
            isDocumentSubPageContentRenderInSideBar: true,
            sections: [],
            previousPageId: "tester-troubleshooting",
            nextPageId: "examples-overview",
            subPages: [
                {
                    id: "examples-overview",
                    title: "Overview",
                    description: "Understand the purpose of the Pre-Trained Neuron Examples section.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "what-this-section-does",
                            title: "What This Section Does",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "The Pre-Trained Neuron Examples section provides a collection of completed neuron models that are already trained for specific real-world scenarios. Each example includes optimized weights, bias values, prediction labels, and prepared testing datasets.",
                                "When an example is opened, the platform automatically transfers the trained data into the Artificial Neuron Tester. Users can immediately run predictions and observe how a trained neuron behaves in practice."
                            ]
                        },
                        {
                            id: "why-use-pre-trained-examples",
                            title: "Why Use Pre-Trained Examples",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "Pre-trained examples are ideal for users who want instant results without building a neuron from the beginning. They are especially useful for beginners who want to understand outputs before learning the full training workflow.",
                                "They also provide realistic demonstrations of how artificial neurons can solve common prediction problems using structured data."
                            ]
                        }
                    ],
                    previousPageId: "pre-trained-neuron-examples",
                    nextPageId: "available-examples",
                    subPages: []
                },
                {
                    id: "available-examples",
                    title: "Available Examples",
                    description: "Review the included ready-made neuron scenarios.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "student-exam-pass-fail",
                            title: "Student Exam Pass / Fail Prediction",
                            description: "",
                            image: {
                                src: "pre-trained-neuron-example-internal-data-scenario-1.svg",
                                alt: "Academic prediction scenario based on attendance and exam performance.",
                                figure: "Estimate whether a student is likely to pass or fail.",
                            },
                            renderElement: "p",
                            content: [
                                "Predict whether a student is likely to pass or fail based on attendance, assignment performance, and mock exam results. This example demonstrates academic decision modeling using educational indicators."
                            ]
                        },
                        {
                            id: "university-admission-eligibility",
                            title: "University Admission Eligibility",
                            description: "",
                            image: {
                                src: "pre-trained-neuron-example-internal-data-scenario-2.svg",
                                alt: "University admission scenario using grades and performance indicators.",
                                figure: "Predict whether a student qualifies for university admission.",
                            },
                            renderElement: "p",
                            content: [
                                "Estimate whether a student qualifies for admission using inputs such as grades, entrance exam performance, and extracurricular strength. This example shows eligibility prediction using balanced academic criteria."
                            ]
                        },
                        {
                            id: "loan-approval-prediction",
                            title: "Loan Approval Prediction",
                            description: "",
                            image: {
                                src: "pre-trained-neuron-example-internal-data-scenario-3.svg",
                                alt: "Financial approval scenario based on income and credit factors.",
                                figure: "Evaluate the likelihood of loan approval using structured inputs.",
                            },
                            renderElement: "p",
                            content: [
                                "Predict loan approval outcomes using financial factors such as income level, repayment capacity, and credit strength. This scenario demonstrates business-oriented risk evaluation."
                            ]
                        },
                        {
                            id: "employee-promotion-readiness",
                            title: "Employee Promotion Readiness",
                            description: "",
                            image: {
                                src: "pre-trained-neuron-example-internal-data-scenario-4.svg",
                                alt: "Career growth scenario using performance and leadership metrics.",
                                figure: "Estimate whether an employee appears ready for promotion.",
                            },
                            renderElement: "p",
                            content: [
                                "Evaluate whether an employee appears ready for promotion using productivity, leadership, performance consistency, and growth potential. This example represents workplace decision support."
                            ]
                        },
                        {
                            id: "customer-churn-prediction",
                            title: "Customer Churn Prediction",
                            description: "",
                            image: {
                                src: "pre-trained-neuron-example-internal-data-scenario-5.svg",
                                alt: "Customer retention scenario based on engagement and satisfaction behavior.",
                                figure: "Predict whether a customer is likely to leave or remain.",
                            },
                            renderElement: "p",
                            content: [
                                "Estimate whether a customer is likely to leave or remain based on engagement patterns, purchase behavior, and satisfaction signals. This scenario demonstrates customer retention analysis."
                            ]
                        },
                        {
                            id: "fitness-goal-success-prediction",
                            title: "Fitness Goal Success Prediction",
                            description: "",
                            image: {
                                src: "pre-trained-neuron-example-internal-data-scenario-6.svg",
                                alt: "Fitness scenario using consistency, recovery, and nutrition indicators.",
                                figure: "Estimate the likelihood of successfully reaching a fitness goal.",
                            },
                            renderElement: "p",
                            content: [
                                "Predict whether a person is likely to achieve a fitness goal using consistency, nutrition, sleep quality, recovery, and exercise intensity. This example shows personal performance forecasting."
                            ]
                        }
                    ],
                    previousPageId: "examples-overview",
                    nextPageId: "how-to-use-examples",
                    subPages: []
                },
                {
                    id: "how-to-use-examples",
                    title: "How To Use Examples",
                    description: "Learn the workflow for using ready-made neuron models.",
                    image: documentImageDefaultValue,
                    isDocumentSubPageContentRenderInSideBar: false,
                    sections: [
                        {
                            id: "open-example",
                            title: "Open Example",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "Select any example card from the collection page. Each card represents a complete trained neuron prepared for immediate use."
                            ]
                        },
                        {
                            id: "auto-load-data",
                            title: "Auto Load Data",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "After selecting an example, the platform automatically loads weights, bias values, input labels, prepared test cases, and prediction messages into the Artificial Neuron Tester."
                            ]
                        },
                        {
                            id: "run-predictions",
                            title: "Run Predictions",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "Use the Test Neuron action to evaluate all prepared scenarios instantly. Results will appear in the testing table with activation outputs and prediction labels."
                            ]
                        },
                        {
                            id: "modify-inputs",
                            title: "Modify Inputs",
                            description: "",
                            image: documentImageDefaultValue,
                            renderElement: "p",
                            content: [
                                "Users may edit the provided inputs, add new test cases, or replace existing values to explore how prediction outcomes change under different conditions."
                            ]
                        }
                    ],
                    previousPageId: "available-examples",
                    nextPageId: "",
                    subPages: []
                }
            ]
        }
    ]
}

export default getDocumentationContent