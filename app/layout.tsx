import Navbar from '@/components/layout/navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <body className="bg-white text-black selection:bg-teal-300 dark:bg-black dark:text-white dark:selection:bg-fuchsia-600 dark:selection:text-white">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
