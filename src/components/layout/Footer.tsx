import { Instagram, MapPin, Phone } from 'lucide-react'

const WhatsAppIconSmall = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.122 1.529 5.851L.057 23.5l5.797-1.449A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.366l-.357-.212-3.708.927.966-3.594-.234-.37A9.777 9.777 0 012.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z" />
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-deep-dark text-white/80 pt-14 pb-8">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <p className="font-display italic text-2xl text-white font-semibold">
                Andressa Simplicio
              </p>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-champagne mt-0.5">
                Beauty Studio
              </p>
            </div>
            <p className="font-body text-sm leading-relaxed text-white/60 max-w-xs">
              Um espaço premium criado para mulheres que acreditam que cuidar de si é um ato de amor próprio.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/andressasimplicio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-rose-gold hover:border-rose-gold transition-colors duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/5521999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-green-400 hover:border-green-400 transition-colors duration-300"
              >
                <WhatsAppIconSmall />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-champagne mb-4">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {[
                { label: 'Serviços', href: '#servicos' },
                { label: 'Sobre Andressa', href: '#sobre' },
                { label: 'Experiência', href: '#experiencia' },
                { label: 'Agendar', href: '#contato' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-sm text-white/60 hover:text-rose-gold transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-champagne mb-4">
              Contato &amp; Localização
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-rose-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-white/60 leading-snug">
                  Av. Augusto Vasco Aranha, 693<br />
                  Areia Branca — Belford Roxo, RJ<br />
                  CEP 26135-060
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-rose-gold shrink-0" />
                <a
                  href="tel:+5521999999999"
                  className="font-body text-sm text-white/60 hover:text-rose-gold transition-colors"
                >
                  (21) 99999-9999
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="font-body text-xs text-white/40 leading-relaxed">
                Seg–Sex: 09h–19h<br />
                Sábado: 09h–17h
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-7">
          <p className="font-body text-xs text-white/30">
            © {year} Andressa Simplicio Beauty Studio. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-white/30">
            Areia Branca · Belford Roxo · RJ
          </p>
        </div>
      </div>
    </footer>
  )
}
