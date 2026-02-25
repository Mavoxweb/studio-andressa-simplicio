import { motion } from 'framer-motion'
import CTAButton from '../ui/CTAButton'

const stats = [
  { value: '500+', label: 'Clientes satisfeitas' },
  { value: '8+', label: 'Anos de experiência' },
  { value: '5★', label: 'Avaliação média' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Boas-vindas ao Andressa Simplicio Beauty Studio"
    >
      {/* Background Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/7750115/pexels-photo-7750115.jpeg"
          alt="Interior elegante do Andressa Simplicio Beauty Studio — Max Vakhtbovych on Pexels"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient Overlay — darker on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-dark/90 via-deep-dark/65 to-deep-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/70 via-transparent to-deep-dark/30" />
      </div>

      {/* Decorative italic word in background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 overflow-hidden pointer-events-none hidden lg:block">
        <p
          className="font-display italic text-white/5 select-none"
          style={{ fontSize: 'clamp(120px, 18vw, 260px)', lineHeight: 1 }}
          aria-hidden="true"
        >
          beleza
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-site w-full py-28 md:py-36">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-xl md:max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="font-body text-xs font-bold tracking-[0.35em] uppercase text-champagne mb-5"
            >
              Salão Premium · Belford Roxo · RJ
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight"
            >
              Seu cabelo merece{' '}
              <em className="text-rose-gold-light not-italic block md:inline">
                o melhor.
              </em>{' '}
              <br className="hidden sm:block" />
              <span className="text-white">Você também.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="font-body text-base md:text-lg text-white/75 mt-6 leading-relaxed"
            >
              Chega de cabelo sem vida. Chega de frustração.{' '}
              <span className="text-white/90 font-semibold">
                Aqui, cada visita é uma transformação completa
              </span>{' '}
              — do cabelo à autoestima.
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-9 flex flex-wrap gap-4 items-center">
              <CTAButton size="lg" label="Agendar pelo WhatsApp" />
              <a
                href="#servicos"
                className="font-body text-sm font-semibold text-white/70 hover:text-white underline underline-offset-4 transition-colors duration-200"
              >
                Conhecer serviços
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="container-site py-5">
          <div className="flex flex-wrap gap-6 md:gap-0 md:divide-x md:divide-white/15">
            {stats.map(({ value, label }) => (
              <div key={label} className="md:px-8 first:pl-0 last:pr-0 flex items-center gap-3">
                <span className="font-display text-2xl md:text-3xl font-semibold text-champagne">
                  {value}
                </span>
                <span className="font-body text-xs text-white/60 leading-tight max-w-[80px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
