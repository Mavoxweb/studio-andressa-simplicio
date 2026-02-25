import { motion } from 'framer-motion'
import { Sparkles, Frown, Clock, AlertTriangle } from 'lucide-react'
import { painPoints } from '../../data/painPoints'
import SectionTitle from '../ui/SectionTitle'
import type { PainPoint } from '../../types'

const iconMap = {
  sparkles: Sparkles,
  frown: Frown,
  clock: Clock,
  alert: AlertTriangle,
}

function PainCard({ point, index }: { point: PainPoint; index: number }) {
  const Icon = iconMap[point.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-2xl p-7 shadow-sm shadow-rose-gold/5 border border-rose-gold/10 hover:border-rose-gold/30 hover:shadow-md hover:shadow-rose-gold/10 transition-all duration-400"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-rose-gold/10 flex items-center justify-center mb-5 group-hover:bg-rose-gold/20 transition-colors duration-300">
        <Icon size={22} className="text-rose-gold" strokeWidth={1.5} />
      </div>

      {/* Number accent */}
      <span
        className="absolute top-6 right-7 font-display text-5xl font-bold text-rose-gold/6 select-none"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <h3 className="font-display text-lg font-semibold text-deep-dark mb-3 leading-snug">
        {point.title}
      </h3>
      <p className="font-body text-sm text-warm-gray leading-relaxed">
        {point.description}
      </p>
    </motion.div>
  )
}

export default function IdentificationSection() {
  return (
    <section className="grain-texture bg-off-white section-padding-lg">
      <div className="relative z-10 container-site">
        {/* Section header */}
        <SectionTitle
          eyebrow="Você não está sozinha"
          title="Você se identifica<br/>com isso?"
          subtitle="Muitas mulheres chegam até nós carregando essas histórias. E é exatamente por isso que o Andressa Simplicio Beauty Studio existe."
          align="center"
        />

        {/* Pain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 md:mt-16">
          {painPoints.map((point, i) => (
            <PainCard key={point.id} point={point} index={i} />
          ))}
        </div>

        {/* Emotional bridge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="font-display italic text-xl md:text-2xl text-rose-gold max-w-lg mx-auto leading-relaxed">
            "Se você se reconheceu em alguma dessas situações, chegou ao lugar certo."
          </p>
          <p className="font-body text-sm text-warm-gray mt-3">— Andressa Simplicio</p>
        </motion.div>
      </div>
    </section>
  )
}
