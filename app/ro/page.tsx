import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'
import HeroOperatorScene from '@/components/HeroOperatorScene'
import SystemDisassemblySection from '@/components/SystemDisassemblySection'
import { getCalendlyUrl } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Acasă',
  description:
    'Construiesc sisteme care îți cresc business-ul: outreach automatizat, aplicații custom și workflow-uri AI cu rezultat real.',
}

const services = [
  {
    index: '01',
    name: 'Sisteme de lead generation',
    desc: 'Prospectare, outbound personalizat, logică de follow-up și rutare lead-uri construite pe piața și oferta ta.',
    outcome: 'Mai multe conversații relevante fără prospectare manuală zilnică.',
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
    desc: 'Unelte interne, aplicații pentru clienți și MVP-uri construite în jurul unei probleme reale, nu al unei platforme generice.',
    outcome: 'Un produs funcțional în săptămâni, nu un plan pe șase luni.',
    id: 'custom-web-apps',
  },
  {
    index: '04',
    name: 'Tooling cu AI',
    desc: 'AI practic introdus în procese reale: sumarizare, documente, rutare și suport pentru decizii.',
    outcome: 'Mai mult throughput fără să reconstruiești toată operațiunea.',
    id: 'ai-enhanced-tooling',
  },
]

const principles = [
  {
    title: 'Construit aproape de problema de business',
    body: 'Fără lanțuri lungi de handoff, fără teatru de agenție și fără documente inutile înainte să existe ceva real.',
  },
  {
    title: 'Scope pentru rezultat, nu pentru aparențe',
    body: 'Fiecare build este legat de un rezultat comercial sau operațional: mai multe lead-uri, mai puțin lucru manual sau un produs care poate fi lansat.',
  },
  {
    title: 'Suficient de rapid încât să creeze leverage',
    body: 'Ținta este momentum. Strângem brief-ul, construim versiunea utilă și iterăm după ce sistemul este live.',
  },
]

const caseStudies = [
  {
    slug: 'prodetailer',
    label: 'Platformă lead-gen',
    title: 'ProDetailer.app',
    body: 'Un motor de lead generation și follow-up pentru business-uri de auto detailing, construit să transforme outreach-ul în lucrări rezervate.',
  },
  {
    slug: 'salariuok',
    label: 'Aplicație market intelligence',
    title: 'SalariuOk.ro',
    body: 'Un produs de salary benchmarking pentru piața din România, construit cu date live și o interfață focusată pe operator.',
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
            <p className="eyebrow">Sisteme de automatizare pentru operatori</p>
            <h1 className="display-title mt-6 max-w-4xl">
              Construim motorul,
              <br />
              nu încă un blocaj.
            </h1>
            <p className="lede mt-7">
              Proiectez și lansez sisteme de venit, unelte interne și workflow-uri cu AI pentru business-uri care au
              nevoie acum de un upgrade operațional concret, nu de șase săptămâni de discovery.
            </p>
            <p className="mt-5 max-w-2xl text-sm uppercase tracking-[0.22em] text-rami-gold/90">
              Vizualuri AI credibile. Workflow-uri autonome. Un strat de sistem care chiar pare viu.
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
                <p className="mt-2 text-sm leading-7 text-rami-cream">Lead generation, automatizare workflow-uri, aplicații custom.</p>
              </div>
              <div>
                <p className="eyebrow text-rami-fog/60">Livrare</p>
                <p className="mt-2 text-sm leading-7 text-rami-cream">Scope strâns, comunicare directă, software funcțional.</p>
              </div>
              <div>
                <p className="eyebrow text-rami-fog/60">Client ideal</p>
                <p className="mt-2 text-sm leading-7 text-rami-cream">Operatori care vor viteză și upside comercial real.</p>
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
            <p className="eyebrow">De ce aleg clienții modelul acesta</p>
            <h2 className="section-title mt-6 max-w-xl">Mai puțină ceremonie. Mai mult leverage.</h2>
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
            <h2 className="section-title mt-6">Patru moduri cu leverage mare prin care reducem fricțiunea și creăm momentum.</h2>
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
              <h2 className="section-title mt-6">Dovadă în produse live, nu în mockup-uri ipotetice.</h2>
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
        headline="Ai un blocaj operațional care merită rezolvat?"
        subtext="Vino cu problema reală. Îți spun dacă ar trebui automatizată, construită ca unealtă sau lăsată în pace."
        ctaLabel="Programează un discovery call"
        locale="ro"
      />
    </main>
  )
}
