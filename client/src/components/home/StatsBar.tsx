import { Container } from '../ui/Container';
import { useEffect, useMemo, useRef, useState } from 'react';

const STATS = [
  { value: '10,000+', label: 'Patients Treated' },
  { value: '15+', label: 'Years Excellence' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '30+', label: 'Countries Served' },
] as const;

type Stat = (typeof STATS)[number];

function parseStatValue(value: string) {
  const match = value.match(/^([\d,.]+)(.*)$/);
  if (!match) return { target: 0, decimals: 0, suffix: '' };
  const rawNumber = match[1].replace(/,/g, '');
  const target = Number(rawNumber);
  const decimals = rawNumber.includes('.') ? rawNumber.split('.')[1].length : 0;
  const suffix = match[2] ?? '';
  return { target: Number.isFinite(target) ? target : 0, decimals, suffix };
}

function formatNumber(n: number, decimals: number) {
  if (decimals > 0) return n.toFixed(decimals);
  return Math.round(n).toLocaleString();
}

export function StatsBar() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  }, []);

  const parsed = useMemo(() => STATS.map((s) => parseStatValue(s.value)), []);
  const [display, setDisplay] = useState(() => parsed.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!hostRef.current) return;
    if (started) return;

    const el = hostRef.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setStarted(true);
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (reducedMotion) {
      setDisplay(parsed.map((p) => p.target));
      return;
    }

    const durationMs = 1200;
    const start = performance.now();

    let raf = 0;
    function tick(now: number) {
      const t = Math.min(1, (now - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(parsed.map((p) => p.target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [parsed, reducedMotion, started]);

  return (
    <section ref={hostRef} className="relative z-20 -mt-10 pb-6 md:-mt-16 md:pb-10">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl border border-outline-variant/40 bg-surface-container-lowest shadow-[0_32px_60px_-36px_rgba(0,0,0,0.45)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(700px 240px at 15% 10%, rgba(255,255,255,0.25), transparent 60%), radial-gradient(700px 240px at 85% 90%, rgba(255,255,255,0.18), transparent 55%)',
            }}
          />
          <div className="relative grid grid-cols-2 gap-6 px-6 py-8 text-center md:grid-cols-4 md:gap-8 md:px-10">
            {STATS.map((s: Stat, i) => (
              <div key={s.label} className="space-y-1">
                <div className="tabular-nums text-3xl font-semibold text-on-surface md:text-4xl">
                  {formatNumber(display[i] ?? 0, parsed[i]?.decimals ?? 0)}
                  {parsed[i]?.suffix ?? ''}
                </div>
                <div className="text-sm uppercase tracking-widest text-on-surface-variant/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

