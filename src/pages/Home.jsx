import usePageMeta from '../hooks/usePageMeta'
import Hero from '../components/sections/Hero'
import Pillars from '../components/sections/Pillars'
import FeaturedEquipment from '../components/sections/FeaturedEquipment'
import WhyStrip from '../components/sections/WhyStrip'
import AcademyPromo from '../components/sections/AcademyPromo'
import Process from '../components/sections/Process'
import CtaBand from '../components/ui/CtaBand'

export default function Home() {
  usePageMeta(
    null,
    'Btonmed sells, leases, services and calibrates medical imaging and biomedical equipment, including C-arms, X-ray, ultrasound, fluoroscopy and mammography, and runs a 3-month biomedical engineering bootcamp.',
  )
  return (
    <>
      <Hero />
      <Pillars />
      <FeaturedEquipment />
      <WhyStrip />
      <AcademyPromo />
      <Process />
      <CtaBand />
    </>
  )
}
