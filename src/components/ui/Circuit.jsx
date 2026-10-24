// Circuit-trace motif echoing the Btonmed logo
export default function Circuit({ className = '', color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 240 160" fill="none" className={className} aria-hidden="true" stroke={color} strokeWidth="2" strokeLinecap="round">
      <path d="M0 120 H70 L95 95 H150" />
      <path d="M20 140 H90 L110 120 H200" />
      <path d="M40 100 H60 L85 75 H120 L140 55 H190" />
      <path d="M100 75 V30 H130" />
      <path d="M140 55 V15" />
      <path d="M160 95 H230" />
      <circle cx="150" cy="95" r="5" />
      <circle cx="200" cy="120" r="5" />
      <circle cx="190" cy="55" r="5" />
      <circle cx="130" cy="30" r="5" />
      <circle cx="140" cy="10" r="5" />
      <circle cx="235" cy="95" r="4" />
    </svg>
  )
}
