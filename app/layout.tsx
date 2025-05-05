import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], display: "swap" })

// Add Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Solve Side Academy | Youth Development & Educational Motivation",
  description:
    "Solve Side Academy empowers youth through education, leadership training, career guidance, and mentorship programs. We help young people develop essential skills for success.",
  keywords:
    "youth development, educational motivation, career guidance, leadership training, boy child development, team building, youth empowerment, education, mentorship, skills development, Pretoria, South Africa",
  authors: [{ name: "Solve Side Academy" }],
  creator: "Solve Side Academy",
  publisher: "Solve Side Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://solvesideacademy.co.za"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/logo.png",
    },
  },
  openGraph: {
    title: "Solve Side Academy | Youth Development & Educational Motivation",
    description: "Empowering youth through education, leadership, and guidance for a brighter future",
    url: "https://solvesideacademy.co.za",
    siteName: "Solve Side Academy",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 120,
        height: 120,
        alt: "Solve Side Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solve Side Academy | Youth Development & Educational Motivation",
    description: "Empowering youth through education, leadership, and guidance for a brighter future",
    images: ["/images/logo.png"],
    creator: "@solvesideacademy",
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code when you have it
  },
  category: "Education",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable}`}>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Solve Side Academy",
            url: "https://solvesideacademy.co.za",
            logo: "https://solvesideacademy.co.za/images/logo.png",
            description:
              "Empowering youth through education, leadership, and guidance. Programs include youth development, educational motivation, career guidance, leadership training, and more.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "13 Olympus Dr",
              addressLocality: "Olympus AH",
              addressRegion: "Pretoria",
              postalCode: "0081",
              addressCountry: "ZA",
            },
            telephone: "+27 692112403",
            email: "info@solvesideacademy.co.za",
            sameAs: [
              "https://facebook.com/solvesideacademy",
              "https://twitter.com/solvesideacademy",
              "https://instagram.com/solvesideacademy",
              "https://linkedin.com/company/solvesideacademy",
            ],
          })}
        </Script>
      </body>
    </html>
  )
}
