import { Microscope, Timer, Wallet, Recycle } from 'lucide-react'
import { whyUs } from '../../data/site'
import Reveal from '../ui/Reveal'

const icons = [Microscope, Timer, Wallet, Recycle]

export default function WhyStrip() {
  return (
    <section className="border-y border-line bg-surface py-14">
      <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((item, i) => {
          const Icon = icons[i]
          return (
            <Reveal key={item.title} delay={i * 0.08} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-tint text-brand-fg">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-bold text-fg">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
