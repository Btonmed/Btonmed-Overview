import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { acquireOptions, equipment, equipmentCategories, whatsappLink } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import EquipmentCard from '../components/ui/EquipmentCard'
import CtaBand from '../components/ui/CtaBand'

export default function Equipment() {
  usePageMeta(
    'Equipment',
    'Buy or lease C-arm machines, X-ray and fluoroscopy systems, ultrasound, mammography, CT, theatre, dialysis and critical care equipment.',
  )
  const [category, setCategory] = useState('All')
  const items = category === 'All' ? equipment : equipment.filter((e) => e.category === category)

  return (
    <>
      <PageHeader
        crumb="Equipment"
        eyebrow="Equipment"
        title="Imaging, diagnostic and biomedical equipment"
        text="Explore what we supply, lease and service. See something you need? Get pricing in one tap."
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="container">
          <div className="flex justify-center">
            <div className="flex max-w-full flex-wrap justify-center gap-1 rounded-[1.75rem] border border-line bg-card p-1.5" role="tablist">
              {equipmentCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={category === c}
                  onClick={() => setCategory(c)}
                  className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    category === c ? 'text-white' : 'text-muted hover:text-fg'
                  }`}
                >
                  {category === c && (
                    <motion.span layoutId="equip-pill" className="absolute inset-0 rounded-full bg-brand-600 shadow-glow" transition={{ type: 'spring', damping: 28, stiffness: 320 }} />
                  )}
                  <span className="relative">{c}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  layout
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <EquipmentCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <Reveal className="mt-12 text-center">
            <p className="text-muted">
              Looking for a specific model?{' '}
              <a
                href={whatsappLink('Hello Btonmed, I am looking for a specific equipment model: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-brand-fg underline-offset-4 hover:underline"
              >
                Tell us and we will source it <ArrowUpRight className="h-4 w-4" />
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-soft py-24 lg:py-28">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Buy or lease"
            title="Two flexible ways to get the equipment you need"
            text="Choose what works for your facility's budget and plans. We will help you decide."
          />
          <div className="mx-auto mt-14 grid grid-cols-1 max-w-4xl gap-6 md:grid-cols-2">
            {acquireOptions.map(({ icon: Icon, title, text, points }, i) => (
              <Reveal key={title} delay={i * 0.1} className="h-full">
                <div className="card card-hover flex h-full flex-col p-8">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${i ? 'bg-accent-600 shadow-glow-accent' : 'bg-brand-600 shadow-glow'}`}>
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-fg">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{text}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-fg">
                        <Check className="h-4 w-4 text-accent-fg" strokeWidth={3} /> {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hello Btonmed, I would like to ${title.toLowerCase()} medical equipment. Please advise.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 ${i ? 'btn-accent' : 'btn-primary'}`}
                  >
                    <FaWhatsapp className="h-[18px] w-[18px]" /> Enquire to {title.toLowerCase()}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Can't find your equipment?" text="We source specific makes and models on request. Share what you need and we will come back with options and pricing." message="Hello Btonmed, I am looking for the following equipment: " waLabel="Request equipment" />
    </>
  )
}
