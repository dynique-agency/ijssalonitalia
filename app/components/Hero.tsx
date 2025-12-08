'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Fixed */}
      <div className="absolute inset-0">
        <Image 
          src="/ijs.png" 
          alt="Ambachtelijk Ijs"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>
      
      {/* Logo Only - Center */}
      <div className="relative z-10">
        <Image 
          src="/italialogo.png" 
          alt="IJssalon Italia Logo" 
          width={600}
          height={300}
          className="w-80 md:w-[32rem] lg:w-[36rem] xl:w-[40rem] h-auto brightness-0 invert drop-shadow-2xl"
          priority
        />
      </div>
      
      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
        </div>
      </div>
    </section>
  )
}

