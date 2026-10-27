export type MediaType = "image" | "video";

export type MediaAsset = {
  src: string;
  type: MediaType;
};

export const site = {
  name: "Aria",
  tagline: "The Fade Artist.",
  title: "Aria — The Fade Artist · Zurich",
  description: "Aria, female barber and fade artist in Zurich, Switzerland.",
  location: "Zurich, Switzerland.",
  coords: "Zurich · 47.37°N 8.54°E",
  instagram: {
    handle: "@aria_thebarber",
    url: "https://www.instagram.com/aria_thebarber/",
  },
  /** Set once a verified booking URL exists; CTA copy updates with it. */
  bookingUrl: "https://book.tsekhairstudio.com/book" as string,
  hero: {
    note: "Precision in every cut. Character in every detail.",
    alt: "Aria at work in her Zurich studio",
    placeholder: "Hero — Aria cutting, or a finished side profile",
  },
  about: {
    alt: "Portrait of Aria",
    placeholder: "Portrait — Aria",
    paragraphs: [
      "Aria is a female barber and fade artist working in Zurich, Switzerland. Her craft is fades, tapers and textured cuts, finished by hand.",
      "The work is documented on Instagram.",
    ],
  },
  work: [
    {
      id: "w0",
      label: "At work",
      alt: "Aria cutting in the chair",
      placeholder: "Working — Aria at the chair",
      width: 34,
      mobileWidth: 76,
      ratio: "4/5",
      offset: 0,
    },
    {
      id: "w1",
      label: "Reel",
      alt: "Barber reel from Zurich",
      placeholder: "Reel — Zurich cut",
      width: 20,
      mobileWidth: 54,
      ratio: "1/1",
      offset: 14,
    },
    {
      id: "w3",
      label: "Face treatment",
      alt: "Beard shave and face treatment",
      placeholder: "Face treatment",
      width: 18,
      mobileWidth: 50,
      ratio: "4/5",
      offset: 20,
    },
    {
      id: "w4",
      label: "Reel",
      alt: "Barber reel detail",
      placeholder: "Reel — detail",
      width: 38,
      mobileWidth: 86,
      ratio: "5/4",
      offset: 7,
    },
  ],
  media: {
    hero: {
      src: "/assets/videos/reel-01.mp4",
      type: "video",
    },
    about: {
      src: "/assets/images/portrait.jpg",
      type: "image",
    },
    w0: {
      src: "/assets/videos/reel-02.mp4",
      type: "video",
    },
    w1: {
      src: "/assets/videos/reel-03.mp4",
      type: "video",
    },
    w3: {
      src: "/assets/videos/face-treatment.mp4",
      type: "video",
    },
    w4: {
      src: "/assets/videos/reel-01.mp4",
      type: "video",
    },
  } satisfies Record<string, MediaAsset>,
} as const;

export type WorkItem = (typeof site.work)[number];
