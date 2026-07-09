'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function TitleReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const shimmerRef = useRef<HTMLSpanElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    if (!ref.current || fired.current) return
    const chars = ref.current.querySelectorAll<HTMLElement>('.nc')
    gsap.set(chars, { yPercent: 120, filter: 'blur(10px)', opacity: 0 })

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || fired.current) return
        fired.current = true
        obs.disconnect()
        gsap.to(chars, {
          yPercent: 0,
          filter: 'blur(0px)',
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
          stagger: { amount: 0.5, from: 'start', ease: 'power1.in' },
          onComplete() {
            if (!shimmerRef.current) return
            gsap.fromTo(
              shimmerRef.current,
              { x: '-105%', opacity: 1 },
              { x: '205%', duration: 1.0, ease: 'power2.inOut', delay: 0.05 }
            )
          },
        })
      },
      { threshold: 0.2 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <span ref={ref} className={`relative inline-block ${className ?? ''}`} aria-label={text}>
      {text.split('').map((char, i) =>
        char === ' ' ? (
          <span key={i} className="inline-block" style={{ width: '0.24em' }} aria-hidden />
        ) : (
          <span key={i} className="inline-block overflow-hidden" style={{ lineHeight: 1.1 }}>
            <span className="nc inline-block">{char}</span>
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

const newsItems = [
  {
    date: '1 juli 2026',
    tag: 'Nieuwe smaken',
    title: 'Drie gloednieuwe ijssmaken',
    description:
      'Vanille mango crunch, Witte chocolade framboos crunch en Frambozen rozen zijn nu te proeven in onze vitrine.',
  },
  {
    date: '27 mei 2026',
    tag: 'Nieuwe coupe',
    title: 'Choco Berry Coupe',
    description:
      'Een verwennerij van rijke chocolade en verse bessen — nu ook verkrijgbaar om mee te nemen.',
  },
]

export default function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([])
  const ruleRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      ruleRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.3,
            ease: 'power3.inOut',
            delay: i * 0.25,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
          }
        )
      })

      numberRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, x: -14 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.1 + i * 0.25,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
          }
        )
      })

      rowRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, y: 26, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.1,
            ease: 'power3.out',
            delay: 0.2 + i * 0.25,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="nieuws" className="relative bg-[#0a0a0a] overflow-hidden py-20 md:py-28">
      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20 pb-8 md:pb-10 border-b border-white/10">
            <div>
              <p className="text-gold/50 text-[9px] md:text-[10px] tracking-[0.5em] uppercase font-light mb-4 italic">
                Le Novità
              </p>
              <h2 className="font-cormorant font-semibold text-white leading-[1.05]" style={{ fontSize: 'clamp(40px, 6.5vw, 72px)' }}>
                <TitleReveal text="Vers Nieuws" />
              </h2>
            </div>
            <p className="text-gray-500 text-sm md:text-base font-light max-w-xs md:text-right">
              De laatste toevoegingen aan onze salon
            </p>
          </div>

          {/* Numbered editorial list */}
          <div>
            {newsItems.map((item, i) => (
              <div key={i}>
                <div
                  ref={el => { rowRefs.current[i] = el }}
                  className="group grid grid-cols-[64px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-10 items-start py-9 md:py-11 opacity-0"
                >
                  {/* Ghost index number */}
                  <span
                    ref={el => { numberRefs.current[i] = el }}
                    className="font-cormorant font-light text-gold/25 leading-none select-none opacity-0"
                    style={{ fontSize: 'clamp(48px, 5.5vw, 76px)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="md:border-l md:border-white/10 md:pl-10 lg:pl-12">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-gold text-xs md:text-sm font-semibold tracking-wide">
                        {item.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/40 font-light">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-cormorant text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hairline divider */}
                {i < newsItems.length - 1 && (
                  <div
                    ref={el => { ruleRefs.current[i] = el }}
                    className="h-px w-full bg-white/10 origin-left"
                  />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
