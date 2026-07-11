'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { businessData } from '../data'
import type { Vacature } from '../vacatures-data'

gsap.registerPlugin(ScrollTrigger)

function TitleReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const shimmerRef = useRef<HTMLSpanElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    if (!ref.current || fired.current) return
    const chars = ref.current.querySelectorAll<HTMLElement>('.vdc')
    gsap.set(chars, { yPercent: 120, filter: 'blur(10px)', opacity: 0 })

    fired.current = true
    gsap.to(chars, {
      yPercent: 0,
      filter: 'blur(0px)',
      opacity: 1,
      duration: 1.5,
      ease: 'power4.out',
      stagger: { amount: 0.5, from: 'start', ease: 'power1.in' },
      delay: 0.3,
      onComplete() {
        if (!shimmerRef.current) return
        gsap.fromTo(
          shimmerRef.current,
          { x: '-105%', opacity: 1 },
          { x: '205%', duration: 1.0, ease: 'power2.inOut', delay: 0.05 }
        )
      },
    })
  }, [])

  return (
    <span ref={ref} className={`relative inline-block ${className ?? ''}`} aria-label={text}>
      {text.split('').map((char, i) =>
        char === ' ' ? (
          <span key={i} className="inline-block" style={{ width: '0.22em' }} aria-hidden />
        ) : (
          <span key={i} className="inline-block overflow-hidden" style={{ lineHeight: 1.08 }}>
            <span className="vdc inline-block">{char}</span>
          </span>
        )
      )}
      <span
        ref={shimmerRef}
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-full opacity-0"
        style={{
          width: '45%',
          background: 'linear-gradient(110deg, transparent 15%, rgba(201,169,97,0.5) 50%, transparent 85%)',
        }}
      />
    </span>
  )
}

function AnimatedBlock({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 28, filter: 'blur(6px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out',
        delay,
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      }
    )
  }, [delay])

  return <div ref={ref} className={`opacity-0 ${className}`}>{children}</div>
}

const CHECK_ICON = 'M5 13l4 4L19 7'
const HEART_ICON = 'M11.645 20.91l-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z'

function ListBlock({ title, items, index, icon = CHECK_ICON }: { title: string; items: string[]; index: string; icon?: string }) {
  return (
    <AnimatedBlock>
      <div className="py-9 md:py-11 border-b border-white/10">
        <div className="grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr] gap-5 md:gap-8 items-start">
          <span
            className="font-cormorant font-light text-gold/20 leading-none select-none"
            style={{ fontSize: 'clamp(36px, 4vw, 48px)' }}
          >
            {index}
          </span>
          <div className="md:border-l md:border-white/10 md:pl-8 lg:pl-10">
            <h2 className="font-cormorant text-2xl md:text-3xl font-semibold text-white mb-5">
              {title}
            </h2>
            <ul className="space-y-3.5">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <svg
                    className="w-4 h-4 text-gold flex-shrink-0 mt-1"
                    fill={icon === HEART_ICON ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={icon} />
                  </svg>
                  <span className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedBlock>
  )
}

export default function VacatureDetailClient({ job }: { job: Vacature }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* grain */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* Top bar */}
      <div className="relative z-20 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/#vacatures"
            className="text-gold/70 hover:text-gold text-sm tracking-wide transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Alle vacatures
          </Link>
          <span className="text-gray-600 text-xs tracking-[0.3em] uppercase">Vacature</span>
        </div>
      </div>

      {/* Full-bleed hero */}
      <div className="relative h-[46vh] md:h-[58vh] w-full overflow-hidden">
        <Image
          src={job.heroImage}
          alt={`Werken bij IJssalon Italia Vaals - ${job.title}`}
          fill
          priority
          className="object-cover scale-105"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <div className="absolute bottom-0 inset-x-0">
          <div className="max-w-6xl mx-auto px-6 pb-10 md:pb-14">
            <p className="text-gold/70 text-[9px] md:text-[10px] tracking-[0.5em] uppercase font-light mb-5 italic">
              Lavora con noi
            </p>
            <h1
              className="font-cormorant font-semibold text-white leading-[1.05] mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(34px, 5.5vw, 60px)' }}
            >
              <TitleReveal text={job.title} />
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-gold/80 font-medium border border-gold/30 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
                {job.hoursLabel}
              </span>
              <span className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/60 font-light border border-white/15 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
                {job.period}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">

          {/* Main column */}
          <main className="min-w-0">
            <AnimatedBlock>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-2">
                {job.intro}
              </p>
            </AnimatedBlock>

            {/* Mobile quick facts (hidden on lg, shown on smaller) */}
            <div className="lg:hidden mt-8 mb-10">
              <QuickFacts job={job} />
            </div>

            <AnimatedBlock>
              <div className="py-9 md:py-11 border-t border-b border-white/10">
                <h2 className="font-cormorant text-2xl md:text-3xl font-semibold text-gold mb-4">
                  Over de functie
                </h2>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                  {job.about}
                </p>
              </div>
            </AnimatedBlock>

            <ListBlock title="Jouw taken" items={job.tasks} index="01" />

            {/* Sfeerfoto break */}
            <AnimatedBlock className="py-9 md:py-11 border-b border-white/10">
              <div className="relative rounded-2xl overflow-hidden h-56 md:h-72">
                <Image
                  src="/koffiemetapfelstrudel.webp"
                  alt="Sfeerbeeld van IJssalon Italia Vaals - Italiaanse gastvrijheid"
                  fill
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-white font-cormorant text-lg md:text-xl font-medium">
                    Familiebedrijf sinds 1969 - Italiaanse gastvrijheid in het hart van Vaals
                  </p>
                </div>
              </div>
            </AnimatedBlock>

            <ListBlock title="Wie zoeken wij?" items={job.requirements} index="02" />
            <ListBlock title="Wat bieden wij jou?" items={job.offers} index="03" icon={HEART_ICON} />

            {/* Warm word from the owners */}
            <AnimatedBlock className="py-9 md:py-11">
              <div className="relative bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-2xl p-6 md:p-8">
                <svg className="w-7 h-7 text-gold/25 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed italic font-light mb-3">
                  "We zoeken geen nummer, maar iemand die net zoveel plezier haalt uit een tevreden gast als wij. Voel je je thuis bij ons verhaal? Dan hoor je vanzelf snel van ons."
                </p>
                <p className="text-gold font-semibold text-sm">
                  - Wally en Roger
                </p>
              </div>
            </AnimatedBlock>

            {/* Apply CTA */}
            <AnimatedBlock delay={0.1}>
              <div className="mt-14 md:mt-16 rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent px-7 md:px-10 py-9 md:py-12 text-center">
                <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-white mb-3">
                  Interesse?
                </h2>
                <p className="text-gray-400 text-sm md:text-base font-light mb-8 max-w-md mx-auto leading-relaxed">
                  Solliciteer vandaag nog en word onderdeel van ons gastvrije team in het hart van Vaals.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`mailto:${businessData.contact_info.email}?subject=${encodeURIComponent('Sollicitatie: ' + job.title)}`}
                    className="press inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-sm tracking-wide shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Solliciteer per e-mail
                  </a>
                  <a
                    href={`tel:${businessData.contact_info.phone_href}`}
                    className="press inline-flex items-center gap-3 border border-white/20 hover:border-gold/50 text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-sm tracking-wide hover:bg-white/5"
                  >
                    <svg className="w-4.5 h-4.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {businessData.contact_info.phone}
                  </a>
                </div>
              </div>
            </AnimatedBlock>
          </main>

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              <QuickFacts job={job} />

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <span
                  className="font-cormorant font-light text-gold/25 leading-none select-none block mb-2"
                  style={{ fontSize: '40px' }}
                >
                  1969
                </span>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Onderdeel worden van een familiebedrijf met meer dan 55 jaar traditie in ambachtelijk ijs en Italiaanse gastvrijheid.
                </p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}

function QuickFacts({ job }: { job: Vacature }) {
  const facts = [
    {
      label: 'Locatie',
      value: `${businessData.contact_info.address.city}`,
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    },
    {
      label: 'Uren',
      value: job.hoursLabel,
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      label: 'Periode',
      value: job.period,
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    },
  ]

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-white font-cormorant text-lg font-semibold mb-5">Vacature op een rij</p>
      <div className="space-y-4 mb-6">
        {facts.map((fact) => (
          <div key={fact.label} className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={fact.icon} />
              </svg>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-light">{fact.label}</p>
              <p className="text-white text-sm font-medium">{fact.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 pt-5 space-y-3">
        <a
          href={`mailto:${businessData.contact_info.email}?subject=${encodeURIComponent('Sollicitatie: ' + job.title)}`}
          className="press flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold-dark text-white px-5 py-3 rounded-full transition-all duration-300 font-semibold text-xs tracking-wide shadow-lg hover:shadow-xl"
        >
          Solliciteer nu
        </a>
        <a
          href={`tel:${businessData.contact_info.phone_href}`}
          className="press flex items-center justify-center gap-2 w-full border border-white/15 hover:border-gold/40 text-white/80 hover:text-white px-5 py-3 rounded-full transition-all duration-300 font-medium text-xs tracking-wide hover:bg-white/5"
        >
          {businessData.contact_info.phone}
        </a>
      </div>
    </div>
  )
}
