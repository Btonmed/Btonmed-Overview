import { MessageSquareText, Stethoscope, FileCheck2, Truck } from 'lucide-react'
import { processSteps } from '../../data/site'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const icons = [MessageSquareText, Stethoscope, FileCheck2, Truck]

export default function Process({ className = 'bg-surface' }) {
  return (
    <section className={`py-24 lg:py-28 ${className}`}>
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="From first message to fully operational"
          text="Buying, leasing or fixing equipment with us follows four clear steps."
        />
        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden border-t-2 border-dashed border-line lg:block" />
          {processSteps.map((step, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={step.title} delay={i * 0.12} className="relative text-center">
                <div className="group mx-auto flex flex-col items-center">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-line bg-card text-brand-fg shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-glow">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent-600 text-xs font-bold text-white shadow-glow-accent">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-fg">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-[16rem] leading-relaxed text-muted">{step.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
