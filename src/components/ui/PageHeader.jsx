import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Circuit from './Circuit'

const ease = [0.21, 0.47, 0.32, 0.98]

export default function PageHeader({ crumb, eyebrow, title, text, children, aside }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface-soft">
      <div className="glow-orb -right-20 -top-32 h-[26rem] w-[26rem] bg-brand-600/25 dark:bg-brand-600/35" />
      <div className="glow-orb -bottom-40 left-10 h-72 w-72 bg-accent-600/15 [animation-delay:2s] dark:bg-accent-600/25" />
      <Circuit className="absolute -right-6 bottom-4 hidden w-80 text-brand-200 dark:text-brand-900 lg:block" />
      <div className={`container relative grid grid-cols-1 gap-12 py-16 sm:py-20 lg:py-24 ${aside ? 'lg:grid-cols-12 lg:items-center' : ''}`}>
        <div className={aside ? 'lg:col-span-7' : 'max-w-3xl'}>
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-muted"
          >
            <Link to="/" className="transition-colors hover:text-brand-fg">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-fg">{crumb}</span>
          </motion.nav>
          <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease }} className="eyebrow mt-8">
            <span className="h-px w-8 bg-accent-fg" />
            {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-4 text-4xl font-extrabold leading-[1.08] text-fg sm:text-5xl lg:text-[3.4rem]"
          >
            {title}
          </motion.h1>
          {text && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
            >
              {text}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease }}
              className="mt-9"
            >
              {children}
            </motion.div>
          )}
        </div>
        {aside && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="lg:col-span-5"
          >
            {aside}
          </motion.div>
        )}
      </div>
    </section>
  )
}
