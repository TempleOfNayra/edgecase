import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EDGECASE LLC | Ali Emami - Full-Stack Engineer & AI Architect",
  description: "Senior full-stack engineer and founder of EDGECASE LLC with 20+ years building high-performance software for Fortune 500 companies. Specializing in AI integration, cloud architecture, and mission-critical systems for Amazon, American Express, and U.S. Air Force.",
  keywords: ["Full-Stack Engineer", "AI Architecture", "Cloud Infrastructure", "Software Consulting", "React", "Node.js", "AWS", "Machine Learning", "OpenAI", "Claude", "Ali Emami", "EDGECASE"],
  authors: [{ name: "Ali Emami" }],
  creator: "Ali Emami",
  openGraph: {
    title: "EDGECASE LLC | Ali Emami - Full-Stack Engineer & AI Architect",
    description: "20+ years delivering enterprise solutions for Fortune 500 companies and government agencies.",
    url: "https://edgecase.vercel.app",
    siteName: "EDGECASE LLC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDGECASE LLC | Ali Emami",
    description: "Senior Full-Stack Engineer & AI Architect",
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
        {children}
      </body>
    </html>
  );
}
