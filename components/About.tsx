import { site } from "@/lib/site";
import { ImageSlot } from "@/components/ImageSlot";

export function About() {
  return (
    <section
      id="about"
      className="relative grid min-h-svh grid-cols-1 items-start gap-0 bg-ink px-pad py-[12vh] min-[801px]:grid-cols-[5fr_7fr] min-[801px]:items-end min-[801px]:gap-[6vw] min-[801px]:py-[16vh]"
      aria-label="About Aria"
    >
      <ImageSlot
        slot="about"
        alt={site.about.alt}
        placeholder={site.about.placeholder}
        className="-ml-pad aspect-[3/4] w-[82%] min-[801px]:w-[calc(100%+var(--pad))]"
      />

      <div>
        <h2 className="relative z-[2] -mt-[9vw] ml-[12vw] font-serif text-[15vw] font-normal leading-[0.9] tracking-[-0.02em] text-ivory mix-blend-difference min-[801px]:mt-0 min-[801px]:-ml-[14vw] min-[801px]:text-[clamp(3rem,8.4vw,9rem)]">
          The artist
          <br />
          <em className="text-sage">behind</em>
          <br />
          the clippers.
        </h2>
        <div className="mt-[4vh] max-w-[26rem] min-[801px]:ml-[6vw]">
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-[1.4rem] opacity-85">
              {paragraph}
            </p>
          ))}
          <a
            href={site.instagram.url}
            rel="noopener noreferrer"
            target="_blank"
            className="border-b border-sage pb-0.5 text-sage"
          >
            {site.instagram.handle} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
