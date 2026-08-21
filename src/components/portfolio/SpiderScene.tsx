import { useRef } from "react";
import { media } from "@/lib/media";
import { ParallaxLayer } from "./ParallaxLayer";

/**
 * The Spider-Man artwork sits low-left in its frame with dripping red typography,
 * so typography lives top/right and the character rises out of the bottom edge
 * as you scroll. Four layers, four speeds.
 */
export function SpiderScene() {
  const section = useRef<HTMLElement>(null);

  return (
    <section
      ref={section}
      className="relative min-h-[170svh] overflow-hidden bg-[oklch(0.11_0.03_25)]"
    >
      {/* Layer 1 — very slow texture */}
      <ParallaxLayer
        trigger={section}
        yFrom="-6vh"
        yTo="6vh"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,oklch(0.4_0.2_27/0.5),transparent_65%)]" />
        <div className="grain opacity-30" />
      </ParallaxLayer>

      {/* Layer 2 — the artwork, noticeably slower than content */}
      <ParallaxLayer
        trigger={section}
        yFrom="26vh"
        yTo="-14vh"
        scaleFrom={1.14}
        scaleTo={1}
        opacityFrom={0.72}
        opacityTo={1}
        className="absolute inset-x-0 top-[70svh] h-[68svh] md:top-[30svh] md:right-[3%] md:left-auto md:h-[88svh] md:w-[48%]"
      >
        <img
          src={media.spiderman}
          alt="Spider-Man poster artwork with kinetic red RESPONSIBILITY typography"
          loading="lazy"
          className="size-full object-contain object-bottom"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </ParallaxLayer>

      {/* Layer 3 — cropped detail echo */}
      <ParallaxLayer
        trigger={section}
        yFrom="14vh"
        yTo="-22vh"
        rotation={-3}
        className="absolute top-[58svh] left-6 hidden w-44 overflow-hidden border border-foreground/20 md:block"
      >
        <img
          src={media.spiderman}
          alt="Cropped detail of the Spider-Man poster typography"
          loading="lazy"
          className="h-56 w-full object-cover"
          style={{ objectPosition: "20% 18%" }}
        />
      </ParallaxLayer>

      {/* Layer 4 + 5 — typography and metadata, normal scroll */}
      <div className="relative z-10 flex min-h-[170svh] flex-col justify-between px-6 py-[14vh] md:px-12">
        <div className="max-w-[18ch]">
          <span className="label text-bone/60">Project 01</span>
          <h2 className="display mt-6 text-[17vw] text-bone md:text-[9.5vw]">
            With great
            <br />
            <span className="text-primary">power</span>
          </h2>
        </div>

        <div className="mt-[60svh] max-w-md md:mt-0">
          <h3 className="display text-4xl text-bone md:text-6xl">Responsibility</h3>
          <p className="mt-4 text-sm leading-relaxed text-bone/70">
            A vertical poster study: condensed type sliced by the character silhouette, red on red,
            depth built purely from value shifts rather than outlines.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-y-3 border-t border-foreground/15 pt-5">
            <dt className="label">Role</dt>
            <dd className="text-sm text-bone/80">Graphic Design / Poster</dd>
            <dt className="label">Year</dt>
            <dd className="text-sm text-bone/80">2026</dd>
            <dt className="label">Palette</dt>
            <dd className="text-sm text-bone/80">Crimson · Ink</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
