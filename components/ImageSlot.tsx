"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { site, type MediaAsset } from "@/lib/site";

type ImageSlotProps = {
  slot: keyof typeof site.media | string;
  alt: string;
  placeholder: string;
  priority?: boolean;
  light?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function ImageSlot({
  slot,
  alt,
  placeholder,
  priority = false,
  light = false,
  className = "",
  style,
}: ImageSlotProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [revealed, setRevealed] = useState(false);
  const media = (site.media as Record<string, MediaAsset | undefined>)[slot];
  const src = media?.src ?? "";
  const type = media?.type;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Observe the unclipped wrapper — clip-path on the media layer
    // would keep intersectionRatio at 0 forever (never reveal).
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            void videoRef.current?.play().catch(() => undefined);
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.15 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={style} className={className}>
      <div
        className={[
          "reveal relative size-full overflow-hidden",
          light ? "bg-slot-light text-ink" : "bg-slot text-ivory",
          src ? "filled" : "",
          revealed ? "in" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {src && type === "video" ? (
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            autoPlay={priority}
            preload={priority ? "auto" : "metadata"}
            aria-label={alt}
            className="absolute inset-0 size-full object-cover"
          />
        ) : src && type === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            decoding="async"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            className="absolute inset-0 size-full object-cover"
          />
        ) : (
          <span className="absolute left-[0.9rem] bottom-[0.8rem] text-[0.68rem] tracking-[0.14em] uppercase opacity-55">
            {placeholder}
          </span>
        )}
      </div>
    </div>
  );
}
