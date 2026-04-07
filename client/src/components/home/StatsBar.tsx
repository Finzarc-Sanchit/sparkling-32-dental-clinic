import { Container } from '../ui/Container'

const STATS = [
  { value: '10,000+', label: 'Patients Treated' },
  { value: '15+', label: 'Years Excellence' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '30+', label: 'Countries Served' },
] as const

export function StatsBar() {
  return (
    <div className="bg-primary text-on-primary py-8 overflow-hidden">
      <Container className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="text-3xl md:text-4xl font-extrabold mb-1">{s.value}</div>
            <div className="text-primary-fixed text-sm opacity-90 uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </Container>
    </div>
  )
}

