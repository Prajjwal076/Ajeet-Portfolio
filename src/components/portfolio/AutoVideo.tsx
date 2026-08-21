import { useEffect, useRef, type CSSProperties } from "react";

type Props = {
  src: string;
  poster: string;
  className?: string;
  style?: CSSProperties;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  autoPlayOnView?: boolean;
};

/** Plays only while visible; pauses offscreen to keep scrolling smooth. */
export function AutoVideo({
  src,
  poster,
  className,
  style,
  loop = true,
  muted = true,
  controls = false,
  autoPlayOnView = true,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!autoPlayOnView) return;
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
  }, [autoPlayOnView]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster || undefined}
      muted={muted}
      controls={controls}
      loop={loop}
      playsInline
      preload="metadata"
      className={className}
      style={style}
    />
  );
}
