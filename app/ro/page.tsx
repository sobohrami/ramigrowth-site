import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'
import HeroOperatorScene from '@/components/HeroOperatorScene'
import SystemDisassemblySection from '@/components/SystemDisassemblySection'
import { getCalendlyUrl } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Automatizări AI pentru lead generation, procese și aplicații web custom',
  description:
    'RamiGrowth ajută firmele de servicii și echipele conduse de operatori să automatizeze lead generation-ul, procesele și execuția cu AI.',
  keywords: [
    'automatizări AI',
    'servicii AI România',
    'automatizare procese',
    'lead generation',
    'aplicații web custom',
    'agenție automatizare AI',
  ],
  alternates: {
    canonical: '/ro',
    languages: {
      en: '/',
      ro: '/ro',
    },
  },
}

const services = [
  {
    index: '01',
    name: 'Sisteme de lead generation',
    desc: 'Prospectare, outbound personalizat, logică de follow-up și rutare de lead-uri construite în jurul pieței și procesului tău de vânzare.',
    outcome: 'Mai multe conversații relevante fără prospectare manuală în fiecare săptămână.',
    id: 'lead-generation',
  },
  {
    index: '02',
    name: 'Automatizare workflow-uri',
    desc: 'Blocajele operaționale sunt mapate, automatizate și integrate în uneltele pe care echipa deja le folosește.',
    outcome: 'Mai puțin admin și execuție mai rapidă cu aceeași echipă.',
    id: 'workflow-automation',
  },
  {
    index: '03',
    name: 'Aplicații web custom',
    desc: 'Unelte interne, aplicații pentru clienți și MVP-uri construite în jurul unui job real de business, nu al unei platforme generice.',
    outcome: 'Un produs util în săptămâni, nu un ciclu de planificare de șase luni.',
    id: 'custom-web-apps',
  },
  {
    index: '04',
    name: 'Tooling cu AI',
    desc: 'AI practic adăugat în procese reale: sumarizare, rutare, triere, documente și suport intern.',
    outcome: 'Mai mult throughput fără să reconstruiești toată operațiunea.',
    id: 'ai-enhanced-tooling',
  },
]

const principles = [
  {
    title: 'Construit în jurul unui bottleneck real',
    body: 'Proiectele pornesc dintr-o problemă operațională sau comercială clară, nu dintr-un brief vag de transformare AI.',
  },
  {
    title: 'Lansat în versiuni utile',
    body: 'Prima versiune este scopată să creeze leverage rapid, apoi este îmbunătățită pe baza utilizării reale.',
  },
  {
    title: 'Gândit pentru follow-through',
    body: 'Scopul nu este un demo arătos, ci un sistem pe care echipa îl poate folosi și care continuă să creeze valoare după lansare.',
  },
]

const caseStudies = [
  {
    slug: 'prodetailer',
    label: 'Platformă lead generation',
    title: 'ProDetailer.app',
    body: 'Un sistem de lead generation și follow-up pentru business-uri de auto detailing, construit să transforme outreach-ul în lucrări rezervate.',
  },
  {
    slug: 'salariuok',
    label: 'Aplicație de market intelligence',
    title: 'SalariuOk.ro',
    body: 'Un produs de salary benchmarking pentru piața din România, construit în jurul unei experiențe clare de căutare și suport decizional util.',
  },
]

export default function HomePageRo() {
  const cal = getCalendlyUrl()

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="ambient-orb absolute left-[-8%] top-24 h-64 w-64 rounded-full bg-rami-gold/10 blur-3xl" />
        <div className="ambient-orb absolute right-[-10%] top-16 h-80 w-80 rounded-full bg-rami-steel/20 blur-3xl" />

        <div className="shell relative grid min-h-[calc(100svh-82px)] items-center gap-12 py-14 md:gap-16 md:py-24 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="eyebrow">Studio de automatizare AI</p>
            <h1 className="display-title mt-6 max-w-4xl">
              Automatizări AI pentru business-uri care vor mai multe lead-uri și mai puțină muncă manuală.
            </h1>
            <p className="lede mt-7">
              RamiGrowth construiește sisteme de lead generation, automatizare de procese, aplicații web custom și
              unelte AI pentru firme de servicii și echipe conduse de operatori care au nevoie de execuție mai rapidă și rezultate reale.
            </p>
            <p className="mt-5 max-w-2xl text-sm uppercase tracking-[0.22em] text-rami-gold/90">
              Lead generation. Automatizare workflow-uri. Aplicații custom. Unelte AI care se potrivesc operațiunii reale.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {cal ? (
                <a href={cal} target="_blank" rel="noopener noreferrer" className="button-primary min-w-[210px]">
                  Programează un discovery call
                </a>
              ) : (
                <Link href="/ro/contact" className="button-primary min-w-[210px]">
                  Programează un discovery call
                </Link>
              )}
              <Link href="/ro/work" className="button-secondary min-w-[170px]">
                Vezi proiecte
              </Link>
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="eyebrow text-rami-fog/60">Focus</p>
                <p className="mt-2 text-sm leading-7 text-rami-cream">
                  Lead generation, automatizare procese, aplicații custom, tooling cu AI.
                </p>
              </div>
              <div>
                <p className="eyebrow text-rami-fog/60">Livrare</p>
                <p className="mt-2 text-sm leading-7 text-rami-cream">Scope strâns, build rapid, colaborare directă.</p>
              </div>
              <div>
                <p className="eyebrow text-rami-fog/60">Potrivire bună</p>
                <p className="mt-2 text-sm leading-7 text-rami-cream">
                  Firme de servicii, fondatori și echipe cu un bottleneck real de rezolvat.
                </p>
              </div>
            </div>
          </div>

          <HeroOperatorScene locale="ro" />
        </div>
      </section>

      <SystemDisassemblySection locale="ro" />

      <section className="section-divider py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">De ce funcționează</p>
            <h2 className="section-title mt-6 max-w-xl">Mai puțin zgomot. Sisteme mai utile.</h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold text-rami-cream">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-rami-fog">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Ce construiesc</p>
            <h2 className="section-title mt-6">Servicii create pentru cerere, eliminarea muncii manuale și execuție mai bună.</h2>
          </div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/ro/services#${service.id}`}
                className="grid gap-4 py-8 md:grid-cols-[100px_1fr_0.8fr] md:gap-8 hover:bg-white/[0.025]"
              >
                <p className="font-display text-4xl text-rami-gold">{service.index}</p>
                <div>
                  <h3 className="text-2xl font-semibold text-rami-cream">{service.name}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-8 text-rami-fog">{service.desc}</p>
                </div>
                <div className="self-center">
                  <p className="label">Rezultat principal</p>
                  <p className="mt-3 text-sm leading-7 text-rami-cream">{service.outcome}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider py-24">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Proiecte selectate</p>
              <h2 className="section-title mt-6">Studii de caz construite în jurul unor rezultate comerciale reale.</h2>
            </div>
            <Link href="/ro/work" className="button-secondary max-w-max">
              Vezi toate proiectele
            </Link>
          </div>

          <div className="mt-14 grid gap-8">
            {caseStudies.map((item, index) => (
              <Link
                key={item.slug}
                href={`/ro/work/${item.slug}`}
                className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:grid-cols-[0.25fr_0.75fr] md:p-10"
              >
                <div className="flex flex-col justify-between">
                  <p className="font-display text-6xl leading-none text-rami-gold/80">0{index + 1}</p>
                  <p className="eyebrow">{item.label}</p>
                </div>
                <div>
                  <h3 className="font-display text-4xl text-rami-cream md:text-5xl">{item.title}</h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-rami-fog">{item.body}</p>
                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-rami-gold">Deschide studiul de caz</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Ai nevoie de un sistem AI care chiar economisește timp sau generează venit?"
        subtext="Vino cu bottleneck-ul, workflow-ul manual sau problema de cerere. Îți spun ce merită automatizat primul."
        ctaLabel="Programează un discovery call"
        locale="ro"
      />
    </main>
  )
}
