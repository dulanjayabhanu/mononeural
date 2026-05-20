"use client";

import SmoothButton from "@/components/smoothui/smooth-button";
import { motion, useReducedMotion } from "motion/react";
import type {SubHeroProps} from "@/types/props/SubHeroProps.ts";
import {useNavigate} from "react-router";
import {ExternalLink} from "lucide-react";

const SPRING = {
  type: "spring" as const,
  duration: 0.25,
  bounce: 0.1,
};

export function CtaCentered(
    {
      title,
      description,
      firstActionButtonProps,
      secondActionButtonProps,
      targetAutoScrollRef,
    }: SubHeroProps ) {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate()
  const navbarHeight: number = 96

  const handleFirstActionButtonTriggerProcess = () => {
      if (firstActionButtonProps.path) {
          navigate(firstActionButtonProps.path)
      } else {
          const targetRefComponent = targetAutoScrollRef.current
          if (targetRefComponent) {
              const finalDestination: number = targetRefComponent.getBoundingClientRect().top + window.pageYOffset - navbarHeight
              window.scrollTo({
                  top: finalDestination,
                  behavior: "smooth",
              })
          }
      }
  }

  return (
    <section aria-labelledby="cta-centered-heading" className="h-screen flex flex-col justify-center">
      <div className="relative overflow-hidden flex flex-col -mt-18">
        <motion.div
          className="relative mx-auto max-w-3xl px-6 text-center"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
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
          <h2
            className="text-balance font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl"
            id="cta-centered-heading"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-foreground/70 text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <SmoothButton
                  size="lg"
                  variant="default"
                  onClick={() =>
                      handleFirstActionButtonTriggerProcess()
                  }
              >
                  {firstActionButtonProps.label}
              </SmoothButton>
              {secondActionButtonProps.path ? (
                  <SmoothButton
                      size="lg"
                      variant="outline"
                      onClick={() =>
                          navigate(secondActionButtonProps.path)
                      }
                  >
                      {secondActionButtonProps.label}
                      <ExternalLink size="16" />
                  </SmoothButton>
              ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaCentered;
