# Btonmed Website

Frontend for Btonmed: medical equipment sales, leasing, servicing, calibration and the Advanced Biomedical Engineering Bootcamp.

Built with React 18, Vite 6, Tailwind CSS 3, Framer Motion, Lucide icons and React Icons (brand icons).

## Run

Requires Node 20+ (an `.nvmrc` pins Node 22).

```bash
nvm use
npm install
npm run dev      # local development
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Pages

| Route | Page |
|---|---|
| `/` | Home: overview, featured equipment, bootcamp promo, how it works |
| `/services` | Services and biomedical engineering |
| `/equipment` | Filterable equipment catalogue, buy vs lease |
| `/academy` | Biomedical Engineering Bootcamp: curriculum, pricing, FAQ |
| `/about` | Company story and values |
| `/contact` | Contact channels, enquiry form, FAQ |

Light and dark themes follow the visitor's system setting by default; the toggle in the navbar remembers their choice.

## Editing content

All text, contact details, social links, services, equipment, bootcamp details and FAQs live in
`src/data/site.js`. Brand colours and theme tokens are in `tailwind.config.js` and `src/index.css`.

## Deploying

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for step-by-step instructions (Netlify, Vercel or cPanel),
domain setup and getting listed on Google. In short: set `SITE_URL` in `.env`, run `npm run build`,
and upload the `dist/` folder.

## Images

No photo on the site shows people. Most photos are Btonmed's own equipment photos (cropped from company flyers).
Two equipment photos come from Wikimedia Commons with no copyright restrictions (free for commercial use, no credit required):

| File | Source | Licence |
|---|---|---|
| `xray-fluoroscopy-room.jpg` | "Fluoroscopy room with control space", Mikael Häggström | CC0 |
| `ventilator.jpg` | "Respirator icu", Blogotron | CC0 |

`mammography-unit.jpg` was supplied by Btonmed from a Google Images result; its original owner and licence are **unknown**.
Confirm you have the right to use it, or replace it with your own photo, before launch.


Replace any of these with your own high-resolution photos in `src/assets/img/` using the same filenames (higher-resolution originals will look sharper).
