import { ArrowUpRight, Check, MessagesSquare } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { services, whatsappLink } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import Engineering from '../components/sections/Engineering'
import Process from '../components/sections/Process'
import CtaBand from '../components/ui/CtaBand'

export default function Services() {
  usePageMeta(
    'Services',
    'Medical equipment sales, leasing, servicing, repairs, maintenance, calibration and technical support for imaging and biomedical equipment.',
  )
  return (
    <>
      <PageHeader
        crumb="Services"
        eyebrow="Our services"
        title="Complete care for the equipment that cares for patients"
        text="From the day a machine arrives to every service visit after, Btonmed is the single partner behind your medical technology."
      >
        <a href={whatsappLink('Hello Btonmed, I would like to discuss a service request.')} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <FaWhatsapp className="h-[18px] w-[18px]" /> Request a service
        </a>
      </PageHeader>

      <section className="bg-surface py-24 lg:py-28">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text, points }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08} className="h-full">
              <article className="card card-hover group flex h-full flex-col p-8">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tint text-brand-fg transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-glow">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-sm font-semibold text-muted/60">0{i + 1}</span>
                </div>
                <h2 className="mt-6 text-xl font-bold text-fg">{title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{text}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[15px] text-fg">
                      <Check className="h-4 w-4 text-accent-fg" strokeWidth={3} /> {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Hello Btonmed, I would like to enquire about ${title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-fg"
                >
                  Enquire now <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.16} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-brand-600 p-8 text-white shadow-glow">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-600">
                  <MessagesSquare className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h2 className="mt-6 text-2xl font-bold">Not sure what you need?</h2>
                <p className="mt-3 leading-relaxed text-brand-100">
                  Send us the equipment name, a photo or the fault you are seeing. An engineer will advise you on the best next step.
                </p>
              </div>
              <a href={whatsappLink('Hello Btonmed, I need advice on my equipment.')} target="_blank" rel="noopener noreferrer" className="btn-wa mt-8">
                <FaWhatsapp className="h-5 w-5" /> Talk to an engineer
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Engineering />
      <Process />
      <CtaBand title="Keep your equipment running" text="Book a service visit, request a maintenance plan or get a repair quote today." message="Hello Btonmed, I would like to book a service visit." waLabel="Book a service visit" />
    </>
  )
}
