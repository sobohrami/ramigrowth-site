export type CaseStudy = {
  slug: string
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

export const CASE_STUDIES: Record<string, CaseStudy> = {
  prodetailer: {
    slug: 'prodetailer',
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
  salariuok: {
    slug: 'salariuok',
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
}

export function listCaseStudySlugs() {
  return Object.keys(CASE_STUDIES)
}
