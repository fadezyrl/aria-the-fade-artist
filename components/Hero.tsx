import { site } from "@/lib/site";
import { ImageSlot } from "@/components/ImageSlot";

export function Hero() {
  return (
    <section
      className="relative min-h-svh overflow-hidden bg-ink px-pad"
      aria-label="Aria, The Fade Artist"
    >
      <div className="absolute left-pad top-[24vh] z-[3] max-w-60 max-[800px]:hidden">
        <span className="text-[0.72rem] tracking-[0.16em] uppercase">
          {site.location}
        </span>
        <p className="mt-3 text-[0.95rem] opacity-80">{site.hero.note}</p>
      </div>

      <ImageSlot
        slot="hero"
        alt={site.hero.alt}
        placeholder={site.hero.placeholder}
        priority
        className="absolute right-[6vw] top-[13vh] z-[1] h-[74vh] w-[38vw] max-[800px]:right-0 max-[800px]:top-[11vh] max-[800px]:h-[58svh] max-[800px]:w-[74vw]"
      />

      <h1 className="absolute bottom-[15vh] left-[calc(var(--pad)-0.04em)] z-[2] font-serif text-[31vw] font-normal leading-[0.78] tracking-[-0.02em] text-ivory mix-blend-difference max-[800px]:bottom-[19vh] max-[800px]:text-[40vw]">
        ARIA
      </h1>

      <p className="absolute bottom-[9.5vh] left-pad z-[3] font-serif text-[clamp(1.6rem,3.2vw,3rem)] italic leading-none text-sage max-[800px]:bottom-[13vh]">
        {site.tagline}
      </p>

      <div className="absolute inset-x-pad bottom-[calc(3vh+env(safe-area-inset-bottom,0px))] z-[3] flex justify-between text-[0.74rem] tracking-[0.14em] uppercase">
        <a
          href="#work"
          className="border-b border-transparent transition-[border-color] duration-300 hover:border-current"
        >
          See the work ↓
        </a>
        <a
          href="#booking"
          className="border-b border-transparent transition-[border-color] duration-300 hover:border-current"
        >
          Book
        </a>
      </div>
    </section>
  );
}
