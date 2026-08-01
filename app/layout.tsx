import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techvision.io"),
  title: {
    default: "TechVision — Premium IT Services & Software Development Company",
    template: "%s | TechVision",
  },
  description:
    "TechVision is a premium IT services company offering web development, mobile apps, AI solutions, cloud computing, and digital marketing. Transform your business with cutting-edge technology.",
  keywords: [
    "IT services",
    "web development",
    "mobile app development",
    "AI solutions",
    "cloud computing",
    "digital marketing",
    "custom software",
    "SEO",
    "UI/UX design",
    "DevOps",
  ],
  authors: [{ name: "TechVision Team" }],
  creator: "TechVision",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techvision.io",
    siteName: "TechVision",
    title: "TechVision — Premium IT Services & Software Development Company",
    description:
      "Transform your business with cutting-edge technology solutions. Web, Mobile, AI, Cloud & more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechVision IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechVision — Premium IT Services",
    description: "Transform your business with cutting-edge technology.",
    creator: "@techvision",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable}`}
    >
      <head>
        <link rel="canonical" href="https://techvision.io" />
        <meta name="theme-color" content="#3b82f6" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechVision",
              url: "https://techvision.io",
              logo: "https://techvision.io/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-TECHVIS",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: [
                "https://twitter.com/techvision",
                "https://linkedin.com/company/techvision",
                "https://github.com/techvision",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
