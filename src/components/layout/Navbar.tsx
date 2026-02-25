import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { getWhatsAppUrl } from '../../utils/whatsapp'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        scrolled
          ? 'bg-off-white/95 backdrop-blur-sm shadow-sm shadow-rose-gold/10'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-none" aria-label="Andressa Simplicio Beauty Studio">
          <span
            className={`font-display italic text-xl md:text-2xl font-semibold transition-colors duration-500 ${
              scrolled ? 'text-rose-gold' : 'text-white'
            }`}
          >
            Andressa Simplicio
          </span>
          <span
            className={`font-body text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${
              scrolled ? 'text-warm-gray' : 'text-white/70'
            }`}
          >
            Beauty Studio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={[
                'font-body text-sm font-semibold tracking-wide transition-colors duration-300',
                'hover:text-rose-gold relative group',
                scrolled ? 'text-deep-dark' : 'text-white/90',
              ].join(' ')}
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-rose-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <motion.a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={[
              'font-body text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300',
              scrolled
                ? 'bg-rose-gold text-white hover:bg-rose-gold-dark'
                : 'bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25',
            ].join(' ')}
          >
            Agendar
          </motion.a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            scrolled ? 'text-deep-dark' : 'text-white'
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-off-white/98 backdrop-blur-md border-t border-rose-gold/10"
          >
            <nav className="container-site flex flex-col gap-1 py-4">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={handleLinkClick}
                  className="font-body font-semibold text-deep-dark hover:text-rose-gold py-3 border-b border-cream transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="mt-3 text-center font-body font-bold text-white bg-rose-gold hover:bg-rose-gold-dark py-3 rounded-full transition-colors duration-300"
              >
                Agendar pelo WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
