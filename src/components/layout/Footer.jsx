import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import logo from '../../assets/img/logo.png'
import { contact, mailProps, navLinks, services, whatsappLink } from '../../data/site'
import AppIcons from '../ui/AppIcons'
import Circuit from '../ui/Circuit'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <Circuit className="absolute -right-10 -top-6 w-96 text-brand-900" />
      <div className="glow-orb -left-20 bottom-0 h-72 w-72 bg-brand-600/30" />
      <div className="container relative py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block rounded-2xl bg-white px-5 py-3.5">
              <img src={logo} alt="Btonmed" className="h-9 w-auto" loading="lazy" />
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed">
              Medical equipment sales, leasing, servicing and calibration, plus hands-on biomedical engineering training.
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white">Follow us</p>
            <AppIcons className="mt-4" />
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">Pages</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.title}>
                  <Link to="/services" className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/academy" className="transition-colors hover:text-white">
                  Biomedical Engineering Bootcamp
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">Talk to us</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={contact.phoneHref} className="flex items-center gap-3 transition-colors hover:text-white">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-900 text-accent-200">
                    <Phone className="h-4 w-4" />
                  </span>
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a {...mailProps()} className="flex items-center gap-3 text-sm transition-colors hover:text-white">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-900 text-accent-200">
                    <Mail className="h-4 w-4" />
                  </span>
                  {contact.email}
                </a>
              </li>
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition-all hover:shadow-glow"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-brand-900 pt-8 text-sm sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Btonmed. All rights reserved.</p>
          <p className="text-brand-300">Innovation &middot; Skills &middot; Healthier Tomorrow</p>
        </div>
      </div>
    </footer>
  )
}
