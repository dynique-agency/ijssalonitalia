'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ICE_TYPES = [
  {
    index: '01',
    name: 'Roomijs',
    tagline: 'De klassieke favoriet',
    temp: '−18',
    fatPct: 88,
    fatLabel: '≥ 10% vet',
    description:
      'Roomijs wordt gemaakt op basis van melk, room, suiker en vaak eidooiers. Het bevat relatief veel vet — meestal 10% of meer — en wordt geserveerd rond −18 °C. Dit zorgt voor een stevige structuur en volle, romige smaak.',
    kenmerken: [
      'Rijk en romig',
      'Hoog vetgehalte',
      'Geserveerd op lagere temperatuur',
      'Vaak luchtiger',
    ],
    badge: null,
    color: '#D4C4A0',
    barFrom: 'rgba(212,196,160,0.3)',
    barTo:   'rgba(212,196,160,0.85)',
    glow:    'rgba(212,196,160,0.06)',
  },
  {
    index: '02',
    name: 'Gelato',
    tagline: 'Het Italiaanse origineel',
    temp: '−12',
    fatPct: 52,
    fatLabel: '4 – 8% vet',
    description:
      'Gelato bevat minder vet (doorgaans 4–8%) en minder lucht, waardoor het een hogere dichtheid heeft. Het wordt op lagere snelheid geklopt, wat de smaak intenser maakt. Geserveerd op circa −12 °C voor een zachtere structuur.',
    kenmerken: [
      'Lager vetgehalte dan roomijs',
      'Minder luchtig, dus stevig en vol van smaak',
      'Geserveerd op hogere temperatuur',
      'Intensere smaak en zachtere structuur',
    ],
    badge: 'Italiaans Origineel',
    color: '#C9A961',
    barFrom: 'rgba(201,169,97,0.3)',
    barTo:   'rgba(201,169,97,0.9)',
    glow:    'rgba(201,169,97,0.07)',
  },
  {
    index: '03',
    name: 'Sorbet',
    tagline: 'Een lichte en frisse ijssoort',
    temp: null,
    fatPct: 3,
    fatLabel: '0% vet',
    description:
      'Sorbet bevat geen zuivel of eieren — alleen water, suiker en fruit (puree) of vruchtensap. Door het hoge fruitgehalte is het licht en fris, ideaal als vegan of lactosevrij alternatief en perfect als tussengerecht of verfrissend dessert.',
    kenmerken: [
      'Geen melk of room (dus vetvrij en lactosevrij)',
      'Fris en fruitig',
      'Geschikt voor veganisten',
      'Minder romig, maar vol van smaak',
    ],
    badge: 'Vegan & Lactosevrij',
    color: '#A8C870',
    barFrom: 'rgba(168,200,112,0.2)',
    barTo:   'rgba(168,200,112,0.75)',
    glow:    'rgba(168,200,112,0.06)',
  },
]

function TabIcon({ index, color, active }: { index: number; color: string; active: boolean }) {
  const opacity = active ? 1 : 0.35
  const sw = active ? '1.5' : '1.25'

  if (index === 0) return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeOpacity={opacity} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={{ transition: 'all 0.4s ease' }}>
      <path d="M17.657 11a6 6 0 1 0 -11.315 0" />
      <path d="M6.342 11l5.658 11l5.657 -11l-11.315 0" />
    </svg>
  )
  if (index === 1) return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeOpacity={opacity} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={{ transition: 'all 0.4s ease' }}>
      <path d="M8 21h8" />
      <path d="M12 16v5" />
      <path d="M17 5l1 6c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -6" />
      <path d="M7 5a5 2 0 1 0 10 0a5 2 0 1 0 -10 0" />
    </svg>
  )
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeOpacity={opacity} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={{ transition: 'all 0.4s ease' }}>
      <path d="M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905 -10.237 3.905 -14.143 0l14.143 -14.143" />
      <path d="M5.868 15.06a6.5 6.5 0 0 0 9.193 -9.192" />
      <path d="M10.464 10.464l4.597 4.597" />
      <path d="M10.464 10.464v6.364" />
      <path d="M10.464 10.464h6.364" />
    </svg>
  )
}

export default function IceCreamFacts() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const panelRef   = useRef<HTMLDivElement>(null)
  const barRef     = useRef<HTMLDivElement>(null)

  const animateIn = useCallback(() => {
    if (!panelRef.current) return
    gsap.fromTo(panelRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
    )
    if (barRef.current) {
      const pct = ICE_TYPES[active].fatPct
      gsap.fromTo(barRef.current, { width: '0%' }, { width: `${pct}%`, duration: 1.2, ease: 'power3.out' })
    }
  }, [active])

  useEffect(() => { animateIn() }, [animateIn])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 82%' } }
      )
      gsap.fromTo('.facts-tabs',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.facts-tabs', start: 'top 85%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const type = ICE_TYPES[active]

  return (
    <section ref={sectionRef} id="ijssoorten-uitleg" className="relative bg-[#0f0f0f] overflow-hidden">

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 pt-20 md:pt-28 pb-16 md:pb-24">

        {/* ── Compact header ── */}
        <div ref={headerRef} className="mb-12 md:mb-16 opacity-0">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold/70 text-[9px] tracking-[0.45em] uppercase font-light">Weetjes over schepijs</span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.05] tracking-tight mb-4">
            Wat is het verschil tussen<br />
            <em className="not-italic" style={{ color: type.color, transition: 'color 0.5s ease' }}>
              roomijs, gelato en sorbet?
            </em>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light max-w-lg leading-relaxed">
            Ze lijken op elkaar, maar verschillen qua samenstelling, smaakbeleving en serveertemperatuur.
          </p>
        </div>

        {/* ── Tab selector ── */}
        <div className="facts-tabs grid grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden mb-px opacity-0">
          {ICE_TYPES.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative flex flex-col items-center gap-3 px-4 py-6 md:py-8 transition-colors duration-300 outline-none"
              style={{ backgroundColor: active === i ? '#111111' : '#0c0c0c' }}
            >
              {/* Active top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
                style={{
                  background: active === i
                    ? `linear-gradient(to right, transparent, ${t.color}, transparent)`
                    : 'transparent',
                }}
              />

              <TabIcon index={i} color={t.color} active={active === i} />

              <span
                className="font-cormorant text-lg md:text-2xl font-semibold transition-all duration-400 leading-none"
                style={{ color: active === i ? t.color : 'rgba(255,255,255,0.55)' }}
              >
                {t.name}
              </span>

              <span
                className="text-[9px] tracking-[0.2em] uppercase font-light hidden md:block transition-opacity duration-300"
                style={{ color: active === i ? `${t.color}90` : 'rgba(255,255,255,0.30)' }}
              >
                {t.tagline}
              </span>
            </button>
          ))}
        </div>

        {/* ── Content panel ── */}
        <div
          ref={panelRef}
          className="rounded-b-2xl overflow-hidden"
          style={{ backgroundColor: '#181818', borderTop: `1px solid ${type.color}35` }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${type.glow} 0%, transparent 65%)`,
              height: '120px',
              marginBottom: '-120px',
            }}
          />

          <div className="grid md:grid-cols-2 gap-0 relative z-10">

            {/* Left: temperature + fat + description */}
            <div className="px-8 py-10 md:px-12 md:py-14 border-b md:border-b-0 md:border-r border-white/[0.05]">

              {/* Temperature */}
              <div className="mb-8 select-none">
                {type.temp ? (
                  <div className="flex items-start gap-2">
                    <span
                      className="font-cormorant font-semibold leading-none"
                      style={{ fontSize: 'clamp(72px, 12vw, 110px)', color: `${type.color}12` }}
                    >
                      {type.temp}
                    </span>
                    <div className="flex flex-col gap-0.5 pt-3">
                      <span className="font-cormorant text-2xl font-light" style={{ color: `${type.color}45` }}>°C</span>
                      <span className="text-[8px] text-gray-500 tracking-[0.2em] uppercase">serveert op</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 py-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                      stroke={type.color} strokeOpacity="0.12" strokeWidth="1" strokeLinecap="round">
                      <path d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
                    </svg>
                    <span className="font-cormorant text-3xl font-light" style={{ color: `${type.color}18` }}>
                      Fris &amp; licht
                    </span>
                  </div>
                )}
              </div>

              {/* Fat bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-gray-400 text-[9px] tracking-[0.3em] uppercase">Vetgehalte</span>
                  <span className="text-xs font-light" style={{ color: `${type.color}80` }}>{type.fatLabel}</span>
                </div>
                <div className="h-[1px] bg-white/[0.05] relative rounded-full overflow-hidden">
                  <div
                    ref={barRef}
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{
                      width: '0%',
                      background: `linear-gradient(to right, ${type.barFrom}, ${type.barTo})`,
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed font-light">
                {type.description}
              </p>

              {/* Badge */}
              {type.badge && (
                <div className="mt-6">
                  <span
                    className="text-[9px] tracking-[0.28em] uppercase font-medium px-3 py-1.5 rounded-full border"
                    style={{
                      borderColor: `${type.color}30`,
                      color: `${type.color}80`,
                      backgroundColor: `${type.color}08`,
                    }}
                  >
                    {type.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Right: kenmerken */}
            <div className="px-8 py-10 md:px-12 md:py-14 flex flex-col justify-center">
              <p
                className="text-[8px] tracking-[0.45em] uppercase mb-7 font-light"
                style={{ color: `${type.color}40` }}
              >
                Kenmerken
              </p>
              <ul className="space-y-5">
                {type.kenmerken.map((k, ki) => (
                  <li key={ki} className="flex items-start gap-4 group/item">
                    <div
                      className="w-5 h-px mt-[10px] flex-shrink-0 rounded-full transition-all duration-300"
                      style={{ backgroundColor: `${type.color}50` }}
                    />
                    <span className="text-gray-200 text-sm md:text-base font-light leading-snug">
                      {k}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-500 text-[10px] tracking-[0.2em] uppercase mt-10 font-light">
          Bij IJssalon Italia serveren wij zowel roomijs, gelato als sorbetijs — dagelijks vers bereid in Vaals
        </p>

      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  )
}
