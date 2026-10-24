import { useState } from 'react'
import { Send, ChevronDown } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { mailLink, whatsappLink } from '../../data/site'

const interests = [
  'Equipment sales',
  'Equipment leasing',
  'Servicing & repairs',
  'Maintenance & calibration',
  'Technical support',
  'Bootcamp enrollment',
]

const field =
  'w-full rounded-xl border border-line bg-surface px-4 py-3.5 text-base text-fg placeholder:text-muted/70 transition focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/15'

export default function ContactForm({ defaultInterest = interests[0] }) {
  const [form, setForm] = useState({ name: '', phone: '', facility: '', interest: defaultInterest, message: '' })
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const compose = () =>
    [
      `Hello Btonmed, my name is ${form.name}.`,
      form.facility && `Facility / organisation: ${form.facility}`,
      form.phone && `Phone: ${form.phone}`,
      `Interested in: ${form.interest}`,
      '',
      form.message,
    ]
      .filter((l) => l !== false && l !== '')
      .join('\n')

  const onSubmit = (e) => {
    e.preventDefault()
    const via = e.nativeEvent.submitter?.value
    if (via === 'email') {
      const url = mailLink(`Enquiry: ${form.interest}`, compose())
      if (url.startsWith('http')) window.open(url, '_blank', 'noopener')
      else window.location.href = url
    } else window.open(whatsappLink(compose()), '_blank', 'noopener')
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-10">
      <h2 className="text-2xl font-bold text-fg">Send an enquiry</h2>
      <p className="mt-2 text-muted">Fill in your details and send them straight to us on WhatsApp or email.</p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-fg">Full name *</span>
          <input required value={form.name} onChange={update('name')} className={field} placeholder="Your name" autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-fg">Phone number</span>
          <input value={form.phone} onChange={update('phone')} className={field} placeholder="+254 7XX XXX XXX" type="tel" autoComplete="tel" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-fg">Facility / organisation</span>
          <input value={form.facility} onChange={update('facility')} className={field} placeholder="Hospital, clinic or institution" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-fg">I'm interested in</span>
          <span className="relative block">
            <select value={form.interest} onChange={update('interest')} className={`${field} appearance-none pr-11`}>
              {interests.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-fg" />
          </span>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-fg">Message *</span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={update('message')}
            className={`${field} resize-none`}
            placeholder="Tell us about the equipment, model, fault or what you would like to learn."
          />
        </label>
      </div>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button type="submit" value="whatsapp" className="btn-primary flex-1">
          <FaWhatsapp className="h-5 w-5" /> Send via WhatsApp
        </button>
        <button type="submit" value="email" className="btn-outline flex-1">
          <Send className="h-4 w-4" /> Send via email
        </button>
      </div>
    </form>
  )
}
