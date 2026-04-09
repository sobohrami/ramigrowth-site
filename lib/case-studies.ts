import type { Locale } from '@/lib/locales'

export type CaseStudyContent = {
  title: string
  tags: string
  status: string
  context: string
  problem: string
  solutionLead: string
  solutionBullets: string[]
  solutionClosing: string
  outcome: string
  builtWith: string[]
}

type CaseStudyRecord = {
  slug: string
  en: CaseStudyContent
  ro: CaseStudyContent
}

export type LocalizedCaseStudy = CaseStudyContent & {
  slug: string
}

export const CASE_STUDIES: Record<string, CaseStudyRecord> = {
  prodetailer: {
    slug: 'prodetailer',
    en: {
      title: 'ProDetailer.app',
      tags: 'Auto detailing | Lead generation automation | Web app',
      status: 'Live',
      context:
        'Auto detailing businesses usually run lean. The owner is often the technician, the scheduler, and the person replying to customers. New business depends on outreach, but consistent prospecting is hard to maintain when the service work is already full.',
      problem:
        'Manual prospecting was slow, inconsistent, and easy to postpone. Good prospects were found, but follow-up slipped, opportunities went cold, and growth depended too much on spare time and luck.',
      solutionLead: 'A lead generation and outreach system built directly into the ProDetailer.app platform.',
      solutionBullets: [
        'Identifies target prospects using clear business filters',
        'Sends personalized first-touch outreach automatically',
        'Runs follow-up sequences without manual intervention',
        "Routes interested leads into the owner's inbox or booking flow",
        'Tracks touchpoints so prospects do not fall through the cracks',
      ],
      solutionClosing:
        'The result is a system that keeps prospecting and follow-up moving in the background while the business owner stays focused on delivery.',
      outcome:
        'Manual prospecting is removed from the weekly operating burden. Outreach runs consistently, even during busy periods, and new leads arrive through a repeatable system instead of luck.',
      builtWith: ['Custom automation pipeline', 'Web app platform', 'Outreach tooling'],
    },
    ro: {
      title: 'ProDetailer.app',
      tags: 'Auto detailing | Automatizare lead generation | Aplicație web',
      status: 'Live',
      context:
        'Business-urile de auto detailing funcționează, de obicei, cu echipe mici. Proprietarul este adesea și tehnicianul, și omul care gestionează programările, și persoana care răspunde clienților. Clienții noi vin din outreach, dar prospectarea constantă este greu de susținut când livrarea ocupă deja toată săptămâna.',
      problem:
        'Prospectarea manuală era lentă, inconstantă și ușor de amânat. Prospecte bune erau identificate, dar follow-up-ul se pierdea, oportunitățile se răceau, iar creșterea depindea prea mult de timp liber și noroc.',
      solutionLead: 'Un sistem de lead generation și outreach construit direct în platforma ProDetailer.app.',
      solutionBullets: [
        'Identifică prospecte țintă pe baza unor filtre clare de business',
        'Trimite automat mesaje personalizate de prim contact',
        'Rulează secvențe de follow-up fără intervenție manuală',
        'Trimite lead-urile interesate în inbox-ul proprietarului sau în fluxul de booking',
        'Urmărește fiecare interacțiune astfel încât prospectele să nu se piardă',
      ],
      solutionClosing:
        'Rezultatul este un sistem care menține prospectarea și follow-up-ul active în fundal, în timp ce proprietarul rămâne concentrat pe livrare.',
      outcome:
        'Prospectarea manuală este scoasă din povara operațională săptămânală. Outreach-ul rulează constant, chiar și în perioadele aglomerate, iar lead-urile noi vin printr-un sistem repetabil, nu prin noroc.',
      builtWith: ['Pipeline de automatizare custom', 'Platformă web', 'Sistem de outreach'],
    },
  },
  salariuok: {
    slug: 'salariuok',
    en: {
      title: 'SalariuOk.ro',
      tags: 'Romanian job market | Salary benchmarking | Custom web app',
      status: 'Live',
      context:
        'Salary conversations in Romania are still opaque. Employees do not know whether they are underpaid, employers do not know whether offers are competitive, and public salary data is fragmented or too generic to guide a decision.',
      problem:
        'There was no clear, focused salary benchmarking tool built specifically for the Romanian market. Existing options were either too broad, too manual, or too noisy to help someone make a confident salary decision.',
      solutionLead:
        'SalariuOk.ro was built to answer one question well: what is a fair salary range for this role in this market?',
      solutionBullets: [
        'Lets users search salary ranges by role, industry, and experience level',
        'Surfaces Romania-specific data instead of generic global benchmarks',
        'Keeps the experience clean, direct, and easy to use',
        'Works comfortably on mobile and loads quickly',
      ],
      solutionClosing:
        'The product was intentionally scoped tightly: one focused use case, one clear interface, and no unnecessary feature sprawl.',
      outcome:
        'A live product that gives Romanian professionals and employers a practical reference point for salary conversations. Clear, useful, and built around the actual decision they need to make.',
      builtWith: ['Custom web application', 'Romanian market data integration'],
    },
    ro: {
      title: 'SalariuOk.ro',
      tags: 'Piața muncii din România | Benchmark salarial | Aplicație web custom',
      status: 'Live',
      context:
        'Discuțiile despre salarii în România sunt încă opace. Angajații nu știu dacă sunt subplătiți, angajatorii nu știu dacă ofertele lor sunt competitive, iar datele publice sunt fragmentate sau prea generale pentru a ajuta o decizie reală.',
      problem:
        'Nu exista un produs clar și focusat de salary benchmarking construit special pentru piața din România. Opțiunile existente erau fie prea largi, fie prea manuale, fie prea zgomotoase pentru a ajuta pe cineva să ia o decizie salarială cu încredere.',
      solutionLead:
        'SalariuOk.ro a fost construit să răspundă bine la o singură întrebare: care este un interval salarial corect pentru acest rol în această piață?',
      solutionBullets: [
        'Permite căutarea intervalelor salariale după rol, industrie și nivel de experiență',
        'Afișează date relevante pentru România, nu benchmark-uri globale generice',
        'Păstrează experiența curată, directă și ușor de folosit',
        'Se încarcă rapid și funcționează bine pe mobil',
      ],
      solutionClosing:
        'Produsul a fost scopat intenționat foarte clar: un singur use case util, o interfață clară și fără extindere inutilă de funcționalități.',
      outcome:
        'Un produs live care oferă profesioniștilor și angajatorilor din România un reper practic pentru discuțiile salariale. Clar, util și construit în jurul deciziei reale pe care trebuie să o ia.',
      builtWith: ['Aplicație web custom', 'Integrare de date din piața românească'],
    },
  },
}

export function listCaseStudySlugs() {
  return Object.keys(CASE_STUDIES)
}

export function getCaseStudy(slug: string, locale: Locale = 'en'): LocalizedCaseStudy | null {
  const item = CASE_STUDIES[slug]
  if (!item) return null

  return {
    slug: item.slug,
    ...item[locale],
  }
}

export function getCaseStudies(locale: Locale = 'en') {
  return listCaseStudySlugs().map((slug) => getCaseStudy(slug, locale)!).filter(Boolean)
}
