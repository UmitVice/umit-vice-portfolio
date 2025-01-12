import '@/styles/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Umit Vice - Portfolio',
  description: 'Umit Vice Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
