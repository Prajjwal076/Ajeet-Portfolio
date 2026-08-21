import { useEffect, useRef, type CSSProperties } from "react";

type Props = {
  src: string;
  poster: string;
  className?: string;
  style?: CSSProperties;
  loop?: boolean;
};

/** Plays only while visible; pauses offscreen to keep scrolling smooth. */
export function AutoVideo({ src, poster, className, style, loop = true }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) void node.play().catch(() => {});
        else node.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster || undefined}
      muted
      loop={loop}
      playsInline
      preload="metadata"
      className={className}
      style={style}
    />
  );
}
