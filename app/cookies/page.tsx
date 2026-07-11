import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookiebeleid – IJssalon Italia Vaals',
  description: 'Lees welke cookies IJssalon Italia Vaals gebruikt en hoe u uw voorkeuren kunt beheren.',
}

const cookieTable = [
  {
    name: 'ijssalon_cookie_consent',
    type: 'Noodzakelijk',
    doel: 'Slaat uw cookievoorkeuren op',
    duur: '1 jaar',
    partij: 'Eigen',
  },
  {
    name: 'Google Maps-cookies',
    type: 'Marketing',
    doel: 'Laadt de interactieve kaart bij "Bezoek Ons", alleen na toestemming',
    duur: 'Variabel',
    partij: 'Google',
  },
]

export default function CookiesPage() {
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
          <h1 className="font-cormorant text-4xl md:text-5xl font-semibold text-white mb-3">Cookiebeleid</h1>
          <p className="text-gray-500 text-sm">Laatst bijgewerkt: 30 maart 2026</p>
        </div>

        <div className="space-y-10 text-gray-300 text-sm md:text-base leading-relaxed">

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">Wat zijn cookies?</h2>
            <p>
              Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt.
              Ze helpen ons de website goed te laten werken en uw ervaring te verbeteren.
              Sommige cookies zijn essentieel; andere zijn optioneel en worden alleen geplaatst met uw toestemming.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-4">Welke cookies gebruiken wij?</h2>

            {/* Cookie categories */}
            <div className="space-y-4">
              {[
                {
                  label: 'Noodzakelijk',
                  color: 'bg-[#c9a84c]',
                  desc: 'Deze cookies zijn vereist voor de basisfunctionaliteit van de website. Zij kunnen niet worden uitgeschakeld.',
                },
                {
                  label: 'Analytisch',
                  color: 'bg-blue-500',
                  desc: 'Zouden ons helpen begrijpen hoe bezoekers de website gebruiken. Momenteel plaatsen wij geen analytische cookies; deze categorie staat klaar voor toekomstig gebruik.',
                },
                {
                  label: 'Marketing',
                  color: 'bg-purple-500',
                  desc: 'Worden gebruikt om de interactieve Google Maps-kaart op de website te laden.',
                },
              ].map((cat) => (
                <div key={cat.label} className="flex items-start gap-3 p-4 border border-white/10 rounded-xl">
                  <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${cat.color}`} />
                  <div>
                    <p className="text-white font-medium text-sm">{cat.label}</p>
                    <p className="text-gray-500 text-xs mt-1">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-4">Overzicht van cookies</h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    {['Naam', 'Type', 'Doel', 'Duur', 'Partij'].map(h => (
                      <th key={h} className="text-left text-gray-400 font-medium px-4 py-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0">
                      <td className="px-4 py-3 font-mono text-[#c9a84c]/80">{row.name}</td>
                      <td className="px-4 py-3 text-gray-400">{row.type}</td>
                      <td className="px-4 py-3 text-gray-400">{row.doel}</td>
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{row.duur}</td>
                      <td className="px-4 py-3 text-gray-400">{row.partij}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">Uw keuzes beheren</h2>
            <p className="mb-4">
              Wanneer u onze website voor het eerst bezoekt, vragen wij om uw toestemming voor optionele cookies via onze cookiebanner.
              U kunt uw voorkeuren op elk moment wijzigen:
            </p>
            <ul className="list-none space-y-2">
              {[
                'Via de cookiebanner onderaan de pagina (verschijnt opnieuw na het wissen van uw browserdata)',
                'Via de browserinstellingen van uw apparaat',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-500 text-xs">
              Let op: het uitschakelen van cookies kan invloed hebben op de functionaliteit van de website.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">Derde partijen</h2>
            <p>
              Sommige cookies worden geplaatst door derde partijen. Wij hebben geen controle over het cookiebeleid van deze partijen.
              Raadpleeg hun privacybeleid voor meer informatie:
            </p>
            <ul className="list-none mt-3 space-y-2">
              {[
                { name: 'Google', url: 'https://policies.google.com/privacy' },
              ].map((p) => (
                <li key={p.name} className="flex items-start gap-3">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">-</span>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[#c9a84c]/80 hover:text-[#c9a84c] transition-colors underline underline-offset-2">
                    {p.name} privacybeleid
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#c9a84c] font-semibold mb-3">Contact</h2>
            <p>
              Heeft u vragen over ons cookiebeleid? Neem dan contact met ons op via{' '}
              <a href="mailto:ijssalonitalia@me.com" className="text-[#c9a84c]/80 hover:text-[#c9a84c] transition-colors">
                ijssalonitalia@me.com
              </a>.
            </p>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-4 text-xs text-gray-600">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
          <Link href="/privacy" className="hover:text-[#c9a84c] transition-colors">Privacybeleid</Link>
          <Link href="/voorwaarden" className="hover:text-[#c9a84c] transition-colors">Algemene Voorwaarden</Link>
        </div>
      </div>
    </div>
  )
}
