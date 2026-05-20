import type {PreTrainedNeuronExampleInternalData} from "@/types/PreTrainedNeuronExampleInternalData.ts";
import getNavigationOrigins from "@/constants/getNavigationOrigins.ts";

const getPreTrainedNeuronExampleInternalData = (): PreTrainedNeuronExampleInternalData[] => {
    const { preTrainedNeuronPage } = getNavigationOrigins()
    return [
        {
            id: "pre-trained-neuron-example-internal-data-scenario-1",
            navigationOrigin: preTrainedNeuronPage,
            title: "Student Exam Pass / Fail Prediction",
            description: "Predict whether a student is likely to pass or fail an upcoming exam based on three important academic factors: attendance rate, assignment performance, and mock exam score. This example demonstrates how an artificial neuron can combine multiple educational indicators to generate a meaningful prediction.",
            learningRate: 0.1,
            cycleCount: 4_000,
            inputLabels: [
                "attendance",
                "assignment score",
                "mock exam score"
            ],
            negativePredictionMessage: "Fail",
            positivePredictionMessage: "Pass",
            weights: [
                7.23874226896757,
                12.52520713340207,
                20.701991297244234
            ],
            bias: -24.285307135479485,
            testDataSet: [
                [
                    {
                        "id": 1,
                        "label": "attendance",
                        "weight": 7.23874226896757,
                        "input": 92,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "assignment score",
                        "weight": 12.52520713340207,
                        "input": 88,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "mock exam score",
                        "weight": 20.701991297244234,
                        "input": 91,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "attendance",
                        "weight": 7.23874226896757,
                        "input": 85,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "assignment score",
                        "weight": 12.52520713340207,
                        "input": 82,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "mock exam score",
                        "weight": 20.701991297244234,
                        "input": 79,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "attendance",
                        "weight": 7.23874226896757,
                        "input": 78,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "assignment score",
                        "weight": 12.52520713340207,
                        "input": 74,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "mock exam score",
                        "weight": 20.701991297244234,
                        "input": 76,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "attendance",
                        "weight": 7.23874226896757,
                        "input": 65,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "assignment score",
                        "weight": 12.52520713340207,
                        "input": 68,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "mock exam score",
                        "weight": 20.701991297244234,
                        "input": 72,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "attendance",
                        "weight": 7.23874226896757,
                        "input": 58,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "assignment score",
                        "weight": 12.52520713340207,
                        "input": 61,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "mock exam score",
                        "weight": 20.701991297244234,
                        "input": 57,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "attendance",
                        "weight": 7.23874226896757,
                        "input": 49,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "assignment score",
                        "weight": 12.52520713340207,
                        "input": 52,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "mock exam score",
                        "weight": 20.701991297244234,
                        "input": 48,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "attendance",
                        "weight": 7.23874226896757,
                        "input": 35,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "assignment score",
                        "weight": 12.52520713340207,
                        "input": 42,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "mock exam score",
                        "weight": 20.701991297244234,
                        "input": 39,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "attendance",
                        "weight": 7.23874226896757,
                        "input": 96,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "assignment score",
                        "weight": 12.52520713340207,
                        "input": 58,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "mock exam score",
                        "weight": 20.701991297244234,
                        "input": 94,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "attendance",
                        "weight": 7.23874226896757,
                        "input": 72,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "assignment score",
                        "weight": 12.52520713340207,
                        "input": 83,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "mock exam score",
                        "weight": 20.701991297244234,
                        "input": 81,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "attendance",
                        "weight": 7.23874226896757,
                        "input": 62,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "assignment score",
                        "weight": 12.52520713340207,
                        "input": 45,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "mock exam score",
                        "weight": 20.701991297244234,
                        "input": 50,
                        "min": 0,
                        "max": 100
                    }
                ]
            ]
        },
        {
            id: "pre-trained-neuron-example-internal-data-scenario-2",
            navigationOrigin: preTrainedNeuronPage,
            title: "University Admission Eligibility",
            description: "Evaluate whether a student is likely to qualify for university admission using key academic indicators such as final exam marks, entrance exam performance, and extracurricular achievement strength. This example shows how an artificial neuron can analyze multiple admission-related factors together to estimate eligibility.",
            learningRate: 0.1,
            cycleCount: 4_000,
            inputLabels: [
                "gpa",
                "entrance exam ecore",
                "interview score"
            ],
            "weights": [
                8.686037698854301,
                15.321990007455437,
                19.163979343963078
            ],
            "bias": -28.687325395581293,
            "negativePredictionMessage": "Not Eligible",
            "positivePredictionMessage": "Eligible",
            "testDataSet": [
                [
                    {
                        "id": 1,
                        "label": "gpa",
                        "weight": 8.686037698854301,
                        "input": 3.9,
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 2,
                        "label": "entrance exam score",
                        "weight": 15.321990007455437,
                        "input": 91,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "interview score",
                        "weight": 19.163979343963078,
                        "input": 88,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "gpa",
                        "weight": 8.686037698854301,
                        "input": 3.7,
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 2,
                        "label": "entrance exam score",
                        "weight": 15.321990007455437,
                        "input": 84,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "interview score",
                        "weight": 19.163979343963078,
                        "input": 82,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "gpa",
                        "weight": 8.686037698854301,
                        "input": 3.4,
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 2,
                        "label": "entrance exam score",
                        "weight": 15.321990007455437,
                        "input": 78,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "interview score",
                        "weight": 19.163979343963078,
                        "input": 79,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "gpa",
                        "weight": 8.686037698854301,
                        "input": 3.1,
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 2,
                        "label": "entrance exam score",
                        "weight": 15.321990007455437,
                        "input": 72,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "interview score",
                        "weight": 19.163979343963078,
                        "input": 74,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "gpa",
                        "weight": 8.686037698854301,
                        "input": 2.8,
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 2,
                        "label": "entrance exam score",
                        "weight": 15.321990007455437,
                        "input": 68,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "interview score",
                        "weight": 19.163979343963078,
                        "input": 66,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "gpa",
                        "weight": 8.686037698854301,
                        "input": 2.5,
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 2,
                        "label": "entrance exam score",
                        "weight": 15.321990007455437,
                        "input": 61,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "interview score",
                        "weight": 19.163979343963078,
                        "input": 59,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "gpa",
                        "weight": 8.686037698854301,
                        "input": 2.1,
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 2,
                        "label": "entrance exam score",
                        "weight": 15.321990007455437,
                        "input": 55,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "interview score",
                        "weight": 19.163979343963078,
                        "input": 52,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "gpa",
                        "weight": 8.686037698854301,
                        "input": 3.8,
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 2,
                        "label": "entrance exam score",
                        "weight": 15.321990007455437,
                        "input": 70,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "interview score",
                        "weight": 19.163979343963078,
                        "input": 86,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "gpa",
                        "weight": 8.686037698854301,
                        "input": 3.0,
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 2,
                        "label": "entrance exam score",
                        "weight": 15.321990007455437,
                        "input": 88,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "interview score",
                        "weight": 19.163979343963078,
                        "input": 81,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "gpa",
                        "weight": 8.686037698854301,
                        "input": 2.6,
                        "min": 0,
                        "max": 4
                    },
                    {
                        "id": 2,
                        "label": "entrance exam score",
                        "weight": 15.321990007455437,
                        "input": 58,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "interview score",
                        "weight": 19.163979343963078,
                        "input": 63,
                        "min": 0,
                        "max": 100
                    }
                ]
            ]
        },
        {
            id: "pre-trained-neuron-example-internal-data-scenario-3",
            navigationOrigin: preTrainedNeuronPage,
            title: "Loan Approval Prediction",
            description: "Estimate whether an applicant is likely to receive loan approval based on important financial factors such as income level, credit score, and existing debt ratio. This example demonstrates how an artificial neuron can evaluate multiple risk indicators together to support lending decisions.",
            learningRate: 0.1,
            cycleCount: 4_000,
            inputLabels: [
                "income level",
                "credit score",
                "existing debt"
            ],
            "weights": [
                9.278743780092551,
                11.83137786819673,
                -23.366246399316978
            ],
            "bias": -4.077512201567441,
            "negativePredictionMessage": "Rejected",
            "positivePredictionMessage": "Approved",
            "testDataSet": [
                [
                    {
                        "id": 1,
                        "label": "income level",
                        "weight": 9.278743780092551,
                        "input": 9500,
                        "min": 0,
                        "max": 10000
                    },
                    {
                        "id": 2,
                        "label": "credit score",
                        "weight": 11.83137786819673,
                        "input": 820,
                        "min": 300,
                        "max": 850
                    },
                    {
                        "id": 3,
                        "label": "existing debt",
                        "weight": -23.366246399316978,
                        "input": 5000,
                        "min": 0,
                        "max": 50000
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "income level",
                        "weight": 9.278743780092551,
                        "input": 8800,
                        "min": 0,
                        "max": 10000
                    },
                    {
                        "id": 2,
                        "label": "credit score",
                        "weight": 11.83137786819673,
                        "input": 780,
                        "min": 300,
                        "max": 850
                    },
                    {
                        "id": 3,
                        "label": "existing debt",
                        "weight": -23.366246399316978,
                        "input": 9000,
                        "min": 0,
                        "max": 50000
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "income level",
                        "weight": 9.278743780092551,
                        "input": 7600,
                        "min": 0,
                        "max": 10000
                    },
                    {
                        "id": 2,
                        "label": "credit score",
                        "weight": 11.83137786819673,
                        "input": 720,
                        "min": 300,
                        "max": 850
                    },
                    {
                        "id": 3,
                        "label": "existing debt",
                        "weight": -23.366246399316978,
                        "input": 12000,
                        "min": 0,
                        "max": 50000
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "income level",
                        "weight": 9.278743780092551,
                        "input": 6200,
                        "min": 0,
                        "max": 10000
                    },
                    {
                        "id": 2,
                        "label": "credit score",
                        "weight": 11.83137786819673,
                        "input": 690,
                        "min": 300,
                        "max": 850
                    },
                    {
                        "id": 3,
                        "label": "existing debt",
                        "weight": -23.366246399316978,
                        "input": 18000,
                        "min": 0,
                        "max": 50000
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "income level",
                        "weight": 9.278743780092551,
                        "input": 5200,
                        "min": 0,
                        "max": 10000
                    },
                    {
                        "id": 2,
                        "label": "credit score",
                        "weight": 11.83137786819673,
                        "input": 640,
                        "min": 300,
                        "max": 850
                    },
                    {
                        "id": 3,
                        "label": "existing debt",
                        "weight": -23.366246399316978,
                        "input": 26000,
                        "min": 0,
                        "max": 50000
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "income level",
                        "weight": 9.278743780092551,
                        "input": 4200,
                        "min": 0,
                        "max": 10000
                    },
                    {
                        "id": 2,
                        "label": "credit score",
                        "weight": 11.83137786819673,
                        "input": 590,
                        "min": 300,
                        "max": 850
                    },
                    {
                        "id": 3,
                        "label": "existing debt",
                        "weight": -23.366246399316978,
                        "input": 32000,
                        "min": 0,
                        "max": 50000
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "income level",
                        "weight": 9.278743780092551,
                        "input": 3500,
                        "min": 0,
                        "max": 10000
                    },
                    {
                        "id": 2,
                        "label": "credit score",
                        "weight": 11.83137786819673,
                        "input": 540,
                        "min": 300,
                        "max": 850
                    },
                    {
                        "id": 3,
                        "label": "existing debt",
                        "weight": -23.366246399316978,
                        "input": 40000,
                        "min": 0,
                        "max": 50000
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "income level",
                        "weight": 9.278743780092551,
                        "input": 9100,
                        "min": 0,
                        "max": 10000
                    },
                    {
                        "id": 2,
                        "label": "credit score",
                        "weight": 11.83137786819673,
                        "input": 700,
                        "min": 300,
                        "max": 850
                    },
                    {
                        "id": 3,
                        "label": "existing debt",
                        "weight": -23.366246399316978,
                        "input": 8000,
                        "min": 0,
                        "max": 50000
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "income level",
                        "weight": 9.278743780092551,
                        "input": 6800,
                        "min": 0,
                        "max": 10000
                    },
                    {
                        "id": 2,
                        "label": "credit score",
                        "weight": 11.83137786819673,
                        "input": 760,
                        "min": 300,
                        "max": 850
                    },
                    {
                        "id": 3,
                        "label": "existing debt",
                        "weight": -23.366246399316978,
                        "input": 15000,
                        "min": 0,
                        "max": 50000
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "income level",
                        "weight": 9.278743780092551,
                        "input": 4800,
                        "min": 0,
                        "max": 10000
                    },
                    {
                        "id": 2,
                        "label": "credit score",
                        "weight": 11.83137786819673,
                        "input": 610,
                        "min": 300,
                        "max": 850
                    },
                    {
                        "id": 3,
                        "label": "existing debt",
                        "weight": -23.366246399316978,
                        "input": 28000,
                        "min": 0,
                        "max": 50000
                    }
                ]
            ]
        },
        {
            id: "pre-trained-neuron-example-internal-data-scenario-4",
            navigationOrigin: preTrainedNeuronPage,
            title: "Employee Promotion Readiness",
            description: "Predict whether an employee is likely to be ready for promotion based on key workplace factors such as performance rating, leadership ability, and project success history. This example shows how an artificial neuron can combine multiple career development indicators to estimate advancement readiness.",
            learningRate: 0.1,
            cycleCount: 4_000,
            inputLabels: [
                "performance rating",
                "experience years",
                "leadership score",
                "teamwork score"
            ],
            "weights": [
                0.8297492264467301,
                14.102170387130434,
                20.171796489160545,
                10.174318865214145
            ],
            "bias": -26.69754119436742,
            "negativePredictionMessage": "Not Ready",
            "positivePredictionMessage": "Ready",
            "testDataSet": [
                [
                    {
                        "id": 1,
                        "label": "performance rating",
                        "weight": 0.8297492264467301,
                        "input": 96,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "experience years",
                        "weight": 14.102170387130434,
                        "input": 12,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "leadership score",
                        "weight": 20.171796489160545,
                        "input": 94,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 4,
                        "label": "teamwork score",
                        "weight": 10.174318865214145,
                        "input": 92,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "performance rating",
                        "weight": 0.8297492264467301,
                        "input": 88,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "experience years",
                        "weight": 14.102170387130434,
                        "input": 10,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "leadership score",
                        "weight": 20.171796489160545,
                        "input": 86,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 4,
                        "label": "teamwork score",
                        "weight": 10.174318865214145,
                        "input": 89,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "performance rating",
                        "weight": 0.8297492264467301,
                        "input": 81,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "experience years",
                        "weight": 14.102170387130434,
                        "input": 8,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "leadership score",
                        "weight": 20.171796489160545,
                        "input": 80,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 4,
                        "label": "teamwork score",
                        "weight": 10.174318865214145,
                        "input": 84,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "performance rating",
                        "weight": 0.8297492264467301,
                        "input": 74,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "experience years",
                        "weight": 14.102170387130434,
                        "input": 6,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "leadership score",
                        "weight": 20.171796489160545,
                        "input": 72,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 4,
                        "label": "teamwork score",
                        "weight": 10.174318865214145,
                        "input": 76,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "performance rating",
                        "weight": 0.8297492264467301,
                        "input": 66,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "experience years",
                        "weight": 14.102170387130434,
                        "input": 5,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "leadership score",
                        "weight": 20.171796489160545,
                        "input": 64,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 4,
                        "label": "teamwork score",
                        "weight": 10.174318865214145,
                        "input": 68,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "performance rating",
                        "weight": 0.8297492264467301,
                        "input": 58,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "experience years",
                        "weight": 14.102170387130434,
                        "input": 4,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "leadership score",
                        "weight": 20.171796489160545,
                        "input": 57,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 4,
                        "label": "teamwork score",
                        "weight": 10.174318865214145,
                        "input": 60,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "performance rating",
                        "weight": 0.8297492264467301,
                        "input": 49,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "experience years",
                        "weight": 14.102170387130434,
                        "input": 2,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "leadership score",
                        "weight": 20.171796489160545,
                        "input": 50,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 4,
                        "label": "teamwork score",
                        "weight": 10.174318865214145,
                        "input": 52,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "performance rating",
                        "weight": 0.8297492264467301,
                        "input": 91,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "experience years",
                        "weight": 14.102170387130434,
                        "input": 7,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "leadership score",
                        "weight": 20.171796489160545,
                        "input": 90,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 4,
                        "label": "teamwork score",
                        "weight": 10.174318865214145,
                        "input": 88,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "performance rating",
                        "weight": 0.8297492264467301,
                        "input": 76,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "experience years",
                        "weight": 14.102170387130434,
                        "input": 11,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "leadership score",
                        "weight": 20.171796489160545,
                        "input": 74,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 4,
                        "label": "teamwork score",
                        "weight": 10.174318865214145,
                        "input": 79,
                        "min": 0,
                        "max": 100
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "performance rating",
                        "weight": 0.8297492264467301,
                        "input": 61,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "experience years",
                        "weight": 14.102170387130434,
                        "input": 3,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "leadership score",
                        "weight": 20.171796489160545,
                        "input": 59,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 4,
                        "label": "teamwork score",
                        "weight": 10.174318865214145,
                        "input": 63,
                        "min": 0,
                        "max": 100
                    }
                ]
            ]
        },
        {
            id: "pre-trained-neuron-example-internal-data-scenario-5",
            navigationOrigin: preTrainedNeuronPage,
            title: "Customer Churn Prediction",
            description: "Predict whether a customer is likely to remain loyal or stop using a service based on key behavior indicators such as product usage, support requests, contract commitment, payment reliability, and satisfaction level. This example demonstrates how an artificial neuron can analyze customer retention signals to estimate churn risk.",
            learningRate: 0.1,
            cycleCount: 4_000,
            inputLabels: [
                "monthly usage",
                "support tickets",
                "contract length",
                "payment delay count",
                "satisfaction score"
            ],
            "weights": [
                3.6464632059961937,
                -9.704298104374066,
                6.303604560491644,
                -10.128828110110819,
                8.022481155638074
            ],
            "bias": -2.439603919290267,
            "negativePredictionMessage": "Likely Churn",
            "positivePredictionMessage": "Will Stay",
            "testDataSet": [
                [
                    {
                        "id": 1,
                        "label": "monthly usage",
                        "weight": 3.6464632059961937,
                        "input": 95,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "support tickets",
                        "weight": -9.704298104374066,
                        "input": 1,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "contract length",
                        "weight": 6.303604560491644,
                        "input": 24,
                        "min": 0,
                        "max": 24
                    },
                    {
                        "id": 4,
                        "label": "payment delay count",
                        "weight": -10.128828110110819,
                        "input": 0,
                        "min": 0,
                        "max": 12
                    },
                    {
                        "id": 5,
                        "label": "satisfaction score",
                        "weight": 8.022481155638074,
                        "input": 9.5,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "monthly usage",
                        "weight": 3.6464632059961937,
                        "input": 88,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "support tickets",
                        "weight": -9.704298104374066,
                        "input": 2,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "contract length",
                        "weight": 6.303604560491644,
                        "input": 18,
                        "min": 0,
                        "max": 24
                    },
                    {
                        "id": 4,
                        "label": "payment delay count",
                        "weight": -10.128828110110819,
                        "input": 1,
                        "min": 0,
                        "max": 12
                    },
                    {
                        "id": 5,
                        "label": "satisfaction score",
                        "weight": 8.022481155638074,
                        "input": 8.8,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "monthly usage",
                        "weight": 3.6464632059961937,
                        "input": 76,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "support tickets",
                        "weight": -9.704298104374066,
                        "input": 3,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "contract length",
                        "weight": 6.303604560491644,
                        "input": 12,
                        "min": 0,
                        "max": 24
                    },
                    {
                        "id": 4,
                        "label": "payment delay count",
                        "weight": -10.128828110110819,
                        "input": 1,
                        "min": 0,
                        "max": 12
                    },
                    {
                        "id": 5,
                        "label": "satisfaction score",
                        "weight": 8.022481155638074,
                        "input": 8.0,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "monthly usage",
                        "weight": 3.6464632059961937,
                        "input": 62,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "support tickets",
                        "weight": -9.704298104374066,
                        "input": 6,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "contract length",
                        "weight": 6.303604560491644,
                        "input": 8,
                        "min": 0,
                        "max": 24
                    },
                    {
                        "id": 4,
                        "label": "payment delay count",
                        "weight": -10.128828110110819,
                        "input": 4,
                        "min": 0,
                        "max": 12
                    },
                    {
                        "id": 5,
                        "label": "satisfaction score",
                        "weight": 8.022481155638074,
                        "input": 6.2,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "monthly usage",
                        "weight": 3.6464632059961937,
                        "input": 54,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "support tickets",
                        "weight": -9.704298104374066,
                        "input": 9,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "contract length",
                        "weight": 6.303604560491644,
                        "input": 6,
                        "min": 0,
                        "max": 24
                    },
                    {
                        "id": 4,
                        "label": "payment delay count",
                        "weight": -10.128828110110819,
                        "input": 5,
                        "min": 0,
                        "max": 12
                    },
                    {
                        "id": 5,
                        "label": "satisfaction score",
                        "weight": 8.022481155638074,
                        "input": 5.0,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "monthly usage",
                        "weight": 3.6464632059961937,
                        "input": 48,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "support tickets",
                        "weight": -9.704298104374066,
                        "input": 12,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "contract length",
                        "weight": 6.303604560491644,
                        "input": 4,
                        "min": 0,
                        "max": 24
                    },
                    {
                        "id": 4,
                        "label": "payment delay count",
                        "weight": -10.128828110110819,
                        "input": 7,
                        "min": 0,
                        "max": 12
                    },
                    {
                        "id": 5,
                        "label": "satisfaction score",
                        "weight": 8.022481155638074,
                        "input": 4.2,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "monthly usage",
                        "weight": 3.6464632059961937,
                        "input": 40,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "support tickets",
                        "weight": -9.704298104374066,
                        "input": 15,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "contract length",
                        "weight": 6.303604560491644,
                        "input": 2,
                        "min": 0,
                        "max": 24
                    },
                    {
                        "id": 4,
                        "label": "payment delay count",
                        "weight": -10.128828110110819,
                        "input": 9,
                        "min": 0,
                        "max": 12
                    },
                    {
                        "id": 5,
                        "label": "satisfaction score",
                        "weight": 8.022481155638074,
                        "input": 3.6,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "monthly usage",
                        "weight": 3.6464632059961937,
                        "input": 84,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "support tickets",
                        "weight": -9.704298104374066,
                        "input": 4,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "contract length",
                        "weight": 6.303604560491644,
                        "input": 20,
                        "min": 0,
                        "max": 24
                    },
                    {
                        "id": 4,
                        "label": "payment delay count",
                        "weight": -10.128828110110819,
                        "input": 1,
                        "min": 0,
                        "max": 12
                    },
                    {
                        "id": 5,
                        "label": "satisfaction score",
                        "weight": 8.022481155638074,
                        "input": 8.4,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "monthly usage",
                        "weight": 3.6464632059961937,
                        "input": 58,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "support tickets",
                        "weight": -9.704298104374066,
                        "input": 8,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "contract length",
                        "weight": 6.303604560491644,
                        "input": 10,
                        "min": 0,
                        "max": 24
                    },
                    {
                        "id": 4,
                        "label": "payment delay count",
                        "weight": -10.128828110110819,
                        "input": 4,
                        "min": 0,
                        "max": 12
                    },
                    {
                        "id": 5,
                        "label": "satisfaction score",
                        "weight": 8.022481155638074,
                        "input": 5.8,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "monthly usage",
                        "weight": 3.6464632059961937,
                        "input": 46,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 2,
                        "label": "support tickets",
                        "weight": -9.704298104374066,
                        "input": 11,
                        "min": 0,
                        "max": 20
                    },
                    {
                        "id": 3,
                        "label": "contract length",
                        "weight": 6.303604560491644,
                        "input": 5,
                        "min": 0,
                        "max": 24
                    },
                    {
                        "id": 4,
                        "label": "payment delay count",
                        "weight": -10.128828110110819,
                        "input": 6,
                        "min": 0,
                        "max": 12
                    },
                    {
                        "id": 5,
                        "label": "satisfaction score",
                        "weight": 8.022481155638074,
                        "input": 4.4,
                        "min": 0,
                        "max": 10
                    }
                ]
            ]
        },
        {
            id: "pre-trained-neuron-example-internal-data-scenario-6",
            navigationOrigin: preTrainedNeuronPage,
            title: "Fitness Goal Success Prediction",
            description: "Predict whether a person is likely to achieve their fitness goal based on important lifestyle factors such as workout consistency, calorie control, sleep quality, water intake, and stress management. This example shows how an artificial neuron can combine multiple health indicators to estimate success potential.",
            learningRate: 0.1,
            cycleCount: 4_000,
            inputLabels: [
                "weekly workout consistency",
                "daily calorie control",
                "sleep quality",
                "water intake",
                "stress management"
            ],
            "weights": [
                8.578435751706554,
                4.871691819885513,
                9.064165132979749,
                9.211888521053005,
                10.432340053666032
            ],
            "bias": -25.548268674911885,
            "negativePredictionMessage": "Low Success Chance",
            "positivePredictionMessage": "Likely Success",
            "testDataSet": [
                [
                    {
                        "id": 1,
                        "label": "weekly workout consistency",
                        "weight": 8.578435751706554,
                        "input": 7,
                        "min": 0,
                        "max": 7
                    },
                    {
                        "id": 2,
                        "label": "daily calorie control",
                        "weight": 4.871691819885513,
                        "input": 95,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "sleep quality",
                        "weight": 9.064165132979749,
                        "input": 9,
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 4,
                        "label": "water intake",
                        "weight": 9.211888521053005,
                        "input": 3.8,
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 5,
                        "label": "stress management",
                        "weight": 10.432340053666032,
                        "input": 9,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "weekly workout consistency",
                        "weight": 8.578435751706554,
                        "input": 6,
                        "min": 0,
                        "max": 7
                    },
                    {
                        "id": 2,
                        "label": "daily calorie control",
                        "weight": 4.871691819885513,
                        "input": 88,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "sleep quality",
                        "weight": 9.064165132979749,
                        "input": 8,
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 4,
                        "label": "water intake",
                        "weight": 9.211888521053005,
                        "input": 3.5,
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 5,
                        "label": "stress management",
                        "weight": 10.432340053666032,
                        "input": 8,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "weekly workout consistency",
                        "weight": 8.578435751706554,
                        "input": 5,
                        "min": 0,
                        "max": 7
                    },
                    {
                        "id": 2,
                        "label": "daily calorie control",
                        "weight": 4.871691819885513,
                        "input": 82,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "sleep quality",
                        "weight": 9.064165132979749,
                        "input": 7,
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 4,
                        "label": "water intake",
                        "weight": 9.211888521053005,
                        "input": 3.0,
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 5,
                        "label": "stress management",
                        "weight": 10.432340053666032,
                        "input": 7,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "weekly workout consistency",
                        "weight": 8.578435751706554,
                        "input": 4,
                        "min": 0,
                        "max": 7
                    },
                    {
                        "id": 2,
                        "label": "daily calorie control",
                        "weight": 4.871691819885513,
                        "input": 70,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "sleep quality",
                        "weight": 9.064165132979749,
                        "input": 6,
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 4,
                        "label": "water intake",
                        "weight": 9.211888521053005,
                        "input": 2.6,
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 5,
                        "label": "stress management",
                        "weight": 10.432340053666032,
                        "input": 6,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "weekly workout consistency",
                        "weight": 8.578435751706554,
                        "input": 3,
                        "min": 0,
                        "max": 7
                    },
                    {
                        "id": 2,
                        "label": "daily calorie control",
                        "weight": 4.871691819885513,
                        "input": 62,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "sleep quality",
                        "weight": 9.064165132979749,
                        "input": 5,
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 4,
                        "label": "water intake",
                        "weight": 9.211888521053005,
                        "input": 2.2,
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 5,
                        "label": "stress management",
                        "weight": 10.432340053666032,
                        "input": 5,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "weekly workout consistency",
                        "weight": 8.578435751706554,
                        "input": 2,
                        "min": 0,
                        "max": 7
                    },
                    {
                        "id": 2,
                        "label": "daily calorie control",
                        "weight": 4.871691819885513,
                        "input": 55,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "sleep quality",
                        "weight": 9.064165132979749,
                        "input": 4,
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 4,
                        "label": "water intake",
                        "weight": 9.211888521053005,
                        "input": 1.8,
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 5,
                        "label": "stress management",
                        "weight": 10.432340053666032,
                        "input": 4,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "weekly workout consistency",
                        "weight": 8.578435751706554,
                        "input": 1,
                        "min": 0,
                        "max": 7
                    },
                    {
                        "id": 2,
                        "label": "daily calorie control",
                        "weight": 4.871691819885513,
                        "input": 48,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "sleep quality",
                        "weight": 9.064165132979749,
                        "input": 3,
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 4,
                        "label": "water intake",
                        "weight": 9.211888521053005,
                        "input": 1.4,
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 5,
                        "label": "stress management",
                        "weight": 10.432340053666032,
                        "input": 3,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "weekly workout consistency",
                        "weight": 8.578435751706554,
                        "input": 6,
                        "min": 0,
                        "max": 7
                    },
                    {
                        "id": 2,
                        "label": "daily calorie control",
                        "weight": 4.871691819885513,
                        "input": 84,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "sleep quality",
                        "weight": 9.064165132979749,
                        "input": 8,
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 4,
                        "label": "water intake",
                        "weight": 9.211888521053005,
                        "input": 3.4,
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 5,
                        "label": "stress management",
                        "weight": 10.432340053666032,
                        "input": 7,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "weekly workout consistency",
                        "weight": 8.578435751706554,
                        "input": 4,
                        "min": 0,
                        "max": 7
                    },
                    {
                        "id": 2,
                        "label": "daily calorie control",
                        "weight": 4.871691819885513,
                        "input": 68,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "sleep quality",
                        "weight": 9.064165132979749,
                        "input": 6,
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 4,
                        "label": "water intake",
                        "weight": 9.211888521053005,
                        "input": 2.5,
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 5,
                        "label": "stress management",
                        "weight": 10.432340053666032,
                        "input": 5,
                        "min": 0,
                        "max": 10
                    }
                ],
                [
                    {
                        "id": 1,
                        "label": "weekly workout consistency",
                        "weight": 8.578435751706554,
                        "input": 3,
                        "min": 0,
                        "max": 7
                    },
                    {
                        "id": 2,
                        "label": "daily calorie control",
                        "weight": 4.871691819885513,
                        "input": 58,
                        "min": 0,
                        "max": 100
                    },
                    {
                        "id": 3,
                        "label": "sleep quality",
                        "weight": 9.064165132979749,
                        "input": 5,
                        "min": 0,
                        "max": 10
                    },
                    {
                        "id": 4,
                        "label": "water intake",
                        "weight": 9.211888521053005,
                        "input": 2.0,
                        "min": 0,
                        "max": 5
                    },
                    {
                        "id": 5,
                        "label": "stress management",
                        "weight": 10.432340053666032,
                        "input": 4,
                        "min": 0,
                        "max": 10
                    }
                ]
            ]
        }
    ]
}

export default getPreTrainedNeuronExampleInternalData