import { Mail, Phone, Clock } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { contact, faqs, mailLink, whatsappLink } from '../data/site'
import usePageMeta from '../hooks/usePageMeta'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import AppIcons from '../components/ui/AppIcons'
import Faq from '../components/ui/Faq'
import ContactForm from '../components/sections/ContactForm'

const channels = [
  { icon: FaWhatsapp, title: 'WhatsApp', value: contact.phoneDisplay, note: 'Fastest response', href: whatsappLink(), color: 'bg-[#25D366]', glow: 'hover:shadow-glow-wa' },
  { icon: Phone, title: 'Call us', value: contact.phoneDisplay, note: 'Talk to our team', href: contact.phoneHref, color: 'bg-brand-600', glow: 'hover:shadow-glow' },
  { icon: Mail, title: 'Email', value: contact.email, note: 'Quotes & documents', href: mailLink(), color: 'bg-accent-600', glow: 'hover:shadow-glow-accent' },
]

export default function Contact() {
  usePageMeta('Contact', 'Contact Btonmed on WhatsApp, phone or email for medical equipment quotes, service requests and bootcamp enrollment.')
  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Contact"
        title="Let's keep your facility running"
        text="Enquiries, quotations, service requests or bootcamp enrollment. Reach us on the channel that suits you best."
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {channels.map(({ icon: Icon, title, value, note, href, color, glow }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <a
                  href={href}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`card group flex h-full items-center gap-4 p-6 hover:-translate-y-1 ${glow}`}
                >
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white transition-transform duration-500 group-hover:scale-110 ${color}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted">{note}</span>
                    <span className="mt-0.5 block font-display text-lg font-bold text-fg">{title}</span>
                    <span className="block text-sm text-brand-fg [overflow-wrap:anywhere]">{value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <ContactForm />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-brand-600 p-8 text-white shadow-glow sm:p-10 dark:bg-brand-900">
                <div className="glow-orb -right-16 -top-16 h-56 w-56 bg-white/20" />
                <h2 className="relative text-2xl font-bold">Prefer a quick chat?</h2>
                <p className="relative mt-3 leading-relaxed text-brand-100">
                  Message us on WhatsApp with a photo of the equipment or fault and our engineers will get back to you.
                </p>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-wa relative mt-7">
                  <FaWhatsapp className="h-5 w-5" /> Start WhatsApp chat
                </a>
                <div className="relative mt-8 flex items-start gap-3 rounded-2xl bg-brand-700 p-5 dark:bg-brand-950">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-200" />
                  <p className="text-sm leading-relaxed text-brand-100">For urgent equipment breakdowns, calling is the fastest route.</p>
                </div>
                <div className="relative mt-auto pt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">Follow our work</p>
                  <AppIcons size="lg" labels className="mt-4 gap-3 min-[400px]:gap-5 [&_span.text-muted]:text-brand-100" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-24 lg:py-28">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Questions, answered" text="Can't find what you are looking for? Our team is one message away." />
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}
