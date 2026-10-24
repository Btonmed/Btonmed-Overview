import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { whatsappLink } from '../../data/site'

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)
  const [tip, setTip] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const t = setTimeout(() => setTip(true), 5000)
    const t2 = setTimeout(() => setTip(false), 13000)
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(t)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {show && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            aria-label="Back to top"
            className="mr-1.5 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-brand-fg shadow-soft transition-all hover:shadow-glow"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
      <div className="flex items-center gap-3">
        <AnimatePresence>
          {tip && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden rounded-2xl border border-line bg-card px-4 py-2.5 text-sm font-medium text-fg shadow-lift sm:block"
            >
              Questions? Chat with us
            </motion.span>
          )}
        </AnimatePresence>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Btonmed on WhatsApp"
          onMouseEnter={() => setTip(true)}
          onMouseLeave={() => setTip(false)}
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] sm:h-14 sm:w-14 text-white shadow-glow-wa transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 animate-ping2 rounded-full bg-[#25D366]" />
          <FaWhatsapp className="relative h-6 w-6 sm:h-7 sm:w-7" />
        </a>
      </div>
    </div>
  )
}
