import { useEffect, useRef, type ReactNode } from "react";
import { getGsap } from "@/lib/gsap";

export type ParallaxConfig = {
  yFrom?: string;
  yTo?: string;
  scaleFrom?: number;
  scaleTo?: number;
  opacityFrom?: number;
  opacityTo?: number;
  rotation?: number;
  trigger?: React.RefObject<HTMLElement | null>;
  start?: string;
  end?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Scroll-scrubbed layer. Each layer moves at its own speed so a section
 * reads as a motion-design composition instead of a flat page.
 */
export function ParallaxLayer({
  yFrom = "0vh",
  yTo = "0vh",
  scaleFrom = 1,
  scaleTo = 1,
  opacityFrom = 1,
  opacityTo = 1,
  rotation = 0,
  trigger,
  start = "top bottom",
  end = "bottom top",
  className,
  children,
}: ParallaxConfig) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = getGsap();
    const node = el.current;
    if (!node) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        node,
        { y: yFrom, scale: scaleFrom, opacity: opacityFrom, rotate: 0 },
        {
          y: yTo,
          scale: scaleTo,
          opacity: opacityTo,
          rotate: rotation,
          ease: "none",
          scrollTrigger: {
            trigger: trigger?.current ?? node,
            start,
            end,
            scrub: 1.1,
          },
        },
      );
    });
    return () => ctx.revert();
  }, [yFrom, yTo, scaleFrom, scaleTo, opacityFrom, opacityTo, rotation, trigger, start, end]);

  return (
    <div ref={el} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
