'use client'

import { businessData } from '../data'
import Image from 'next/image'

export default function About() {
  return (
    <section id="over-ons" className="relative z-10 py-16 md:py-24 lg:py-32 bg-white rounded-t-[3rem] md:rounded-t-[4rem] shadow-2xl">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Text - Compact */}
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Welkom bij<br/>IJssalon Italia
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-4 md:mb-6"></div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-light">
              Sinds <span className="font-semibold text-gold">1969</span> het adres voor authentiek Italiaans ijs en gastvrijheid in het hart van Vaals
            </p>
          </div>

          {/* Coffee Photos Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group h-64 md:h-80">
              <Image 
                src="/koffiemetapfelstrudel.png"
                alt="Koffie met Apfelstrudel"
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-cormorant text-xl md:text-2xl font-semibold text-white">
                  Italiaanse Koffie
                </p>
                <p className="text-gray-200 text-sm md:text-base font-light">Perfecte espresso, iedere dag</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl group h-64 md:h-80">
              <Image 
                src="/caramelkoffie.png"
                alt="Specialiteiten Koffie"
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-cormorant text-xl md:text-2xl font-semibold text-white">
                  Verse Specialiteiten
                </p>
                <p className="text-gray-200 text-sm md:text-base font-light">Ambachtelijk bereid</p>
              </div>
            </div>
          </div>

          {/* USPs - Compact Luxury */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="text-center p-6 border-t-2 border-gold">
              <div className="text-gold text-4xl md:text-5xl font-cormorant font-semibold mb-2">50+</div>
              <p className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-1">Ijssmaken</p>
              <p className="text-gray-600 text-xs md:text-sm font-light">Dagelijks vers bereid</p>
            </div>
            <div className="text-center p-6 border-t-2 border-gold">
              <div className="text-gold text-4xl md:text-5xl font-cormorant font-semibold mb-2">1969</div>
              <p className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-1">Opgericht</p>
              <p className="text-gray-600 text-xs md:text-sm font-light">Meer dan 50 jaar ervaring</p>
            </div>
            <div className="text-center p-6 border-t-2 border-gold">
              <div className="text-gold text-4xl md:text-5xl font-cormorant font-semibold mb-2">100%</div>
              <p className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-1">Ambachtelijk</p>
              <p className="text-gray-600 text-xs md:text-sm font-light">Traditionele recepten</p>
            </div>
          </div>

          {/* Location & Hours - Dark Luxury Card */}
          <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              
              {/* Location */}
              <div>
                <h3 className="font-cormorant text-2xl md:text-3xl font-semibold text-gold mb-6">Bezoek Ons</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium text-base md:text-lg">
                        {businessData.contact_info.address.street} {businessData.contact_info.address.number}
                      </p>
                      <p className="text-gray-400 text-sm md:text-base">
                        {businessData.contact_info.address.postal_code} {businessData.contact_info.address.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${businessData.contact_info.phone}`} className="text-gray-300 hover:text-gold transition-colors text-sm md:text-base">
                      {businessData.contact_info.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${businessData.contact_info.email}`} className="text-gray-300 hover:text-gold transition-colors text-sm md:text-base break-all">
                      {businessData.contact_info.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="font-cormorant text-2xl md:text-3xl font-semibold text-gold mb-6">Openingstijden</h3>
                <div className="space-y-5">
                  {/* Summer */}
                  <div className="bg-white/5 rounded-xl p-5 border border-gold/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span className="text-white font-medium text-sm md:text-base">Zomer</span>
                      </div>
                      <span className="text-gray-400 text-xs">{businessData.opening_hours.season_summer.period}</span>
                    </div>
                    <p className="text-gold font-semibold text-lg md:text-xl">11:00 - 22:00</p>
                    <p className="text-gray-400 text-xs mt-1">Laatste bestelling: 21:45</p>
                  </div>

                  {/* Winter */}
                  <div className="bg-white/5 rounded-xl p-5 border border-gold/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        <span className="text-white font-medium text-sm md:text-base">Winter</span>
                      </div>
                      <span className="text-gray-400 text-xs">{businessData.opening_hours.season_winter.period}</span>
                    </div>
                    <p className="text-gold font-semibold text-lg md:text-xl">11:00 - 18:00</p>
                    <p className="text-gray-400 text-xs mt-1">Laatste bestelling: 17:45</p>
                    <p className="text-red-400 text-xs mt-2 font-medium">Gesloten in januari</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8 md:mt-10 pt-8 border-t border-white/10">
              <a 
                href={`tel:${businessData.contact_info.phone}`}
                className="inline-block bg-gold hover:bg-gold-dark text-white px-10 md:px-12 py-3.5 md:py-4 rounded-full transition-all duration-300 font-semibold text-sm md:text-base tracking-wide uppercase shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Bel Ons Direct
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
