import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Interactions from "@/components/Interactions";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-d",
  display: "swap",
});
const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-b",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-m",
  display: "swap",
});

const SITE_URL = "https://khushi-gehlot.vercel.app";
const DESCRIPTION =
  "Khushi Gehlot — AI Engineer, Data Engineer & Builder. Building AI systems, data pipelines, and tools that turn messy data into decisions.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Khushi Gehlot — AI / Data / Software Engineer",
  description: DESCRIPTION,
  keywords: [
    "Khushi Gehlot",
    "AI Engineer",
    "Data Engineer",
    "Machine Learning",
    "Generative AI",
    "RAG",
    "Data Science",
    "Portfolio",
  ],
  authors: [{ name: "Khushi Gehlot" }],
  creator: "Khushi Gehlot",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Khushi Gehlot — AI / Data / Software Engineer",
    description: DESCRIPTION,
    siteName: "Khushi Gehlot",
    images: [{ url: "/profile.jpg", width: 760, height: 950, alt: "Khushi Gehlot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khushi Gehlot — AI / Data / Software Engineer",
    description: DESCRIPTION,
    images: ["/profile.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0608",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>
        <Background />
        <Nav />
        {children}
        <Interactions />
      </body>
    </html>
  );
}
