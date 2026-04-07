import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'
import { buildWhatsAppLink } from '../../utils/whatsapp'
import { motion, useReducedMotion } from 'framer-motion'

export function NriHeroSection() {
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
    <section className="relative pb-20 lg:pb-32 bg-surface-container-low overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 hidden lg:block bg-[linear-gradient(135deg,_var(--color-primary)_0%,_var(--color-primary-container)_100%)] [clip-path:polygon(25%_0%,_100%_0%,_100%_100%,_0%_100%)]" />

      <Container className="relative z-10 mt-16 lg:mt-24 flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={textWrap}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={reduce ? undefined : { once: true, amount: 0.35 }}
        >
          <motion.span variants={textItem} transition={textEase} className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-secondary-container text-on-secondary-fixed-variant rounded-full">
            Global Standards, Mumbai Warmth
          </motion.span>

          <motion.h1 variants={textItem} transition={textEase} className="text-4xl lg:text-6xl font-extrabold text-on-surface leading-tight mb-6">
            Dental Treatment in India for <span className="text-primary">NRI Patients</span>
          </motion.h1>

          <motion.p variants={textItem} transition={textEase} className="text-xl lg:text-2xl font-semibold text-on-surface-variant mb-4">
            Quality Care. Transparent Pricing. Planned Convenience.
          </motion.p>

          <motion.p variants={textItem} transition={textEase} className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Trusted by patients from USA, UK, UAE, Canada, and Australia. Experience world-class clinical excellence at a
            fraction of the global cost, perfectly timed with your visit home.
          </motion.p>

          <motion.div variants={textItem} transition={textEase} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
            <a
              className="px-8 py-4 bg-tertiary text-on-tertiary font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all"
              href={whatsappLink}
            >
              <MaterialIcon name="chat" filled />
              Start on WhatsApp
            </a>
            <a
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/5 active:scale-95 transition-all"
              href="#nri-plan"
            >
              Get My Treatment Plan
            </a>
          </motion.div>

          <motion.div variants={textItem} transition={textEase} className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-80">
            <div className="flex items-center gap-2">
              <MaterialIcon name="star" filled className="text-primary" />
              <span className="font-bold">4.9 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <MaterialIcon name="public" className="text-primary" />
              <span className="font-bold">15+ Countries Served</span>
            </div>
            <div className="flex items-center gap-2">
              <MaterialIcon name="translate" className="text-primary" />
              <span className="font-bold">English Speaking Team</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 relative w-full max-w-md sm:max-w-lg lg:max-w-xl lg:ml-auto"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : { once: true, amount: 0.35 }}
          transition={reduce ? undefined : { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <div className="rounded-xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <motion.img
              alt="Clinic Interior"
              className="w-full h-auto object-cover aspect-[4/5]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8vLT_gi5u_0hrCR71cM-RjRnxBfzYwgjsQzfa5FHnJx_QdKWEQOt3XwdtzcPnfmE_0t4xbrHjKyAVpeljOh5gqGOZFA7jqEJzc15DDOMbc1lI2gQIzoiK0AzsbTwjGhUekzMu3DZiNH9C_CqBQdmEodsfTxQVMT8oUi3fXhuDh3czkddosm0D00NcsZLjjcewjfFACSIKIa5ZUlOZjG5Rh_iSRJ0jRLk7OAjJs_aheY76t8Wzc2UNVoFe2tiWG78vs4OHN7ewjok"
              initial={reduce ? false : { scale: 1.05, filter: 'blur(6px)' }}
              whileInView={reduce ? undefined : { scale: 1, filter: 'blur(0px)' }}
              viewport={reduce ? undefined : { once: true, amount: 0.35 }}
              transition={reduce ? undefined : { duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-xl hidden md:block">
            <div className="flex gap-1 text-tertiary mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <MaterialIcon key={i} name="star" filled className="text-sm" />
              ))}
            </div>
            <p className="text-sm italic text-on-surface-variant font-medium">"Smooth experience from London to Mumbai!"</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

