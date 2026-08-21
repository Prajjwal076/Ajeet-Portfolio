import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { archiveItems } from "@/lib/media";
import { AutoVideo } from "@/components/portfolio/AutoVideo";
import { Cursor } from "@/components/portfolio/Cursor";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Archive — Every Poster, Layout & Edit | Ajeet Ojha" },
      {
        name: "description",
        content:
          "The full working archive: posters, brand layouts, kinetic typography and video edits, filterable by stills and motion.",
      },
      { property: "og:title", content: "Archive — Ajeet Ojha" },
      {
        property: "og:description",
        content: "Every poster, product layout and video edit in one continuously growing archive.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArchivePage,
});

const filters = ["All", "Stills", "Motion"] as const;

function ArchivePage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const items = archiveItems.filter((item) =>
    filter === "All" ? true : filter === "Motion" ? item.kind === "video" : item.kind === "image",
  );

  return (
    <main className="relative min-h-svh bg-ink px-6 py-[10vh] md:px-12">
      <Cursor />
      <div className="grain" />
      <div className="relative z-10">
        <header className="flex flex-wrap items-baseline justify-between gap-4">
          <Link to="/" data-cursor="Back" className="label text-bone/70 hover:text-primary">
            ← Ajeet Ojha
          </Link>
          <span className="label text-bone/60">{items.length} works</span>
        </header>

        <h1 className="display mt-10 text-[14vw] leading-[0.85] text-bone md:text-[7vw]">
          The <span className="text-primary">Archive</span>
        </h1>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-bone/70">
          Everything in one room — posters, brand layouts, kinetic type and edits. New work gets
          added here first.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-foreground/15 pt-6">
          {filters.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              data-cursor="Filter"
              className={`label border px-5 py-3 transition-colors ${
                filter === option
                  ? "border-primary text-primary"
                  : "border-foreground/25 text-bone/70 hover:border-bone/60"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <figure key={`${item.kind}-${item.title}`} data-cursor="View" className="group">
              <div
                className="overflow-hidden border border-foreground/15 bg-secondary"
                style={{ aspectRatio: item.ratio }}
              >
                {item.kind === "video" ? (
                  <AutoVideo
                    src={item.src}
                    poster={item.poster ?? ""}
                    controls
                    muted={false}
                    autoPlayOnView={false}
                    loop={false}
                    className="size-full object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`${item.title} — ${item.meta}`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    style={{ objectPosition: item.objectPosition }}
                  />
                )}
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-foreground/15 pt-3">
                <span className="text-sm text-bone">{item.title}</span>
                <span className="label">
                  {item.kind === "video" ? "Motion" : "Still"} · {item.year}
                </span>
              </figcaption>
              <p className="label mt-2 text-bone/50">{item.meta}</p>
            </figure>
          ))}
        </div>

        <footer className="mt-[14vh] flex flex-wrap items-center justify-between gap-4 border-t border-foreground/15 pt-6">
          <Link to="/" data-cursor="Home" className="label text-bone/70 hover:text-primary">
            ← Back to the reel
          </Link>
          <span className="label text-bone/50">Archive updated continuously</span>
        </footer>
      </div>
    </main>
  );
}
