import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const obj = { v: 0 };
    const tl = gsap.timeline();
    tl.to(obj, {
      v: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(obj.v)),
    })
      .to(root.current, { yPercent: -100, duration: 1, ease: "expo.inOut" }, "+=0.15")
      .add(() => setGone(true));
    return () => {
      tl.kill();
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-6 py-8 md:px-12"
    >
      <div className="grain" />
      <div className="h-3" aria-hidden="true" />
      <div className="flex items-end justify-between gap-6">
        <h1 className="display text-[16vw] text-bone md:text-[11vw]">
          Design
          <br />
          <span className="text-primary">In Motion</span>
        </h1>
        <span className="display text-[10vw] text-bone/30 md:text-[5vw]">{count}</span>
      </div>
      <div className="h-px w-full bg-foreground/15">
        <div
          className="h-px bg-primary transition-[width] duration-100"
          style={{ width: `${count}%` }}
        />
      </div>
    </div>
  );
}
