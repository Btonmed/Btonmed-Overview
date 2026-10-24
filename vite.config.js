import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Keep in sync with the routes in src/App.jsx
const routes = ['/', '/services', '/equipment', '/academy', '/about', '/contact']

// Build-time SEO: robots.txt, sitemap.xml and absolute share-image tags.
// Set SITE_URL (e.g. in .env or your host's environment settings) to your live domain.
function seo(siteUrl) {
  const base = siteUrl?.trim().replace(/\/+$/, '')
  return {
    name: 'btonmed-seo',
    apply: 'build',
    transformIndexHtml() {
      if (!base) return []
      const tag = (attrs) => ({ tag: attrs.rel ? 'link' : 'meta', attrs, injectTo: 'head' })
      return [
        tag({ rel: 'canonical', href: `${base}/` }),
        tag({ property: 'og:url', content: `${base}/` }),
        tag({ property: 'og:image', content: `${base}/og-image.jpg` }),
        tag({ property: 'og:image:width', content: '1200' }),
        tag({ property: 'og:image:height', content: '630' }),
        tag({ name: 'twitter:image', content: `${base}/og-image.jpg` }),
      ]
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /']
      if (base) {
        robots.push('', `Sitemap: ${base}/sitemap.xml`)
        const today = new Date().toISOString().slice(0, 10)
        const urls = routes
          .map(
            (r) =>
              `  <url>\n    <loc>${base}${r}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r === '/' ? '1.0' : '0.8'}</priority>\n  </url>`,
          )
          .join('\n')
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        })
      } else {
        this.warn('SITE_URL is not set, so sitemap.xml and share-image tags were skipped. See DEPLOYMENT.md.')
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots.join('\n') + '\n' })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), seo(env.SITE_URL || process.env.SITE_URL)],
  }
})
