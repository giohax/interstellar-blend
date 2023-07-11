import Navbar from 'components/layout/navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/fonts.css'
import { Suspense } from 'react';
import Footer from 'components/layout/footer';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Interstellar Blend',
  description: 'Life Changing Proprietary Science Based Anti-Aging Formulas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white selection:bg-fuchsia-600 selection:text-white">
        <Navbar />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}
