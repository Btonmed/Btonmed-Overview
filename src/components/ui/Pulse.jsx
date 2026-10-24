// ECG trace motif used as a quiet brand accent
export default function Pulse({ className = '', color = 'currentColor', animated = true }) {
  return (
    <svg viewBox="0 0 300 60" fill="none" className={className} aria-hidden="true">
      <path
        d="M0 30 H80 L92 30 L100 12 L110 50 L120 4 L132 56 L142 30 H190 L198 22 L206 30 H300"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="600"
        className={animated ? 'animate-trace' : ''}
      />
    </svg>
  )
}
