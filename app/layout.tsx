import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-ivory bg-ink">{children}</body>
    </html>
  );
}
