import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden – IJssalon Italia Vaals',
  description: 'De algemene voorwaarden van IJssalon Italia Vaals.',
}

export default function VoorwaardenPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
          <Link href="/" className="text-[#c9a84c]/80 hover:text-[#c9a84c] text-sm tracking-wide transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Terug naar website
          </Link>
          <span className="text-gray-600 text-xs tracking-widest uppercase">Juridisch</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-10">
          <div className="h-px w-12 bg-[#c9a84c] mb-6" />
          <h1 className="font-cormorant text-4xl md:text-5xl font-semibold text-white mb-3">Algemene Voorwaarden</h1>
          <p className="text-gray-500 text-sm">Laatst bijgewerkt: 30 maart 2026</p>
        </div>

        <div className="space-y-10 text-gray-300 text-sm md:text-base leading-relaxed">

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">1. Identiteit ondernemer</h2>
            <div className="p-4 border border-white/10 rounded-xl text-sm space-y-1">
              <p><span className="text-gray-500">Naam:</span> IJssalon Italia Vaals</p>
              <p><span className="text-gray-500">Adres:</span> Maastrichterlaan 26, 6291 ES Vaals</p>
              <p><span className="text-gray-500">E-mail:</span>{' '}
                <a href="mailto:ijssalonitalia@me.com" className="text-[#c9a84c]/80 hover:text-[#c9a84c] transition-colors">
                  ijssalonitalia@me.com
                </a>
              </p>
              <p><span className="text-gray-500">Telefoon:</span>{' '}
                <a href="tel:+31611318094" className="text-[#c9a84c]/80 hover:text-[#c9a84c] transition-colors">
                  +31 6 11318094
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">2. Toepasselijkheid</h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op het gebruik van de website
              van IJssalon Italia Vaals (ijssalonitaliavaals.nl) en op alle informatie en diensten
              die via deze website worden aangeboden.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">3. Inhoud van de website</h2>
            <p>
              IJssalon Italia Vaals besteedt de grootst mogelijke zorg aan de juistheid en volledigheid van de informatie
              op deze website. Wij kunnen echter niet garanderen dat alle informatie te allen tijde volledig, juist,
              accuraat of up-to-date is. Openingstijden, prijzen en aanbod kunnen wijzigen zonder voorafgaande kennisgeving.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">4. Intellectueel eigendom</h2>
            <p>
              Alle rechten van intellectueel eigendom op de website en de inhoud daarvan — waaronder teksten, afbeeldingen,
              logo's en vormgeving — berusten bij IJssalon Italia Vaals of haar licentiegevers.
              Niets van de website mag worden gekopieerd, opgeslagen of gebruikt zonder uitdrukkelijke schriftelijke toestemming.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">5. Aansprakelijkheid</h2>
            <p>
              IJssalon Italia Vaals is niet aansprakelijk voor schade die voortvloeit uit of verband houdt met het gebruik
              van de website of de tijdelijke onbeschikbaarheid daarvan. Wij zijn evenmin aansprakelijk voor de inhoud van
              websites waarnaar via hyperlinks wordt verwezen.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">6. Openingstijden & beschikbaarheid</h2>
            <p>
              De op de website vermelde openingstijden zijn onder voorbehoud van weersomstandigheden en bijzondere
              omstandigheden. IJssalon Italia Vaals behoudt zich het recht voor de zaak te sluiten zonder voorafgaande
              kennisgeving.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">7. Privacy & cookies</h2>
            <p>
              Op de verwerking van persoonsgegevens is ons{' '}
              <Link href="/privacy" className="text-[#c9a84c]/80 hover:text-[#c9a84c] transition-colors underline underline-offset-2">
                Privacybeleid
              </Link>{' '}
              van toepassing. Voor informatie over cookies verwijzen wij naar ons{' '}
              <Link href="/cookies" className="text-[#c9a84c]/80 hover:text-[#c9a84c] transition-colors underline underline-offset-2">
                Cookiebeleid
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">8. Toepasselijk recht</h2>
            <p>
              Op deze voorwaarden en het gebruik van de website is uitsluitend Nederlands recht van toepassing.
              Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Limburg.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">9. Wijzigingen</h2>
            <p>
              IJssalon Italia Vaals behoudt zich het recht voor deze voorwaarden te wijzigen.
              De meest actuele versie is altijd op deze pagina te vinden.
            </p>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-4 text-xs text-gray-600">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
          <Link href="/privacy" className="hover:text-[#c9a84c] transition-colors">Privacybeleid</Link>
          <Link href="/cookies" className="hover:text-[#c9a84c] transition-colors">Cookiebeleid</Link>
        </div>
      </div>
    </div>
  )
}
