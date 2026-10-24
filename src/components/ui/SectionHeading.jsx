import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, text, align = 'left', tone = 'auto', className = '' }) {
  const onDark = tone === 'dark'
  return (
    <Reveal className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      <span className={`eyebrow ${onDark ? '!text-accent-200' : ''}`}>
        <span className={`h-px w-8 ${onDark ? 'bg-accent-200' : 'bg-accent-fg'}`} />
        {eyebrow}
      </span>
      <h2 className={`mt-4 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.6rem] ${onDark ? 'text-white' : 'text-fg'}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${onDark ? 'text-brand-100' : 'text-muted'}`}>{text}</p>}
    </Reveal>
  )
}
