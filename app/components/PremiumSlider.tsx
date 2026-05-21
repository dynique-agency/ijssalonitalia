'use client'

import Image from 'next/image'

const premiumImages = [
  { src: '/slider-koffie.webp',          alt: 'Koffie-ijsspecialiteit met slagroom bij IJssalon Italia Vaals',          label: 'IJskoffie' },
  { src: '/slider-sundae-aardbei.webp',  alt: 'Aardbei sundae met verse aardbeien en slagroom in een coupe-glas',       label: 'Aardbei sundae' },
  { src: '/slider-spaghettiijs.webp',    alt: 'Handgemaakt spaghetti-ijs met vanille, slagroom en aardbeisaus',          label: 'Spaghettiijs' },
  { src: '/slider-sundae-pistache.webp', alt: 'Pistache sundae met romig pistache-ijs en krokante topping in een coupe', label: 'Pistache sundae' },
  { src: '/slider-sundae-fruit.webp',    alt: 'Verse fruit sundae met seizoensfruit en slagroom bij IJssalon Italia',   label: 'Fruit sundae' },
]

export default function PremiumSlider() {
  return (
    <section className="relative bg-black overflow-hidden">

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 55s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top gold rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

      {/* Section label */}
      <div className="flex items-center justify-center gap-6 pt-12 pb-10 md:pt-16 md:pb-12">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/60" />
        <span className="text-[#c9a84c]/80 text-[10px] tracking-[0.35em] uppercase font-light">
          Onze specialiteiten
        </span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/60" />
      </div>

      {/* Fade mask */}
      <div
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="marquee-track flex w-max items-end gap-14 md:gap-24 px-10">
          {[...premiumImages, ...premiumImages].map((img, i) => (
            <div key={i} className="group flex-shrink-0 flex flex-col items-center gap-4">

              {/* Card */}
              <div className="relative w-[130px] h-[175px] md:w-[155px] md:h-[210px] rounded-xl overflow-hidden bg-neutral-950 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 130px, 155px"
                  className="object-cover transition-all duration-1000 ease-out group-hover:scale-105 brightness-90 group-hover:brightness-105 saturate-90 group-hover:saturate-110"
                  quality={85}
                />
                {/* Permanent bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Hover gold border */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/0 group-hover:ring-[#c9a84c]/40 transition-all duration-700" />
              </div>

              {/* Caption below card */}
              <p className="text-white/30 group-hover:text-[#c9a84c]/80 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-light transition-colors duration-500 text-center">
                {img.label}
              </p>

            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacing + gold rule */}
      <div className="pt-10 pb-12 md:pt-12 md:pb-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />
      </div>

    </section>
  )
}
