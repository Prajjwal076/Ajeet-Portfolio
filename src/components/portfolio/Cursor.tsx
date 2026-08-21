import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let x = rx;
    let y = ry;
    let frame = 0;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
      const target = (e.target as HTMLElement | null)?.closest("[data-cursor]") as HTMLElement | null;
      setLabel(target?.dataset['cursor'] ?? null);
    };

    const loop = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move);
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block">
      <div ref={dot} className="absolute top-0 left-0 size-1.5 rounded-full bg-primary" />
      <div
        ref={ring}
        className="absolute top-0 left-0 flex items-center justify-center rounded-full border border-foreground/40 transition-[width,height] duration-300"
        style={{ width: label ? 88 : 34, height: label ? 88 : 34 }}
      >
        {label && <span className="label text-[9px] text-foreground/80">{label}</span>}
      </div>
    </div>
  );
}
