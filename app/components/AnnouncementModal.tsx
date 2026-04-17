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
              We hebben onze openingstijden en service aangepast zodat u optimaal kunt genieten. Of u nu uitgebreid wilt zitten of snel iets wilt meenemen — wij staan voor u klaar.
            </p>
          </div>

          {/* Two time cards */}
          <div className="px-7 pb-5 grid grid-cols-2 gap-3">
            {/* Service aan tafel */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 hover:border-[#c9a84c]/20 transition-colors duration-300">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium mb-1">Bediening aan tafel</p>
              <p className="text-[#c9a84c] font-cormorant text-xl font-semibold">tot 19:00</p>
            </div>

            {/* Take-away */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 hover:border-[#c9a84c]/20 transition-colors duration-300">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium mb-1">Alleen meenemen</p>
              <p className="text-[#c9a84c] font-cormorant text-xl font-semibold">19:00 – 21:45</p>
            </div>
          </div>

          {/* Ice cream highlight */}
          <div className="mx-7 mb-5 rounded-2xl border border-[#c9a84c]/15 bg-gradient-to-r from-[#c9a84c]/5 to-transparent p-4 flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C8.686 2 6 4.686 6 8c0 2.123 1.037 4.014 2.625 5.175L9 18h6l.375-4.825C16.963 12.014 18 10.123 18 8c0-3.314-2.686-6-6-6z" />
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-medium mb-0.5">Coupes ook als take-away</p>
              <p className="text-gray-500 text-xs leading-relaxed">Al onze ijscoupes zijn nu ook beschikbaar voor meenemen. Thuis, onderweg of in het park genieten van uw favoriet.</p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white/8 px-7 py-4 flex items-center justify-between gap-4 bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-[#c9a84c]/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 text-xs">Op maandag openen wij om <span className="text-gray-300">11:00</span></p>
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
