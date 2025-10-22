# Portfolio - Vittorio Ciampi

Questo repository contiene il codice sorgente del mio sito/portfolio pubblicato su <https://portfolio-vittorio-ciampi.vercel.app/>.

## Sommario
- Descrizione
- Requisiti
- Setup e sviluppo locale
- Variabili d'ambiente importanti
- Come testare/forzare la preview OG (Facebook/WhatsApp)
- Suggerimenti per l'ottimizzazione dell'immagine OG
- Deploy su Vercel
- Contatti

## Descrizione

Sito personale in Next.js + TypeScript con styling TailwindCSS e CSS personalizzati.
Contiene: sezione Hero, About, Skills, Projects, Experience e Contact, insieme a componenti riutilizzabili e logica per il tema (light/dark).

## Requisiti
- Node.js (18+ raccomandato)
- npm o pnpm
- Account Vercel per il deploy

## Setup e sviluppo locale

1. Clona il repository:

```bash
git clone https://github.com/gianfrizio/PortFolio.git
cd PortFolio
```

2. Installa dipendenze:

```bash
npm install
```

3. Esegui il dev server:

```bash
npm run dev
```

Apri http://localhost:3000 e verifica il sito.

Nota: il progetto utilizza il nuovo routing `app/` di Next.js e font Google preload.

## Variabili d'ambiente importanti

Nel file `src/app/layout.tsx` il `SITE_URL` viene letto da `NEXT_PUBLIC_SITE_URL`. Assicurati di impostarlo correttamente in produzione (es. `https://portfolio-vittorio-ciampi.vercel.app`).

Opzionale ma consigliato per Facebook/WhatsApp debug:

- `NEXT_PUBLIC_FB_APP_ID` — ID applicazione Facebook (aggiunge il meta `fb:app_id` utile al Facebook Sharing Debugger).

Impostale in Vercel (Settings → Environment Variables) per il deploy.

## Open Graph / WhatsApp / Facebook Debugging

WhatsApp usa lo stesso scraper di Facebook; per assicurarti che la preview (immagine e testo) appaia correttamente:

1. Verifica che l'immagine OG sia pubblicata e raggiungibile:

```bash
curl -I "https://portfolio-vittorio-ciampi.vercel.app/og/og-image.png"
```

Dovresti vedere `HTTP/200` e `Content-Type: image/png`.

2. Assicurati che la home page includa i meta Open Graph con URL assoluti. Il layout include ora (quando deployato):

- `og:image` (assoluto)
- `og:image:secure_url`
- `og:image:type` (image/png)
- `link rel="image_src"`
- `twitter:image:src`
- (opzionale) `fb:app_id` se imposti `NEXT_PUBLIC_FB_APP_ID`

3. Forza la riscraping della pagina con il Facebook Sharing Debugger:

- Vai su: https://developers.facebook.com/tools/debug/
- Incolla `https://portfolio-vittorio-ciampi.vercel.app` e premi "Debug" → "Scrape Again".

Questo aggiornerà la cache che WhatsApp usa per generare la preview.

4. Se continui a vedere problemi:
- Controlla che l'immagine non sia troppo grande; ridurre la dimensione/il peso JPEG/PNG (1200x630 è consigliato) può aumentare l'affidabilità.
- Verifica che non ci siano regole CDN o header che bloccano crawler (User-Agent).

## Suggerimenti per l'immagine OG

- Formato consigliato: PNG o JPG
- Dimensione ideale: 1200 × 630 px
- Peso consigliato: < 500 KB preferibile per scraper con timeout
- Evita redirect multipli prima di servire l'immagine

Per ottimizzare l'immagine puoi usare strumenti come `pngquant`, `ImageOptim` o servizi online.

## Deploy su Vercel

1. Collega il repository a Vercel (se non già fatto).
2. Imposta le environment variables su Vercel:
	- `NEXT_PUBLIC_SITE_URL = https://portfolio-vittorio-ciampi.vercel.app` (esempio)
	- `NEXT_PUBLIC_FB_APP_ID` (opzionale)
3. Triggera un deploy (push su `master` o usa l'interfaccia Vercel per "Redeploy").
4. Dopo il deploy, esegui il Facebook Sharing Debugger per aggiornare la preview.

## Contatti

- GitHub: https://github.com/gianfrizio
- Email: vittoriociampi83@gmail.com
- LinkedIn: https://linkedin.com/in/vittorio-ciampi

---

Se vuoi, posso aggiungere anche una sezione "Contributing" con regole di codice e formato (Prettier/ESLint), o generare una versione ottimizzata dell'immagine OG e committarla.

## Struttura del progetto

Di seguito le cartelle e i file principali del progetto con una breve descrizione per ciascuno.

- / (root)
	- `package.json` — manifest delle dipendenze e script (dev/build/start)
	- `next.config.ts` — configurazione Next.js
	- `tsconfig.json` — TypeScript configuration
	- `tailwind.config.js`, `postcss.config.js` — configurazione Tailwind/PostCSS

- /public
	- `og/og-image.png` — immagine Open Graph usata per preview social (WhatsApp/Facebook/Twitter)
	- `images/` — immagini pubbliche (es. `profile.jpg`)
	- `cv/` — file CV e asset scaricabili

- /src
	- `/app` — entry point Next.js (routing basato su app directory)
		- `layout.tsx` — layout globale, metadata e tag Open Graph
		- `page.tsx` — pagina principale
		- `globals.css` — stili globali importati
		- `robots.ts` / `sitemap.ts` — metadata per robots e sitemap
	- `/components` — componenti React riutilizzabili
		- `ThemeToggle.tsx` — pulsante per cambiare tema light/dark
		- `Hero.tsx` — sezione hero con immagine profilo e animazioni
		- `Navbar.tsx`, `Footer.tsx`, `About.tsx`, `Projects.tsx`, `Skills.tsx`, `Contact.tsx`, `Experience.tsx`, `Testimonials.tsx`, `ClientLayout.tsx`, `StructuredData.tsx`
	- `/contexts`
		- `ThemeContext.tsx` — context per la gestione del tema (toggle e persistenza)
	- `/styles`
		- `themes.css` — variabili CSS per temi (light/dark) e regole comuni
		- `components.css` — stili component-scope (hero, cards, animazioni)
		- `hero-profile.css` — stili specifici del bordo profilo e glow

Se hai bisogno che includa più file o una rappresentazione ad albero completa (`tree`), posso generarla automaticamente.
