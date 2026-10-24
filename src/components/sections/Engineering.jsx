import { CheckCircle2, Radiation, Activity, Waves, ScanSearch, Scan } from 'lucide-react'
import ctGantry from '../../assets/img/ct-gantry.jpg'
import cArm from '../../assets/img/c-arm.jpg'
import { engineeringCapabilities } from '../../data/site'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Circuit from '../ui/Circuit'

const modalities = [
  { icon: Scan, label: 'C-Arm' },
  { icon: Radiation, label: 'X-Ray' },
  { icon: Waves, label: 'Ultrasound' },
  { icon: Activity, label: 'Fluoroscopy' },
  { icon: ScanSearch, label: 'Mammography' },
]

export default function Engineering() {
  return (
    <section className="relative overflow-hidden bg-brand-600 py-24 text-white dark:bg-brand-950 lg:py-28">
      <Circuit className="absolute -left-10 bottom-0 w-[28rem] text-brand-500 dark:text-brand-900" />
      <div className="glow-orb right-0 top-0 hidden h-96 w-96 bg-brand-600/40 dark:block" />
      <div className="container relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3 overflow-hidden rounded-3xl border border-white/10">
              <img src={ctGantry} alt="Opened CT scanner gantry during servicing" loading="lazy" className="h-full min-h-[22rem] w-full object-cover" />
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <img src={cArm} alt="Mobile C-arm imaging system" loading="lazy" className="aspect-square w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-center rounded-3xl bg-accent-600 p-5 shadow-glow-accent">
                <p className="font-display text-xl font-extrabold leading-tight sm:text-2xl">Full service</p>
                <p className="mt-1 text-sm text-accent-50">Installation to calibration, one team.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            tone="dark"
            eyebrow="Biomedical engineering"
            title="Engineering support that keeps imaging online"
            text="Our engineers maintain, repair, calibrate and support medical imaging equipment so diagnostics stay accurate and patients are never kept waiting."
          />
          <Reveal delay={0.1}>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {engineeringCapabilities.map((c) => (
                <li key={c} className="flex items-start gap-3 text-brand-50">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-200" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 rounded-3xl border border-white/15 bg-brand-700 p-6 dark:bg-brand-900">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">Imaging specialists in</p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {modalities.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700">
                    <Icon className="h-4 w-4 text-accent-600" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
