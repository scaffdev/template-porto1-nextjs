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
  metadataBase: new URL('https://achmad-bagus.vercel.app'),
  title: 'Achmad Bagus R. — Fresh Graduate Sistem Informasi & Web Developer',
  description: 'Portofolio profesional Achmad Bagus R., Fresh Graduate Sistem Informasi Universitas Bina Sarana Informatika. Fokus pada Web Development modern & solusi digital.',
  openGraph: {
    title: 'Achmad Bagus R. — Portofolio',
    description: 'Fresh Graduate Sistem Informasi & Web Developer',
    url: 'https://achmad-bagus.vercel.app',
    siteName: 'Achmad Bagus R. Portfolio',
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
