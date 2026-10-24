import { Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { mailProps, whatsappLink } from '../../data/site'
import Circuit from './Circuit'

export default function EquipmentCard({ item }) {
  const Icon = item.icon
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-tint">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Circuit className="absolute -bottom-4 -right-6 w-64 text-brand-200 dark:text-brand-800" />
            <span className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-600 text-white shadow-glow transition-transform duration-700 group-hover:scale-110">
              <Icon className="h-11 w-11" strokeWidth={1.5} />
            </span>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-soft">
          {item.category}
        </span>
        {item.credit && (
          <a
            href={item.credit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 rounded bg-black/55 px-1.5 py-0.5 text-[10px] text-white/90 hover:bg-black/75"
          >
            {item.credit.text}
          </a>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-fg">{item.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{item.text}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <li key={t} className="rounded-md bg-accent-tint px-2.5 py-1 text-xs font-medium text-accent-fg">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-2 border-t border-line pt-5">
          <a
            href={whatsappLink(`Hello Btonmed, I am interested in ${item.name}. Please share more details and pricing.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-glow"
          >
            <FaWhatsapp className="h-4 w-4" /> Get price
          </a>
          <a
            {...mailProps(`Enquiry: ${item.name}`, `Hello Btonmed,\n\nI am interested in ${item.name}. Please share more details and pricing.\n\nFacility:\nLocation:\nPhone:\n`)}
            aria-label={`Email us about ${item.name}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-brand-fg transition-colors hover:border-brand-600 hover:bg-tint"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  )
}
