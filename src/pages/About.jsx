import { Check } from 'lucide-react'
import ctGantry from '../assets/img/ct-gantry.jpg'
import ultrasound from '../assets/img/ultrasound-philips.jpg'
import { services, values, whyUs } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import Pulse from '../components/ui/Pulse'
import CtaBand from '../components/ui/CtaBand'

export default function About() {
  usePageMeta(
    'About',
    'Btonmed is a biomedical equipment marketplace and engineering services company helping healthcare facilities access and maintain reliable medical technology.',
  )
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="About Btonmed"
        title="Reliable medical technology for a healthier tomorrow"
        text="Btonmed is a biomedical equipment marketplace and engineering services company specialising in the leasing, sales, servicing and maintenance of medical equipment."
      />

      <section className="bg-surface py-24 lg:py-28">
        <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-line bg-card p-2.5 shadow-glow-lg">
              <img src={ctGantry} alt="CT scanner gantry during servicing" loading="lazy" className="aspect-[4/5] w-full rounded-[1.6rem] object-cover" />
            </div>
            <div className="absolute -bottom-8 right-3 w-64 max-w-[calc(100%-1.5rem)] lg:-right-8 animate-float rounded-3xl border border-line bg-card p-5 shadow-lift">
              <Pulse className="h-8 w-full text-accent-fg" />
              <p className="mt-3 font-display text-lg font-bold leading-snug text-fg">Innovation. Skills. Healthier tomorrow.</p>
            </div>
            <img src={ultrasound} alt="" className="absolute -left-4 top-8 hidden w-32 rounded-2xl border-4 border-surface shadow-lift sm:block" />
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="We help healthcare facilities access reliable technology, and keep it working"
              text="Healthcare runs on technology. We provide biomedical engineering services, including maintenance, repairs, calibration and technical support, for medical imaging equipment such as C-arms, X-ray machines, ultrasound systems, fluoroscopy and mammography equipment."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.title} className="flex items-center gap-3 text-fg">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-fg">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {s.title}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-24 lg:py-28">
        <div className="container">
          <SectionHeading align="center" eyebrow="What drives us" title="Innovation. Skills. Healthier tomorrow." />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.1} className="h-full">
                <div className="card card-hover h-full p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-glow">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-fg">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-28">
        <div className="container">
          <SectionHeading align="center" eyebrow="Why Btonmed" title="A partner invested in your success" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="h-full">
                <div className="h-full border-l-2 border-brand-600 pl-6">
                  <span className="font-display text-sm font-bold text-accent-fg">0{i + 1}</span>
                  <h3 className="mt-2 text-lg font-bold text-fg">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
