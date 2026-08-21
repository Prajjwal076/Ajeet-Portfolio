import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { media } from "@/lib/media";

/**
 * Square editorial collage — the artwork scales up until its deep red field
 * becomes the background colour of the next section (visual continuity).
 */
export function CafeScene() {
  const section = useRef<HTMLElement>(null);
  const art = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        art.current,
        { scale: 0.72, yPercent: 6 },
        {
          scale: 1.02,
          yPercent: -4,
          ease: "none",
          scrollTrigger: { trigger: section.current, start: "top bottom", end: "bottom top", scrub: 1.2 },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="relative flex min-h-[150svh] items-center justify-center overflow-hidden bg-[oklch(0.32_0.13_28)]"
    >
      <div className="grain" />
      <div ref={art} className="relative w-[92vw] max-w-[820px]">
        <img
          src={media.cafe}
          alt="Three Guys Cafe New Year's Resolution collage poster"
          loading="lazy"
          className="w-full"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-[10vh] z-10 px-6 md:px-12">
        <div className="flex items-start justify-between">
          <span className="label text-bone/70">Project 02 — Social Campaign</span>
          <span className="label text-bone/70">Three Guys Cafe</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-[8vh] z-10 px-6 md:px-12">
        <h2 className="display text-[13vw] text-bone/90 mix-blend-overlay md:text-[8vw]">
          Better flavours,
          <br />
          better moments
        </h2>
      </div>
    </section>
  );
}
