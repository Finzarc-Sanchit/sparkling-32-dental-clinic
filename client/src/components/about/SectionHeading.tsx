type SectionHeadingProps = {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-on-surface mb-4">{title}</h2>
      <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      {subtitle ? <p className="mt-6 text-on-surface-variant max-w-2xl mx-auto">{subtitle}</p> : null}
    </div>
  )
}

