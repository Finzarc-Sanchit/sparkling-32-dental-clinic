import { Container } from '@/components/ui/Container'
import { Skeleton } from '@/components/ui/skeleton'

function SectionBlock({ className = '' }: { className?: string }) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Container>
        <Skeleton className="h-10 w-2/3 max-w-md mx-auto mb-4 rounded-lg" />
        <Skeleton className="h-5 w-full max-w-2xl mx-auto mb-12 rounded-md" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-48 rounded-2xl" />
          <Skeleton className="h-48 rounded-2xl md:block hidden" />
          <Skeleton className="h-48 rounded-2xl lg:block hidden" />
        </div>
      </Container>
    </section>
  )
}

export function HomePageSkeleton() {
  return (
    <div>
      <main>
        <section className="relative overflow-hidden pb-24 md:pb-32">
          <Container className="mt-16 md:mt-24 grid md:grid-cols-2 items-center gap-16">
            <div className="space-y-6">
              <Skeleton className="h-14 w-full max-w-lg rounded-lg" />
              <Skeleton className="h-14 w-4/5 max-w-md rounded-lg" />
              <Skeleton className="h-6 w-full max-w-lg rounded-md" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-14 flex-1 rounded-xl" />
                <Skeleton className="h-14 flex-1 rounded-xl" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border/50">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 rounded-lg" />
                ))}
              </div>
            </div>
            <Skeleton className="aspect-[4/5] w-full max-w-xl mx-auto rounded-[2rem]" />
          </Container>
        </section>

        <div className="py-8">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="text-center space-y-2">
                  <Skeleton className="h-10 w-24 mx-auto rounded-md" />
                  <Skeleton className="h-4 w-32 mx-auto rounded-md" />
                </div>
              ))}
            </div>
          </Container>
        </div>

        <SectionBlock />
        <SectionBlock className="bg-muted/30" />
        <SectionBlock />
        <SectionBlock className="bg-muted/30" />
        <SectionBlock />
      </main>
      <Skeleton className="fixed bottom-0 left-0 right-0 h-16 md:hidden rounded-none" />
    </div>
  )
}

export function MarketingPageSkeleton() {
  return (
    <main>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Container className="text-center space-y-6">
          <Skeleton className="h-6 w-40 mx-auto rounded-full" />
          <Skeleton className="h-12 md:h-14 w-full max-w-3xl mx-auto rounded-lg" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto rounded-md" />
          <Skeleton className="h-6 w-full max-w-xl mx-auto rounded-md" />
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Skeleton className="h-12 w-44 rounded-xl" />
            <Skeleton className="h-12 w-44 rounded-xl" />
          </div>
        </Container>
      </section>
      <SectionBlock />
      <SectionBlock className="bg-muted/30" />
      <SectionBlock />
      <SectionBlock className="bg-muted/30" />
      <SectionBlock />
    </main>
  )
}

export function AboutPageSkeleton() {
  return (
    <main>
      <section className="relative pt-24 pb-32 overflow-hidden">
        <Container className="text-center space-y-6 max-w-3xl mx-auto">
          <Skeleton className="h-14 w-full rounded-lg" />
          <Skeleton className="h-6 w-full rounded-md" />
          <Skeleton className="h-6 w-4/5 mx-auto rounded-md" />
        </Container>
      </section>
      <SectionBlock className="bg-muted/30" />
      <SectionBlock />
      <SectionBlock className="bg-muted/30" />
      <SectionBlock />
    </main>
  )
}

function TwoColHeroSkeleton() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <Skeleton className="h-8 w-56 rounded-full" />
          <Skeleton className="h-14 w-full max-w-xl rounded-lg" />
          <Skeleton className="h-10 w-5/6 max-w-lg rounded-lg" />
          <Skeleton className="h-6 w-full max-w-xl rounded-md" />
          <div className="flex flex-wrap gap-4 pt-2">
            <Skeleton className="h-12 w-44 rounded-xl" />
            <Skeleton className="h-12 w-44 rounded-xl" />
          </div>
          <div className="flex flex-wrap gap-6 pt-4 border-t border-border/50">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-40 rounded-md" />
            ))}
          </div>
        </div>
        <Skeleton className="aspect-[4/5] w-full rounded-3xl" />
      </Container>
    </section>
  )
}

export function NriPatientsPageSkeleton() {
  return (
    <main>
      <TwoColHeroSkeleton />
      <SectionBlock />
      <SectionBlock className="bg-muted/30" />
      <SectionBlock />
      <SectionBlock className="bg-muted/30" />
      <SectionBlock />
    </main>
  )
}

export function UsPatientsPageSkeleton() {
  return (
    <main>
      <TwoColHeroSkeleton />
      <SectionBlock className="bg-muted/30" />
      <SectionBlock />
      <SectionBlock className="bg-muted/30" />
      <SectionBlock />
      <SectionBlock className="bg-muted/30" />
    </main>
  )
}

export function RootCanalPageSkeleton() {
  return (
    <main className="relative">
      <section className="relative py-16 md:py-24">
        <Container className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Skeleton className="h-10 w-3/4 rounded-lg" />
            <Skeleton className="h-6 w-full rounded-md" />
            <Skeleton className="h-6 w-5/6 rounded-md" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-40 rounded-xl" />
              <Skeleton className="h-12 w-40 rounded-xl" />
            </div>
          </div>
          <Skeleton className="aspect-[4/5] rounded-2xl" />
        </Container>
      </section>
      <SectionBlock />
      <SectionBlock className="bg-primary/5" />
      <SectionBlock />
      <section className="py-16 md:py-24 bg-primary/10">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <Skeleton className="h-10 w-48 rounded-lg" />
              <Skeleton className="h-24 w-full rounded-xl" />
              <Skeleton className="h-12 w-full rounded-full" />
            </div>
            <Skeleton className="h-64 rounded-3xl" />
          </div>
        </Container>
      </section>
      <SectionBlock />
      <SectionBlock className="bg-muted/30" />
    </main>
  )
}

export function ContactPageSkeleton() {
  return (
    <main>
      <section className="py-16 md:py-20">
        <Container className="text-center space-y-4 max-w-3xl mx-auto">
          <Skeleton className="h-12 w-2/3 mx-auto rounded-lg" />
          <Skeleton className="h-5 w-full rounded-md" />
          <Skeleton className="h-5 w-4/5 mx-auto rounded-md" />
        </Container>
      </section>
      <section className="py-8 border-y border-border/50">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-4 items-start">
                <Skeleton className="h-12 w-12 shrink-0 rounded-xl" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-24 rounded-md" />
                  <Skeleton className="h-4 w-full rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <Skeleton className="h-8 w-48 rounded-lg" />
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full rounded-lg" />
              ))}
              <Skeleton className="h-12 w-full rounded-xl mt-4" />
            </div>
            <Skeleton className="min-h-[320px] rounded-2xl" />
          </div>
        </Container>
      </section>
      <SectionBlock className="bg-muted/30" />
      <SectionBlock />
      <Skeleton className="fixed bottom-6 right-6 h-14 w-14 rounded-full hidden md:block" />
    </main>
  )
}
