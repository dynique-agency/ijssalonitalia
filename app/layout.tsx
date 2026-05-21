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

const siteUrl = 'https://www.ijssalonitaliavaals.nl'

export const metadata: Metadata = {
  title: 'IJssalon Italia Vaals — Ambachtelijk ijs & Italiaanse gastvrijheid',
  description: 'Familiebedrijf sinds 1969 in Vaals. Geniet van meer dan 50 ambachtelijke ijssmaken, Italiaanse koffie en gebak. Dagelijks vers bereid door Wally en Roger.',
  metadataBase: new URL(siteUrl),
  keywords: ['ijssalon', 'Vaals', 'ambachtelijk ijs', 'gelato', 'roomijs', 'sorbet', 'Italiaans', 'ijssalon Italia'],
  icons: {
    icon: '/italialogo.webp',
    apple: '/italialogo.webp',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'IJssalon Italia Vaals — Ambachtelijk ijs & Italiaanse gastvrijheid',
    description: 'Familiebedrijf sinds 1969 in Vaals. Meer dan 50 ambachtelijke ijssmaken, Italiaanse koffie en gebak. Dagelijks vers bereid.',
    siteName: 'IJssalon Italia Vaals',
    images: [
      {
        url: '/ijs.webp',
        width: 1200,
        height: 630,
        alt: 'Ambachtelijk ijs bij IJssalon Italia Vaals',
      },
    ],
    locale: 'nl_NL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IJssalon Italia Vaals — Ambachtelijk ijs & Italiaanse gastvrijheid',
    description: 'Familiebedrijf sinds 1969. Meer dan 50 ambachtelijke ijssmaken in Vaals.',
    images: ['/ijs.webp'],
  },
  alternates: {
    canonical: siteUrl,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'IceCreamShop',
  name: 'IJssalon Italia Vaals',
  description: 'Authentiek familiebedrijf waar passie voor ijs en gastvrijheid centraal staan. Vers bereid ambachtelijk ijs, Italiaanse koffie en gebak.',
  url: siteUrl,
  telephone: '+31611318094',
  email: 'ijssalonitalia@me.com',
  foundingDate: '1969',
  image: `${siteUrl}/ijs.webp`,
  logo: `${siteUrl}/italialogo.webp`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Maastrichterlaan 26',
    addressLocality: 'Vaals',
    postalCode: '6291 ES',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.7742,
    longitude: 6.0167,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday'],
      opens: '11:00',
      closes: '22:00',
    },
  ],
  servesCuisine: ['Italian', 'Ice Cream'],
  priceRange: '€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <AnnouncementModal />
        <CookieConsent />
      </body>
    </html>
  )
}
