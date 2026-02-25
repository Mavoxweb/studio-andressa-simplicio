import { motion } from 'framer-motion'
import { Scissors, Palette, Sparkles, Wand2, Droplets, CalendarCheck } from 'lucide-react'
import { services } from '../../data/services'
import SectionTitle from '../ui/SectionTitle'
import CTAButton from '../ui/CTAButton'
import type { Service } from '../../types'

const serviceIcons = [Scissors, Palette, Sparkles, Wand2, Droplets, CalendarCheck]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = serviceIcons[index % serviceIcons.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose-gold/10 border border-transparent hover:border-rose-gold/20 transition-all duration-500"
    >
      {/* Photo */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        {/* Photo overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Icon badge */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
          <Icon size={16} className="text-rose-gold" strokeWidth={1.8} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-deep-dark mb-1.5">
          {service.title}
        </h3>
        <p className="font-body text-xs font-bold tracking-wide text-rose-gold uppercase mb-3">
          {service.tagline}
        </p>
        <p className="font-body text-sm text-warm-gray leading-relaxed">
          {service.description}
        </p>

        {/* Hover CTA */}
        <div className="mt-5 pt-4 border-t border-cream">
          <a
            href={`https://wa.me/5521999999999?text=${encodeURIComponent(`Olá! Tenho interesse no serviço de ${service.title}. Quero agendar! ✨`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs font-bold tracking-wide text-eucalyptus hover:text-rose-gold transition-colors duration-200 flex items-center gap-1"
          >
            Agendar este serviço →
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="servicos" className="grain-texture bg-off-white section-padding-lg">
      <div className="relative z-10 container-site">
        <SectionTitle
          eyebrow="O que oferecemos"
          title="Nossos Serviços"
          subtitle="Cada serviço foi pensado para além do estético — para despertar em você a confiança que você sempre teve, mas às vezes esqueceu."
          align="center"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mt-12 md:mt-16">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="font-body text-sm text-warm-gray mb-5">
            Não tem certeza de qual serviço é para você?{' '}
            <strong className="text-deep-dark">Fale com a gente — juntas descobrimos!</strong>
          </p>
          <CTAButton
            label="Falar com a Andressa"
            message="Olá! Preciso de ajuda para escolher o melhor serviço para o meu cabelo. Pode me ajudar? 💕"
            variant="primary"
          />
        </motion.div>
      </div>
    </section>
  )
}
