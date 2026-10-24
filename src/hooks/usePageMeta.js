import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DEFAULT_TITLE = 'Btonmed | Medical Equipment Sales, Leasing & Biomedical Engineering'

const setMeta = (selector, value) => document.querySelector(selector)?.setAttribute('content', value)

export default function usePageMeta(title, description) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | Btonmed` : DEFAULT_TITLE
    document.title = fullTitle
    setMeta('meta[property="og:title"]', fullTitle)
    if (description) {
      setMeta('meta[name="description"]', description)
      setMeta('meta[property="og:description"]', description)
    }
    // canonical/og:url exist only when SITE_URL was set at build time
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      const url = new URL(pathname, canonical.href).href
      canonical.setAttribute('href', url)
      setMeta('meta[property="og:url"]', url)
    }
  }, [title, description, pathname])
}
