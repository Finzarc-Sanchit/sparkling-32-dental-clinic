import { cn } from '@/lib/utils'
import * as React from 'react'

type BlogCardT = {
  image: string
  title: string
  category: string
}

const DEFAULT_BLOG_CARDS: BlogCardT[] = [
  {
    image:
      'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&h=800&auto=format&fit=crop&q=60',
    title: 'Color Psychology in UI: How to Choose the Right Palette',
    category: 'UI/UX design',
  },
  {
    image:
      'https://images.unsplash.com/photo-1714974528646-ea024a3db7a7?w=1200&h=800&auto=format&fit=crop&q=60',
    title: 'Understanding Typography: Crafting a Visual Voice for Your Brand',
    category: 'Branding',
  },
  {
    image:
      'https://images.unsplash.com/photo-1713947501966-34897f21162e?w=1200&h=800&auto=format&fit=crop&q=60',
    title: 'Design Thinking in Practice: How to Solve Real User Problems',
    category: 'Product Design',
  },
]

export function BlogCards({
  title = 'Latest Blog',
  subtitle = 'Stay ahead of the curve with fresh content on code, design, startups, and everything in between.',
  cards = DEFAULT_BLOG_CARDS,
  className,
}: {
  title?: string
  subtitle?: string
  cards?: BlogCardT[]
  className?: string
}) {
  return (
    <div className={cn('flex w-full flex-col items-center', className)}>
      <div className="text-center">
        <h2 className="text-on-surface">{title}</h2>
        <p className="mt-2 max-w-lg text-center text-on-surface-variant">{subtitle}</p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {cards.map((c) => (
          <article
            key={c.title}
            className="w-full max-w-72 transition duration-300 hover:-translate-y-0.5"
          >
            <img
              className="aspect-[3/2] w-full rounded-2xl object-cover ring-1 ring-outline-variant/25"
              src={c.image}
              alt=""
              loading="lazy"
            />
            <h3 className="mt-3 text-on-surface">{c.title}</h3>
            <p className="mt-1 text-xs font-semibold text-primary">{c.category}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

type CardT = {
  image: string
  name: string
  handle: string
  date?: string
}

const DEFAULT_DATA: CardT[] = [
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    name: 'Briar Martin',
    handle: '@neilstellar',
  },
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    name: 'Avery Johnson',
    handle: '@averywrites',
  },
  {
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
    name: 'Jordan Lee',
    handle: '@jordantalks',
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
    name: 'Avery Johnson',
    handle: '@averywrites',
  },
]

function VerifyIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 48 48"
      className={cn('inline-block', className)}
      aria-hidden
    >
      <polygon
        fill="var(--color-info)"
        points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
      />
      <polygon
        fill="#fff"
        points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
      />
    </svg>
  )
}

function MarqueeCard({ card }: { card: CardT }) {
  return (
    <div className="mx-4 w-72 shrink-0 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest/85 p-5 shadow-sm backdrop-blur transition-shadow duration-200 hover:shadow-md">
      <div className="flex gap-3">
        <img className="size-11 rounded-full object-cover ring-1 ring-outline-variant/25" src={card.image} alt={card.name} />
        <div className="flex min-w-0 flex-col">
          <div className="flex items-center gap-1">
            <p className="font-semibold text-on-surface truncate">{card.name}</p>
            <VerifyIcon />
          </div>
          <span className="text-xs text-on-surface-variant">{card.handle}</span>
        </div>
      </div>
      <p className="pt-4 text-sm text-on-surface-variant">
        Radiant made undercutting all of our competitors an absolute breeze.
      </p>
    </div>
  )
}

function MarqueeRow({
  data,
  reverse = false,
  speedSeconds = 25,
}: {
  data: CardT[]
  reverse?: boolean
  speedSeconds?: number
}) {
  return (
    <div className="relative mx-auto w-full max-w-screen-2xl overflow-hidden isolation-isolate">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-surface-container-low to-transparent blur-md md:w-32" />
      <div
        className={cn('flex w-max transform-gpu', reverse ? 'pt-5 pb-10' : 'pt-10 pb-5')}
        style={{
          animation: `ui-marquee-scroll ${speedSeconds}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="flex">
          {data.map((c, i) => (
            <MarqueeCard key={`a-${i}`} card={c} />
          ))}
        </div>
        <div className="flex" aria-hidden>
          {data.map((c, i) => (
            <MarqueeCard key={`b-${i}`} card={c} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-surface-container-low to-transparent blur-md md:w-32" />
    </div>
  )
}

export function CardsMarquee({
  row1 = DEFAULT_DATA,
  row2 = DEFAULT_DATA,
  className,
}: {
  row1?: CardT[]
  row2?: CardT[]
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <style>{`
        @keyframes ui-marquee-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <MarqueeRow data={row1} reverse={false} speedSeconds={25} />
      <MarqueeRow data={row2} reverse={true} speedSeconds={25} />
    </div>
  )
}

export function CardsSequenceCarousel({
  cards = DEFAULT_DATA,
  className,
  intervalMs = 3500,
  cardWidthPx = 288,
  gapPx = 10,
  visibleOffsets = 4,
}: {
  cards?: CardT[]
  className?: string
  intervalMs?: number
  cardWidthPx?: number
  gapPx?: number
  visibleOffsets?: number
}) {
  const len = cards.length
  const [active, setActive] = React.useState(0)
  const pausedRef = React.useRef(false)
  const resumeTimerRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    if (len <= 1) return
    const id = window.setInterval(() => {
      if (pausedRef.current) return
      setActive((i) => (i + 1) % len)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs, len])

  React.useEffect(() => {
    return () => {
      if (resumeTimerRef.current != null) window.clearTimeout(resumeTimerRef.current)
    }
  }, [])

  const offsets = React.useMemo(() => {
    const out: number[] = []
    for (let o = -visibleOffsets; o <= visibleOffsets; o++) out.push(o)
    return out
  }, [visibleOffsets])

  const step = cardWidthPx + gapPx

  function pause() {
    pausedRef.current = true
    if (resumeTimerRef.current != null) window.clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = null
  }

  function resumeSoon() {
    if (resumeTimerRef.current != null) window.clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false
      resumeTimerRef.current = null
    }, 900)
  }

  return (
    <div
      className={cn('relative mx-auto w-full max-w-screen-2xl overflow-hidden', className)}
      onMouseEnter={pause}
      onMouseLeave={() => {
        pausedRef.current = false
      }}
      onTouchStart={pause}
      onTouchEnd={resumeSoon}
      onTouchCancel={resumeSoon}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-container-low to-transparent blur-md md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-container-low to-transparent blur-md md:w-40" />

      <div className="relative h-[220px] md:h-[240px]">
        {offsets.map((o) => {
          if (len === 0) return null
          const idx = ((active + o) % len + len) % len
          const abs = Math.abs(o)

          const scale = abs === 0 ? 1.07 : abs === 1 ? 0.95 : abs === 2 ? 0.87 : abs === 3 ? 0.8 : 0.74
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.75 : abs === 2 ? 0.55 : abs === 3 ? 0.35 : 0.2
          const blur = abs === 0 ? 0 : abs === 1 ? 0.25 : abs === 2 ? 0.5 : abs === 3 ? 0.9 : 1.2
          const z = 50 - abs

          return (
            <div
              key={o}
              className="absolute left-1/2 top-1/2 transition-[transform,opacity,filter] duration-450 ease-out"
              style={{
                transform: `translate(-50%, -50%) translateX(${o * step}px) scale(${scale})`,
                opacity,
                filter: `blur(${blur}px)`,
                zIndex: z,
              }}
              aria-hidden={o !== 0}
            >
              <MarqueeCard card={cards[idx]} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function CardsSpotlightCarousel({
  cards = DEFAULT_DATA,
  className,
  intervalMs = 3500,
  transitionMs = 450,
  stepPx = 320,
  arrowsPosition = 'sides',
}: {
  cards?: CardT[]
  className?: string
  intervalMs?: number
  transitionMs?: number
  stepPx?: number
  arrowsPosition?: 'sides' | 'top-right'
}) {
  const len = cards.length
  const tripled = React.useMemo(() => [...cards, ...cards, ...cards], [cards])
  const startIndex = len // middle copy

  const [index, setIndex] = React.useState(startIndex)
  const [animate, setAnimate] = React.useState(true)
  const pausedRef = React.useRef(false)
  const wrapTimerRef = React.useRef<number | null>(null)

  function goNext() {
    if (len <= 1) return
    setAnimate(true)
    setIndex((i) => i + 1)
  }

  function goPrev() {
    if (len <= 1) return
    setAnimate(true)
    setIndex((i) => i - 1)
  }

  React.useEffect(() => {
    if (len <= 1) return
    const id = window.setInterval(() => {
      if (pausedRef.current) return
      goNext()
    }, intervalMs)
    return () => window.clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, len])

  const normalizeToMiddle = React.useCallback(
    (i: number) => {
      if (len <= 0) return i
      const normalized = ((i - len) % len + len) % len
      return normalized + len
    },
    [len],
  )

  const maybeWrap = React.useCallback(() => {
    // Keep index within [len, 2*len) (the middle copy), so it never drifts off-screen.
    if (len <= 1) return
    if (index < len || index >= len * 2) {
      const target = normalizeToMiddle(index)
      if (target !== index) {
        setAnimate(false)
        setIndex(target)
      }
    }
  }, [index, len, normalizeToMiddle])

  // Fallback: if transitionend is missed (it happens), still wrap safely.
  React.useEffect(() => {
    if (!animate || len <= 1) return
    if (wrapTimerRef.current != null) window.clearTimeout(wrapTimerRef.current)
    wrapTimerRef.current = window.setTimeout(() => {
      wrapTimerRef.current = null
      maybeWrap()
    }, transitionMs + 60)
    return () => {
      if (wrapTimerRef.current != null) window.clearTimeout(wrapTimerRef.current)
      wrapTimerRef.current = null
    }
  }, [animate, index, len, maybeWrap, transitionMs])

  // Re-enable animation on the next frame after a non-animated index correction.
  React.useEffect(() => {
    if (animate) return
    const id = window.requestAnimationFrame(() => setAnimate(true))
    return () => window.cancelAnimationFrame(id)
  }, [animate])

  // Hard guard: even if all events/timeouts are missed, never allow drift.
  React.useEffect(() => {
    if (len <= 1) return
    if (index < len || index >= len * 2) {
      setAnimate(false)
      setIndex(normalizeToMiddle(index))
    }
  }, [index, len, normalizeToMiddle])

  return (
    <div
      className={cn('relative mx-auto w-full max-w-screen-2xl overflow-hidden', className)}
      onMouseEnter={() => {
        pausedRef.current = true
      }}
      onMouseLeave={() => {
        pausedRef.current = false
      }}
      onTouchStart={() => {
        pausedRef.current = true
      }}
      onTouchEnd={() => {
        pausedRef.current = false
      }}
      onTouchCancel={() => {
        pausedRef.current = false
      }}
    >
      <style>{`
        .ui-spotlight-card[data-distance="0"] { transform: scale(1.07); opacity: 1; filter: blur(0px); }
        .ui-spotlight-card[data-distance="1"] { transform: scale(0.96); opacity: 0.78; filter: blur(0.25px); }
        .ui-spotlight-card[data-distance="2"] { transform: scale(0.88); opacity: 0.58; filter: blur(0.55px); }
        .ui-spotlight-card[data-distance="3"] { transform: scale(0.81); opacity: 0.38; filter: blur(0.95px); }
        .ui-spotlight-card[data-distance="4"] { transform: scale(0.75); opacity: 0.22; filter: blur(1.25px); }
      `}</style>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-container-low to-transparent blur-md md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-container-low to-transparent blur-md md:w-40" />

      {arrowsPosition === 'sides' ? (
        <>
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-outline-variant/30 bg-surface-container-lowest/80 px-3 py-2 text-on-surface shadow-sm backdrop-blur transition-colors hover:bg-surface-container-lowest"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-outline-variant/30 bg-surface-container-lowest/80 px-3 py-2 text-on-surface shadow-sm backdrop-blur transition-colors hover:bg-surface-container-lowest"
          >
            ›
          </button>
        </>
      ) : (
        <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="rounded-full border border-outline-variant/30 bg-surface-container-lowest/80 px-3 py-2 text-on-surface shadow-sm backdrop-blur transition-colors hover:bg-surface-container-lowest"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="rounded-full border border-outline-variant/30 bg-surface-container-lowest/80 px-3 py-2 text-on-surface shadow-sm backdrop-blur transition-colors hover:bg-surface-container-lowest"
          >
            ›
          </button>
        </div>
      )}

      <div className="relative py-10">
        <div
          className={cn('flex items-center will-change-transform', animate ? 'transition-transform ease-out' : '')}
          onTransitionEnd={maybeWrap}
          style={{
            transitionDuration: `${transitionMs}ms`,
            // Center the ACTIVE card (not its left edge) in the viewport.
            transform: `translateX(calc(50% - ${(index + 0.5) * stepPx}px))`,
          }}
        >
          {tripled.map((c, i) => {
            // Distance from the currently centered index drives spotlight styling.
            const dist = len > 0 ? Math.min(4, Math.abs(i - index)) : 4
            return (
              <div
                key={i}
                className="ui-spotlight-card transition-[transform,opacity,filter] duration-450 ease-out"
                data-distance={dist}
                // Fixed step width ensures perfectly consistent spacing between cards.
                style={{ width: `${stepPx}px`, display: 'flex', justifyContent: 'center' }}
                aria-hidden={dist !== 0}
              >
                <MarqueeCard card={c} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

