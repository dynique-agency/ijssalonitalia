'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function UltraReveal({
  text,
  className,
  delay = 0,
  shimmerLight = false,
}: {
  text: string
  className?: string
  delay?: number
  shimmerLight?: boolean
}) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const shimmerRef  = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return

    const chars = containerRef.current.querySelectorAll<HTMLElement>('.ci')
    gsap.set(chars, { yPercent: 120, filter: 'blur(10px)', opacity: 0 })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return
        hasAnimated.current = true
        observer.disconnect()

        gsap.to(chars, {
          yPercent: 0,
          filter: 'blur(0px)',
          opacity: 1,
          duration: 1.6,
          ease: 'power4.out',
          stagger: { amount: 0.55, from: 'start', ease: 'power1.in' },
          delay: delay / 1000,
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
      { threshold: 0.15 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <span ref={containerRef} className={`relative ${className ?? ''}`} aria-label={text}>
      {text.split('').map((char, i) =>
        char === ' ' ? (
          <span key={i} className="inline-block" style={{ width: '0.28em' }} aria-hidden />
        ) : (
          <span key={i} className="inline-block overflow-hidden" style={{ lineHeight: 1.15 }}>
            <span className="ci inline-block">{char}</span>
          </span>
        )
      )}
      {/* shimmer sweep */}
      <span
        ref={shimmerRef}
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-full opacity-0"
        style={{
          width: '45%',
          background: shimmerLight
            ? 'linear-gradient(110deg, transparent 15%, rgba(255,255,255,0.22) 50%, transparent 85%)'
            : 'linear-gradient(110deg, transparent 15%, rgba(201,169,97,0.45) 50%, transparent 85%)',
        }}
      />
    </span>
  )
}

export default function ToGo() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax + reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.15 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Content staggered fade-in
      const contentItems = contentRef.current?.querySelectorAll('.animate-item')
      if (contentItems) {
        gsap.fromTo(
          contentItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: {
              amount: 0.8,
              from: 'start',
              ease: 'power2.inOut',
            },
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // Badges scale-in
      const badges = badgesRef.current?.querySelectorAll('.badge-item')
      if (badges) {
        gsap.fromTo(
          badges,
          { opacity: 0, scale: 0.85, y: 15 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: 'back.out(1.2)',
            stagger: {
              amount: 0.6,
              from: 'start',
              ease: 'power4.inOut',
            },
            scrollTrigger: {
              trigger: badgesRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // CTA button
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] overflow-hidden"
    >
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '128px 128px',
      }}></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-0 items-stretch min-h-[600px] md:min-h-[700px]">

          {/* Left: Image */}
          <div
            ref={imageRef}
            className="relative h-[400px] md:h-[500px] lg:h-auto lg:min-h-[700px]"
            style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          >
            <Image
              src="/to-go-coupe.webp"
              alt="To Go Coupe - IJssalon Italia"
              fill
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]/80 hidden lg:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent lg:hidden"></div>
          </div>

          {/* Right: Content */}
          <div className="relative flex items-center py-12 md:py-16 lg:py-20 lg:pl-12 xl:pl-20">
            <div ref={contentRef} className="w-full max-w-lg mx-auto lg:mx-0">

              {/* Label */}
              <div className="animate-item mb-6 md:mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Nieuw
                </span>
              </div>

              {/* Heading — ultra premium character reveal */}
              <h2 className="animate-item font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 md:mb-8 leading-[1.1]">
                <UltraReveal text="Geniet Onderweg" className="block" delay={100} shimmerLight />
                <span className="block text-gold mt-1">
                  <UltraReveal text="To Go" delay={600} />
                </span>
              </h2>

              {/* Description */}
              <p className="animate-item text-gray-300 text-base md:text-lg leading-relaxed font-light mb-8 md:mb-10">
                Geen tijd om te zitten? Neem onze ambachtelijke coupes, vers gezette Italiaanse koffie en heerlijke ijsjes gewoon mee. 
                Dezelfde kwaliteit en smaak, perfect verpakt voor onderweg.
              </p>

              {/* Feature Badges */}
              <div ref={badgesRef} className="flex flex-wrap gap-3 md:gap-4 mb-10 md:mb-12">
                <div className="badge-item flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 md:px-5 py-2.5 md:py-3 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 group">
                  <span className="text-lg md:text-xl">🍦</span>
                  <span className="text-white text-xs md:text-sm font-medium group-hover:text-gold transition-colors">IJsjes</span>
                </div>
                <div className="badge-item flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 md:px-5 py-2.5 md:py-3 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 group">
                  <span className="text-lg md:text-xl">☕</span>
                  <span className="text-white text-xs md:text-sm font-medium group-hover:text-gold transition-colors">Koffie</span>
                </div>
                <div className="badge-item flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 md:px-5 py-2.5 md:py-3 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 group">
                  <span className="text-lg md:text-xl">🍨</span>
                  <span className="text-white text-xs md:text-sm font-medium group-hover:text-gold transition-colors">Coupes</span>
                </div>
                <div className="badge-item flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 md:px-5 py-2.5 md:py-3 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 group">
                  <span className="text-lg md:text-xl">🧁</span>
                  <span className="text-white text-xs md:text-sm font-medium group-hover:text-gold transition-colors">Gebak</span>
                </div>
              </div>

              {/* CTA - Google Maps */}
              <div ref={ctaRef}>
                <a
                  href="https://www.google.com/maps/place/Maastrichterlaan+26,+6291+ES+Vaals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press group inline-flex items-center gap-3 bg-white hover:bg-gold text-black hover:text-white px-8 md:px-10 py-4 md:py-4.5 rounded-full transition-[background-color,color,box-shadow,transform] duration-300 font-semibold text-sm md:text-base tracking-wide shadow-xl hover:shadow-2xl hover:shadow-gold/30 hover:scale-105"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-gold group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Kom Nu
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* ── Nieuwe Coupe Spotlight ── */}
        <div className="border-t border-white/[0.06] py-12 md:py-16">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-gold/60 text-[10px] tracking-[0.4em] uppercase font-light mb-2">Nieuw in ons assortiment</p>
            <h3 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              Onze Nieuwe Coupe
            </h3>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-500 shadow-2xl hover:shadow-gold/10">

              {/* Nieuw badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Nieuw
                </span>
              </div>

              {/* Image */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <Image
                  src="/nieuweijscoupe.jpeg"
                  alt="Choco Berry Coupe — nieuw bij IJssalon Italia Vaals, te bestellen om mee te nemen"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95 group-hover:brightness-105"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h4 className="font-cormorant text-2xl md:text-3xl font-semibold text-white mb-2">
                  Choco Berry Coupe
                </h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Een verwennerij van rijke chocolade en verse bessen — nu verkrijgbaar om mee te nemen.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[10px] text-gold/70 tracking-[0.3em] uppercase font-light">To Go beschikbaar</span>
                  <span className="flex-1 h-px bg-gold/20" />
                  <span className="text-gold text-lg">🍫🍓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
