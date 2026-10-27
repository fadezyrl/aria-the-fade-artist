"use client";

import { useRef, type CSSProperties } from "react";
import { site } from "@/lib/site";
import { ImageSlot } from "@/components/ImageSlot";

export function Work() {
  const trackRef = useRef<HTMLDivElement>(null);

  const step = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.6,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="work"
      className="bg-ivory py-[14vh] pb-[12vh] text-ink max-[800px]:py-16 max-[800px]:pb-12"
      aria-label="Selected work"
    >
      <header className="mb-[7vh] flex items-end justify-between px-pad max-[800px]:mb-8 max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-4">
        <h2 className="font-serif text-[clamp(3.4rem,11vw,11rem)] font-normal leading-[0.85] tracking-[-0.02em]">
          Selected
          <em className="block pl-[12vw] not-italic max-[800px]:pl-[8vw]">
            Work
          </em>
        </h2>
        <div className="flex items-center gap-[1.2rem] text-[0.74rem] tracking-[0.14em] uppercase">
          <span>{String(site.work.length).padStart(2, "0")} frames</span>
          <button
            type="button"
            aria-label="Previous"
            onClick={() => step(-1)}
            className="cursor-pointer appearance-none border-0 bg-transparent px-1 py-0.5 text-[1.4rem] leading-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => step(1)}
            className="cursor-pointer appearance-none border-0 bg-transparent px-1 py-0.5 text-[1.4rem] leading-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink"
          >
            →
          </button>
        </div>
      </header>

      <div
        ref={trackRef}
        tabIndex={0}
        aria-label="Selected cuts and reels, scroll horizontally"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="flex min-h-[76vh] snap-x snap-proximity items-start gap-[3vw] overflow-x-auto px-pad pb-12 [scrollbar-color:var(--ink)_transparent] [scrollbar-width:thin] max-[800px]:min-h-0 max-[800px]:gap-[5vw] max-[800px]:pb-2"
      >
        {site.work.map((item, index) => {
          const figureStyle = {
            "--d": item.width,
            "--m": item.mobileWidth,
            "--t": item.offset,
          } as CSSProperties;

          return (
            <figure
              key={item.id}
              style={figureStyle}
              className="mt-[calc(var(--t)*1vw)] w-[calc(var(--d)*1vw)] shrink-0 snap-center max-[800px]:mt-0 max-[800px]:w-[calc(var(--m)*1vw)]"
            >
              <ImageSlot
                slot={item.id}
                alt={item.alt}
                placeholder={item.placeholder}
                light
                className="w-full"
                style={{ aspectRatio: item.ratio }}
              />
              <figcaption className="mt-[0.7rem] flex justify-between text-[0.7rem] tracking-[0.14em] uppercase">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{item.label}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
