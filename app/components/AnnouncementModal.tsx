'use client'

import { useState, useEffect } from 'react'

const SESSION_KEY = 'ijssalon_announcement_seen'

export default function AnnouncementModal() {
  const [rendered, setRendered]   = useState(false)
  const [visible, setVisible]     = useState(false)
  const [leaving, setLeaving]     = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return
    setRendered(true)
    const t = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(t)
  }, [])

  function close() {
    setLeaving(true)
    setTimeout(() => {
      setRendered(false)
      sessionStorage.setItem(SESSION_KEY, '1')
    }, 550)
  }

  if (!rendered) return null

  return (
    <>
      <style>{`
        @keyframes ann-backdrop {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes ann-card {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .ann-backdrop {
          animation: ann-backdrop 0.5s cubic-bezier(0.16,1,0.3,1) both;
        }
        .ann-card {
          animation: ann-card 0.55s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: 0.08s;
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={close}
        className={`ann-backdrop fixed inset-0 z-[300] bg-black/75 backdrop-blur-sm transition-opacity duration-500 ${leaving ? 'opacity-0' : ''}`}
      />

      {/* Card */}
      <div
        className={`ann-card fixed inset-0 z-[301] flex items-center justify-center p-4 md:p-8 pointer-events-none transition-all duration-500 ${leaving ? 'opacity-0 scale-95' : ''}`}
      >
        <div className="pointer-events-auto w-full max-w-xl bg-[#0d0d0d] rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.9)] border border-[#c9a84c]/20">

          {/* Gold top line */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/70 to-transparent" />

          {/* Header */}
          <div className="px-7 pt-8 pb-5 relative">
            {/* Close */}
            <button
              onClick={close}
              aria-label="Sluiten"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-5 bg-[#c9a84c]/60" />
              <span className="text-[#c9a84c]/80 text-[10px] tracking-[0.3em] uppercase font-light">Nieuws</span>
            </div>

            {/* Title */}
            <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-white leading-tight mb-3">
              Goed nieuws!<br />
              <span className="text-[#c9a84c]">Vanaf 24 april</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
              We hebben onze openingstijden en service aangepast zodat jullie optimaal kunnen genieten van al ons lekkers. Of je nu uitgebreid wilt zitten of snel iets wilt ophalen, we staan voor je klaar!
            </p>
          </div>

          {/* Two time cards */}
          <div className="px-7 pb-5 grid grid-cols-2 gap-3">
            {/* Service aan tafel */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 hover:border-[#c9a84c]/20 transition-colors duration-300">
              <span className="text-2xl mb-3 block">🕒</span>
              <p className="text-white text-sm font-medium mb-1">Bediening aan tafel</p>
              <p className="text-[#c9a84c] font-cormorant text-xl font-semibold">tot 19:00</p>
              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">Tot 19:00 uur bedienen we je met liefde aan tafel.</p>
            </div>

            {/* Take-away */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 hover:border-[#c9a84c]/20 transition-colors duration-300">
              <span className="text-2xl mb-3 block">🛍️</span>
              <p className="text-white text-sm font-medium mb-1">Alleen meenemen</p>
              <p className="text-[#c9a84c] font-cormorant text-xl font-semibold">19:00 – 21:45</p>
              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">Uitsluitend afhaal, geen bediening aan tafel.</p>
            </div>
          </div>

          {/* Ice cream highlight */}
          <div className="mx-7 mb-5 rounded-2xl border border-[#c9a84c]/15 bg-gradient-to-r from-[#c9a84c]/5 to-transparent p-4 flex items-start gap-4">
            <span className="text-2xl flex-shrink-0 mt-0.5">🍨</span>
            <div>
              <p className="text-white text-sm font-medium mb-0.5">Extra lekker nieuws!</p>
              <p className="text-gray-400 text-xs leading-relaxed">Al onze ijscoupes zijn nu ook beschikbaar voor take-away. Thuis, onderweg of in het park genieten van je favoriete ijscreatie!</p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white/8 px-7 py-4 flex items-center justify-between gap-4 bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <span className="text-base flex-shrink-0">📅</span>
              <p className="text-gray-500 text-xs">Op maandag openen we om <span className="text-gray-300">11:00 uur</span></p>
            </div>

            <button
              onClick={close}
              className="group flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8983c] text-black text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-full transition-all duration-300 flex-shrink-0 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
            >
              Begrepen
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Gold bottom line */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
        </div>
      </div>
    </>
  )
}
