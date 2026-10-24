import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, Check, GraduationCap } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import theatre from '../../assets/img/theatre.jpg'
import { academyIncludes, whatsappLink } from '../../data/site'
import Reveal from '../ui/Reveal'
import Circuit from '../ui/Circuit'

export default function AcademyPromo() {
  return (
    <section className="bg-surface-soft py-24 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-950 text-white shadow-glow-lg">
            <div className="glow-orb -right-20 -top-20 h-96 w-96 bg-brand-600/50" />
            <div className="glow-orb -bottom-24 left-1/3 h-72 w-72 bg-accent-600/30 [animation-delay:2s]" />
            <Circuit className="absolute bottom-0 left-0 w-80 text-brand-900" />
            <div className="relative grid grid-cols-1 gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:p-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="h-4 w-4" /> Btonmed Academy
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-5xl">
                  Don&rsquo;t just be an engineer. Be a <span className="text-accent-200">skilled biomedical engineer.</span>
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-100">
                  Our Advanced Biomedical Engineering Program takes you from basic electronics to advanced imaging, with
                  hands-on training on real hospital equipment.
                </p>
                <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {academyIncludes.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-brand-50">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-200" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappLink('Hello Btonmed, I would like to enroll in the 3-month Biomedical Engineering Bootcamp. Please share the next intake details.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent"
                  >
                    <FaWhatsapp className="h-5 w-5" /> Reserve my seat
                  </a>
                  <Link to="/academy" className="btn group border border-white/25 text-white hover:border-white hover:bg-white/10">
                    See the full program <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border border-white/10">
                  <img src={theatre} alt="Theatre equipment in the Btonmed training area" loading="lazy" className="aspect-[16/10] w-full object-cover" />
                </div>
                <div className="absolute -bottom-8 left-6 right-6 flex items-center justify-between gap-4 rounded-3xl bg-white p-5 text-brand-950 shadow-lift sm:left-auto sm:right-8 sm:w-80">
                  <div>
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      <CalendarDays className="h-3.5 w-3.5" /> 3 months bootcamp
                    </p>
                    <p className="mt-1 font-display text-3xl font-extrabold">
                      <span className="text-base font-semibold text-slate-500">Ksh </span>60,000
                    </p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
