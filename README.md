# 💄 Andressa Simplicio Beauty Studio

> Site institucional premium para o **Andressa Simplicio Beauty Studio** — salão de beleza feminino em Belford Roxo, RJ.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

---

## 🏗 Stack Tecnológica

| Tecnologia        | Versão  | Finalidade                          |
|-------------------|---------|-------------------------------------|
| React             | 19+     | Framework UI principal              |
| TypeScript        | 5+      | Tipagem estática                    |
| Vite              | 6+      | Build ultra otimizado               |
| TailwindCSS       | 4       | Estilização utility-first           |
| Framer Motion     | 11+     | Animações suaves e microinterações  |
| React Router DOM  | 7+      | Roteamento (escalável)              |
| HeadlessUI        | 2+      | Componentes UI acessíveis           |
| Lucide React      | Latest  | Biblioteca de ícones                |

---

## 📁 Estrutura do Projeto

```
src/
├── assets/                  # Recursos estáticos
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navegação fixa com efeito de scroll
│   │   └── Footer.tsx       # Rodapé com informações de contato
│   ├── ui/
│   │   ├── CTAButton.tsx    # Botão CTA WhatsApp reutilizável
│   │   ├── SectionTitle.tsx # Título de seção padronizado
│   │   └── WhatsAppFloat.tsx # Botão flutuante WhatsApp
│   └── sections/
│       ├── HeroSection.tsx          # Hero cinematográfico
│       ├── IdentificationSection.tsx # Seção de identificação/dor
│       ├── StudioSection.tsx        # Apresentação do Studio
│       ├── ServicesSection.tsx      # Grade de serviços
│       ├── AuthoritySection.tsx     # Sobre a Andressa
│       ├── ExperienceSection.tsx    # Experiência do ambiente
│       └── CTASection.tsx           # CTA final + mapa
├── data/
│   ├── services.ts          # Mock data dos serviços
│   └── painPoints.ts        # Pontos de identificação
├── hooks/                   # Custom hooks (para expansão futura)
├── pages/
│   └── Home.tsx             # Página principal
├── types/
│   └── index.ts             # Definições TypeScript
├── utils/
│   └── whatsapp.ts          # Helper para URLs do WhatsApp
├── App.tsx                  # Roteamento principal
├── main.tsx                 # Entry point
└── index.css                # Tokens de design + Tailwind v4
```

---

## 🎨 Identidade Visual

| Token         | Cor       | Hex         |
|---------------|-----------|-------------|
| Rose Gold     | ![#B76E79](https://placehold.co/15x15/B76E79/B76E79.png) | `#B76E79` |
| Verde Eucalipto | ![#587B6C](https://placehold.co/15x15/587B6C/587B6C.png) | `#587B6C` |
| Dourado Champagne | ![#D4AF37](https://placehold.co/15x15/D4AF37/D4AF37.png) | `#D4AF37` |
| Off White     | ![#FAF8F5](https://placehold.co/15x15/FAF8F5/FAF8F5.png) | `#FAF8F5` |
| Marrom Madeira | ![#8B5E3C](https://placehold.co/15x15/8B5E3C/8B5E3C.png) | `#8B5E3C` |

**Tipografia:**
- **Títulos:** Playfair Display (editorial, emocional)
- **Textos:** Lato (limpo, legível)

---

## 🚀 Como Rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## 🔍 SEO Implementado

- ✅ Meta title e description otimizados para busca local
- ✅ Schema.org `BeautySalon` com LocalBusiness
- ✅ Open Graph para redes sociais
- ✅ `lang="pt-BR"` no HTML
- ✅ H1 único + hierarquia H2-H3 correta
- ✅ `alt` textos descritivos em todas as imagens
- ✅ `canonical` URL configurada
- ✅ Google Maps embed sem API key
- ✅ Lazy loading de imagens

---

## 📱 Responsividade

Testado nos breakpoints:
- `320px` — Mobile pequeno
- `375px` — Mobile padrão (iPhone)
- `768px` — Tablet
- `1024px` — Desktop pequeno
- `1440px` — Desktop grande

---

## 🌐 Deploy

Projeto pronto para deploy em:
- **[Vercel](https://vercel.com)** (recomendado — zero config)
- **Netlify** — `npm run build` → pasta `dist/`

---

## 📞 Contato do Studio

**Andressa Simplicio Beauty Studio**
Av. Augusto Vasco Aranha, 693 — Areia Branca  
Belford Roxo — RJ — CEP 26135-060  
WhatsApp: (21) 99999-9999

---

*Desenvolvido com ❤️ para celebrar a beleza feminina.*
