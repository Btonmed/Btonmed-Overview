import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import logo from '../../assets/img/logo.png'
import { contact, navLinks, whatsappLink } from '../../data/site'
import useTheme from '../../hooks/useTheme'
import ThemeToggle from './ThemeToggle'
import AppIcons from '../ui/AppIcons'

function Logo({ className = '' }) {
  return (
    <Link to="/" aria-label="Btonmed home" className={`shrink-0 rounded-xl dark:bg-white dark:px-3 dark:py-1.5 ${className}`}>
      <img src={logo} alt="Btonmed" className="h-9 w-auto sm:h-10 dark:h-8 dark:sm:h-9" />
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useTheme()
  const { pathname } = useLocation()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled ? 'border-line bg-surface/85 shadow-soft backdrop-blur-xl' : 'border-transparent bg-surface'
        }`}
      >
        <nav className="container flex h-[4.75rem] items-center justify-between gap-6" aria-label="Main">
          <Logo />

          <ul className="hidden items-center gap-1 rounded-full border border-line bg-card/70 p-1.5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className="relative block rounded-full px-4 py-2 text-sm font-medium">
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-brand-600 shadow-glow"
                          transition={{ type: 'spring', damping: 30, stiffness: 350 }}
                        />
                      )}
                      <span className={`relative flex items-center gap-1.5 transition-colors ${isActive ? 'text-white' : 'text-muted hover:text-fg'}`}>
                        {link.label}
                        {link.badge && (
                          <span className={`rounded-full px-1.5 py-px text-[10px] font-bold uppercase ${isActive ? 'bg-white text-brand-700' : 'bg-accent-600 text-white'}`}>
                            {link.badge}
                          </span>
                        )}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle dark={dark} toggle={toggle} />
            <a
              href={whatsappLink('Hello Btonmed, I would like to request a quote.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-700 hover:shadow-glow-lg sm:inline-flex"
            >
              Get a quote
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-brand-fg lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
        <motion.div style={{ scaleX: progress }} className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-accent-600" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-brand-950/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto overscroll-contain bg-surface p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-tint text-brand-fg"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-8 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li key={link.to} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1 }}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-2xl px-4 py-3 font-display text-lg font-semibold transition-colors ${
                          isActive ? 'bg-brand-600 text-white shadow-glow' : 'text-fg hover:bg-tint'
                        }`
                      }
                    >
                      <span className="flex items-center gap-2">
                        {link.label}
                        {link.badge && <span className="rounded-full bg-accent-600 px-2 py-0.5 text-[10px] font-bold uppercase text-white">{link.badge}</span>}
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-60" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-3 pt-8">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-wa w-full">
                  <FaWhatsapp className="h-5 w-5" /> Chat on WhatsApp
                </a>
                <a href={contact.phoneHref} className="btn-outline w-full">
                  <Phone className="h-4 w-4" /> {contact.phoneDisplay}
                </a>
                <AppIcons className="justify-center pt-3" />
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
