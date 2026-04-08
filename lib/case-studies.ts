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
    tags: 'Auto Detailing · Lead Generation Automation · Web App',
    status: 'Live',
    context:
      'Auto detailing businesses run lean. The owner is usually the operator — doing the work, managing the schedule, handling customer calls. Finding new customers means cold outreach, and most owners don\'t have time to do it consistently, let alone follow up.',
    problem:
      'Manual prospecting is slow and inconsistent. Detailers would identify potential customers — car fleets, dealerships, high-end vehicle owners — but following up reliably was a full-time job on its own. Leads would go cold. Good prospects were never contacted. Growth stalled because outreach was always the last thing on the list.',
    solutionLead:
      'A lead generation and outreach system built into the ProDetailer.app platform. The system:',
    solutionBullets: [
      'Identifies target prospects based on defined criteria',
      'Sends personalized initial outreach automatically',
      'Runs follow-up sequences without manual intervention',
      'Routes interested leads to the owner\'s inbox or booking flow',
      'Tracks every touchpoint so nothing falls through',
    ],
    solutionClosing:
      'No prospecting spreadsheets. No manual follow-up. The system runs in the background while the business owner does the actual work.',
    outcome:
      'Eliminates manual prospecting entirely. Outreach happens consistently — even during busy seasons when the owner has no time to think about sales. New leads arrive through a system, not through luck or effort.',
    builtWith: ['Custom automation pipeline', 'Web app platform', 'Outreach tooling'],
  },
  salariuok: {
    slug: 'salariuok',
    title: 'SalariuOk.ro',
    tags: 'Romanian Job Market · Salary Benchmarking · Custom Web App',
    status: 'Live',
    context:
      'Salary conversations in Romania are opaque. Employees don\'t know if they\'re underpaid. Employers don\'t know if their offers are competitive. Publicly available data is scattered, outdated, or country-generic rather than Romania-specific.',
    problem:
      'There was no clean, focused tool for salary benchmarking in the Romanian market. Existing options were either too broad (global tools) or too manual (asking in forums, word-of-mouth). Someone needed to build the right thing: fast, accurate, and designed for the actual question people were trying to answer.',
    solutionLead: 'SalariuOk.ro — a custom web application for salary benchmarking in the Romanian job market. The app:',
    solutionBullets: [
      'Lets users look up salary ranges by role, industry, and experience level',
      'Surfaces relevant, Romania-specific data',
      'Presents results cleanly — no noise, no forced account creation',
      'Loads fast and works on mobile',
    ],
    solutionClosing:
      'Built and shipped as a focused tool. Scoped tightly to the one problem it solves — no feature creep, no unnecessary complexity.',
    outcome:
      'A working, live product that gives Romanian professionals and employers a reliable reference point for salary conversations. Clean, direct, and useful — which is the point.',
    builtWith: ['Custom web application (full-stack build)', 'Romanian market data integration'],
  },
}

export function listCaseStudySlugs() {
  return Object.keys(CASE_STUDIES)
}
