"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#work", label: "Work", hideOnMobile: true },
  { href: "#about", label: "About", hideOnMobile: true },
  { href: "#booking", label: "Booking", hideOnMobile: false },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = 0;

    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 120);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main"
      className={[
        "fixed top-0 inset-x-0 z-20 flex justify-between items-baseline",
        "px-pad pt-[calc(1.1rem+env(safe-area-inset-top,0px))] pb-4",
        "text-ivory mix-blend-difference transition-transform duration-500 ease-in-out",
        hidden ? "-translate-y-[110%]" : "translate-y-0",
      ].join(" ")}
    >
      <a
        href="#top"
        aria-label="Aria — home"
        className="font-serif text-[1.7rem] tracking-[0.08em] leading-none"
      >
        ARIA
        <small className="ml-[0.9rem] hidden font-sans text-[0.62rem] tracking-[0.16em] uppercase opacity-70 min-[801px]:inline">
          {site.coords}
        </small>
      </a>

      <ul className="flex list-none items-baseline gap-4 min-[801px]:gap-[1.6rem]">
        {links.map((link) => (
          <li
            key={link.href}
            className={link.hideOnMobile ? "hidden min-[801px]:list-item" : undefined}
          >
            <a
              href={link.href}
              className="relative pb-0.5 text-[0.78rem] tracking-[0.12em] uppercase after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-[400ms] hover:after:scale-x-100"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#booking"
            className="relative pb-0.5 font-serif text-[1.15rem] italic tracking-normal normal-case after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-100 after:bg-current"
          >
            Book
          </a>
        </li>
      </ul>
    </nav>
  );
}
