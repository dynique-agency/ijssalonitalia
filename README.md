# IJssalon Italia Vaals

Een ultra-professionele, premium website voor IJssalon Italia Vaals. Gebouwd met Next.js, TypeScript en Tailwind CSS.

## Design Features

- **Ultra Clean Design**: Minimalistisch en professioneel met pure wit, zwart en goud (#C9A961)
- **Premium Hero**: Prachtige achtergrond met ambachtelijk ijs foto
- **Transparante Header**: Doorzichtige header die solid wordt bij scrollen naar volgende sectie
- **Perfect Responsive**: Optimaal voor alle schermformaten (mobiel, tablet, desktop)
- **Smooth Animations**: Vloeiende overgangen en hover effecten

## Sections

1. **Header** - Fixed navigatie met transparante tot solid overgang
2. **Hero** - Dramatische hero sectie met ijs foto achtergrond
3. **Over Ons** - Geschiedenis sinds 1969, eigenaren, locatie en openingstijden
4. **Galerij** - Interactieve galerij met 6 premium items
5. **Footer** - Complete contact informatie en openingstijden

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Google Fonts (Playfair Display & Inter)

## Development

```bash
# Install dependencies
npm install

# Start development server on port 4321
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Access

De applicatie draait op: **http://localhost:4321**

## Deployment naar Cloudflare Pages

### Option 1: Via Wrangler CLI

1. Installeer Wrangler (als je dat nog niet hebt):
```bash
npm install -g wrangler
```

2. Login bij Cloudflare:
```bash
wrangler login
```

3. Build de applicatie:
```bash
npm run build
```

4. Deploy naar Cloudflare Pages:
```bash
wrangler pages deploy out
```

### Option 2: Via Cloudflare Dashboard

1. Ga naar [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Selecteer "Pages" in de sidebar
3. Klik op "Create a project"
4. Verbind je GitHub repository
5. Configureer:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (root)
6. Klik "Save and Deploy"

De website wordt automatisch gedeployed bij elke push naar de main branch!

## Contact Information

- **Telefoon**: +31 6 11318094
- **Email**: ijssalonitalia@me.com
- **Adres**: Maastrichterlaan 26, 6291 ES Vaals

## Openingstijden

**Zomer** (1 april - 30 september)
- Dagelijks: 11:00 - 22:00
- Laatste bestelling: 21:45

**Winter** (1 oktober - 31 maart)
- Dagelijks: 11:00 - 18:00
- Laatste bestelling: 17:45
- Gesloten in januari





