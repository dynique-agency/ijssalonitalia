'use client'

import { businessData } from '../data'
import Image from 'next/image'

export default function About() {
  return (
    <section id="over-ons" className="relative py-16 md:py-24 lg:py-32 bg-white">
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
                src="/koffiemetapfelstrudel.webp"
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
                src="/caramelkoffie.webp"
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
          <div id="openingstijden" className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl">
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
                    <a href={`tel:${businessData.contact_info.phone_href}`} className="text-gray-300 hover:text-gold transition-colors text-sm md:text-base">
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
                <h3 className="font-cormorant text-2xl md:text-3xl font-semibold text-gold mb-2">Openingstijden</h3>
                <p className="text-gray-500 text-xs mb-5 flex items-center gap-1.5">
                  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                  Openingstijden zijn weersafhankelijk
                </p>
                <div className="space-y-5">
                  {/* Summer */}
                  <div className="rounded-2xl overflow-hidden border border-gold/20">
                    {/* Header */}
                    <div className="flex items-center gap-2.5 px-5 py-3.5 bg-white/5 border-b border-gold/10">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="text-white font-semibold text-sm tracking-wide uppercase">Zomer</span>
                    </div>

                    {/* Two-phase blocks */}
                    <div className="grid grid-cols-2 divide-x divide-gold/10">
                      <div className="px-4 py-5 text-center bg-gradient-to-b from-gold/10 to-gold/5">
                        <p className="text-gold font-cormorant font-semibold text-2xl md:text-3xl leading-none">10:00 – 19:00</p>
                        <p className="text-gray-300 text-xs mt-2 tracking-wide uppercase">IJssalon open</p>
                      </div>
                      <div className="px-4 py-5 text-center bg-gradient-to-b from-gold/10 to-gold/5">
                        <p className="text-gold font-cormorant font-semibold text-2xl md:text-3xl leading-none">19:00 – 22:00</p>
                        <p className="text-gray-300 text-xs mt-2 tracking-wide uppercase">Alleen meenemen</p>
                      </div>
                    </div>

                    {/* Monday note */}
                    <div className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 border-t border-gold/10">
                      <div className="w-1 h-1 rounded-full bg-gold/60" />
                      <p className="text-gold/80 text-sm font-medium">Maandag vanaf 11:00</p>
                      <div className="w-1 h-1 rounded-full bg-gold/60" />
                    </div>
                  </div>

                  {/* Winter */}
                  <div className="rounded-2xl overflow-hidden border border-white/10">
                    {/* Header */}
                    <div className="flex items-center gap-2.5 px-5 py-3.5 bg-white/5 border-b border-white/10">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      <span className="text-white font-semibold text-sm tracking-wide uppercase">Winter</span>
                    </div>
                    <div className="px-4 py-5 text-center bg-white/[0.03]">
                      <p className="text-gold font-cormorant font-semibold text-2xl md:text-3xl leading-none">11:00 – 18:00</p>
                      <p className="text-gray-400 text-xs mt-2 tracking-wide uppercase">Dagelijks open</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8 md:mt-10 pt-8 border-t border-white/10">
              <a 
                href={`tel:${businessData.contact_info.phone_href}`}
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
