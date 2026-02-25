import { motion } from 'framer-motion'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align]

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`font-body text-xs font-bold tracking-[0.25em] uppercase mb-3 ${
            light ? 'text-champagne' : 'text-eucalyptus'
          }`}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${
          light ? 'text-white' : 'text-deep-dark'
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`font-body text-base md:text-lg mt-4 leading-relaxed ${
            light ? 'text-white/80' : 'text-warm-gray'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
