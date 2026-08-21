import { ParallaxLayer } from "./ParallaxLayer";
import { dropItems } from "@/lib/media";

/** Product / brand layouts — staggered parallax columns on a bone field. */
export function DropScene() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.9_0.008_70)] px-6 py-[14vh] text-ink md:px-12">
      <div className="grain opacity-15" />
      <div className="relative z-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <span className="label text-ink/60">Project 04 — Brand Layouts</span>
          <span className="label text-ink/60">Puma · Parker</span>
        </div>
        <h2 className="display mt-6 text-[12vw] leading-[0.85] md:text-[6vw]">
          Product first,
          <br />
          type louder.
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {dropItems.map((item, i) => (
            <ParallaxLayer
              key={item.title}
              yFrom={i === 1 ? "10vh" : "4vh"}
              yTo={i === 1 ? "-10vh" : "-4vh"}
            >
              <figure data-cursor="View">
                <div
                  className="overflow-hidden border border-ink/10 bg-ink/5"
                  style={{ aspectRatio: item.ratio }}
                >
                  <img
                    src={item.src}
                    alt={`${item.title} — ${item.meta}`}
                    loading="lazy"
                    className="size-full object-cover"
                    style={{ objectPosition: item.objectPosition }}
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-3">
                  <span className="text-sm">{item.title}</span>
                  <span className="label text-ink/60">{item.year}</span>
                </figcaption>
              </figure>
            </ParallaxLayer>
          ))}
        </div>
      </div>
    </section>
  );
}
