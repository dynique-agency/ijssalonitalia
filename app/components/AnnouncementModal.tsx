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
        className={`ann-card fixed inset-0 z-[301] flex items-center justify-center p-3 sm:p-6 md:p-8 pointer-events-none transition-all duration-500 ${leaving ? 'opacity-0 scale-95' : ''}`}
      >
        <div
          className="pointer-events-auto w-full max-w-xl bg-[#0d0d0d] rounded-2xl sm:rounded-3xl overflow-y-auto overscroll-contain shadow-[0_32px_80px_rgba(0,0,0,0.9)] border border-[#c9a84c]/20 max-h-[calc(100vh-1.5rem)] max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)]"
        >

          {/* Gold top line */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/70 to-transparent" />

          {/* Header */}
          <div className="px-5 sm:px-7 pt-6 sm:pt-8 pb-4 sm:pb-5 relative overflow-hidden">
            {/* Soft ice-cream-color glow — pistachio, gold, strawberry */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.16] sm:opacity-20" aria-hidden>
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl" style={{ background: '#A8C870' }} />
              <div className="absolute -top-14 left-1/3 w-44 h-44 rounded-full blur-3xl" style={{ background: '#c9a84c' }} />
              <div className="absolute -top-8 -right-6 w-36 h-36 rounded-full blur-3xl" style={{ background: '#E8927C' }} />
            </div>

            {/* Content sits above the glow */}
            <div className="relative z-10">
              {/* Close — 44px touch target, icon stays visually small */}
              <button
                onClick={close}
                aria-label="Sluiten"
                className="press absolute top-0 right-0 sm:-top-1 sm:right-0 w-11 h-11 rounded-full hover:bg-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Label */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4 pr-10">
                <div className="h-px w-5 bg-[#c9a84c]/60" />
                <span className="text-[#c9a84c]/80 text-[10px] tracking-[0.3em] uppercase font-light">Nieuws</span>
              </div>

              {/* Title */}
              <h2 className="font-cormorant text-[28px] leading-[1.1] sm:text-3xl md:text-4xl font-semibold text-white sm:leading-tight mb-2.5 sm:mb-3 pr-10 sm:pr-0" style={{ textWrap: 'balance' }}>
                Goed nieuws! <span className="text-[#c9a84c]">Vanaf september</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Vanaf september gelden aangepaste openingstijden. Of je nu uitgebreid wilt zitten of 's avonds nog iets wilt ophalen, we staan voor je klaar!
              </p>
            </div>
          </div>

          {/* Hours card — matches the "Zomer" grouped-card pattern used elsewhere on the site */}
          <div className="mx-5 sm:mx-7 mb-4 sm:mb-5 rounded-2xl overflow-hidden border border-[#c9a84c]/20">
            <div className="grid grid-cols-2 divide-x divide-[#c9a84c]/10">
              {/* Bediening aan tafel — pistachio accent */}
              <div className="p-3.5 sm:p-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-2.5" style={{ background: '#A8C87022' }}>
                  <svg className="w-4 h-4" style={{ color: '#A8C870' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white text-xs sm:text-sm font-medium mb-1">Bediening aan tafel</p>
                <p className="font-cormorant text-lg sm:text-xl font-semibold leading-none" style={{ color: '#A8C870' }}>10:00–18:00</p>
                <p className="text-gray-500 text-[11px] sm:text-xs mt-1.5 leading-relaxed">Dinsdag t/m zondag. Op maandag vanaf 11:00.</p>
              </div>

              {/* Afhalen — strawberry accent */}
              <div className="p-3.5 sm:p-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-2.5" style={{ background: '#E8927C22' }}>
                  <svg className="w-4 h-4" style={{ color: '#E8927C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 11H4L5 9z" />
                  </svg>
                </div>
                <p className="text-white text-xs sm:text-sm font-medium mb-1">Alleen meenemen</p>
                <p className="font-cormorant text-lg sm:text-xl font-semibold leading-none" style={{ color: '#E8927C' }}>18:00–21:00</p>
                <p className="text-gray-500 text-[11px] sm:text-xs mt-1.5 leading-relaxed">Elke dag van de week.</p>
              </div>
            </div>

            {/* Weersafhankelijk — folded into the same card as a footer strip */}
            <div className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-[#c9a84c]/10 border-t border-[#c9a84c]/15">
              <svg className="w-3.5 h-3.5 text-[#c9a84c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <p className="text-[#c9a84c] font-semibold text-xs sm:text-sm tracking-wide">Openingstijden zijn weersafhankelijk</p>
            </div>
          </div>

          {/* Ice cream note — lighter weight, no card, matches its lower priority */}
          <div className="mx-5 sm:mx-7 mb-5 sm:mb-6 flex items-start gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#D4C4A022' }}>
              <svg className="w-3.5 h-3.5" style={{ color: '#D4C4A0' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed pt-0.5">
              <span className="font-medium" style={{ color: '#D4C4A0' }}>Extra lekker nieuws:</span> al onze ijscoupes zijn nu ook beschikbaar voor take-away. Thuis, onderweg of in het park genieten van je favoriete ijscreatie!
            </p>
          </div>

          {/* Footer — stacks and goes full-width on mobile for an easy thumb tap */}
          <div className="border-t border-white/8 px-5 sm:px-7 py-4 sm:py-4 flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-3 sm:gap-4 bg-white/[0.02]">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <svg className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-xs text-center sm:text-left">Deze tijden gelden <span className="text-gray-300">vanaf september</span></p>
            </div>

            <button
              onClick={close}
              className="press group flex items-center justify-center gap-2 w-full sm:w-auto bg-[#c9a84c] hover:bg-[#b8983c] text-black text-xs font-semibold tracking-wide uppercase px-5 py-3 sm:py-2.5 rounded-full transition-[background-color,box-shadow,transform] duration-300 flex-shrink-0 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
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
