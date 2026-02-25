import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../../utils/whatsapp'

interface CTAButtonProps {
  label?: string
  message?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'white' | 'outline'
  className?: string
}

export default function CTAButton({
  label = 'Agendar pelo WhatsApp',
  message,
  size = 'md',
  variant = 'primary',
  className = '',
}: CTAButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm gap-1.5',
    md: 'px-7 py-3.5 text-base gap-2',
    lg: 'px-9 py-4 text-lg gap-2.5',
  }

  const variantClasses = {
    primary:
      'bg-rose-gold text-white hover:bg-rose-gold-dark shadow-lg shadow-rose-gold/30',
    white:
      'bg-white text-rose-gold hover:bg-off-white shadow-lg',
    outline:
      'border-2 border-white text-white hover:bg-white hover:text-rose-gold',
  }

  return (
    <motion.a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={[
        'inline-flex items-center justify-center font-body font-bold rounded-full transition-all duration-300',
        sizeClasses[size],
        variantClasses[variant],
        className,
      ].join(' ')}
    >
      <MessageCircle size={size === 'sm' ? 16 : size === 'lg' ? 22 : 18} strokeWidth={2} />
      {label}
    </motion.a>
  )
}
