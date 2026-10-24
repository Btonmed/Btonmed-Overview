# Putting the Btonmed website online

This guide takes the website from your computer to a live address on the internet.
Pick **one** hosting option below. Option A is the quickest; Option C suits cPanel hosting
bought from a local provider (Truehost, HostPinnacle, Safaricom, Kenya Website Experts, etc.).

---

## Before you start (all options)

1. **Get a domain name** (e.g. `btonmed.co.ke` or `btonmed.com`) from any registrar.
   `.co.ke` domains are sold by KENIC-accredited registrars such as Truehost or HostPinnacle.
2. **Tell the website its domain.** Create a file named `.env` in the project folder
   (copy `.env.example`) and set:

   ```
   SITE_URL=https://www.your-domain.co.ke
   ```

   This makes the build produce `sitemap.xml`, a `robots.txt` that points to it, and the
   share-preview tags that show the Btonmed card when the link is posted on WhatsApp or Facebook.
   On Netlify or Vercel you can instead add `SITE_URL` under the site's *Environment variables*.
3. **Build the site** (needs Node 20 or newer; this project pins Node 22 in `.nvmrc`):

   ```bash
   nvm use
   npm install
   npm run build
   ```

   The finished website is the **`dist/`** folder. That folder is everything you upload.

---

## Option A: Netlify drag-and-drop (fastest, free)

1. Create a free account at <https://app.netlify.com>.
2. Go to **Sites → Add new site → Deploy manually**.
3. Drag the **`dist`** folder onto the page. The site is live within seconds on a
   `*.netlify.app` address.
4. **Domain:** *Site configuration → Domain management → Add a domain*, then follow the
   instructions to point your domain's DNS to Netlify. HTTPS is switched on automatically.

To update later: run `npm run build` again and drag the new `dist` folder onto the
*Deploys* tab.

## Option B: Netlify or Vercel connected to GitHub (automatic updates)

Every change you push to GitHub is published automatically.

1. Put the project on GitHub (a private repository is fine).
2. **Netlify:** *Add new site → Import an existing project →* pick the repository.
   Build settings are read from `netlify.toml` (`npm run build`, publish `dist`, Node 22).
   **Vercel:** <https://vercel.com/new> → import the repository. Settings come from `vercel.json`.
3. Add the environment variable `SITE_URL` with your domain, then redeploy.
4. Add your domain in the host's domain settings and update DNS as instructed.
   HTTPS is automatic.

## Option C: cPanel shared hosting

1. Build the site with `SITE_URL` set (see above).
2. Log in to cPanel → **File Manager** → open **`public_html`**.
3. Upload **the contents of `dist/`** (not the `dist` folder itself), so `index.html` sits
   directly inside `public_html`.
   - Turn on **Settings → Show Hidden Files** in File Manager and confirm **`.htaccess`**
     was uploaded. It is required so that pages like `/academy` open correctly.
   - Tip: zip the contents of `dist`, upload the zip, then *Extract* it in `public_html`.
4. **HTTPS:** cPanel → **SSL/TLS Status → Run AutoSSL**. Once the padlock works, open
   `public_html/.htaccess` and remove the `#` from the two "Force HTTPS" lines.

To update later: rebuild and re-upload the contents of `dist/`, replacing the old files.

---

## After going live: get found and get traffic

1. **Google Search Console** (<https://search.google.com/search-console>): add your domain,
   verify it, then submit `https://your-domain/sitemap.xml` under *Sitemaps*.
2. **Google Business Profile** (<https://business.google.com>): create a free listing with your
   phone, WhatsApp, website and photos. This is the biggest driver of local searches such as
   "medical equipment repair near me".
3. **Share the link** on your Instagram, Facebook and TikTok bios and your WhatsApp Business
   profile. The share card (`og-image.jpg`) appears automatically once `SITE_URL` is set.
4. **Test the preview**: paste your link into <https://www.opengraph.xyz> to see how it looks
   when shared.

---

## Checklist

- [ ] `SITE_URL` set to the real domain before building
- [ ] Site opens at the domain over `https://`
- [ ] Refreshing `/academy` or `/services` loads the page (not a 404)
- [ ] WhatsApp, call and email buttons work on a phone
- [ ] Social icons open the Btonmed Instagram, Facebook and TikTok pages
- [ ] Sitemap submitted in Google Search Console
- [ ] Rights to `mammography-unit.jpg` confirmed, or the photo replaced

## What each hosting file does

| File | Used by | Purpose |
|---|---|---|
| `netlify.toml` | Netlify (GitHub deploys) | Build command, output folder, Node version |
| `public/_redirects` | Netlify | Opens every page route through `index.html` |
| `public/_headers` | Netlify | Security headers and long-term caching of assets |
| `vercel.json` | Vercel | Build settings, page routing, headers |
| `public/.htaccess` | Apache / cPanel | Page routing, compression, caching, optional HTTPS redirect |
| `public/site.webmanifest` + icons | All browsers | Home-screen icon and app name on phones |
| `public/og-image.jpg` | WhatsApp, Facebook, X, LinkedIn | Preview image when the link is shared |
| `.env` (`SITE_URL`) | Build | Generates `sitemap.xml`, `robots.txt` and share tags |

---

## Maintaining the site

**Editing content.** All text, contact details, social links, services, equipment, bootcamp details and FAQs
live in `src/data/site.js`. Brand colours and theme tokens are in `tailwind.config.js` and `src/index.css`.
For local development run `npm run dev`; `npm run preview` serves the production build.

**Images.** No photo on the site shows people. Most photos are Btonmed's own equipment photos (cropped from
company flyers). Two come from Wikimedia Commons with no copyright restrictions (free for commercial use,
no credit required):

| File | Source | Licence |
|---|---|---|
| `xray-fluoroscopy-room.jpg` | "Fluoroscopy room with control space", Mikael Häggström | CC0 |
| `ventilator.jpg` | "Respirator icu", Blogotron | CC0 |

`mammography-unit.jpg` was supplied by Btonmed from a Google Images result; its original owner and licence
are **unknown**. Confirm you have the right to use it, or replace it with your own photo, before launch.

To swap any photo, replace the file in `src/assets/img/` using the same filename. Higher-resolution originals look sharper.
