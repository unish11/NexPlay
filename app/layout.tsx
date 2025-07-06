import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NEXPLAY - The Future of Esports",
  description:
    "NEXPLAY is your ultimate hub for competitive gaming and esports action. Join tournaments, connect with top players, and elevate your esports experience.",
  keywords: ["esports", "gaming", "tournaments", "competitive gaming", "nexplay"],
  authors: [{ name: "NEXPLAY Team" }],
  creator: "NEXPLAY",
  publisher: "NEXPLAY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nexplay.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NEXPLAY - The Future of Esports",
    description: "Join the ultimate hub for competitive gaming and esports action. Download NEXPLAY now!",
    url: "https://nexplay.com",
    siteName: "NEXPLAY",
    images: [
      {
        url: "/images/nexplay-logo.png",
        width: 1200,
        height: 630,
        alt: "NEXPLAY - The Future of Esports",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXPLAY - The Future of Esports",
    description: "Join the ultimate hub for competitive gaming and esports action. Download NEXPLAY now!",
    images: ["/images/nexplay-logo.png"],
    creator: "@nexplayorg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/nexplay-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/nexplay-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/nexplay-logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/nexplay-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/nexplay-logo.png" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="application-name" content="NEXPLAY" />
        <meta name="apple-mobile-web-app-title" content="NEXPLAY" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8756353791950574"
     crossorigin="anonymous"></script>
<!-- NEXPLAY ADD -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8756353791950574"
     data-ad-slot="3722666663"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
