import { ArrowUpRight } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import heroBg from '@/assets/benyamin-bohlouli-e7MJLM5VGjY-unsplash.jpg';
import { buildWhatsAppLink } from '@/utils/whatsapp';

const HERO_BG = heroBg;

const PATIENT_AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=128&h=128&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&h=128&q=80',
] as const;

export default function AeroHero2() {
  const whatsappLink = buildWhatsAppLink();

  return (
    <section
      className="relative flex min-h-screen w-full items-end justify-center bg-surface"
      id="home"
    >
      <div
        className="absolute inset-0 h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundPosition: 'center bottom',
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-70 mix-blend-overlay"
          style={{
            backgroundImage:
              'radial-gradient(900px 500px at 15% 85%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(800px 500px at 85% 20%, rgba(255,255,255,0.10), transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 pb-32 text-white md:px-8 md:pb-36 lg:px-10">
        <div className="flex flex-col gap-12 text-left lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-white">
              Restore Your Smile.
              <br />
              <span className="text-primary-fixed">Pain-Free, Guaranteed.</span>
            </h1>

            <p className="max-w-2xl text-white/90">
              Trusted by patients from the USA, UK, Canada &amp; UAE.
              World-class dental care at honest Indian prices.
            </p>
          </div>

          <div className="flex w-full flex-col gap-8 lg:mt-0 lg:w-auto lg:max-w-md">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {PATIENT_AVATARS.map((src, i) => (
                  <Avatar
                    className="size-12 border-2 border-primary-fixed transition-all duration-300 hover:grayscale-0"
                    key={src}
                    size="lg"
                  >
                    <AvatarImage alt="" src={src} />
                    <AvatarFallback className="bg-surface-container-high text-on-surface text-xs">
                      P{i + 1}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex flex-col text-sm font-medium text-white/95">
                <span className="text-base sm:text-lg">10k+</span>
                <span>Happy patients</span>
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-fit">
              <a
                className="group mx-auto flex w-full cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-1 font-normal shadow-none sm:mx-0 sm:w-fit sm:py-5"
                href={whatsappLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="rounded-full bg-primary-fixed px-6 py-3 text-on-primary-fixed duration-500 ease-in-out group-hover:bg-on-surface group-hover:text-primary-fixed">
                  WhatsApp us now
                </span>
                <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-primary-fixed p-5 text-on-primary-fixed duration-500 ease-in-out group-hover:bg-on-surface group-hover:text-primary-fixed">
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
