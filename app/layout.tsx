import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JG University — Excellence by Choice",
  description:
    "A new-age tech-driven university in Ahmedabad offering industry-aligned programmes. UGC approved, sponsored by ASIA Charitable Trust.",
  keywords: "JG University, Ahmedabad, university, programmes, admission",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-body antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
