import { useEffect, useRef, useState } from "react";
import { getGsap } from "@/lib/gsap";
import { media } from "@/lib/media";

/** Pinned video case study — portrait 4:5 edit framed cinematically. */
export function VideoCase() {
  const section = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const { gsap } = getGsap();
    const node = video.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        frame.current,
        { scale: 0.9, yPercent: 4 },
        {
          scale: 1,
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        },
      );
      if (node) {
        ScrollPlay(node);
      }
    });
    return () => ctx.revert();
  }, []);

  const toggleSound = () => {
    const node = video.current;
    if (!node) return;
    node.muted = sound;
    setSound(!sound);
    void node.play().catch(() => {});
  };

  return (
    <section
      ref={section}
      className="relative overflow-hidden bg-[oklch(0.16_0.03_200)] px-6 py-[16vh] md:px-12"
    >
      <div className="grain" />
      <div className="relative z-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <span className="label text-bone/60">Project 03 — Video Editing</span>
          <h2 className="display mt-6 text-[15vw] text-bone md:text-[8vw]">
            Once upon
            <br />
            a time in the
            <br />
            <span className="text-[oklch(0.78_0.12_190)]">Maldives</span>
          </h2>
          <dl className="mt-10 grid max-w-sm grid-cols-2 gap-y-3 border-t border-foreground/15 pt-5">
            <dt className="label">Role</dt>
            <dd className="text-sm text-bone/80">Edit / Sound / Type</dd>
            <dt className="label">Year</dt>
            <dd className="text-sm text-bone/80">2026</dd>
            <dt className="label">Duration</dt>
            <dd className="text-sm text-bone/80">00:05 loop</dd>
          </dl>
          <button
            onClick={toggleSound}
            data-cursor={sound ? "Mute" : "Sound"}
            className="label mt-8 border border-foreground/30 px-5 py-3 text-bone transition-colors hover:border-primary hover:text-primary"
          >
            {sound ? "Sound on — mute ↗" : "Play with sound ↗"}
          </button>
        </div>

        <div ref={frame} className="w-full md:w-[38vw]">
          <video
            ref={video}
            src={media.maldives}
            poster={media.maldivesPoster}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full border border-foreground/15"
          />
          <p className="label mt-3">Travel promo — vertical cut</p>
        </div>
      </div>
    </section>
  );
}

function ScrollPlay(node: HTMLVideoElement) {
  const io = new IntersectionObserver(
    (entries) => {
        const entry = entries[0];
        if (!entry) return;
      if (entry.isIntersecting) void node.play().catch(() => {});
      else node.pause();
    },
    { threshold: 0.3 },
  );
  io.observe(node);
}
