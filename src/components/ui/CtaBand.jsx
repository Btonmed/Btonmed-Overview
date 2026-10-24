import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { contact, whatsappLink } from '../../data/site'
import Reveal from './Reveal'
import Circuit from './Circuit'
import Pulse from './Pulse'

export default function CtaBand({
  title = 'Ready to equip, fix or upgrade?',
  text = 'Tell us what you need and our engineers will recommend the right equipment, plan or repair for your facility.',
  message = 'Hello Btonmed, I would like to make an enquiry.',
  waLabel = 'Chat with us on WhatsApp',
}) {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-brand-600 px-6 py-14 text-center text-white shadow-glow-lg sm:px-12 lg:py-20">
            <Circuit className="absolute -left-10 -top-6 w-72 text-brand-500" />
            <Circuit className="absolute -bottom-10 -right-6 w-72 rotate-180 text-brand-500" />
            <div className="relative mx-auto max-w-2xl">
              <Pulse className="mx-auto h-10 w-48 text-accent-200" />
              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-100">{text}</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn-wa">
                  <FaWhatsapp className="h-5 w-5" /> {waLabel}
                </a>
                <a href={contact.phoneHref} className="btn border border-white/30 text-white hover:border-white hover:bg-white/10">
                  <Phone className="h-4 w-4" /> {contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
