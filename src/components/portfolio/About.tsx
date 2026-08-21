import { Link } from "@tanstack/react-router";
import { media } from "@/lib/media";
import { ParallaxLayer } from "./ParallaxLayer";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[oklch(0.9_0.008_70)] px-6 py-[16vh] text-ink md:px-12"
    >
      <div className="grain opacity-15" />
      <div className="relative z-10 grid gap-14 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <span className="label text-ink/60">About</span>
          <h2 className="display mt-6 text-[11vw] leading-[0.85] md:text-[5.5vw]">
            I build posters
            <br />
            that behave
            <br />
            like footage.
          </h2>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-ink/70">
            Designer and editor working across campus culture, sport, campaigns and food. I start
            with type, find the colour inside the subject, then cut everything that isn&apos;t the
            idea. Most of the work here ran live — stages, camps, tournaments and menus.
          </p>
          <ul className="mt-10 grid max-w-lg grid-cols-2 gap-4 border-t border-ink/15 pt-6 text-sm">
            <li>Graphic Design</li>
            <li>Video Editing</li>
            <li>Social Media Creatives</li>
            <li>Brand Identity</li>
          </ul>
          <Link
            to="/archive"
            data-cursor="Open"
            className="label mt-10 inline-block border border-ink/30 px-6 py-4 transition-colors hover:border-ink hover:bg-ink hover:text-bone"
          >
            Browse the full archive ↗
          </Link>
        </div>

        <ParallaxLayer yFrom="8vh" yTo="-8vh" className="relative">
          <img
            src={media.constitution}
            alt="National Constitution Day monochrome poster"
            loading="lazy"
            className="w-full border border-ink/10"
          />
          <p className="label mt-3 text-ink/60">Constitution Day — monochrome study</p>
        </ParallaxLayer>
      </div>
    </section>
  );
}
