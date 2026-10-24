import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { pillars } from '../../data/site'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function Pillars() {
  return (
    <section className="bg-surface-soft py-24 lg:py-28">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="What we do"
          title="Everything your facility needs, in one place"
          text="Three ways Btonmed helps: the equipment, the engineering behind it, and the people who will run it tomorrow."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text, points, to, cta, highlight }, i) => (
            <Reveal key={title} delay={i * 0.1} className="h-full">
              <Link
                to={to}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-8 transition-all duration-500 hover:-translate-y-1.5 ${
                  highlight
                    ? 'border-brand-600 bg-brand-600 text-white shadow-glow hover:shadow-glow-lg'
                    : 'border-line bg-card hover:border-brand-600/60 hover:shadow-glow'
                }`}
              >
                {highlight && (
                  <span className="absolute right-6 top-6 rounded-full bg-accent-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                    Now enrolling
                  </span>
                )}
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${
                    highlight ? 'bg-white text-brand-600' : 'bg-brand-600 text-white shadow-glow'
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className={`mt-7 text-2xl font-bold ${highlight ? 'text-white' : 'text-fg'}`}>{title}</h3>
                <p className={`mt-3 leading-relaxed ${highlight ? 'text-brand-100' : 'text-muted'}`}>{text}</p>
                <ul className="mt-6 space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className={`flex items-center gap-2.5 text-[15px] ${highlight ? 'text-white' : 'text-fg'}`}>
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full ${highlight ? 'bg-accent-600' : 'bg-accent-tint text-accent-fg'}`}>
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <span
                  className={`mt-8 inline-flex items-center gap-1.5 pt-2 text-sm font-semibold ${highlight ? 'text-white' : 'text-brand-fg'}`}
                >
                  {cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
