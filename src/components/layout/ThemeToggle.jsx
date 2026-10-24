import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ dark, toggle }) {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Light theme' : 'Dark theme'}
      className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-line bg-card text-brand-fg transition-all hover:border-brand-600 hover:shadow-glow"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? 'moon' : 'sun'}
          initial={{ y: 18, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -18, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {dark ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
