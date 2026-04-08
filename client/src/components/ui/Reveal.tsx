import type { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  variant?: 'fade' | 'slide-up' | 'slide-up-lg' | 'slide-left' | 'slide-right' | 'scale'
}>

export function Reveal({ children, className, delay = 0, variant = 'slide-up' }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) return <>{children}</>

  const initial =
    variant === 'fade'
      ? { opacity: 0 }
      : variant === 'slide-left'
        ? { opacity: 0, x: -20 }
        : variant === 'slide-right'
          ? { opacity: 0, x: 20 }
          : variant === 'slide-up-lg'
            ? { opacity: 0, y: 42 }
          : variant === 'scale'
            ? { opacity: 0, scale: 0.96, y: 10 }
            : { opacity: 0, y: 22 }

  const animate =
    variant === 'fade'
      ? { opacity: 1 }
      : variant === 'slide-left' || variant === 'slide-right'
        ? { opacity: 1, x: 0 }
        : variant === 'scale'
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 1, y: 0 }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

