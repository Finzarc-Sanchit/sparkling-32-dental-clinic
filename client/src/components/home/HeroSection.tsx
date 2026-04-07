import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'
import { buildWhatsAppLink } from '../../utils/whatsapp'
import { motion, useReducedMotion } from 'framer-motion'

export function HeroSection() {
  const whatsappLink = buildWhatsAppLink()
  const reduce = useReducedMotion()

  const textWrap = reduce
    ? undefined
    : {
        hidden: {},
        show: {
          transition: { staggerChildren: 0.06, delayChildren: 0.04 },
        },
      }

  const textItem = reduce
    ? undefined
    : {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0 },
      }

  const textEase = reduce ? undefined : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <section className="relative overflow-hidden pb-24 md:pb-32" id="home">
      <Container className="mt-16 md:mt-24 grid md:grid-cols-2 items-center gap-16">
        <motion.div
          className="z-10"
          variants={textWrap}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={reduce ? undefined : { once: true, amount: 0.35 }}
        >
          <motion.h1 variants={textItem} transition={textEase} className="text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-6 tracking-tight">
            Restore Your Smile.
            <br />
            <span className="text-primary">Pain-Free, Guaranteed.</span>
          </motion.h1>
          <motion.p variants={textItem} transition={textEase} className="text-xl text-on-surface-variant mb-10 max-w-lg leading-relaxed">
            Trusted by patients from the USA, UK, Canada &amp; UAE. World-class dental care at honest Indian prices.
          </motion.p>

          <motion.div variants={textItem} transition={textEase} className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              className="bg-tertiary text-on-tertiary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-lg text-lg"
              href={whatsappLink}
            >
              <MaterialIcon name="chat" />
              WhatsApp Us Now
            </a>
            <a
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary/5 active:scale-95 transition-all text-lg"
              href="#nri"
            >
              Get Free Treatment Plan
            </a>
          </motion.div>

          <motion.div variants={textItem} transition={textEase} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-outline-variant/30">
            <div className="flex items-center gap-2">
              <span className="text-tertiary font-bold" aria-hidden="true">
                ⭐
              </span>
              <span className="text-sm font-semibold">4.9 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-tertiary font-bold" aria-hidden="true">
                🏆
              </span>
              <span className="text-sm font-semibold">15+ Years Exp.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-tertiary font-bold" aria-hidden="true">
                👥
              </span>
              <span className="text-sm font-semibold">10k+ Patients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-tertiary font-bold" aria-hidden="true">
                🌍
              </span>
              <span className="text-sm font-semibold">ISO Standards</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full max-w-md sm:max-w-lg md:max-w-xl md:ml-auto"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : { once: true, amount: 0.35 }}
          transition={reduce ? undefined : { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <motion.div
            className="absolute -right-20 -top-20 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl"
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={reduce ? undefined : { once: true, amount: 0.35 }}
            transition={reduce ? undefined : { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          />
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <motion.img
              alt="Lead Dentist"
              className="w-full h-full object-cover aspect-[4/5]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwUSZFejkswdNVyxdFUHiS2VNCWG8tkM9CYOysAJMl_zqo8W7urh8AH7iI07E3GkG6mWOzPz_snUuqISS7FKcAyM53ATRMYcrvisY51BZ51gXunlnykFGw0veoyX3V1O5U187LD9m9Qt27VAj1fktAYeptzkNYJTRRBSAYabmKF1eJtxSpgVZumEAwosgVAhHUvp7bDtWVd9ITeRf0xm_pWkotCtRK4opz60zovNYgPHVZsCGZJgiso7CTANvORnoEiq_a2wCX9x8"
              initial={reduce ? false : { scale: 1.05, filter: 'blur(6px)' }}
              whileInView={reduce ? undefined : { scale: 1, filter: 'blur(0px)' }}
              viewport={reduce ? undefined : { once: true, amount: 0.35 }}
              transition={reduce ? undefined : { duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

