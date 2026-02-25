import { motion } from 'framer-motion'
import type { Metric } from '../../types'

const metrics: Metric[] = [
  { value: '8+', label: 'Anos de expertise' },
  { value: '500+', label: 'Clientes transformadas' },
  { value: '6', label: 'Especialidades' },
]

export default function AuthoritySection() {
  return (
    <section
      id="sobre-andressa"
      className="relative bg-deep-dark section-padding-lg overflow-hidden"
    >
      {/* Decorative backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-gold/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-eucalyptus/10 blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — Andressa's Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            {/* Large decorative quote mark */}
            <span
              className="absolute -top-6 -left-4 font-display text-8xl md:text-9xl text-champagne/15 leading-none select-none"
              aria-hidden="true"
            >
              "
            </span>

            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              <img
                src="https://images.pexels.com/photos/20046793/pexels-photo-20046793.jpeg"
                alt="Andressa Simplicio — especialista em beleza feminina — TONI&GUY on Pexels"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/60 via-transparent to-transparent" />

              {/* Name overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-display italic text-xl text-white font-semibold">
                  Andressa Simplicio
                </p>
                <p className="font-body text-xs tracking-[0.25em] uppercase text-champagne mt-0.5">
                  Fundadora &amp; Especialista
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <p className="font-body text-xs font-bold tracking-[0.3em] uppercase text-champagne">
              Sobre a Andressa
            </p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Cada fio conta uma{' '}
              <em className="text-rose-gold-light">história</em>
            </h2>

            <div className="w-16 h-0.5 bg-rose-gold" />

            <p className="font-body text-base md:text-lg text-white/70 leading-relaxed">
              Andressa descobriu sua paixão pela beleza ainda jovem, vendo a transformação que um
              bom corte ou uma coloração bem feita causava na autoestima das mulheres ao seu redor.
            </p>
            <p className="font-body text-base text-white/65 leading-relaxed">
              Com mais de 8 anos de carreira, ela construiu um espaço onde técnica e acolhimento
              andam juntos — porque beleza de verdade nasce quando a mulher se sente segura,
              ouvida e valorizada.
            </p>
            <p className="font-body text-base text-white/65 leading-relaxed">
              Especializada em colorimetria avançada, mechas e técnicas de mega hair, Andressa
              continua se atualizando para trazer o que há de melhor para cada cliente.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {metrics.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display text-3xl font-semibold text-champagne">{value}</p>
                  <p className="font-body text-xs text-white/50 mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
