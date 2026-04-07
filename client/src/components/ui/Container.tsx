import type { PropsWithChildren } from 'react'

export function Container({
  children,
  className = '',
}: PropsWithChildren<{ className?: string }>) {
  return <div className={`max-w-screen-2xl mx-auto px-6 ${className}`}>{children}</div>
}

