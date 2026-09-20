import { BlurFade } from './magicui/blur-fade'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <BlurFade className={className} delay={delay} inView offset={22} blur="10px" duration={0.65}>
      {children}
    </BlurFade>
  )
}
