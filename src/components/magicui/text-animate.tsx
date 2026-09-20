import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { cn } from '../../lib/cn'
import { easeOut } from '../../lib/motion'

type TextAnimateProps = {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
  by?: 'word' | 'line' | 'text'
  startOnView?: boolean
  once?: boolean
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: easeOut },
  },
}

export function TextAnimate({
  children,
  className,
  as: Tag = 'p',
  delay = 0,
  by = 'word',
  startOnView = true,
  once = true,
}: TextAnimateProps) {
  const reduceMotion = useReducedMotion()
  const MotionTag =
    Tag === 'h1'
      ? motion.h1
      : Tag === 'h2'
        ? motion.h2
        : Tag === 'h3'
          ? motion.h3
          : Tag === 'span'
            ? motion.span
            : motion.p

  const segments =
    by === 'word' ? children.split(/(\s+)/) : by === 'line' ? children.split('\n') : [children]

  if (reduceMotion) {
    const ReducedTag = Tag
    return (
      <ReducedTag className={className}>
        {by === 'line' ? children.split('\n').map((line) => <span key={line} className="block">{line}</span>) : children}
      </ReducedTag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate={startOnView ? undefined : 'show'}
      whileInView={startOnView ? 'show' : undefined}
      viewport={{ once, margin: '-40px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: by === 'word' ? 0.045 : 0.12,
            delayChildren: delay,
          },
        },
      }}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          variants={itemVariants}
          className={cn(
            by === 'line' ? 'block' : segment.trim() ? 'inline-block' : undefined,
          )}
        >
          {segment === ' ' ? '\u00A0' : segment}
        </motion.span>
      ))}
    </MotionTag>
  )
}
