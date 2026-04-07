import type { ComponentProps } from 'react'

type Props = ComponentProps<'span'> & {
  name: string
  filled?: boolean
}

export function MaterialIcon({ name, filled = false, className = '', ...rest }: Props) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={
        filled
          ? ({ fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' } as const)
          : undefined
      }
      aria-hidden="true"
      {...rest}
    >
      {name}
    </span>
  )
}

