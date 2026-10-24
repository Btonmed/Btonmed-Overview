import { CalendarDays, Check, GraduationCap, Layers, Mail, Building2, Users, TrendingUp, Wrench, ArrowUpRight, ArrowDown, ClipboardList } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import theatre from '../assets/img/theatre.jpg'
import theatreDialysis from '../assets/img/theatre-dialysis.jpg'
import ultrasoundFleet from '../assets/img/ultrasound-fleet.jpg'
import { academyEligibility, academyFacts, academyFaqs, academyIncludes, academyModules, academyHandTools, academyToolkit, mailProps, whatsappLink } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import Faq from '../components/ui/Faq'
import Circuit from '../components/ui/Circuit'
import CtaBand from '../components/ui/CtaBand'

const enrollMsg =
  'Hello Btonmed, I would like to enroll in the 3-month Advanced Biomedical Engineering Bootcamp (Ksh 60,000). Please share the next intake details.'

const perks = [
  { icon: GraduationCap, label: 'Expert instructors' },
  { icon: Building2, label: 'Modern facilities' },
  { icon: Users, label: 'Industry exposure' },
  { icon: TrendingUp, label: 'Better career prospects' },
]

const labs = [
  { image: theatre, label: 'Theatre equipment' },
  { image: theatreDialysis, label: 'Theatre & dialysis' },
  { image: ultrasoundFleet, label: 'Advanced imaging' },
]

function FactsCard() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 p-7 text-white shadow-glow-lg sm:p-8">
      <div className="glow-orb -right-16 -top-16 h-56 w-56 bg-brand-600/50" />
      <Circuit className="absolute -bottom-6 -right-4 w-56 text-brand-900" />
      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> Now enrolling
        </span>
        <dl className="mt-7 grid grid-cols-2 gap-3">
          {academyFacts.map((f) => (
            <div key={f.label} className="rounded-2xl border border-white/10 bg-brand-900 p-4">
              <dt className="text-xs font-medium uppercase tracking-wider text-brand-300">{f.label}</dt>
              <dd className="mt-1 font-display text-base font-bold min-[400px]:text-xl">{f.value}</dd>
            </div>
          ))}
        </dl>
        <a href={whatsappLink(enrollMsg)} target="_blank" rel="noopener noreferrer" className="btn-accent mt-6 w-full">
          <FaWhatsapp className="h-5 w-5" /> Reserve my seat
        </a>
      </div>
    </div>
  )
}

export default function Academy() {
  usePageMeta(
    'Biomedical Engineering Bootcamp',
    'Join the Btonmed Advanced Biomedical Engineering Program: a 3-month hands-on bootcamp for Ksh 60,000, from basic electronics to advanced imaging on real hospital equipment.',
  )
  return (
    <>
      <PageHeader
        crumb="Academy"
        eyebrow="Btonmed Academy"
        title="Advanced Biomedical Engineering Program"
        text="Join our imaging engineering program and learn with the best. Gain hands-on skills, work with cutting-edge technology and become part of a new generation of biomedical engineers."
        aside={<FactsCard />}
      >
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-fg">
          Design <span className="text-muted/50">/</span> Innovate <span className="text-muted/50">/</span> Improve lives
        </p>
        <a href="#requirements" className="btn-outline mt-7">
          <ClipboardList className="h-4 w-4" /> Check entry requirements <ArrowDown className="h-4 w-4" />
        </a>
      </PageHeader>

      {/* entry requirements */}
      <section id="requirements" className="bg-surface py-20 lg:py-24">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Entry requirements"
            title="Who can join, and what to bring"
            text="A quick checklist before you apply."
          />
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="card flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow">
                    <GraduationCap className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-fg">Who can join</h3>
                    <p className="text-sm text-muted">One of the following qualifications</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {academyEligibility.map(({ field, level }) => (
                    <li key={field} className="flex flex-col items-start gap-2 rounded-2xl border border-line bg-surface px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                      <span className="flex items-center gap-3 font-semibold text-fg">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-600 text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {field}
                      </span>
                      <span className="ml-8 shrink-0 rounded-full bg-tint px-3 py-1 text-xs font-semibold text-brand-fg sm:ml-0">{level}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-tint px-3.5 py-1.5 text-sm font-semibold text-accent-fg">
                    <CalendarDays className="h-4 w-4" /> 3 months
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-tint px-3.5 py-1.5 text-sm font-semibold text-accent-fg">
                    <Layers className="h-4 w-4" /> Theory + practical
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="h-full">
              <div className="card flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-600 text-white shadow-glow-accent">
                    <Wrench className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-fg">Recommended toolkit</h3>
                    <p className="text-sm text-muted">Bring these to practical sessions</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-4">
                  {academyToolkit.map(({ icon: Icon, title, text }) => (
                    <li key={title} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-tint text-brand-fg">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                      </span>
                      <span>
                        <span className="block font-semibold text-fg">{title}</span>
                        <span className="block text-sm text-muted">{text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-fg">Assorted hand tools</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {academyHandTools.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-fg">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-8 text-center">
            <a
              href={whatsappLink('Hello Btonmed, I would like to confirm whether I qualify for the bootcamp. My qualification is: ')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-fg underline-offset-4 hover:underline"
            >
              Not sure if you qualify? Ask us <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* curriculum */}
      <section className="bg-surface-soft py-24 lg:py-28">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Curriculum"
            title="From basic electronics to advanced imaging"
            text="Six practical modules that build real, job-ready biomedical engineering skills."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {academyModules.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.08} className="h-full">
                <div className="card card-hover group flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="font-display text-xs font-semibold uppercase tracking-wider text-muted">Module {i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-fg">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* pricing */}
      <section id="pricing" className="bg-surface py-24 lg:py-28">
        <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Pricing"
              title="One clear fee. Three months that change your career."
              text="Don't just be an engineer, be a skilled biomedical engineer. Everything you need to get hands-on and career ready is included."
            />
            <div className="mt-10 grid grid-cols-2 gap-3">
              {perks.map(({ icon: Icon, label }, i) => (
                <Reveal key={label} delay={i * 0.06}>
                  <div className="flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-4">
                    <Icon className="h-5 w-5 shrink-0 text-brand-fg" strokeWidth={1.75} />
                    <span className="text-sm font-semibold text-fg">{label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2.25rem] border-2 border-brand-600 bg-card p-6 shadow-glow-lg min-[400px]:p-8 sm:p-10">
              <span className="absolute right-6 top-6 rounded-full bg-accent-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                Limited seats
              </span>
              <p className="mt-8 flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-fg min-[400px]:mt-0">
                <CalendarDays className="h-5 w-5 text-accent-fg" /> 3 Months Boot Camp
              </p>
              <div className="mt-6 flex items-end gap-2">
                <span className="pb-2 font-display text-xl font-semibold text-muted">Ksh</span>
                <span className="font-display text-5xl font-extrabold leading-none tracking-tight text-fg min-[400px]:text-6xl sm:text-7xl">60,000</span>
              </div>
              <p className="mt-3 text-sm text-muted">Full program fee. Ask us about payment options.</p>
              <ul className="mt-8 space-y-3.5 border-t border-line pt-8">
                {academyIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-fg">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-600 text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-9 space-y-3">
                <a href={whatsappLink(enrollMsg)} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  <FaWhatsapp className="h-5 w-5" /> Reserve my seat on WhatsApp
                </a>
                <a
                  {...mailProps(
                    'Bootcamp enrollment enquiry',
                    'Hello Btonmed,\n\nI am interested in the 3-month Advanced Biomedical Engineering Bootcamp. Please share the next intake dates and requirements.\n\nName:\nPhone:\nQualification:\n',
                  )}
                  className="btn-outline w-full"
                >
                  <Mail className="h-4 w-4" /> Email admissions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* training areas */}
      <section className="bg-surface-soft py-24 lg:py-28">
        <div className="container">
          <SectionHeading eyebrow="Learn on real equipment" title="Train where the real work happens" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {labs.map(({ image, label }, i) => (
              <Reveal key={label} delay={i * 0.1}>
                <figure className="group relative overflow-hidden rounded-3xl border border-line">
                  <img src={image} alt={`Training area: ${label}`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-soft">
                    <Wrench className="h-3.5 w-3.5 text-accent-600" /> {label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-28">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Bootcamp FAQ" title="Questions before you enroll?" text="If you don't see your question here, message us and we will help." />
          </div>
          <div className="lg:col-span-8">
            <Faq items={academyFaqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Your biomedical engineering career starts here"
        text="Seats are limited for each intake. Reserve yours today and we will share the next start date."
        message={enrollMsg}
        waLabel="Reserve my seat"
      />
    </>
  )
}
