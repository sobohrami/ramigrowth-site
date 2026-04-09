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
        "Auto detailing businesses run lean. The owner is usually the operator doing the work, managing the schedule, and handling customer calls. Finding new customers means cold outreach, and most owners do not have time to do it consistently, let alone follow up.",
      problem:
        'Manual prospecting is slow and inconsistent. Detailers can identify potential customers, but following up reliably becomes a full-time job on its own. Leads go cold, good prospects never get contacted, and growth stalls because outreach is always the last thing on the list.',
      solutionLead: 'A lead generation and outreach system built directly into the ProDetailer.app platform.',
      solutionBullets: [
        'Identifies target prospects based on defined criteria',
        'Sends personalized first-touch outreach automatically',
        'Runs follow-up sequences without manual intervention',
        "Routes interested leads to the owner's inbox or booking flow",
        'Tracks every touchpoint so nothing falls through',
      ],
      solutionClosing:
        'The result is a system running in the background while the business owner focuses on delivery instead of prospecting spreadsheets.',
      outcome:
        'Manual prospecting is removed from the weekly operating burden. Outreach happens consistently, even during busy periods, and new leads arrive through a repeatable system instead of luck.',
      builtWith: ['Custom automation pipeline', 'Web app platform', 'Outreach tooling'],
    },
    ro: {
      title: 'ProDetailer.app',
      tags: 'Auto detailing | Automatizare lead generation | Aplicație web',
      status: 'Live',
      context:
        'Business-urile de auto detailing funcționează cu echipe mici. De multe ori, proprietarul este și operatorul care execută lucrările, gestionează programările și răspunde clienților. Atragerea de clienți noi înseamnă outreach rece, iar consistența devine aproape imposibilă.',
      problem:
        'Prospectarea manuală este lentă și inconstantă. Detailerii pot identifica potențiali clienți, dar follow-up-ul devine rapid un job separat. Lead-urile se răcesc, contactele bune nu mai sunt urmărite, iar creșterea se blochează pentru că outreach-ul rămâne mereu ultima prioritate.',
      solutionLead: 'Un sistem de lead generation și outreach construit direct în platforma ProDetailer.app.',
      solutionBullets: [
        'Identifică prospecte-țintă pe baza unor criterii clare',
        'Trimite automat mesaje personalizate de prim contact',
        'Rulează secvențe de follow-up fără intervenție manuală',
        'Trimite lead-urile interesate în inbox-ul proprietarului sau în fluxul de booking',
        'Urmărește fiecare interacțiune astfel încât nimic să nu se piardă',
      ],
      solutionClosing:
        'Rezultatul este un sistem care rulează în fundal în timp ce proprietarul se concentrează pe livrare, nu pe tabele de prospectare.',
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
        "Salary conversations in Romania are opaque. Employees do not know if they are underpaid. Employers do not know if their offers are competitive. Public data is scattered, outdated, or too generic to be useful.",
      problem:
        'There was no clean, focused salary benchmarking tool built specifically for the Romanian market. Existing options were either too broad or too manual, forcing people to guess through forums and informal conversations.',
      solutionLead: 'SalariuOk.ro is a focused product built to answer one question well: what is a fair salary range in this market?',
      solutionBullets: [
        'Lets users search salary ranges by role, industry, and experience level',
        'Surfaces Romania-specific data instead of generic global benchmarks',
        'Keeps the experience clean and direct with minimal friction',
        'Loads quickly and works comfortably on mobile',
      ],
      solutionClosing:
        'The build was intentionally tight: one use case, one clear interface, and no unnecessary feature sprawl.',
      outcome:
        'A live product that gives Romanian professionals and employers a practical reference point for salary conversations. Clear, useful, and built around the actual decision people need to make.',
      builtWith: ['Custom web application', 'Romanian market data integration'],
    },
    ro: {
      title: 'SalariuOk.ro',
      tags: 'Piața muncii din România | Benchmark salarial | Aplicație web custom',
      status: 'Live',
      context:
        'Discuțiile despre salarii în România sunt încă opace. Angajații nu știu dacă sunt subplătiți. Angajatorii nu știu dacă ofertele lor sunt competitive. Datele publice sunt fragmentate, vechi sau prea generale ca să fie utile.',
      problem:
        'Nu exista un produs clar și focusat de salary benchmarking construit special pentru piața din România. Opțiunile existente erau fie prea largi, fie prea manuale, împingând oamenii spre forumuri și presupuneri.',
      solutionLead: 'SalariuOk.ro este un produs focusat construit să răspundă bine la o singură întrebare: care este un interval salarial corect în această piață?',
      solutionBullets: [
        'Permite căutarea intervalelor salariale după rol, industrie și nivel de experiență',
        'Afișează date relevante pentru România, nu benchmark-uri globale generice',
        'Păstrează experiența curată și directă, cu minimă fricțiune',
        'Se încarcă rapid și funcționează confortabil pe mobil',
      ],
      solutionClosing:
        'Construcția a fost intenționat strânsă: un singur use case, o interfață clară și fără expansiune inutilă de funcționalități.',
      outcome:
        'Un produs live care oferă profesioniștilor și angajatorilor din România un reper practic pentru discuțiile salariale. Clar, util și construit în jurul deciziei reale pe care trebuie să o ia oamenii.',
      builtWith: ['Aplicație web custom', 'Integrare date din piața românească'],
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
