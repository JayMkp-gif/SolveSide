import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
    "Empowering youth through education, leadership, and guidance. Programs include youth development, educational motivation, career guidance, leadership training, and more.",
  keywords:
    "youth development, educational motivation, career guidance, leadership training, boy child development, team building, non-profit",
  openGraph: {
    title: "Solve Side Academy | Youth Development & Educational Motivation",
    description: "Empowering youth through education, leadership, and guidance",
    images: [
      {
        url: "/images/logo.png",
        width: 120,
        height: 120,
        alt: "Solve Side Academy Logo",
      },
    ],
  },
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
      </body>
    </html>
  )
}
