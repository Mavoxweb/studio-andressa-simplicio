import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/27165073/pexels-photo-27165073.jpeg',
    alt: 'Interior elegante do salon com design contemporâneo — Wilcle Nunes on Pexels',
    className: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/7755553/pexels-photo-7755553.jpeg',
    alt: 'Profissional cuidando do cabelo da cliente — RDNE Stock project on Pexels',
    className: '',
  },
  {
    src: 'https://images.pexels.com/photos/28863312/pexels-photo-28863312.jpeg',
    alt: 'Mulher elegante no salão com roupão de seda — Alexander Mass on Pexels',
    className: '',
  },
]

const sensations = [
  { emoji: '🌿', text: 'O aroma suave que acalma ao entrar' },
  { emoji: '✨', text: 'A luz que valoriza cada detalhe' },
  { emoji: '🤍', text: 'O acolhimento que faz você respirar fundo' },
  { emoji: '💆', text: 'O momento que é só seu' },
]

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="bg-white section-padding-lg overflow-hidden">
      <div className="container-site">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-14">
          <SectionTitle
            eyebrow="A Experiência Studio"
            title="Mais do que um salão —<br/>um ritual"
            align="left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 pt-2 lg:pt-6"
          >
            <p className="font-body text-base md:text-lg text-warm-gray leading-relaxed">
              Desde o momento em que você abre a porta do studio, algo muda. O ambiente é
              pensado em cada detalhe para que você se desconecte do mundo lá fora e se
              reconecte com você mesma.
            </p>
            <p className="font-body text-sm text-warm-gray leading-relaxed">
              Aqui, o seu tempo é respeitado, a sua história é ouvida e o seu resultado é
              planejado com cuidado. Porque você merece mais do que um serviço — você merece
              uma experiência que você vai querer contar.
            </p>

            {/* Sensations list */}
            <ul className="space-y-2.5 pt-3">
              {sensations.map(({ emoji, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="text-lg" aria-hidden="true">{emoji}</span>
                  <span className="font-body text-sm font-semibold text-deep-dark">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Photo Gallery — Asymmetric Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-3 md:gap-4 h-[420px] md:h-[560px]"
        >
          {/* Large left image */}
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Top right */}
          <div className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden relative">
            <img
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Bottom right with glass text card */}
          <div className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden relative">
            <img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Glass card overlay */}
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md rounded-xl p-3 md:p-4 max-w-[180px] md:max-w-xs shadow-lg hidden md:block">
              <p className="font-display italic text-sm md:text-base text-deep-dark font-semibold leading-snug">
                "Cada visita, uma nova versão de você."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Eucalyptus accent quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="w-8 h-px bg-eucalyptus" />
          <p className="font-body text-sm text-eucalyptus font-semibold tracking-wide">
            Luxo discreto. Cuidado real. Resultado inconfundível.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
