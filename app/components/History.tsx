'use client'

import Image from 'next/image'

export default function History() {
  return (
    <section className="relative z-10 py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Onze Geschiedenis
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-4 md:mb-6"></div>
            <p className="text-gray-700 text-base md:text-lg font-light">
              Meer dan 50 jaar passie voor ijs en gastvrijheid
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Compact Vintage Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <Image 
                src="/ijsalonvroeger.jpg"
                alt="IJssalon Italia 1969"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gold text-xs md:text-sm uppercase tracking-[0.3em] mb-2 font-light">Sinds 1969</p>
                <p className="font-cormorant text-xl md:text-2xl font-semibold text-white">
                  IJssalon Italia, Vaals
                </p>
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6">
              <div>
                <h3 className="font-cormorant text-2xl md:text-3xl font-semibold text-black mb-4">
                  Een Familieverhaal
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-light mb-4">
                  Het begon in <span className="font-semibold text-black">1969</span>, toen <span className="font-semibold text-black">Odone en Giovanna Bez</span> vanuit Italië naar Vaals kwamen met een droom: de authenticiteit van Italiaans ijs en de warmte van Italiaanse gastvrijheid delen met Nederland.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed font-light">
                  Met hart en ziel bouwden zij een plek waar mensen samenkomen, genieten van ambachtelijk ijs en zich thuis voelen.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-gold/5 border-l-4 border-gold rounded-r-xl p-6">
                <p className="text-gray-800 text-base md:text-lg leading-relaxed italic font-light mb-3">
                  "In 2005 namen wij, Wally en Roger, het stokje over. We zijn trots om deze mooie traditie voort te zetten, met dezelfde toewijding en passie."
                </p>
                <p className="text-gold font-semibold text-sm">
                  — Wally en Roger
                </p>
              </div>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-light">
                Vandaag, meer dan 50 jaar later, blijven we trouw aan onze roots. Ons ijs wordt nog steeds dagelijks vers bereid, met dezelfde liefde en zorg als in 1969.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}





