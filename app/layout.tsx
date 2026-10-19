import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rizky-pratama.vercel.app'),
  title: 'Rizky Pratama — Fresh Graduate Teknik Informatika & Web Developer',
  description: 'Portofolio profesional Rizky Pratama, Fresh Graduate Teknik Informatika Universitas Teknologi Nusantara. Fokus pada Web Development modern & solusi digital.',
  openGraph: {
    title: 'Rizky Pratama — Portofolio',
    description: 'Fresh Graduate Teknik Informatika & Web Developer',
    url: 'https://rizky-pratama.vercel.app',
    siteName: 'Rizky Pratama Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#F8FAFC] text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  )
}
