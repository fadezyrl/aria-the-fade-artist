import { site } from "@/lib/site";

export function Booking() {
  const hasBookingUrl = Boolean(site.bookingUrl);
  const href = hasBookingUrl ? site.bookingUrl : site.instagram.url;
  const label = hasBookingUrl
    ? "Book your appointment"
    : "Message Aria on Instagram";

  return (
    <section
      id="booking"
      className="bg-ivory px-pad pb-[10vh] pt-[16vh] text-ink"
      aria-label="Booking and contact"
    >
      <span className="text-[0.72rem] tracking-[0.16em] uppercase">Booking</span>
      <h2 className="my-[3vh] mb-[10vh] font-serif text-[clamp(5rem,22vw,24rem)] font-normal leading-[0.8] tracking-[-0.03em]">
        <span className="block pl-[6vw] min-[801px]:pl-[18vw]">Book</span>
        <span className="block pl-[6vw] min-[801px]:pl-[18vw]">
          a{" "}
          <em className="relative z-0 after:absolute after:inset-x-[-0.04em] after:bottom-[0.02em] after:-z-10 after:h-[0.2em] after:bg-sage">
            cut.
          </em>
        </span>
      </h2>

      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className="group flex items-center justify-between gap-4 border-y border-ink py-8 font-serif text-[clamp(1.8rem,5vw,4.6rem)] leading-none transition-[background-color,color,padding] duration-[400ms] hover:bg-ink hover:px-[2vw] hover:text-ivory focus-visible:bg-ink focus-visible:px-[2vw] focus-visible:text-ivory focus-visible:outline-none"
      >
        <span>{label}</span>
        <i className="not-italic transition-transform duration-[400ms] group-hover:translate-x-[0.4em]">
          →
        </i>
      </a>

      <div className="mt-[1.4rem] flex justify-between text-[0.72rem] tracking-[0.16em] uppercase">
        <span>{site.instagram.handle}</span>
        <span>Zurich, Switzerland</span>
      </div>
    </section>
  );
}
