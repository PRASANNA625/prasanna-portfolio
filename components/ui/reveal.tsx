"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const TRAVEL_PX = 90;
const BLUR_PX = 6;

// How far into the viewport an element must scroll before it's fully
// revealed, expressed as fractions of viewport height measured from the top.
const ENTRY_START = 0.92;
const ENTRY_END = 0.55;

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(raf);
    }

    let ticking = false;

    const measure = () => {
      ticking = false;
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      const start = vh * ENTRY_START;
      const end = vh * ENTRY_END;
      const raw = (start - top) / (start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    const initialRaf = requestAnimationFrame(measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(initialRaf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const style: CSSProperties = {
    transitionDelay: delay ? `${delay}ms` : undefined,
    opacity: progress,
    transform: `translateY(${(1 - progress) * TRAVEL_PX}px) scale(${0.92 + progress * 0.08})`,
    filter: `blur(${(1 - progress) * BLUR_PX}px)`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className="transition-[transform,opacity,filter] duration-150 ease-out will-change-transform"
    >
      <div className={cn(className)}>{children}</div>
    </div>
  );
}
