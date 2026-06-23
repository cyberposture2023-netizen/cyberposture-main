"use client";

import { useState, useEffect, useRef } from "react";

interface Options {
  durationMs?: number;
  /** Whether to start immediately or wait for manual trigger */
  autoStart?: boolean;
}

export function useCountUp(
  target: number,
  { durationMs = 1500, autoStart = false }: Options = {}
) {
  const [value, setValue] = useState(0);
  const [running, setRunning] = useState(false);
  const rafRef = useRef<number>(0);

  function start() {
    // Respect prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setValue(target);
      return;
    }
    setRunning(true);
  }

  useEffect(() => {
    if (autoStart) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart]);

  useEffect(() => {
    if (!running) return;
    setValue(0);
    const t0 = performance.now();

    function tick(now: number) {
      const elapsed = now - t0;
      let p = Math.min(1, elapsed / durationMs);
      // ease-out cubic
      p = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * p));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
        setRunning(false);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [running, target, durationMs]);

  return { value, start };
}
