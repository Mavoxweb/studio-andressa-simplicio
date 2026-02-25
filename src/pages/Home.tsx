import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppFloat from '../components/ui/WhatsAppFloat'
import HeroSection from '../components/sections/HeroSection'
import IdentificationSection from '../components/sections/IdentificationSection'
import StudioSection from '../components/sections/StudioSection'
import ServicesSection from '../components/sections/ServicesSection'
import AuthoritySection from '../components/sections/AuthoritySection'
import ExperienceSection from '../components/sections/ExperienceSection'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <>
      {/* React 19 native document metadata */}
      <title>Salão de Beleza em Belford Roxo | Andressa Simplicio Beauty Studio</title>
      <meta
        name="description"
        content="Andressa Simplicio Beauty Studio — salão premium feminino em Belford Roxo. Especialista em mechas em Belford Roxo, mega hair em Belford Roxo e coloração profissional no bairro Areia Branca."
      />

      <Navbar />

      <main>
        <HeroSection />
        <IdentificationSection />
        <StudioSection />
        <ServicesSection />
        <AuthoritySection />
        <ExperienceSection />
        <CTASection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
