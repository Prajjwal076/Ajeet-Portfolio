import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { getGsap } from "@/lib/gsap";
import { media } from "@/lib/media";
import { AutoVideo } from "./AutoVideo";

export function HeroShowreel() {
  const section = useRef<HTMLElement>(null);
  const videoWrap = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.from(title.current?.children ?? [], {
        yPercent: 120,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.09,
        delay: 2.4,
      });
      gsap.to(videoWrap.current, {
        scale: 1.18,
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: section.current, start: "top top", end: "bottom top", scrub: 1 },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="relative h-svh w-full overflow-hidden bg-ink">
      <div ref={videoWrap} className="absolute inset-0">
        <AutoVideo
          src={media.nike}
          poster={media.nikePoster}
          className="size-full object-cover opacity-70"
          style={{ objectPosition: "50% 45%" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/20 to-ink" />
      <div className="grain" />

      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 md:px-12">
        <header className="flex items-start justify-between">
          <span className="label text-bone/70">Ajeet Ojha</span>
          <div className="flex items-center gap-5">
            <a href="#about" className="label text-bone/70 hover:text-primary" data-cursor="About">
              About
            </a>
            <Link
              to="/archive"
              className="label text-bone/70 hover:text-primary"
              data-cursor="Open"
            >
              Archive
            </Link>
            <a href="#contact" className="label text-primary" data-cursor="Say hi">
              Contact ↗
            </a>
          </div>
        </header>

        <div ref={title} className="w-full">
          <div className="overflow-hidden">
            <h1 className="display text-[19vw] text-bone md:text-[12vw]">Just</h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="display text-[19vw] text-primary md:text-[12vw]">Design</h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="display text-[19vw] text-bone md:text-[12vw]">It.</h1>
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-foreground/15 pt-5">
          <p className="max-w-sm text-sm text-bone/70">
            Kinetic type, posters and edits — a reel of work where the frame keeps moving.
          </p>
          <span className="label text-bone/60">Scroll ↓ Showreel 01 / Nike — Air Max</span>
        </div>
      </div>
    </section>
  );
}
