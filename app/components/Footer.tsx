'use client'

import { businessData } from '../data'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto mb-10 md:mb-12">
          {/* Brand */}
          <div>
            <Image 
              src="/italialogo.png" 
              alt="IJssalon Italia Logo" 
              width={160}
              height={80}
              className="h-12 md:h-14 w-auto mb-5 md:mb-6 brightness-200"
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
                <a href={`tel:${businessData.contact_info.phone}`} className="hover:text-gold transition-colors duration-300">
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
            <h3 className="text-gold font-cormorant text-xl md:text-2xl font-semibold mb-4 md:mb-5">Openingstijden</h3>
            <div className="space-y-4 text-gray-400 text-sm md:text-base font-light">
              <div>
                <p className="text-white font-medium mb-1">Zomer (apr - sep)</p>
                <p>Dagelijks 11:00 - 22:00</p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">Winter (okt - mrt)</p>
                <p>Dagelijks 11:00 - 18:00</p>
                <p className="text-red-400 text-xs mt-1.5 font-medium">Gesloten in januari</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-500 text-xs md:text-sm font-light">
          <p className="mb-1.5">&copy; {new Date().getFullYear()} IJssalon Italia Vaals. Alle rechten voorbehouden.</p>
          <p>Sinds {businessData.business_identity.founded_year} - Een familiebedrijf met passie</p>
        </div>
      </div>
    </footer>
  )
}

