import { Link } from "@tanstack/react-router";
import { media } from "@/lib/media";
import { AutoVideo } from "./AutoVideo";
import { ParallaxLayer } from "./ParallaxLayer";

/** Wide cinematic cut + two supporting edits, all muted and viewport-driven. */
export function MotionCuts() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-[14vh] md:px-12">
      <div className="grain" />
      <div className="relative z-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <span className="label text-bone/60">Project 07 — Motion Cuts</span>
          <span className="label text-bone/60">Edit · Grade · Sound</span>
        </div>
        <h2 className="display mt-6 text-[13vw] leading-[0.85] text-bone md:text-[6.5vw]">
          Frames that
          <br />
          <span className="text-primary">keep driving.</span>
        </h2>

        <ParallaxLayer yFrom="6vh" yTo="-6vh" className="mt-14">
          <figure>
            <div
              className="overflow-hidden border border-foreground/15"
              style={{ aspectRatio: "16 / 9" }}
            >
              <AutoVideo
                src={media.car}
                poster={media.carPoster}
                controls
                muted={false}
                autoPlayOnView={false}
                loop={false}
                className="size-full object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-foreground/15 pt-3">
              <span className="text-sm text-bone">Night Drive — automotive edit</span>
              <span className="label">Colour grade · 2026</span>
            </figcaption>
          </figure>
        </ParallaxLayer>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
          {[
            {
              src: media.edit04,
              poster: media.edit04Poster,
              title: "Edit 04",
              meta: "Rhythm cut · 2026",
            },
            {
              src: media.me,
              poster: media.mePoster,
              title: "Self Portrait Reel",
              meta: "Titles · 2026",
            },
          ].map((clip, i) => (
            <ParallaxLayer key={clip.title} yFrom={i ? "8vh" : "3vh"} yTo={i ? "-8vh" : "-3vh"}>
              <figure>
                <div
                  className="overflow-hidden border border-foreground/15"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <AutoVideo
                    src={clip.src}
                    poster={clip.poster}
                    controls
                    muted={false}
                    autoPlayOnView={false}
                    loop={false}
                    className="size-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-foreground/15 pt-3">
                  <span className="text-sm text-bone">{clip.title}</span>
                  <span className="label">{clip.meta}</span>
                </figcaption>
              </figure>
            </ParallaxLayer>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-foreground/15 pt-6">
          <p className="max-w-md text-sm text-bone/70">
            Everything else — posters, product layouts, reels and experiments — lives in the
            archive.
          </p>
          <Link
            to="/archive"
            data-cursor="Open"
            className="label border border-foreground/30 px-6 py-4 text-bone transition-colors hover:border-primary hover:text-primary"
          >
            Full Archive ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
