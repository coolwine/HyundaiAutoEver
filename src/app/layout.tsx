import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "KIA Biz",
  description: "KIA Business Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
