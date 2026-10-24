import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, GraduationCap, KeyRound, Wrench, Sparkles } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import ctGantry from '../../assets/img/ct-gantry.jpg'
import ultrasound from '../../assets/img/ultrasound-philips.jpg'
import cArm from '../../assets/img/c-arm.jpg'
import { heroWords, whatsappLink } from '../../data/site'
import Pulse from '../ui/Pulse'
import Circuit from '../ui/Circuit'

const ease = [0.21, 0.47, 0.32, 0.98]
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
})

const highlights = [
  { icon: KeyRound, label: 'Sales & leasing' },
  { icon: Wrench, label: 'Servicing & calibration' },
  { icon: GraduationCap, label: 'Hands-on bootcamp' },
]

function RotatingWord() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % heroWords.length), 2400)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="relative block h-[1.15em] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.span
          key={heroWords[i]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease }}
          className="absolute left-0 top-0 whitespace-nowrap text-brand-fg"
        >
          {heroWords[i]}.
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <svg className="absolute inset-0 h-full w-full text-line" aria-hidden="true">
        <defs>
          <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
      <div className="glow-orb -right-32 -top-40 h-[34rem] w-[34rem] bg-brand-600/25 dark:bg-brand-600/40" />
      <div className="glow-orb -left-40 bottom-0 h-80 w-80 bg-accent-600/15 [animation-delay:3s] dark:bg-accent-600/25" />

      <div className="container relative grid grid-cols-1 items-center gap-16 pb-24 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-6">
          <motion.div {...fadeUp(0)}>
            <Link
              to="/academy"
              className="group inline-flex items-center gap-2.5 rounded-full border border-accent-600/30 bg-accent-tint py-1.5 pl-1.5 pr-4 text-[13px] font-medium text-accent-fg transition-all hover:shadow-glow-accent"
            >
              <span className="flex items-center gap-1 rounded-full bg-accent-600 px-2.5 py-1 text-[11px] font-bold uppercase text-white">
                <Sparkles className="h-3 w-3" /> New
              </span>
              3-month biomedical bootcamp, Ksh 60,000
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="mt-7 text-[2.15rem] font-extrabold min-[400px]:text-[2.5rem] leading-[1.1] text-fg sm:text-5xl lg:text-[3.7rem]">
            Sell. Lease. Service.
            <span className="mt-1 block text-muted">Expert care for your</span>
            <RotatingWord />
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Btonmed is a biomedical equipment marketplace and engineering company. We help healthcare facilities get
            reliable medical technology, and keep it running with servicing, repairs and calibration.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/equipment" className="btn-primary group">
              Browse equipment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={whatsappLink('Hello Btonmed, I would like to speak with an engineer.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FaWhatsapp className="h-[18px] w-[18px] text-[#25D366]" />
              Talk to an engineer
            </a>
          </motion.div>

          <motion.ul {...fadeUp(0.4)} className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-7">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-fg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-tint text-brand-fg">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative lg:col-span-6">
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease }} className="relative mx-auto max-w-[34rem]">
            {/* orbit ring */}
            <div className="absolute -inset-6 hidden animate-spin-slow rounded-full border border-dashed border-brand-300/50 dark:border-brand-700 sm:block" />
            <Circuit className="absolute -right-4 -top-20 hidden w-52 text-accent-600 sm:block" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-line bg-card p-2.5 shadow-glow-lg">
              <img
                src={ctGantry}
                alt="CT scanner gantry opened up for servicing by Btonmed engineers"
                className="aspect-square w-full rounded-[1.75rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -left-3 w-[16.5rem] animate-float rounded-3xl border border-line bg-card p-5 shadow-lift sm:-left-12">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">Equipment status</span>
                <span className="flex items-center gap-1.5 rounded-full bg-accent-tint px-2.5 py-1 text-[11px] font-semibold text-accent-fg">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute h-full w-full animate-ping2 rounded-full bg-accent-600" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-accent-600" />
                  </span>
                  Online
                </span>
              </div>
              <Pulse className="my-3 h-12 w-full text-brand-fg" />
              <div className="flex items-center gap-3">
                <img src={ultrasound} alt="" className="h-11 w-11 rounded-xl object-cover" />
                <div>
                  <p className="text-sm font-semibold text-fg">Serviced & calibrated</p>
                  <p className="text-xs text-muted">Ready for clinical use</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-10 hidden w-44 animate-float-slow rounded-3xl border border-line bg-card p-3 shadow-lift [animation-delay:1.5s] sm:block lg:-right-10">
              <img src={cArm} alt="" className="aspect-[4/3] w-full rounded-2xl object-cover" />
              <p className="mt-2.5 px-1 text-sm font-semibold text-fg">C-Arm machines</p>
              <p className="px-1 pb-1 text-xs text-muted">Sales, leasing & servicing</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
