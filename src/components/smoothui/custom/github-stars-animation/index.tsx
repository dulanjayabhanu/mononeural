"use client";

import { cn } from "@/lib/utils.ts";
import { motion, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const TRANSITION_DURATION = 0.3;
const EASE_OUT_CUBIC = [0.215, 0.61, 0.355, 1] as const;
const COUNTDOWN_DURATION = 2000;
const AVATAR_COUNT = 5;
const STAGGER_DELAY = 0.05;

export interface Stargazer {
  avatar_url: string;
  html_url: string;
  login: string;
}

export interface GitHubStarsAnimationProps {
  apiEndpoint?: string;
  avatarClassName?: string;
  className?: string;
  countClassName?: string;
  maxAvatars?: number;
  owner?: string;
  repo?: string;
  showAvatars?: boolean;
  starCount?: number;
  stargazers?: Stargazer[];
}

export default function GitHubStarsAnimation({
  owner = "dulanjayabhanu",
  repo = "dulanjayabhanu",
  stargazers: providedStargazers,
  starCount: providedStarCount,
  apiEndpoint,
  className = "",
  avatarClassName = "",
  countClassName = "",
  showAvatars = true,
  maxAvatars = AVATAR_COUNT,
}: GitHubStarsAnimationProps) {
  const [stargazers, setStargazers] = useState<Stargazer[]>(
    providedStargazers || []
  );
  const [starCount, setStarCount] = useState(providedStarCount || 0);
  const [displayCount, setDisplayCount] = useState(0);
  const [isLoading, setIsLoading] = useState(!providedStargazers);
  const [error, setError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const countSpring = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  // Fetch stargazers and star count
  useEffect(() => {
    if (providedStargazers && providedStarCount !== undefined) {
      setStargazers(providedStargazers);
      setStarCount(providedStarCount);
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false);

        // Try to fetch from custom API endpoint first
        if (apiEndpoint) {
          const response = await fetch(
            `${apiEndpoint}?owner=${owner}&repo=${repo}`
          );
          if (response.ok) {
            const data = await response.json();
            if (data.stargazers) {
              setStargazers(data.stargazers.slice(0, maxAvatars));
            }
            if (data.stars !== undefined) {
              setStarCount(data.stars);
            }
            setIsLoading(false);
            return;
          }
        }

        // Fallback to GitHub API directly (client-side)
        // Note: This has rate limits, so using a token is recommended
        const headers: HeadersInit = {
          Accept: "application/vnd.github.v3+json",
        };

        // Parallelize independent fetches to eliminate waterfall
        const [repoResponse, stargazersResponse] = await Promise.all([
          fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers }),
          fetch(
            `https://api.github.com/repos/${owner}/${repo}/stargazers?per_page=${maxAvatars}`,
            { headers }
          ),
        ]);

        // Process repo info for star count
        if (repoResponse.ok) {
          try {
            const repoData = await repoResponse.json();
            setStarCount(repoData.stargazers_count || 0);
          } catch {
            // Silently fail for star count
          }
        }

        // Process stargazers
        if (stargazersResponse.ok) {
          try {
            const stargazersData =
              (await stargazersResponse.json()) as Stargazer[];
            setStargazers(stargazersData.slice(0, maxAvatars));
          } catch {
            // Silently fail for stargazers
          }
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [
    owner,
    repo,
    apiEndpoint,
    maxAvatars,
    providedStargazers,
    providedStarCount,
  ]);

  // Animate countdown
  useEffect(() => {
    if (starCount === 0 || shouldReduceMotion) {
      if (shouldReduceMotion) {
        setDisplayCount(starCount);
        countSpring.set(starCount);
      }
      return;
    }

    const startTime = Date.now();
    const startValue = 0;
    const endValue = starCount;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / COUNTDOWN_DURATION, 1);

      // Ease-out function
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.floor(startValue + (endValue - startValue) * eased);

      setDisplayCount(current);
      countSpring.set(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayCount(endValue);
        countSpring.set(endValue);
      }
    };

    animate();
  }, [starCount, countSpring, shouldReduceMotion]);

  if (isLoading) {
    return (
      <div
        className={cn("flex items-center gap-3 text-foreground/60", className)}
      >
        <div className="h-10 w-10 animate-pulse rounded-full bg-foreground/20" />
        <div className="h-6 w-20 animate-pulse rounded bg-foreground/20" />
      </div>
    );
  }

  if (error && starCount === 0) {
    return null;
  }

  const visibleAvatars = stargazers.slice(0, maxAvatars);

  return (
    <div
        className={cn("flex items-center gap-3 hover:cursor-pointer", className)}
        onClick={() =>
            window.location.href = "https://github.com/dulanjayabhanu/mononeural"
        }
    >
      {/* Avatars */}
      {showAvatars && visibleAvatars.length > 0 && (
        <div className="relative flex items-center">
          {visibleAvatars.map((stargazer, index) => (
            <motion.a
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }
              }
              aria-label={`${stargazer.login}'s GitHub profile`}
              className={cn(
                "relative z-10 h-10 w-10 overflow-hidden rounded-full border-2 border-background bg-background transition-transform hover:z-20 hover:scale-110",
                avatarClassName
              )}
              href={stargazer.html_url}
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 0,
                      scale: 0.8,
                      x: -20,
                    }
              }
              key={stargazer.login}
              rel="noopener noreferrer"
              style={{
                marginLeft: index > 0 ? "-8px" : "0",
              }}
              target="_blank"
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: TRANSITION_DURATION,
                      delay: index * STAGGER_DELAY,
                      ease: EASE_OUT_CUBIC,
                    }
              }
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, zIndex: 20 }}
            >
              <img
                alt={`${stargazer.login}'s avatar`}
                className="h-full w-full object-cover"
                src={stargazer.avatar_url}
              />
            </motion.a>
          ))}
        </div>
      )}

      {/* Star count */}
      <motion.div
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        className={cn("flex items-center gap-1.5 font-medium text-xs text-muted-foreground" +
            "", countClassName)}
        initial={
          shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: TRANSITION_DURATION,
                ease: EASE_OUT_CUBIC,
              }
        }
      >
        <svg
            aria-hidden="true"
            className="h-5 w-5 text-foreground"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        <motion.span
          animate={shouldReduceMotion ? { scale: 1 } : { scale: [1, 1.1, 1] }}
          className="tabular-nums"
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 0.3,
                  ease: EASE_OUT_CUBIC,
                }
          }
        >
          {displayCount.toLocaleString()}
        </motion.span>
      </motion.div>
    </div>
  );
}
