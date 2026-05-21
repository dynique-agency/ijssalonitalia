'use client'

import { useEffect, useState } from 'react'
import { businessData } from '../data'

const STORAGE_KEY = 'ijssalon_cookie_consent'
const MAPS_URL    = 'https://www.google.com/maps/dir/?api=1&destination=Maastrichterlaan+26,+6291+ES+Vaals,+Nederland'
const MAPS_EMBED  = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.0!2d6.0167!3d50.7742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f9b0b0b0b0b0%3A0x0!2sMaastrichterlaan+26%2C+6291+ES+Vaals!5e0!3m2!1snl!2snl!4v1'

function hasMarketingConsent(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const consent = JSON.parse(raw)
    return consent?.marketing === true
  } catch {
    return false
  }
}

export default function RouteSection() {
  const [mapAllowed, setMapAllowed] = useState(false)
  const [mapLoaded,  setMapLoaded]  = useState(false)

  useEffect(() => {
    setMapAllowed(hasMarketingConsent())

    // Luister naar cookie-wijzigingen binnen de tab
    const onStorage = () => setMapAllowed(hasMarketingConsent())
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const { address, phone, phone_href } = businessData.contact_info

  return (
    <section id="route" className="relative bg-white py-16 md:py-24 overflow-hidden">

      {/* Subtle top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-semibold text-black leading-[1.1] tracking-tight mb-4">
              Bezoek Ons
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-4" />
            <p className="text-gray-500 text-sm md:text-base font-light">
              Wij verwelkomen je graag in het hart van Vaals
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-2xl">

            {/* ── Linker kolom: adres + CTA ── */}
            <div className="lg:col-span-2 bg-gradient-to-br from-black via-gray-900 to-black p-8 md:p-10 lg:p-12 flex flex-col justify-between">

              <div className="space-y-8">
                {/* Adres */}
                <div>
                  <p className="text-gold/60 text-[9px] tracking-[0.4em] uppercase font-light mb-3">Adres</p>
                  <p className="text-white font-cormorant text-2xl md:text-3xl font-semibold leading-snug">
                    {address.street} {address.number}
                  </p>
                  <p className="text-gray-400 text-base md:text-lg font-light mt-1">
                    {address.postal_code} {address.city}
                  </p>
                </div>

                {/* Contact */}
                <div className="space-y-3 border-t border-white/10 pt-6">
                  <a
                    href={`tel:${phone_href}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base">{phone}</span>
                  </a>

                  <div className="flex items-start gap-3 text-gray-500 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="font-light leading-relaxed">
                      <p className="text-white/60 text-xs mb-1">Zomer: di–zo 10:00–19:00 · ma 11:00</p>
                      <p className="text-white/60 text-xs">Winter: dagelijks 11:00–18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Route-knop */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 group inline-flex items-center justify-center gap-3 w-full bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-sm tracking-wide shadow-xl hover:shadow-2xl hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Route plannen
                <svg className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* ── Rechter kolom: kaart ── */}
            <div className="lg:col-span-3 relative min-h-[320px] md:min-h-[420px] bg-gray-100">

              {mapAllowed ? (
                <>
                  {!mapLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  <iframe
                    title="IJssalon Italia Vaals op Google Maps"
                    src={MAPS_EMBED}
                    width="100%"
                    height="100%"
                    className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ${mapLoaded ? 'opacity-100' : 'opacity-0'}`}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={() => setMapLoaded(true)}
                  />
                </>
              ) : (
                /* Cookie-gate placeholder */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 bg-gray-50 text-center">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-cormorant text-xl font-semibold text-black mb-2">Kaart niet geladen</p>
                    <p className="text-gray-500 text-sm font-light max-w-xs leading-relaxed">
                      Accepteer marketing-cookies om de interactieve kaart te zien. Je kan altijd direct de route plannen via de knop.
                    </p>
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold text-sm transition-colors duration-300 underline underline-offset-4"
                  >
                    Open in Google Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
