'use client'

import { useState, useMemo } from 'react'

export default function IceCream() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openSection, setOpenSection] = useState<'milk' | 'fruit' | null>(null)

  const allergenLegend = {
    '🌾': 'Gluten',
    '🌰': 'Noten',
    '🥚': 'Ei',
    '🥃': 'Alcohol',
    '🥜': 'Pinda',
    '🍓': 'Fruit'
  }

  const milkFlavors = [
    { name: "Mascarpone", allergens: "" },
    { name: "Cookies", allergens: "🌾🥚" },
    { name: "Griekse yoghurt", allergens: "" },
    { name: "Malaga", allergens: "🥃🌾🥚" },
    { name: "Maxi king", allergens: "🌰" },
    { name: "Smurfen", allergens: "" },
    { name: "Vanille", allergens: "" },
    { name: "Stracciatella", allergens: "" },
    { name: "Chocolade", allergens: "" },
    { name: "Amarena", allergens: "" },
    { name: "Raffaello", allergens: "🌰🌾" },
    { name: "Bounty coccos", allergens: "" },
    { name: "Croccantino al rum", allergens: "" },
    { name: "Bailey's", allergens: "🥃" },
    { name: "Amaretto", allergens: "🌾" },
    { name: "Alpen liebe", allergens: "" },
    { name: "Sesam", allergens: "" },
    { name: "Mokka", allergens: "" },
    { name: "Dark chocolade", allergens: "" },
    { name: "Pistacchio", allergens: "🌰" },
    { name: "Oreo", allergens: "🌾" },
    { name: "Giotto", allergens: "🌰" },
    { name: "Kwark variegato", allergens: "🍓" },
    { name: "Tiramisù", allergens: "🥃🌾" },
    { name: "Witte chocolade", allergens: "" },
    { name: "Yogurette", allergens: "" },
    { name: "Yoghurt", allergens: "" },
    { name: "Kinder Bueno", allergens: "🌾" },
    { name: "Snickers", allergens: "🌾🥜" },
    { name: "Cheesecake", allergens: "🌾" },
    { name: "Hazelnoot", allergens: "🌰" },
    { name: "Profitterol", allergens: "🌾" },
    { name: "Mozart", allergens: "🌾🌰" },
    { name: "Stroopwafels", allergens: "🌾" },
    { name: "Speculoos", allergens: "🌾" },
    { name: "Kaneel", allergens: "" },
    { name: "Oma appeltaart", allergens: "🌾" },
    { name: "Bokkenpootje", allergens: "🌾🌰" },
    { name: "Advocaat", allergens: "🥃" },
    { name: "Kinder Surprise", allergens: "" },
    { name: "Lion", allergens: "🌾" },
    { name: "Nutella", allergens: "🌾🌰" }
  ]

  const fruitFlavors = [
    "Kiwi's", "Citroen", "Limoncello", "Meloen", "Granaatappel", "Aardbeien",
    "Mango", "Perzik", "Ananas", "Sinas", "Banaan", "Framboos",
    "Bosvruchten", "Mandarijn", "Appel", "Watermeloen", "Maracuja",
    "Fragolino", "Gember Lemon", "Vijgen", "Bramen", "Pruimen",
    "Appel Avocado Kiwi", "Licci"
  ]

  const filteredMilkFlavors = useMemo(() => {
    return milkFlavors.filter(flavor =>
      flavor.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const filteredFruitFlavors = useMemo(() => {
    return fruitFlavors.filter(flavor =>
      flavor.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const toggleSection = (section: 'milk' | 'fruit') => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <section className="relative z-10 py-12 md:py-20 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'auto',
          backgroundPosition: 'top left',
          backgroundRepeat: 'repeat'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Compact Header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-3 md:mb-4 leading-tight">
              Onze IJssmaken
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-light">
              50+ ambachtelijke smaken, dagelijks vers bereid
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 md:mb-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Zoek een smaak..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 md:px-6 py-3 md:py-3.5 pl-12 md:pl-14 rounded-full border-2 border-gray-200 focus:border-gold focus:outline-none transition-all duration-300 text-sm md:text-base"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-4 md:left-5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-4">
            
            {/* Roomijs Section */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <button
                onClick={() => toggleSection('milk')}
                className="w-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:from-gold/5 hover:to-gold/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-xl md:text-2xl">🍦</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-cormorant text-xl md:text-2xl font-semibold text-black">
                      Roomijs
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 font-light">
                      {filteredMilkFlavors.length} smaken
                    </p>
                  </div>
                </div>
                <svg 
                  className={`w-5 h-5 md:w-6 md:h-6 text-gold transition-transform duration-300 ${openSection === 'milk' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  openSection === 'milk' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 py-5 md:py-6 bg-gray-50/50">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                    {filteredMilkFlavors.map((flavor, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-white rounded-lg px-3 md:px-4 py-2.5 md:py-3 border border-gray-100 hover:border-gold/30 hover:shadow-sm transition-all duration-200 group"
                      >
                        <span className="text-xs md:text-sm text-gray-800 font-medium group-hover:text-gold transition-colors">
                          {flavor.name}
                        </span>
                        {flavor.allergens && (
                          <span className="text-sm md:text-base ml-2">
                            {flavor.allergens}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fruitijs Section */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <button
                onClick={() => toggleSection('fruit')}
                className="w-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:from-gold/5 hover:to-gold/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-xl md:text-2xl">🍓</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-cormorant text-xl md:text-2xl font-semibold text-black">
                      Fruitijs
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 font-light">
                      {filteredFruitFlavors.length} smaken
                    </p>
                  </div>
                </div>
                <svg 
                  className={`w-5 h-5 md:w-6 md:h-6 text-gold transition-transform duration-300 ${openSection === 'fruit' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  openSection === 'fruit' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 py-5 md:py-6 bg-gray-50/50">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                    {filteredFruitFlavors.map((flavor, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg px-3 md:px-4 py-2.5 md:py-3 border border-gray-100 hover:border-gold/30 hover:shadow-sm transition-all duration-200 group"
                      >
                        <span className="text-xs md:text-sm text-gray-800 font-medium group-hover:text-gold transition-colors">
                          {flavor}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Compact Allergen Legend */}
          <div className="mt-8 md:mt-10 bg-gradient-to-br from-black to-gray-900 rounded-2xl p-5 md:p-6">
            <h4 className="font-cormorant text-lg md:text-xl font-semibold text-gold mb-4 text-center">
              Allergenen
            </h4>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {Object.entries(allergenLegend).map(([emoji, description]) => (
                <div
                  key={emoji}
                  className="inline-flex items-center gap-2 bg-white/5 border border-gold/20 rounded-full px-3 md:px-4 py-2"
                >
                  <span className="text-base md:text-lg">{emoji}</span>
                  <span className="text-white text-xs md:text-sm font-light">
                    {description}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

