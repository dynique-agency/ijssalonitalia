'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Consent = {
  necessary: true
  analytics: boolean
  marketing: boolean
  decided: boolean
}

const STORAGE_KEY = 'ijssalon_cookie_consent'

function getStoredConsent(): Consent | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export default function CookieConsent() {
  const [visible, setVisible]       = useState(false)
  const [expanded, setExpanded]     = useState(false)
  const [analytics, setAnalytics]   = useState(false)
  const [marketing, setMarketing]   = useState(false)
  const [leaving, setLeaving]       = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    if (!stored?.decided) {
      // Small delay so it doesn't pop up before the loading screen ends
      const t = setTimeout(() => setVisible(true), 2800)
      return () => clearTimeout(t)
    }
  }, [])

  function save(consent: Consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
    setLeaving(true)
    setTimeout(() => setVisible(false), 600)
  }

  function acceptAll() {
    save({ necessary: true, analytics: true, marketing: true, decided: true })
  }

  function acceptSelected() {
    save({ necessary: true, analytics, marketing, decided: true })
  }

  function rejectAll() {
    save({ necessary: true, analytics: false, marketing: false, decided: true })
  }

  if (!visible) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[200] flex justify-center px-4 pb-4 md:pb-6 transition-all duration-500 ${
        leaving ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
      }`}
      style={{ animation: leaving ? undefined : 'cookieSlideUp 0.55s cubic-bezier(0.16,1,0.3,1) both' }}
    >
      <style>{`
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="w-full max-w-3xl bg-[#0d0d0d] border border-[#c9a84c]/25 rounded-2xl shadow-[0_8px_60px_rgba(0,0,0,0.7)] overflow-hidden">

        {/* Gold top rule */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />

        <div className="p-5 md:p-7">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="font-cormorant text-white text-xl md:text-2xl font-semibold leading-tight">
                Wij respecteren uw privacy
              </h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1.5 leading-relaxed max-w-xl">
                Wij gebruiken cookies om uw ervaring te verbeteren. Noodzakelijke cookies zorgen voor de werking van de website.
                Optionele cookies helpen ons de site te verbeteren.{' '}
                <Link href="/cookies" className="text-[#c9a84c]/80 hover:text-[#c9a84c] underline underline-offset-2 transition-colors">
                  Meer informatie
                </Link>
              </p>
            </div>
            <button
              onClick={rejectAll}
              aria-label="Sluiten"
              className="press text-gray-600 hover:text-gray-300 transition-colors flex-shrink-0 mt-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Expanded settings */}
          {expanded && (
            <div className="mb-5 space-y-2 border border-white/8 rounded-xl p-4">
              {/* Necessary */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-white text-xs font-medium">Noodzakelijk</p>
                  <p className="text-gray-500 text-xs mt-0.5">Vereist voor de werking van de website</p>
                </div>
                <div className="w-9 h-5 rounded-full bg-[#c9a84c]/40 flex items-center justify-end pr-0.5 cursor-not-allowed">
                  <div className="w-4 h-4 rounded-full bg-[#c9a84c]" />
                </div>
              </div>
              <div className="h-px bg-white/5" />
              {/* Analytics */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-white text-xs font-medium">Analytisch</p>
                  <p className="text-gray-500 text-xs mt-0.5">Helpt ons begrijpen hoe bezoekers de site gebruiken</p>
                </div>
                <button
                  onClick={() => setAnalytics(v => !v)}
                  className={`press relative w-9 h-5 rounded-full transition-colors duration-300 px-0.5 ${
                    analytics ? 'bg-[#c9a84c]' : 'bg-white/10'
                  }`}
                  aria-label={analytics ? 'Analytisch uitschakelen' : 'Analytisch inschakelen'}
                >
                  <div
                    className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200"
                    style={{
                      transitionTimingFunction: 'var(--ease-out-strong)',
                      transform: analytics ? 'translateX(16px)' : 'translateX(0)',
                    }}
                  />
                </button>
              </div>
              <div className="h-px bg-white/5" />
              {/* Marketing */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-white text-xs font-medium">Marketing</p>
                  <p className="text-gray-500 text-xs mt-0.5">Gepersonaliseerde advertenties op externe platforms</p>
                </div>
                <button
                  onClick={() => setMarketing(v => !v)}
                  className={`press relative w-9 h-5 rounded-full transition-colors duration-300 px-0.5 ${
                    marketing ? 'bg-[#c9a84c]' : 'bg-white/10'
                  }`}
                  aria-label={marketing ? 'Marketing uitschakelen' : 'Marketing inschakelen'}
                >
                  <div
                    className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200"
                    style={{
                      transitionTimingFunction: 'var(--ease-out-strong)',
                      transform: marketing ? 'translateX(16px)' : 'translateX(0)',
                    }}
                  />
                </button>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <button
              onClick={acceptAll}
              className="press flex-1 bg-[#c9a84c] hover:bg-[#b8983c] text-black text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-full transition-[background-color,box-shadow,transform] duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
            >
              Alles accepteren
            </button>
            {expanded ? (
              <button
                onClick={acceptSelected}
                className="press flex-1 border border-white/20 hover:border-white/40 text-white text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-full transition-[border-color,transform] duration-300"
              >
                Opslaan
              </button>
            ) : (
              <button
                onClick={() => setExpanded(true)}
                className="press flex-1 border border-white/20 hover:border-white/40 text-white text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-full transition-[border-color,transform] duration-300"
              >
                Voorkeuren instellen
              </button>
            )}
            <button
              onClick={rejectAll}
              className="press flex-1 text-gray-500 hover:text-gray-300 text-xs tracking-wide uppercase px-5 py-2.5 rounded-full transition-colors duration-300"
            >
              Alleen noodzakelijk
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
