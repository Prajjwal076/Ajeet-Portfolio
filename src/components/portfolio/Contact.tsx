import { media } from "@/lib/media";
import { AutoVideo } from "./AutoVideo";

export function Contact() {
  return (
    <section id="contact" className="relative min-h-svh overflow-hidden bg-ink">
      <AutoVideo
        src={media.nike}
        poster={media.nikePoster}
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="grain" />
      <div className="relative z-10 flex min-h-svh flex-col justify-between px-6 py-[12vh] md:px-12">
        <span className="label text-bone/60">Contact — open for 2026</span>
        <div>
          <h2 className="display text-[15vw] text-bone md:text-[9vw]">
            Let&apos;s make
            <br />
            <span className="text-primary">something loud.</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4">
            <a
              href="mailto:kanhaiyaojha3@gmail.com"
              data-cursor="Email"
              className="font-accent text-lg font-semibold tracking-wide text-bone underline decoration-primary decoration-2 underline-offset-8 transition-colors hover:text-primary md:text-2xl"
            >
              kanhaiyaojha3@gmail.com
            </a>
            <a
              href="https://www.instagram.com/ajeet_raghvendra/"
              target="_blank"
              rel="noreferrer"
              data-cursor="Follow"
              className="font-accent text-lg font-semibold tracking-wide text-bone/70 transition-colors hover:text-primary md:text-2xl"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.linkedin.com/in/ajeet-ojha-987a662a5/"
              target="_blank"
              rel="noreferrer"
              data-cursor="Connect"
              className="font-accent text-lg font-semibold tracking-wide text-bone/70 transition-colors hover:text-primary md:text-2xl"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-foreground/15 pt-5">
          <span className="label">Ghaziabad, IN</span>
          <span className="label">Designed &amp; edited in-house · 2026</span>
        </div>
      </div>
    </section>
  );
}
