import { useId } from 'react'
import { FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa6'
import { socials, whatsappLink } from '../../data/site'

// App-store style icons that mirror each platform's real app icon.

function InstagramGlyph() {
  const id = useId()
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id={`${id}a`} cx="0.28" cy="1.05" r="1.15">
          <stop offset="0" stopColor="#FFDD55" />
          <stop offset="0.12" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient id={`${id}b`} cx="-0.15" cy="0.05" r="0.6">
          <stop offset="0" stopColor="#3771C8" />
          <stop offset="0.13" stopColor="#3771C8" />
          <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill={`url(#${id}a)`} />
      <rect width="48" height="48" rx="13" fill={`url(#${id}b)`} />
      <rect x="11" y="11" width="26" height="26" rx="8" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="24" cy="24" r="6.2" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="31.6" cy="16.4" r="1.9" fill="#fff" />
    </svg>
  )
}

function Tile({ className, children }) {
  return <span className={`flex h-full w-full items-center justify-center rounded-[28%] ${className}`}>{children}</span>
}

const apps = [
  {
    label: 'Instagram',
    href: socials.instagram,
    glow: 'hover:shadow-[0_10px_30px_-6px_rgba(225,48,108,0.7)]',
    render: () => <InstagramGlyph />,
  },
  {
    label: 'Facebook',
    href: socials.facebook,
    glow: 'hover:shadow-[0_10px_30px_-6px_rgba(8,102,255,0.7)]',
    render: () => (
      <Tile className="bg-[#0866FF] text-white">
        <FaFacebookF className="h-[55%] w-[55%] translate-y-[8%]" />
      </Tile>
    ),
  },
  {
    label: 'TikTok',
    href: socials.tiktok,
    glow: 'hover:shadow-[0_10px_30px_-6px_rgba(254,44,85,0.6)]',
    render: () => (
      <Tile className="relative bg-black">
        <FaTiktok className="absolute h-[52%] w-[52%] -translate-x-[3%] -translate-y-[3%] text-[#25F4EE]" />
        <FaTiktok className="absolute h-[52%] w-[52%] translate-x-[3%] translate-y-[3%] text-[#FE2C55]" />
        <FaTiktok className="relative h-[52%] w-[52%] text-white" />
      </Tile>
    ),
  },
  {
    label: 'WhatsApp',
    href: whatsappLink(),
    glow: 'hover:shadow-glow-wa',
    render: () => (
      <Tile className="bg-[#25D366] text-white">
        <FaWhatsapp className="h-[62%] w-[62%]" />
      </Tile>
    ),
  },
]

const sizes = { sm: 'h-8 w-8', md: 'h-11 w-11', lg: 'h-14 w-14' }

export default function AppIcons({ size = 'md', className = '', labels = false }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {apps.map(({ label, href, render, glow }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Btonmed on ${label}`}
            title={label}
            className="group flex flex-col items-center gap-1.5"
          >
            <span className={`block overflow-hidden rounded-[28%] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 ${glow} ${sizes[size]}`}>
              {render()}
            </span>
            {labels && <span className="text-xs font-medium text-muted group-hover:text-fg">{label}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
