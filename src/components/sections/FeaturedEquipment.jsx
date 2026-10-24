import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { equipment } from '../../data/site'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import EquipmentCard from '../ui/EquipmentCard'

export default function FeaturedEquipment() {
  const items = equipment.filter((e) => e.featured)
  return (
    <section className="bg-surface py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured equipment"
            title="Imaging equipment, ready when you are"
            text="A look at the systems we sell, lease and service most. Tap any item to get pricing on WhatsApp."
          />
          <Reveal delay={0.1}>
            <Link to="/equipment" className="btn-outline group shrink-0">
              View all equipment <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1} className="h-full">
              <EquipmentCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
