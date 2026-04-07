type Props = {
  title: string
  subtitle?: string
}

export function NriSectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-on-surface mb-4">{title}</h2>
      <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
      {subtitle ? <p className="mt-4 text-on-surface-variant max-w-xl mx-auto">{subtitle}</p> : null}
    </div>
  )
}

