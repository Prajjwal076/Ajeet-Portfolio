import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/portfolio/Preloader";
import { Cursor } from "@/components/portfolio/Cursor";
import { HeroShowreel } from "@/components/portfolio/HeroShowreel";
import { IntroType } from "@/components/portfolio/IntroType";
import { SpiderScene } from "@/components/portfolio/SpiderScene";
import { CafeScene } from "@/components/portfolio/CafeScene";
import { VideoCase } from "@/components/portfolio/VideoCase";
import { PosterGallery } from "@/components/portfolio/PosterGallery";
import { VervePinned } from "@/components/portfolio/VervePinned";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { DropScene } from "@/components/portfolio/DropScene";
import { MotionCuts } from "@/components/portfolio/MotionCuts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ajeet Ojha — Poster, Motion & Video Design Portfolio" },
      {
        name: "description",
        content:
          "A scroll-driven design portfolio: kinetic typography, event posters, campaign artwork and video edits presented as one continuous cinematic sequence.",
      },
      { property: "og:title", content: "Ajeet Ojha — Poster, Motion & Video Design" },
      {
        property: "og:description",
        content:
          "Kinetic typography, posters and video edits — a portfolio built to be scrolled like a film.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-ink">
      <Preloader />
      <Cursor />
      <HeroShowreel />
      <IntroType />
      <SpiderScene />
      <CafeScene />
      <VideoCase />
      <DropScene />
      <PosterGallery />
      <VervePinned />
      <MotionCuts />
      <About />
      <Contact />
    </main>
  );
}
