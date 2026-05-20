import type {FaqContent} from "@/types/FaqContent.ts";
import React from "react";

const getFaqContent = (): FaqContent[] => {
    return [
        {
            id: 1,
            title: "What is MonoNeural?",
            content: React.createElement(
                "div",
                { className: "leading-7 [&:not(:first-child)]:mt-6" },
                React.createElement(
                    "p",
                    null,
                    "MonoNeural is an interactive educational platform designed to help users learn how artificial neurons work. The platform allows you to build, train, test, and analyze a single artificial neuron visually without writing code."
                )
            )
        },
        {
            id: 2,
            title: "Who is MonoNeural designed for?",
            content: React.createElement(
                "div",
                { className: "leading-7 [&:not(:first-child)]:mt-6" },
                React.createElement(
                    "p",
                    null,
                    "MonoNeural is designed for students, beginners in artificial intelligence, educators, developers, and anyone interested in understanding the fundamentals of neural networks and machine learning."
                )
            )
        },
        {
            id: 3,
            title: "Do I need programming knowledge to use MonoNeural?",
            content: React.createElement(
                "div",
                { className: "leading-7 [&:not(:first-child)]:mt-6" },
                React.createElement(
                    "p",
                    null,
                    "No. MonoNeural is specifically designed to provide a visual and beginner-friendly learning experience. Users can experiment with artificial neuron behavior through interactive controls and visual tools without needing programming experience."
                )
            )
        },
        {
            id: 6,
            title: "Does MonoNeural support full neural networks?",
            content: React.createElement(
                "div",
                { className: "leading-7 [&:not(:first-child)]:mt-6" },
                React.createElement(
                    "p",
                    null,
                    "Currently, MonoNeural focuses on a single artificial neuron to help users understand the core fundamentals of neural computation. Support for larger neural networks may be introduced in future versions."
                )
            )
        },
        {
            id: 11,
            title: "Can I export trained neuron parameters?",
            content: React.createElement(
                "div",
                { className: "leading-7 [&:not(:first-child)]:mt-6" },
                React.createElement(
                    "p",
                    null,
                    "Yes. MonoNeural allows you to export final trained weights and bias values so they can be reused in external applications, experiments, or future testing sessions."
                )
            )
        },
        {
            id: 12,
            title: "Does MonoNeural store my training data?",
            content: React.createElement(
                "div",
                { className: "leading-7 [&:not(:first-child)]:mt-6" },
                React.createElement(
                    "p",
                    null,
                    "Most neuron training and testing operations occur locally in your browser. MonoNeural is designed with a local-first approach to minimize external data processing."
                )
            )
        },
        {
            id: 13,
            title: "Can I use MonoNeural on mobile devices?",
            content: React.createElement(
                "div",
                { className: "leading-7 [&:not(:first-child)]:mt-6" },
                React.createElement(
                    "p",
                    null,
                    "Yes. MonoNeural uses a responsive interface that supports desktop, tablet, and mobile devices, although the best experience is typically available on larger screens."
                )
            )
        },
        {
            id: 14,
            title: "Is MonoNeural open source?",
            content: React.createElement(
                "div",
                { className: "leading-7 [&:not(:first-child)]:mt-6" },
                React.createElement(
                    "p",
                    null,
                    "Yes. MonoNeural is developed as an open-source educational platform to encourage learning, experimentation, and community-driven improvement."
                )
            )
        },
        {
            id: 15,
            title: "Where should I start as a beginner?",
            content: React.createElement(
                "div",
                { className: "leading-7 [&:not(:first-child)]:mt-6" },
                React.createElement(
                    "p",
                    null,
                    "New users are encouraged to begin with the Documentation section and explore the Pre-Trained Examples page before building custom neurons using the Trainer and Tester tools."
                )
            )
        },
    ]
}

export default getFaqContent