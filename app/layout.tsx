import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EDGECASE LLC | Enterprise Software Development & AI Solutions",
  description: "Technology consultancy delivering full-stack engineering, AI architecture, and cloud infrastructure for Fortune 500 companies and mission-critical systems. 20+ years serving Amazon, American Express, and U.S. Air Force.",
  keywords: ["Enterprise Software Development", "Technology Consultancy", "AI Solutions", "Cloud Infrastructure", "Software Engineering", "Full-Stack Development", "Machine Learning", "React", "Node.js", "AWS", "Microservices", "EDGECASE", "New York"],
  authors: [{ name: "EDGECASE LLC" }],
  creator: "EDGECASE LLC",
  openGraph: {
    title: "EDGECASE LLC | Enterprise Software That Scales",
    description: "Technology consultancy delivering enterprise software solutions, AI integration, and cloud infrastructure for Fortune 500 companies.",
    url: "https://edgecase.vercel.app",
    siteName: "EDGECASE LLC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDGECASE LLC | Enterprise Software Development",
    description: "Full-stack engineering, AI architecture, and cloud infrastructure for mission-critical systems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
