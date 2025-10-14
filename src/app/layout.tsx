import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vittorio Ciampi - Full Stack, Mobile & Game Developer Portfolio",
  description: "Portfolio professionale di Vittorio Ciampi - Aspirante Software Developer specializzato in architetture enterprise, game development, AI integration. Competenze in Java, Spring Boot, Python, Flutter, React, Next.js, C/C++, SDL2.",
  keywords: ["Full Stack Developer", "Mobile Developer", "Game Developer", "AI Integration", "Java", "Spring Boot", "Python", "Flutter", "React", "Next.js", "C++", "SDL2", "Vittorio Ciampi"],
  authors: [{ name: "Vittorio Ciampi" }],
  openGraph: {
    title: "Vittorio Ciampi - Full Stack, Mobile & Game Developer",
    description: "Portfolio professionale - Sviluppatore Full Stack, Mobile & Game Developer con specializzazione in AI integration",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-200`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
