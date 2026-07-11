export interface Vacature {
  slug: string
  title: string
  hoursLabel: string
  period: string
  heroImage: string
  intro: string
  about: string
  tasks: string[]
  requirements: string[]
  offers: string[]
}

export const vacatures: Vacature[] = [
  {
    slug: 'ijssalon-achter-de-bar',
    title: 'IJssalon Italia - Achter de Bar',
    hoursLabel: 'Vanaf 25 uur / week',
    period: 'Vast contract',
    heroImage: '/ijs.webp',
    intro:
      'Zoek je een vaste baan waarin geen dag hetzelfde is en gastvrijheid voorop staat? Als vast lid van ons team achter de bar bouw je mee aan meer dan 55 jaar familietraditie.',
    about:
      'Als medewerker achter de bar ben jij het gezicht van IJssalon Italia - het familiebedrijf dat sinds 1969 ambachtelijk ijs en Italiaanse gastvrijheid naar Vaals brengt. Dit is een vaste plek binnen ons kernteam: je leert het vak van scheppen tot espresso zetten, bouwt een band op met vaste gasten en groeit het hele jaar door mee met de zaak.',
    tasks: [
      'Het scheppen van ambachtelijke ijscoupes en bolletjes met een glimlach',
      'Het zetten van Italiaanse koffie zoals espresso en cappuccino',
      'Gasten enthousiast meenemen in ons wisselende assortiment van 50+ ijssmaken',
      'Vers gebak en lekkernijen netjes presenteren in de vitrine',
      'De ijssalon netjes en hygiënisch houden',
      'Samenwerken met een gezellig team, zoals bij ons al meer dan 55 jaar traditie is',
    ],
    requirements: [
      'Enthousiast, gastvrij en een echte aanpakker',
      'Kalm en georganiseerd, ook tijdens drukte',
      'Flexibel inzetbaar, inclusief avonden en weekenden',
      'Vanaf 25 uur per week beschikbaar, werktijden in overleg',
      'Bereid om met een glimlach te werken en houdt van klantcontact',
    ],
    offers: [
      'Werken in een hecht familiebedrijf waar teamwork centraal staat',
      'Een afwisselende baan met veel contact met mensen',
      'Een fijne werkplek in het hart van Vaals',
      'De kans om het vak te leren binnen een traditie van meer dan 55 jaar ambachtelijk ijs',
    ],
  },
  {
    slug: 'ijssalon-bediening',
    title: 'IJssalon Italia - Bediening',
    hoursLabel: '4 dagen / week',
    period: 'Vast contract',
    heroImage: '/koffiemetapfelstrudel.webp',
    intro:
      'Vind jij het leuk om gasten aan tafel in het zonnetje te zetten met Italiaanse gastvrijheid? Voor onze bediening zoeken we een enthousiaste aanpakker die 4 dagen per week ons team komt versterken!',
    about:
      'Als medewerker Bediening zorg jij dat gasten die bij ons aan tafel plaatsnemen een onvergetelijke ervaring krijgen. Van het opnemen van bestellingen tot het serveren van onze ambachtelijke ijscoupes, koffie en huisgemaakt gebak - jij maakt het verschil met net dat beetje extra warmte, in de traditie die Wally en Roger al sinds 2003 voortzetten.',
    tasks: [
      'Gasten hartelijk ontvangen en aan tafel begeleiden',
      'Bestellingen opnemen en met een glimlach serveren',
      'IJscoupes, Italiaanse koffie en gebak mooi opdienen en presenteren',
      'Tafels netjes en snel klaarzetten voor de volgende gasten',
      'Nauw samenwerken met de collega\'s achter de bar voor een soepele service',
    ],
    requirements: [
      'Sociaal, gastvrij en representatief',
      'Kan goed multitasken tijdens drukte',
      'Flexibel inzetbaar, 4 dagen per week inclusief weekenden',
      'Ervaring in de horeca is een pré, maar geen must',
      'Houdt van klantcontact en werkt secuur',
    ],
    offers: [
      'Een vaste plek in een hecht familiebedrijf met meer dan 55 jaar traditie',
      'Prettige, vaste werktijden verdeeld over 4 dagen per week',
      'Werken op een van de gezelligste terrassen van Vaals',
      'Ruimte om jezelf te ontwikkelen binnen de bediening',
    ],
  },
  {
    slug: 'bijbaan-ijssalon-italia',
    title: 'IJssalon Italia - Bijbaan',
    hoursLabel: 'Bijbaan',
    period: 'Maart t/m september',
    heroImage: '/to-go-coupe.webp',
    intro:
      'Op zoek naar een leuke bijbaan voor de zomer? Combineer je studie of school met werken in een van de gezelligste ijssalons van Vaals.',
    about:
      'Als bijbaan-medewerker bij IJssalon Italia hoor je tijdens het ijsseizoen (maart tot en met september) bij een jong en gezellig team. Perfect te combineren met school of studie: je leert de basis van het vak in een informele sfeer, zonder dat het een verplichting voor het hele jaar is.',
    tasks: [
      'IJscoupes en bolletjes scheppen - we leren je de kunst van het perfecte bolletje',
      'Gasten vriendelijk ontvangen en bedienen met een glimlach',
      'Vers gebak en lekkernijen netjes presenteren in de vitrine',
      'De zaak schoon en georganiseerd houden, want een opgeruimde salon maakt het verschil',
    ],
    requirements: [
      'Positief, enthousiast en een echte teamplayer',
      'Kan goed omgaan met drukte, ook tijdens lange rijen',
      'Minimaal 15 jaar oud',
      'Flexibel inzetbaar tussen maart en september, ook in de avonden en weekenden',
      'Bereid om waar nodig bij te springen voor een top klantervaring',
    ],
    offers: [
      'Werken in een jong, gezellig en hecht familiebedrijf waar teamwork centraal staat',
      'De kans om mensen blij te maken met ons ambachtelijke ijs',
      'Veel flexibiliteit in je werkuren en een fijne werkplek',
    ],
  },
]

export function getVacatureBySlug(slug: string): Vacature | undefined {
  return vacatures.find(v => v.slug === slug)
}
