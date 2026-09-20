type SectionTitleProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  index?: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  index,
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : ''

  return (
    <div className={`relative mb-16 flex max-w-3xl flex-col ${alignment}`}>
      {index ? (
        <span className="pointer-events-none absolute -top-10 left-0 font-display text-[6.5rem] leading-none font-medium text-white/5 select-none md:-top-12 md:text-[8rem]">
          {index}
        </span>
      ) : null}
      <p className="relative text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display relative mt-4 text-4xl font-medium tracking-tight text-foreground md:text-5xl md:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="relative mt-4 max-w-xl text-base leading-7 text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  )
}
