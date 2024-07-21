import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Jost } from "next/font/google"
import { ThemeProvider } from "@/providers/ThemeProvider"
import Loader from "@/components/Loader"
import Header from "@/components/layouts/header"
import "./globals.css"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AbhiJivani.Dev",
  description: "A Software Developer",
  applicationName: "Portfolio",
  openGraph: {
    type: "website",
    url: "https://abhijivani.vercel.app/",
    title: "AbhiJivani.Dev",
    description:
      "Portfolio website developed with NextJS, TypeScript, ShadcnUI & GSAP.",
    siteName: "Portfolio website",
  },
  authors: {
    name: "Abhi Jivani",
  },
  generator: "NextJs",
  keywords: ["NextJS", "Portfolio", "GSAP", "ShadcnUI"],
  creator: "Abhi Jivani",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={jost.className}>
        <Loader />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
