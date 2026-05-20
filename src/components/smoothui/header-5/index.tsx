"use client";

import SmoothButton from "@/components/smoothui/smooth-button";
import { motion, useReducedMotion } from "motion/react";
import {ExternalLink} from "lucide-react";
import {useNavigate} from "react-router";

const SPRING = {
  type: "spring" as const,
  duration: 0.25,
  bounce: 0.1,
};

export function HeroSpotlight() {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate()

  return (
    <section aria-labelledby="hero-spotlight-heading" className="w-full">
      <div className="relative flex h-screen items-center justify-center overflow-hidden py-24 md:py-32">
        {/* Spotlight beam */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 h-full w-150 -translate-x-1/2"
          initial={
            shouldReduceMotion ? { opacity: 0.15 } : { opacity: 0, scaleX: 0 }
          }
          style={{
            background:
              "conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(120, 119, 198, 0.12) 50%, transparent 60%)",
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
          }
          viewport={{ once: true }}
          whileInView={
            shouldReduceMotion
              ? { opacity: 0.15 }
              : { opacity: 0.15, scaleX: 1 }
          }
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center -mt-20">
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { ...SPRING, staggerChildren: 0.08 }
            }
            viewport={{ once: true }}
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
          >
            <h1
              className="font-bold text-4xl tracking-tight md:text-6xl lg:text-7xl"
              id="hero-spotlight-heading"
            >
              MonoNeural
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg">
              Learn artificial intelligence from the ground up. Build, train, and test your own neural networks without writing a single line of code.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <SmoothButton
                size="lg"
                onClick={() =>
                  navigate("/trainer")
                }
              >
                Build Your Neuron
              </SmoothButton>
              <SmoothButton
                size="lg"
                variant="outline"
                onClick={() =>
                    navigate("/docs")
                }
              >
                Explore Documentation
                <ExternalLink size="16" />
              </SmoothButton>
            </div>
          </motion.div>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }
        `}</style>
      </div>
    </section>
  );
}

export default HeroSpotlight;
