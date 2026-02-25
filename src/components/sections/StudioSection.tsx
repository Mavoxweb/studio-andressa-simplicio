import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import CTAButton from '../ui/CTAButton'

const highlights = [
  'Ambiente exclusivo e acolhedor',
  'Profissionais altamente especializados',
  'Produtos premium selecionados',
  'Atendimento 100% personalizado',
]

export default function StudioSection() {
  return (
    <section id="sobre" className="bg-white section-padding-lg overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Photo with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative offset frame */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-rose-gold/20 z-0" />

            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1706629503717-821c94ea1781?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
                alt="Interior sofisticado do salão Andressa Simplicio Beauty Studio — Tile Merchant Ireland on Unsplash"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              {/* Champagne accent badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <p className="font-body text-xs font-bold tracking-widest uppercase text-eucalyptus mb-0.5">
                  Desde 2016
                </p>
                <p className="font-display text-sm text-deep-dark font-semibold">
                  Referência em Belford Roxo
                </p>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl bg-eucalyptus/10 z-0" />
          </motion.div>

          {/* Right — Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Eyebrow */}
            <p className="font-body text-xs font-bold tracking-[0.3em] uppercase text-eucalyptus">
              Bem-vinda ao Studio
            </p>

            {/* Heading */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-deep-dark leading-tight">
              Um espaço criado para{' '}
              <em className="text-rose-gold">você se sentir especial</em>
            </h2>

            {/* Champagne divider */}
            <div className="w-16 h-0.5 bg-champagne" />

            {/* Quote */}
            <blockquote className="font-display italic text-lg md:text-xl text-warm-gray leading-relaxed border-l-2 border-rose-gold/30 pl-5">
              Não somos apenas um salão. Somos um ritual de autocuidado — do momento em que você entra até o sorriso com que você sai.
            </blockquote>

            {/* Highlights */}
            <ul className="space-y-3 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-eucalyptus shrink-0" strokeWidth={2} />
                  <span className="font-body text-sm text-deep-dark font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-3">
              <CTAButton
                label="Quero viver essa experiência"
                message="Olá! Quero saber mais sobre os serviços do Andressa Simplicio Beauty Studio. ✨"
                size="md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
