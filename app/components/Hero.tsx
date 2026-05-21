'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="sticky top-0 z-0 h-[100svh] flex items-center justify-center overflow-hidden transform-gpu will-change-transform"
    >
      {/* GPU-accelerated background */}
      <div className="absolute inset-0 overflow-hidden transform-gpu">
        <div className="absolute -inset-[10%] transform-gpu will-change-transform">
          <Image
            src="/ijs.webp"
            alt="Ambachtelijk Ijs"
            fill
            className="object-cover transform-gpu"
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Logo */}
      <div className="relative z-10 transform-gpu">
        <Image
          src="/italialogo.webp"
          alt="IJssalon Italia Logo"
          width={600}
          height={300}
          className="w-80 md:w-[32rem] lg:w-[36rem] xl:w-[40rem] h-auto drop-shadow-2xl"
          priority
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 512px, 640px"
        />
      </div>

      {/* IJsweetjes button */}
      <a
        href="#ijssoorten-uitleg"
        className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/40 transition-all duration-300 group whitespace-nowrap"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 group-hover:opacity-100 flex-shrink-0">
          <path d="M17.657 11a6 6 0 1 0 -11.315 0" />
          <path d="M6.342 11l5.658 11l5.657 -11l-11.315 0" />
        </svg>
        <span className="text-white/80 group-hover:text-white text-xs font-medium tracking-wide transition-colors duration-300">
          Wat is het verschil tussen roomijs, gelato en sorbet?
        </span>
        <svg className="w-3 h-3 text-white/50 group-hover:text-white/80 transition-all duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
        </div>
      </div>
    </section>
  )
}
