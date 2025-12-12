import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Inksky — Independent Creative Studio",
    template: "%s | Inksky",
  },
  description:
    "Inksky is an independent creative studio by Gustavo del Prato. Music, visuals, circus arts, and digital craft — one sky, many little worlds.",
  keywords: [
    "creative studio",
    "music production",
    "TouchDesigner",
    "visual art",
    "circus",
    "web design",
    "Gustavo del Prato",
    "Tavinsky",
  ],
  authors: [{ name: "Gustavo del Prato" }],
  creator: "Inksky",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inksky.net",
    siteName: "Inksky",
    title: "Inksky — Independent Creative Studio",
    description:
      "Music, visuals, circus arts, and digital craft — one sky, many little worlds.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inksky — Independent Creative Studio",
    description:
      "Music, visuals, circus arts, and digital craft — one sky, many little worlds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
