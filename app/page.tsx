import HeroCarousel from '@/components/HeroCarousel'
import AboutPreview from '@/components/AboutPreview'
import Credentials from '@/components/Credentials'
import CurriculumPreview from '@/components/CurriculumPreview'
import Testimonials from '@/components/Testimonials'
import SignUpSection from '@/components/SignUpSection'
import ContactPreview from '@/components/ContactPreview'

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutPreview />
      <Credentials />
      <CurriculumPreview />
      <Testimonials />
      <SignUpSection />
      <ContactPreview />
    </>
  )
}
