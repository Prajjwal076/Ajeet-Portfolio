import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";

export function IntroType() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-intro-line]").forEach((line, i) => {
        gsap.fromTo(
          line,
          { opacity: 0.12, xPercent: i % 2 === 0 ? -4 : 4 },
          {
            opacity: 1,
            xPercent: 0,
            ease: "none",
            scrollTrigger: { trigger: line, start: "top 85%", end: "center 45%", scrub: 1 },
          },
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="relative bg-ink px-6 py-[18vh] md:px-12">
      <div className="grain" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <span className="label">01 — Intent</span>
        <div className="mt-8 space-y-1">
          <p data-intro-line className="display text-[11vw] text-bone md:text-[7vw]">
            Motion in
          </p>
          <p data-intro-line className="display text-[11vw] text-bone/50 md:text-[7vw]">
            every single
          </p>
          <p data-intro-line className="display text-[11vw] text-primary md:text-[7vw]">
            frame.
          </p>
        </div>
        <p className="mt-12 max-w-lg text-sm leading-relaxed text-bone/70 md:ml-auto">
          Posters for campus culture, campaign edits, kinetic type and colour-led compositions. Every
          piece below is built to be seen large — so the site scrolls like a film, not a grid.
        </p>
      </div>
    </section>
  );
}
