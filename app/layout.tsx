import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import CookieConsent from './components/CookieConsent'
import AnnouncementModal from './components/AnnouncementModal'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IJssalon Italia Vaals - Ambachtelijk ijs & Italiaanse gastvrijheid',
  description: 'Een authentiek familiebedrijf waar passie voor ijs en gastvrijheid centraal staan. Geniet van vers bereid ambachtelijk ijs, Italiaanse koffie en gebak in het hart van Vaals.',
  icons: {
    icon: '/italialogo.webp',
    apple: '/italialogo.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${inter.variable}`}>
      <body className={inter.className}>
        {children}
        <AnnouncementModal />
        <CookieConsent />
      </body>
    </html>
  )
}

