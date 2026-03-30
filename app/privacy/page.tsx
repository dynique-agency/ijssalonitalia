import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacybeleid – IJssalon Italia Vaals',
  description: 'Lees hoe IJssalon Italia Vaals omgaat met uw persoonsgegevens conform de AVG/GDPR.',
}

export default function PrivacyPage() {
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
        {/* Title */}
        <div className="mb-10">
          <div className="h-px w-12 bg-[#c9a84c] mb-6" />
          <h1 className="font-cormorant text-4xl md:text-5xl font-semibold text-white mb-3">Privacybeleid</h1>
          <p className="text-gray-500 text-sm">Laatst bijgewerkt: 30 maart 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-gray-300 text-sm md:text-base leading-relaxed">

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">1. Wie zijn wij?</h2>
            <p>
              IJssalon Italia Vaals is een eenmanszaak gevestigd aan de Maastrichterlaan 26, 6291 ES Vaals, Nederland.
              Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid.
            </p>
            <div className="mt-3 p-4 border border-white/10 rounded-xl text-sm space-y-1">
              <p><span className="text-gray-500">Handelsnaam:</span> IJssalon Italia Vaals</p>
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
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">2. Welke gegevens verwerken wij?</h2>
            <p>Wij verwerken alleen gegevens die u zelf aan ons verstrekt, zoals:</p>
            <ul className="list-none mt-3 space-y-2">
              {[
                'Naam en contactgegevens bij telefonisch contact of e-mail',
                'Technische gegevens via cookies (zie ons Cookiebeleid)',
                'IP-adres en browserinformatie via websitebezoek',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">3. Waarom verwerken wij uw gegevens?</h2>
            <p>Wij verwerken persoonsgegevens voor de volgende doeleinden:</p>
            <ul className="list-none mt-3 space-y-2">
              {[
                'Beantwoorden van vragen en verzoeken via telefoon of e-mail',
                'Verbetering van onze website op basis van gebruiksstatistieken (alleen met uw toestemming)',
                'Voldoen aan wettelijke verplichtingen',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">4. Grondslag voor verwerking</h2>
            <p>
              Wij verwerken uw persoonsgegevens op basis van de volgende rechtsgrondslagen (AVG art. 6):
            </p>
            <ul className="list-none mt-3 space-y-2">
              {[
                'Toestemming — voor analytische en marketingcookies',
                'Gerechtvaardigd belang — voor het beantwoorden van uw vragen',
                'Wettelijke verplichting — waar de wet dit vereist',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">5. Bewaartermijnen</h2>
            <p>
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld.
              E-mailcorrespondentie bewaren wij maximaal 2 jaar. Wettelijk verplichte administratie bewaren wij 7 jaar.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">6. Delen met derden</h2>
            <p>
              Wij verkopen uw persoonsgegevens nooit aan derden. Wij kunnen gegevens delen met:
            </p>
            <ul className="list-none mt-3 space-y-2">
              {[
                'Hosting- en technologieproviders die onze website beheren (verwerkers)',
                'Overheidsinstanties indien wettelijk verplicht',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Met verwerkers sluiten wij een verwerkersovereenkomst af om een passend beveiligingsniveau te waarborgen.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">7. Uw rechten (AVG)</h2>
            <p>Op grond van de AVG heeft u de volgende rechten:</p>
            <ul className="list-none mt-3 space-y-2">
              {[
                'Recht op inzage — u mag opvragen welke gegevens wij van u verwerken',
                'Recht op rectificatie — u mag onjuiste gegevens laten corrigeren',
                'Recht op vergetelheid — u mag verzoeken uw gegevens te laten verwijderen',
                'Recht op beperking — u mag de verwerking (tijdelijk) laten beperken',
                'Recht op gegevensoverdraagbaarheid — u mag uw gegevens in een leesbaar formaat ontvangen',
                'Recht van bezwaar — u mag bezwaar maken tegen bepaalde verwerkingen',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Verzoeken kunt u sturen naar{' '}
              <a href="mailto:ijssalonitalia@me.com" className="text-[#c9a84c]/80 hover:text-[#c9a84c] transition-colors">
                ijssalonitalia@me.com
              </a>
              . Wij reageren binnen 30 dagen. U heeft ook het recht een klacht in te dienen bij de{' '}
              <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c]/80 hover:text-[#c9a84c] transition-colors">
                Autoriteit Persoonsgegevens
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">8. Beveiliging</h2>
            <p>
              Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen
              tegen verlies, diefstal of onbevoegde toegang. De website maakt gebruik van een beveiligde HTTPS-verbinding.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">9. Cookies</h2>
            <p>
              Voor meer informatie over het gebruik van cookies verwijzen wij u naar ons{' '}
              <Link href="/cookies" className="text-[#c9a84c]/80 hover:text-[#c9a84c] transition-colors underline underline-offset-2">
                Cookiebeleid
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">10. Wijzigingen</h2>
            <p>
              Wij behouden ons het recht voor dit privacybeleid te wijzigen. De meest actuele versie vindt u altijd op deze pagina.
              Bij wezenlijke wijzigingen informeren wij u via de website.
            </p>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-4 text-xs text-gray-600">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
          <Link href="/cookies" className="hover:text-[#c9a84c] transition-colors">Cookiebeleid</Link>
          <Link href="/voorwaarden" className="hover:text-[#c9a84c] transition-colors">Algemene Voorwaarden</Link>
        </div>
      </div>
    </div>
  )
}
