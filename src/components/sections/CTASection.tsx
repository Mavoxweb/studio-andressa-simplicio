import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'
import CTAButton from '../ui/CTAButton'

export default function CTASection() {
  return (
    <section
      id="contato"
      className="relative bg-rose-gold overflow-hidden section-padding-lg"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-deep-dark/10" />
        {/* Large italic text watermark */}
        <p
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display italic text-white/4 whitespace-nowrap select-none pointer-events-none"
          style={{ fontSize: 'clamp(80px, 15vw, 200px)' }}
          aria-hidden="true"
        >
          transformação
        </p>
      </div>

      <div className="relative z-10 container-site text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-body text-xs font-bold tracking-[0.35em] uppercase text-white/70 mb-5"
        >
          Última chance de se amar mais hoje
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white max-w-3xl mx-auto leading-tight"
        >
          Transforme seus cabelos{' '}
          <span className="not-italic font-bold">hoje</span>
        </motion.h2>

        {/* Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-5 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2"
        >
          <Clock size={14} className="text-white/80" />
          <span className="font-body text-sm font-semibold text-white">
            Vagas limitadas — agende agora
          </span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-body text-base md:text-lg text-white/80 mt-6 max-w-xl mx-auto leading-relaxed"
        >
          Não deixe para amanhã o cuidado que você merece hoje.
          Clique e inicie o seu agendamento agora — é rápido e sem compromisso.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <CTAButton
            label="Agendar pelo WhatsApp"
            size="lg"
            variant="white"
            message="Olá! Quero agendar um horário no Andressa Simplicio Beauty Studio. 💅"
          />
          <a
            href="tel:+5521999999999"
            className="font-body text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            ou ligue: (21) 99999-9999
          </a>
        </motion.div>

        {/* Address + Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          {/* Address */}
          <div className="flex items-start justify-center gap-2.5 mb-7">
            <MapPin size={16} className="text-white/70 mt-0.5 shrink-0" />
            <address className="font-body text-sm text-white/70 not-italic leading-relaxed">
              Avenida Augusto Vasco Aranha, 693 – Areia Branca – Belford Roxo – RJ – CEP 26135-060
            </address>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-deep-dark/30 aspect-video md:aspect-[16/6]">
            <iframe
              title="Localização do Andressa Simplicio Beauty Studio"
              src="https://maps.google.com/maps?q=Avenida+Augusto+Vasco+Aranha+693+Areia+Branca+Belford+Roxo+RJ+26135-060&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              aria-label="Mapa com a localização do salão"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
