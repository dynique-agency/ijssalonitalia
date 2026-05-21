'use client'

import { businessData } from '../data'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto mb-10 md:mb-12">
          {/* Brand */}
          <div>
            <Image 
              src="/italialogo.webp" 
              alt="IJssalon Italia Logo" 
              width={160}
              height={80}
              className="h-12 md:h-14 w-auto mb-5 md:mb-6 drop-shadow-lg"
            />
            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
              {businessData.business_identity.slogan}
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-gold font-cormorant text-xl md:text-2xl font-semibold mb-4 md:mb-5">Contact</h3>
            <div className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
              <p className="leading-relaxed">
                {businessData.contact_info.address.street} {businessData.contact_info.address.number}<br/>
                {businessData.contact_info.address.postal_code} {businessData.contact_info.address.city}
              </p>
              <p>
                <a href={`tel:${businessData.contact_info.phone_href}`} className="hover:text-gold transition-colors duration-300">
                  {businessData.contact_info.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${businessData.contact_info.email}`} className="hover:text-gold transition-colors duration-300 break-all">
                  {businessData.contact_info.email}
                </a>
              </p>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-gold font-cormorant text-xl md:text-2xl font-semibold mb-2">Openingstijden</h3>
            <p className="text-gray-600 text-xs mb-4 flex items-center gap-1.5">
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              Weersafhankelijk
            </p>
            <div className="space-y-4 text-gray-400 text-sm md:text-base font-light">
              <div>
                <p className="text-white font-medium mb-2">Zomer</p>
                <p>10:00 – 19:00 &nbsp;·&nbsp; IJssalon open</p>
                <p>19:00 – 22:00 &nbsp;·&nbsp; Alleen meenemen</p>
                <p className="text-xs mt-1.5 text-gray-500">Maandag vanaf 11:00</p>
              </div>
              <div>
                <p className="text-white font-medium mb-2">Winter</p>
                <p>Dagelijks 11:00 – 18:00</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-500 text-xs md:text-sm font-light">
          <p className="mb-3">&copy; {new Date().getFullYear()} IJssalon Italia Vaals. Alle rechten voorbehouden.</p>
          <p className="mb-4">Sinds {businessData.business_identity.founded_year} — Een familiebedrijf met passie</p>
          <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-gray-600">
            <Link href="/privacy" className="hover:text-gold transition-colors duration-300">Privacybeleid</Link>
            <span className="text-gray-800">·</span>
            <Link href="/cookies" className="hover:text-gold transition-colors duration-300">Cookiebeleid</Link>
            <span className="text-gray-800">·</span>
            <Link href="/voorwaarden" className="hover:text-gold transition-colors duration-300">Algemene Voorwaarden</Link>
          </div>

          {/* Dynique credit */}
          <div className="mt-8 pt-6 border-t border-gray-900 flex items-center justify-center gap-2.5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-700" />
            <p className="text-[11px] tracking-[0.18em] text-gray-700 uppercase font-light">
              Designed &amp; Realised by{' '}
              <a
                href="https://dynique.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors duration-500"
              >
                Dynique.nl
              </a>
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-700" />
          </div>
        </div>
      </div>
    </footer>
  )
}

