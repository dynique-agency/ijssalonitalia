'use client'

import Image from 'next/image'

export default function Gallery() {
  const galleryImages = [
    {
      src: "/ijs.png",
      alt: "Ambachtelijk Ijs",
      caption: "Verse ijssmaken, dagelijks bereid"
    },
    {
      src: "/spaghettiijs.png",
      alt: "Spaghetti Ijs",
      caption: "Ons beroemde spaghetti-ijs"
    },
    {
      src: "/koffiemetapfelstrudel.png",
      alt: "Koffie met Apfelstrudel",
      caption: "Perfecte espresso met apfelstrudel"
    },
    {
      src: "/caramelkoffie.png",
      alt: "Caramel Koffie Specialiteit",
      caption: "Huisgemaakte specialiteiten"
    },
    {
      src: "/ijsalonvroeger.jpg",
      alt: "IJssalon Italia 1969",
      caption: "Onze roots, sinds 1969"
    }
  ]

  return (
    <section id="galerij" className="relative z-10 py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-4 md:mb-6 leading-[1.1] tracking-tight">
            Sfeer & Impressie
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-700 text-base md:text-lg font-light">
            Een inkijkje in onze wereld
          </p>
        </div>

        {/* Instagram-style Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop: Masonry-style layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-5">
            {/* Large card - Ijs */}
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square md:aspect-auto md:h-full">
                <Image 
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm md:text-base font-light">{galleryImages[0].caption}</p>
                </div>
              </div>
            </div>

            {/* Small card - Spaghetti Ijs */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square">
                <Image 
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-light">{galleryImages[1].caption}</p>
                </div>
              </div>
            </div>

            {/* Small card - Koffie */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square">
                <Image 
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-light">{galleryImages[2].caption}</p>
                </div>
              </div>
            </div>

            {/* Medium card - Caramel */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[2/1]">
                <Image 
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-light">{galleryImages[3].caption}</p>
                </div>
              </div>
            </div>

            {/* Small card - Vintage */}
            <div className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square">
                <Image 
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-light">{galleryImages[4].caption}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Simple grid */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md aspect-square"
              >
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-light line-clamp-2">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-10 md:mt-14 text-center">
          <p className="text-gray-700 text-base md:text-lg mb-6 max-w-2xl mx-auto font-light">
            Kom langs en ervaar de sfeer
          </p>
          <a 
            href="tel:+31611318094" 
            className="inline-block bg-gold hover:bg-gold-dark text-white px-10 md:px-12 py-3.5 md:py-4 rounded-full transition-all duration-300 font-semibold text-sm md:text-base tracking-wide uppercase shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Reserveer Nu
          </a>
        </div>
      </div>
    </section>
  )
}

