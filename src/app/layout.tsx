import type { Metadata, Viewport } from "next";
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

// IMPORTANTE: Aggiorna questo URL con il tuo dominio reale quando deployato
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vittoriociampi.dev';
const FB_APP_ID = process.env.NEXT_PUBLIC_FB_APP_ID || '';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Vittorio Ciampi - Full Stack, Mobile & Game Developer Portfolio",
  description: "Portfolio professionale di Vittorio Ciampi - Junior Software Developer specializzato in Full Stack, game development, integrazione AI. Competenze in Java, Spring Boot, Python, Flutter, React, Next.js, C/C++, SDL2.",
  keywords: ["Full Stack Developer", "Mobile Developer", "Game Developer", "AI Integration", "Java", "Spring Boot", "Python", "Flutter", "React", "Next.js", "C++", "SDL2", "Vittorio Ciampi"],
  authors: [{ name: "Vittorio Ciampi" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Vittorio Ciampi - Full Stack, Mobile & Game Developer",
    description: "Portfolio professionale - Sviluppatore Full Stack, Mobile & Game Developer con specializzazione in integrazione AI",
    type: "website",
    url: SITE_URL,
    siteName: "Vittorio Ciampi Portfolio",
    locale: "it_IT",
      images: [{
      // updated OG image (versioned) to force cache refresh
      url: "/og/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Vittorio Ciampi Portfolio - Full Stack, Mobile & Game Developer"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vittorio Ciampi - Full Stack, Mobile & Game Developer",
    description: "Portfolio professionale - Sviluppatore Full Stack, Mobile & Game Developer",
    images: ["/og/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        {/* Recommended Open Graph / social tags to improve previews (WhatsApp uses FB scraper) */}
        <meta property="og:image:secure_url" content={`${SITE_URL}/og/og-image.jpg`} />
    <meta property="og:image:secure_url" content={`${SITE_URL}/og/og-image.jpg`} />
    <meta property="og:image:type" content="image/jpeg" />
    <link rel="image_src" href={`${SITE_URL}/og/og-image.jpg`} />
    <meta name="twitter:image:src" content={`${SITE_URL}/og/og-image.jpg`} />
        {FB_APP_ID ? (
          /* Facebook App ID for Open Graph (set NEXT_PUBLIC_FB_APP_ID in env) */
          <meta property="fb:app_id" content={FB_APP_ID} />
        ) : null}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-200`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
