import { Metadata } from 'next'

import { CONFIG } from '@/constants'
import MatrixBackground from '@/components/matrix-background'
import { Providers } from '@/app/providers'

import './globals.css'

export const metadata: Metadata = {
  title: 'Aeyla Naseer | Front-end Developer',
  description:
    'Explore the personal website of Aeyla Naseer, a passionate Front-end Developer. Discover my projects, skills, and get in touch today.',
  metadataBase: new URL(CONFIG.url),
  authors: [
    {
      name: 'Ae8y2la',
      url: 'https://github.com/Ae8y2la',
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: CONFIG.url,
  },
  openGraph: {
    title: 'Aeyla Naseer | Front-end Developer',
    description:
      'Explore the personal website of Aeyla Naseer, a passionate Front-end Developer. Discover my projects, skills, and get in touch today.',
    url: CONFIG.url,
    siteName: 'Aeyla Naseer',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
      },
    ],
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
    <html lang="en" className="dark">
      <body suppressHydrationWarning>
        <MatrixBackground />
        <div className="fixed top-0 -z-40 h-screen w-screen bg-background/80"></div>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
