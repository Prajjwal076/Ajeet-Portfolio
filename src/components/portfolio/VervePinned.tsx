import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { media } from "@/lib/media";

/**
 * V-VERVE is a detailed black artwork — it gets pinned so it stays on screen
 * while the case text moves past it.
 */
export function VervePinned() {
  const section = useRef<HTMLElement>(null);
  const art = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      const wrap = section.current;
      if (!wrap) return;
      ScrollPin(gsap, wrap, art.current, copy.current);
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="relative bg-black">
      <div className="grid md:grid-cols-2">
        <div ref={art} className="relative h-svh md:sticky md:top-0">
          <img
            src={media.vverve}
            alt="V-VERVE Kapish 2024 poster with dripping red butterfly"
            loading="lazy"
            className="size-full object-contain p-6 md:p-10"
            style={{ objectPosition: "50% 40%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 md:to-black/70" />
        </div>

        <div ref={copy} className="flex flex-col justify-center gap-[16vh] px-6 py-[18vh] md:px-12">
          <div>
            <span className="label">Project 06 — Identity</span>
            <h2 className="display mt-6 text-[13vw] text-bone md:text-[6vw]">
              We walk
              <br />
              for a <span className="text-primary">cause</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-bone/70">
            Verve — enthusiasm, energy, vitality. Condensed display type at maximum weight, punctured by
            a bleeding butterfly. Pure black field so the red does all the talking.
          </p>
          <dl className="grid max-w-md grid-cols-2 gap-y-3 border-t border-foreground/15 pt-5">
            <dt className="label">Event</dt>
            <dd className="text-sm text-bone/80">Kapish 2024</dd>
            <dt className="label">Discipline</dt>
            <dd className="text-sm text-bone/80">Poster / Typography</dd>
            <dt className="label">Output</dt>
            <dd className="text-sm text-bone/80">Print + Social</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

function ScrollPin(
  gsap: typeof import("gsap").default,
  wrap: HTMLElement,
  art: HTMLElement | null,
  copy: HTMLElement | null,
) {
  if (!art || !copy) return;
  gsap.fromTo(
    art.querySelector("img"),
    { scale: 1.12 },
    {
      scale: 1,
      ease: "none",
      scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: 1.2 },
    },
  );
}
