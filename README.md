# Edgecase

The website of EDGECASE LLC, the technology practice of Ali Emami. Live at [www.edgecase.nyc](https://www.edgecase.nyc), deployed on Vercel.

A single static page built with Next.js 16, React 19 and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` makes the production build; `npm run lint` checks the code.

## Where things are

- `app/page.tsx` holds the whole page. The content lives in plain arrays at the top of the file (`facts`, `clients`, `practice`, `work`, `record`), so most edits are text changes there. Email, phone and LinkedIn are constants on the first lines.
- `app/layout.tsx` sets the fonts (Instrument Serif for headlines, Geist and Geist Mono for text) and the page title, description and sharing metadata.
- `app/globals.css` defines the color tokens (`paper`, `surface`, `ink`, `muted`, `rule`, `accent`) for light and dark. Dark mode follows the visitor's system setting.
- `public/images/ali-emami.png` is the portrait in the About section.

The career facts mirror Ali's LinkedIn profile; keep the two in step.

© EDGECASE LLC. All rights reserved.
