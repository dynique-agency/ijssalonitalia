'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { vacatures } from '../vacatures-data'

gsap.registerPlugin(ScrollTrigger)

function TitleReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const shimmerRef = useRef<HTMLSpanElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    if (!ref.current || fired.current) return
    const chars = ref.current.querySelectorAll<HTMLElement>('.vc')
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
            <span className="vc inline-block">{char}</span>
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

export default function VacaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, y: 32, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.1,
            ease: 'power3.out',
            delay: i * 0.18,
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
            delay: 0.15 + i * 0.18,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="vacatures" className="relative bg-[#0a0a0a] overflow-hidden py-20 md:py-28">
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
                Lavora con noi
              </p>
              <h2 className="font-cormorant font-semibold text-white leading-[1.05]" style={{ fontSize: 'clamp(40px, 6.5vw, 72px)' }}>
                <TitleReveal text="Vacatures" />
              </h2>
            </div>
            <p className="text-gray-500 text-sm md:text-base font-light max-w-xs md:text-right">
              Word onderdeel van ons team en maak dagelijks mensen blij
            </p>
          </div>

          {/* Job cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {vacatures.map((job, i) => (
              <Link
                key={job.slug}
                href={`/vacatures/${job.slug}/`}
                ref={el => { cardRefs.current[i] = el }}
                className="press group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-gold/30 transition-[background-color,border-color,transform] duration-500 px-7 md:px-9 py-8 md:py-10 opacity-0 flex flex-col"
              >
                {/* Ghost index number */}
                <span
                  ref={el => { numberRefs.current[i] = el }}
                  className="absolute top-6 right-7 md:right-9 font-cormorant font-light text-gold/15 leading-none select-none opacity-0"
                  style={{ fontSize: 'clamp(48px, 5vw, 64px)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-gold/70 font-medium border border-gold/25 rounded-full px-3 py-1.5">
                    {job.hoursLabel}
                  </span>
                </div>

                <h3 className="font-cormorant text-2xl md:text-3xl font-semibold text-white mb-3 pr-16 group-hover:text-gold transition-colors duration-500 leading-tight">
                  {job.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-8 flex-1">
                  {job.intro}
                </p>

                <div className="flex items-center gap-3 text-white text-xs md:text-sm font-semibold tracking-wide uppercase">
                  <span className="border-b border-gold/40 group-hover:border-gold pb-1 transition-colors duration-300">
                    Bekijk vacature
                  </span>
                  <svg
                    className="w-4 h-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
