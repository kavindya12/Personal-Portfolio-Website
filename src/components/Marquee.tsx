type MarqueeProps = {
  items: readonly string[]
}

export function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div className="relative w-full min-w-0 overflow-hidden border-y border-white/10 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#070b14] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#070b14] to-transparent sm:w-24" />
      <div className="min-w-0 overflow-hidden">
        <div className="marquee-track flex w-max gap-8 pr-8 sm:gap-10 sm:pr-10">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="shrink-0 text-[10px] tracking-[0.16em] text-muted/80 uppercase sm:text-xs sm:tracking-[0.2em]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
