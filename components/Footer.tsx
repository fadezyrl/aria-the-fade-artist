import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-ink px-pad pt-[10vh]">
      <div className="flex flex-wrap justify-between gap-8 text-[0.72rem] tracking-[0.16em] uppercase">
        <span>Aria — The Fade Artist</span>
        <span>Zurich, Switzerland</span>
        <a
          href={site.instagram.url}
          rel="noopener noreferrer"
          target="_blank"
          className="border-b border-transparent hover:border-current"
        >
          Instagram
        </a>
        <a href="#booking" className="border-b border-transparent hover:border-current">
          Book
        </a>
      </div>
      <div
        aria-hidden="true"
        className="-mb-[0.12em] -ml-[0.04em] my-[6vh] whitespace-nowrap font-serif text-[42vw] leading-[0.74] tracking-[-0.02em] text-sage"
      >
        ARIA
      </div>
    </footer>
  );
}
