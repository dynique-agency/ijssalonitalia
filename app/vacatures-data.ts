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
    slug: 'ijssalon-gastvrijheid-verkoop',
    title: 'IJssalon — Gastvrijheid & Verkoop',
    hoursLabel: '16 uur / week',
    period: 'Vast contract',
    heroImage: '/ijs.webp',
    intro:
      'Lijkt het je leuk om te werken in een gezellige omgeving waar iedere dag draait om gastvrijheid en de lekkerste producten? Kom ons team versterken!',
    about:
      'Als Parttime Medewerker IJssalon ben jij het gezicht van De Smaak! Chocolade & IJs. Jij zorgt samen met je collega\'s voor een onvergetelijke ervaring voor onze gasten. Van het serveren van ijs tot het maken van de lekkerste koffie\'s, jij weet hoe je een glimlach op het gezicht van onze klanten tovert.',
    tasks: [
      'Het scheppen van ijscoupes en bolletjes met een glimlach',
      'Het zetten van de lekkerste koffie\'s voor onze klanten',
      'Vriendelijk en behulpzaam te woord staan van gasten',
      'Chocolade en andere lekkernijen verpakken en presenteren',
      'De winkel netjes en hygiënisch houden',
      'Samenwerken met een gezellig team om een fantastische ervaring te bieden aan onze gasten',
    ],
    requirements: [
      'Enthousiast, gastvrij en een echte aanpakker',
      'Kalm en georganiseerd, ook tijdens drukte',
      'Flexibel inzetbaar, inclusief avonden en weekenden',
      'Ongeveer 16 uur per week beschikbaar, werktijden in overleg',
      'Bereid om met een glimlach te werken en houdt van klantcontact',
    ],
    offers: [
      'Werken in een hecht en gezellig team waar teamwork centraal staat',
      'Een afwisselende baan met veel contact met mensen',
      'Een fijne werkplek in een leuke omgeving',
      'De kans om werkervaring op te doen in een gezellige en professionele werksfeer',
    ],
  },
  {
    slug: 'bijbaan-ijssalon-verkoop-service',
    title: 'Bijbaan IJssalon — Verkoop & Service',
    hoursLabel: 'Bijbaan',
    period: 'Maart t/m september',
    heroImage: '/to-go-coupe.webp',
    intro:
      'Heb jij zin om in een gezellige sfeer te werken, de lekkerste ijsjes te serveren en gasten blij te maken? Lees dan snel verder!',
    about:
      'Als Bijbaan IJssalon – Verkoop & Service ben jij een van de gezichten van onze ijssalon. Samen met je collega\'s zorg je voor een geweldige ervaring voor onze gasten.',
    tasks: [
      'IJscoupes en bolletjes scheppen — we leren je de kunst van het perfecte bolletje',
      'Gasten vriendelijk ontvangen en bedienen met een glimlach',
      'Chocolade inpakken en zorgen voor een nette presentatie in de vitrines',
      'De zaak schoon en georganiseerd houden, want een opgeruimde winkel maakt het verschil',
    ],
    requirements: [
      'Positief, enthousiast en een echte teamplayer',
      'Kan goed omgaan met drukte, ook tijdens lange rijen',
      'Minimaal 15 jaar oud',
      'Flexibel inzetbaar tussen maart en september, ook in de avonden en weekenden',
      'Bereid om waar nodig bij te springen voor een top klantervaring',
    ],
    offers: [
      'Werken in een jong, gezellig en hecht team waar teamwork centraal staat',
      'De kans om mensen blij te maken met ijs',
      'Veel flexibiliteit in je werkuren en een fijne werkplek',
    ],
  },
]

export function getVacatureBySlug(slug: string): Vacature | undefined {
  return vacatures.find(v => v.slug === slug)
}
