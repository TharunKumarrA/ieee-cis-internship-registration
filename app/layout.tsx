import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IEEE CIS Kerala Section | Summer Internship 2025',
  description: 'A Premier Learning Experience in Computational Intelligence',
  openGraph: {
    title: 'IEEE CIS Kerala Section | Summer Internship 2025',
    description: 'A Premier Learning Experience in Computational Intelligence',
    url: 'https://summer-internship.ieeekerala.org',
    siteName: 'IEEE CIS Kerala Section',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}