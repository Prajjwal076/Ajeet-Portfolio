import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { galleryItems } from "@/lib/media";

/** Horizontal scroll-linked poster gallery. */
export function PosterGallery() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      const el = track.current;
      const wrap = section.current;
      if (!el || !wrap) return;
      const distance = () => el.scrollWidth - window.innerWidth + 48;
      if (window.innerWidth < 768) return;
      gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="relative overflow-hidden bg-ink py-[10vh] md:h-svh md:py-0">
      <div className="grain" />
      <div className="relative z-10 flex h-full flex-col justify-center gap-10 px-6 md:px-12">
        <div className="flex items-baseline justify-between">
          <h2 className="display text-[9vw] text-bone md:text-[4.5vw]">Poster Room</h2>
          <span className="label hidden md:block">Scroll → 05 / Selected print &amp; event work</span>
        </div>
        <div
          ref={track}
          className="flex flex-col gap-10 md:flex-row md:items-end md:gap-8 md:pr-[20vw]"
        >
          {galleryItems.map((item, i) => (
            <figure
              key={item.title}
              data-cursor="View"
              className="group relative shrink-0 md:w-[34vw]"
              style={{ marginBottom: i % 2 ? "6vh" : 0 }}
            >
              <div className="overflow-hidden bg-secondary" style={{ aspectRatio: item.ratio }}>
                <img
                  src={item.src}
                  alt={`${item.title} — ${item.meta}`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  style={{ objectPosition: item.objectPosition }}
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-foreground/15 pt-3">
                <span className="text-sm text-bone">{item.title}</span>
                <span className="label">
                  {item.meta} · {item.year}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
