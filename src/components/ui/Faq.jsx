import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'

export default function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <ul className="space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <Reveal as="li" key={f.q} delay={i * 0.04}>
            <div className={`card ${isOpen ? 'border-brand-600/50 shadow-glow' : ''}`}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <span className={`font-display text-[17px] font-semibold transition-colors ${isOpen ? 'text-brand-fg' : 'text-fg'}`}>{f.q}</span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen ? 'rotate-45 bg-brand-600 text-white' : 'bg-tint text-brand-fg'
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        )
      })}
    </ul>
  )
}
