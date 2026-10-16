import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ParticleBackground from "@/components/ParticleBackground";
import SmoothScroll from "@/components/SmoothScroll";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kashif — Full-Stack Web Developer",
    template: "%s | Kashif",
  },
  description:
    "Kashif is a self-taught full-stack web developer with 2 years of experience, building fast, modern web apps with Next.js, Node.js and Supabase.",
  keywords: [
    "Kashif",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Supabase",
    "Freelance Web Developer",
  ],
  authors: [{ name: "Kashif" }],
  creator: "Kashif",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Kashif — Full-Stack Web Developer",
    description:
      "Custom web apps, e-commerce and dashboards built with Next.js, Node.js and Supabase.",
    siteName: "Kashif.dev",
    images: [{ url: "/images/og.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashif — Full-Stack Web Developer",
    description:
      "Custom web apps, e-commerce and dashboards built with Next.js, Node.js and Supabase.",
    images: ["/images/og.svg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <SmoothScroll>
          <ParticleBackground />
          <Cursor />
          <Navbar />
          <main className="relative z-[1]">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
