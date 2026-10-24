import {
  Store,
  KeyRound,
  Wrench,
  Gauge,
  Headset,
  Cpu,
  MonitorDot,
  ScanLine,
  Boxes,
  HeartPulse,
  Radiation,
  GraduationCap,
  Users,
  ShieldCheck,
  Zap,
} from 'lucide-react'

import cArm from '../assets/img/c-arm.jpg'
import ultrasoundPhilips from '../assets/img/ultrasound-philips.jpg'
import ultrasoundFleet from '../assets/img/ultrasound-fleet.jpg'
import ctGantry from '../assets/img/ct-gantry.jpg'
import theatre from '../assets/img/theatre.jpg'
import theatreDialysis from '../assets/img/theatre-dialysis.jpg'
import xrayRoom from '../assets/img/xray-fluoroscopy-room.jpg'
import mammographyUnit from '../assets/img/mammography-unit.jpg'
import ventilator from '../assets/img/ventilator.jpg'

/* ---------------- contact ---------------- */

export const contact = {
  phoneDisplay: '+254 758 596 947',
  phoneHref: 'tel:+254758596947',
  whatsappNumber: '254758596947',
  email: 'btonmedengineering@gmail.com',
}

export const whatsappLink = (message = 'Hello Btonmed, I would like to make an enquiry.') =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`

const isMobile = () => typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)

// Phones open the device mail app; computers often have no mail app set up, so open Gmail compose instead.
export const mailLink = (subject = 'Enquiry from the Btonmed website', body = '') => {
  const s = encodeURIComponent(subject)
  const b = encodeURIComponent(body)
  if (isMobile()) return `mailto:${contact.email}?subject=${s}${body ? `&body=${b}` : ''}`
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${s}${body ? `&body=${b}` : ''}`
}

// Spread onto an <a>: href plus new-tab attributes when the link opens Gmail on the web
export const mailProps = (subject, body) => {
  const href = mailLink(subject, body)
  return href.startsWith('http') ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href }
}

export const socials = {
  instagram: 'https://www.instagram.com/p/DVG9_t3jLiH/?igsh=MTAweG1jYmcwdnRnag==',
  facebook: 'https://www.facebook.com/share/1Gp4ij8Rxa/',
  tiktok: 'https://www.tiktok.com/@btonmed?_r=1&_t=ZS-9Ao8a0zNkPf',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Equipment', to: '/equipment' },
  { label: 'Academy', to: '/academy', badge: 'New' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

/* ---------------- home ---------------- */

export const heroWords = ['C-Arm machines', 'X-Ray systems', 'ultrasound', 'fluoroscopy', 'mammography', 'CT scanners']

export const pillars = [
  {
    icon: Store,
    title: 'Equipment Sales & Leasing',
    text: 'Buy or lease tested imaging, diagnostic and theatre equipment, ready for clinical use.',
    points: ['New & refurbished units', 'Flexible lease plans', 'Delivery & installation'],
    to: '/equipment',
    cta: 'Browse equipment',
  },
  {
    icon: Wrench,
    title: 'Biomedical Engineering',
    text: 'Servicing, repairs, maintenance and calibration that keep your machines online.',
    points: ['Preventive maintenance', 'Repairs & calibration', 'Technical support'],
    to: '/services',
    cta: 'Explore services',
  },
  {
    icon: GraduationCap,
    title: 'Biomedical Bootcamp',
    text: 'A 3-month hands-on program, from basic electronics to advanced imaging.',
    points: ['Real hospital equipment', 'Expert instructors', 'Ksh 60,000 full program'],
    to: '/academy',
    cta: 'View the bootcamp',
    highlight: true,
  },
]

/* ---------------- services ---------------- */

export const services = [
  {
    icon: Store,
    title: 'Medical Equipment Sales',
    text: 'Quality new and refurbished imaging, diagnostic and theatre equipment, sourced, tested and delivered ready for clinical use.',
    points: ['Sourcing to your specification', 'Pre-delivery testing', 'Installation & handover'],
  },
  {
    icon: KeyRound,
    title: 'Professional Equipment Leasing',
    text: 'Flexible lease plans that give your facility modern technology without the heavy upfront investment.',
    points: ['Plans sized to your budget', 'Servicing support', 'Upgrade options'],
  },
  {
    icon: Wrench,
    title: 'Servicing & Repairs',
    text: 'Fast fault diagnosis and board-level repairs that bring critical equipment back online and reduce downtime.',
    points: ['On-site & workshop repairs', 'Board-level fault finding', 'Genuine spare parts'],
  },
  {
    icon: Gauge,
    title: 'Maintenance & Calibration',
    text: 'Scheduled preventive maintenance and precise calibration so every reading, image and dose stays accurate and safe.',
    points: ['Planned maintenance schedules', 'Performance testing', 'Service documentation'],
  },
  {
    icon: Headset,
    title: 'Technical Support & Engineering',
    text: 'Installation, commissioning, user training and on-call engineering support from a team that knows your machines.',
    points: ['Installation & commissioning', 'Clinical user training', 'On-call support'],
  },
]

export const engineeringCapabilities = [
  'Preventive maintenance schedules',
  'Corrective and board-level repairs',
  'Calibration and performance testing',
  'Installation and commissioning',
  'Clinical user training',
  'Spare parts sourcing and replacement',
]

export const processSteps = [
  { title: 'Tell us what you need', text: 'Reach out on WhatsApp, phone or email with the equipment, model or fault.' },
  { title: 'Expert assessment', text: 'Our engineers review your needs or inspect the machine and recommend the right fix.' },
  { title: 'Clear quotation', text: 'You get a transparent quote for the purchase, lease or repair before work begins.' },
  { title: 'Delivery & ongoing care', text: 'We deliver, install, train your staff and keep everything performing.' },
]

/* ---------------- equipment ---------------- */

export const equipmentCategories = ['All', 'Medical Imaging', 'Diagnostic', 'Theatre & Biomedical']

export const equipment = [
  {
    name: 'C-Arm Machines',
    category: 'Medical Imaging',
    image: cArm,
    text: 'Mobile fluoroscopic C-arms for orthopaedic, trauma and interventional procedures.',
    tags: ['Sales', 'Leasing', 'Servicing'],
    featured: true,
  },
  {
    name: 'X-Ray & Fluoroscopy',
    category: 'Medical Imaging',
    image: xrayRoom,
    text: 'Fixed and mobile radiography and fluoroscopy systems, installed and maintained to standard.',
    tags: ['Installation', 'Calibration'],
  },
  {
    name: 'Ultrasound Systems',
    category: 'Medical Imaging',
    image: ultrasoundPhilips,
    text: 'Cart-based and portable ultrasound for general, obstetric, cardiac and vascular imaging.',
    tags: ['Sales', 'Probe repair'],
    featured: true,
  },
  {
    name: 'Mammography Equipment',
    category: 'Medical Imaging',
    image: mammographyUnit,
    text: 'Digital mammography units for breast screening programmes, with QA and calibration.',
    tags: ['Leasing', 'Calibration'],
  },
  {
    name: 'CT Scanners',
    category: 'Medical Imaging',
    image: ctGantry,
    text: 'Gantry, tube and detector servicing to keep CT suites scanning reliably.',
    tags: ['Servicing', 'Repairs'],
    featured: true,
  },
  {
    name: 'Diagnostic Ultrasound Fleet',
    category: 'Diagnostic',
    image: ultrasoundFleet,
    text: 'Refurbished diagnostic scanners tested and ready for clinics, hospitals and outreach.',
    tags: ['Sales', 'Refurbished'],
  },
  {
    name: 'Patient Monitoring & Endoscopy',
    category: 'Diagnostic',
    image: theatreDialysis,
    text: 'Multiparameter monitors, endoscopy towers and dialysis machines for diagnosis and care.',
    tags: ['Sales', 'Maintenance'],
  },
  {
    name: 'Anaesthesia & Theatre Equipment',
    category: 'Theatre & Biomedical',
    image: theatre,
    text: 'Anaesthesia machines, operating tables, theatre lights and monitors for surgical suites.',
    tags: ['Installation', 'Servicing'],
  },
  {
    name: 'Ventilators & Critical Care',
    category: 'Theatre & Biomedical',
    image: ventilator,
    text: 'ICU and transport ventilators serviced, performance-tested and calibrated.',
    tags: ['Repairs', 'Calibration'],
  },
]

export const acquireOptions = [
  {
    icon: Store,
    title: 'Buy',
    text: 'Own your equipment outright, with testing, installation and after-sales support.',
    points: ['Full ownership', 'New or refurbished', 'Installation & training included on request'],
  },
  {
    icon: KeyRound,
    title: 'Lease',
    text: 'Access the technology you need now and pay over time, with servicing support.',
    points: ['Low upfront cost', 'Predictable payments', 'Servicing support'],
  },
]

/* ---------------- academy ---------------- */

export const academyFacts = [
  { label: 'Duration', value: '3 Months' },
  { label: 'Program fee', value: 'Ksh 60,000' },
  { label: 'Format', value: 'Theory + practical' },
  { label: 'Outcome', value: 'Career ready' },
]

export const academyModules = [
  { icon: Cpu, title: 'Electronics & Circuits', text: 'Components, circuits, power supplies and fault finding.' },
  { icon: MonitorDot, title: 'Medical Electronics', text: 'How monitors, pumps and life-support devices sense, process and display.' },
  { icon: Radiation, title: 'Imaging Systems', text: 'X-ray, C-arm, fluoroscopy, ultrasound, mammography and CT principles.' },
  { icon: ScanLine, title: 'Image Processing', text: 'How raw signals become diagnostic images, and how to troubleshoot the chain.' },
  { icon: Boxes, title: 'Biomedical Systems', text: 'Theatre, dialysis and critical care equipment, end to end.' },
  { icon: HeartPulse, title: 'Innovation & Impact', text: 'Design thinking and safety standards for a healthier tomorrow.' },
]

export const academyIncludes = [
  'Hands-on training on real hospital equipment',
  'Real-world experience with live service jobs',
  'Expert instructors from the field',
  'Modern training facilities',
  'Industry exposure and networking',
  'Career-ready skills and better prospects',
]

// Entry requirements: who can join
export const academyEligibility = [
  { field: 'Medical Engineering', level: 'Diploma / Degree' },
  { field: 'Electrical Engineering', level: 'Degree' },
  { field: 'Mechatronics', level: 'Degree' },
]

// Recommended toolkit learners bring
export const academyToolkit = [
  { icon: Gauge, title: 'Digital multimeter', text: 'Rated up to 1000V' },
  { icon: ShieldCheck, title: 'Personal protective equipment', text: 'Appropriate PPE for workshop and hospital work' },
  { icon: Zap, title: 'Phase tester', text: 'For safe live-circuit checks' },
]

export const academyHandTools = [
  'Screwdrivers, incl. precision',
  'Torx & Allen keys',
  'Spanners (8–14 mm)',
  'Pliers & long-nose pliers',
  'Wire stripper / cutter',
]

export const academyFaqs = [
  {
    q: 'How long is the bootcamp and how much does it cost?',
    a: 'The Advanced Biomedical Engineering Program runs for 3 months and combines theory with practical training. The full program fee is Ksh 60,000.',
  },
  {
    q: 'Who can join?',
    a: 'The bootcamp is open to holders of a Diploma or Degree in Medical Engineering, or a Degree in Electrical Engineering or Mechatronics.',
  },
  {
    q: 'Do I need to bring my own tools?',
    a: 'Yes. We recommend a digital multimeter (up to 1000V), appropriate PPE and a basic tool kit: screwdrivers, Torx and Allen keys, spanners (8–14 mm), pliers, a wire stripper and a phase tester.',
  },
  {
    q: 'Will I train on real equipment?',
    a: 'Yes. Training is hands-on with real hospital equipment, including theatre, dialysis and imaging systems.',
  },
  {
    q: 'When is the next intake and how do I enroll?',
    a: 'Message us on WhatsApp or email us and we will share the next intake dates, requirements and payment options.',
  },
]

/* ---------------- about ---------------- */

export const values = [
  { icon: HeartPulse, title: 'Innovation', text: 'Applying modern engineering to make healthcare technology more accessible and dependable.' },
  { icon: Users, title: 'Skills', text: 'Building local expertise by training the next generation of biomedical engineers.' },
  { icon: GraduationCap, title: 'Healthier Tomorrow', text: 'Every machine we keep running means patients get diagnosed and treated on time.' },
]

export const whyUs = [
  { title: 'Engineers who know imaging', text: 'Specialist experience across C-arms, X-ray, ultrasound, fluoroscopy, mammography and CT.' },
  { title: 'Less downtime, more care', text: 'Responsive service and preventive maintenance that keep machines working for patients.' },
  { title: 'Flexible ways to acquire', text: 'Buy outright or lease, with options sized to your facility and budget.' },
  { title: 'One partner, full lifecycle', text: 'From sourcing and installation to calibration, repairs and staff training.' },
]

export const faqs = [
  {
    q: 'What types of medical equipment do you supply and service?',
    a: 'We specialise in medical imaging, including C-arms, X-ray, ultrasound, fluoroscopy, mammography and CT, as well as diagnostic, theatre, dialysis and critical care equipment such as anaesthesia machines, ventilators and patient monitors.',
  },
  {
    q: 'Can my facility lease equipment instead of buying it?',
    a: 'Yes. Our leasing plans let you access the equipment you need without a large upfront investment. Get in touch and we will recommend a plan that suits your facility.',
  },
  {
    q: 'Do you offer maintenance contracts?',
    a: 'We offer scheduled preventive maintenance and calibration, as well as on-call repairs. Send us your equipment list and we will prepare a service proposal.',
  },
  {
    q: 'How do I get a quotation?',
    a: 'The fastest way is WhatsApp. You can also call or email us with the equipment name, model and what you need, and our team will respond with a quote.',
  },
]
