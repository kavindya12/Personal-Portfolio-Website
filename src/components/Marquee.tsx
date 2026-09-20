type MarqueeProps = {
  items: readonly string[]
}

export function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-white/10 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#070b14] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#070b14] to-transparent" />
      <div className="marquee-track flex w-max gap-10 pr-10">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-xs tracking-[0.2em] text-muted/80 uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
