import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'Servicii AI, lead generation, automatizare procese și aplicații web custom',
  description:
    'Explorează serviciile RamiGrowth pentru automatizări AI, lead generation, automatizare workflow-uri, aplicații web custom și tooling intern construit pentru rezultat.',
  keywords: [
    'automatizări AI',
    'automatizare procese',
    'lead generation',
    'aplicații web custom',
    'servicii AI România',
  ],
  alternates: {
    canonical: '/ro/services',
    languages: {
      en: '/services',
      ro: '/ro/services',
    },
  },
}

const services = [
  {
    id: 'lead-generation',
    title: 'Sisteme de lead generation',
    strap: 'Generează conversații relevante fără să pui prospectarea manuală înapoi pe umerii fondatorului.',
    description:
      'Prospectare, enrichment, outbound personalizat, logică de follow-up și rutare de lead-uri construite în jurul pieței, ofertei și procesului tău de vânzare.',
    outcomes: [
      'Conversații calificate care apar constant',
      'Follow-up automatizat',
      'Pipeline mai strâns, cu mai puține oportunități pierdute',
    ],
    fit: 'Servicii locale, operatori B2B, recrutare și echipe conduse de fondatori care au nevoie de cerere fără să piardă zilnic ore pe outreach manual.',
  },
  {
    id: 'workflow-automation',
    title: 'Automatizare workflow-uri',
    strap: 'Transformă coordonarea repetitivă într-un sistem, nu într-o problemă de staffing.',
    description:
      'Onboarding, programări, rapoarte, remindere, handoff-uri, igienă CRM, facturare și bucle back-office reconstruite în fluxuri mai rapide.',
    outcomes: [
      'Ore câștigate înapoi în fiecare săptămână',
      'Mai puține greșeli manuale și eșecuri de handoff',
      'Mai multă capacitate fără angajări pentru admin evitabil',
    ],
    fit: 'Business-uri de servicii, clinici, agenții și operatori îngropați în taskuri repetitive care ar trebui deja automatizate.',
  },
  {
    id: 'custom-web-apps',
    title: 'Aplicații web custom',
    strap: 'Construiește exact suprafața de produs pe care stack-ul actual nu ți-o poate oferi.',
    description:
      'Unelte interne, portaluri pentru clienți, dashboard-uri, calculatoare sau un MVP clar construit în jurul unui workflow și al unui use case comercial concret.',
    outcomes: [
      'Software funcțional în săptămâni, nu în trimestre',
      'Produs modelat pe workflow-ul tău real',
      'Codebase care poate continua să crească după lansare',
    ],
    fit: 'Fondatori care construiesc prima versiune utilă și operatori care au depășit deja spreadsheet-uri plus SaaS-uri rupte între ele.',
  },
  {
    id: 'ai-enhanced-tooling',
    title: 'Tooling cu AI',
    strap: 'Adaugă inteligență practică în stack-ul pe care îl folosești deja.',
    description:
      'Extracție din documente, sumarizare, triere, rutare, asistenți interni, operațiuni de conținut și straturi de suport decizional acolo unde AI reduce fricțiunea reală.',
    outcomes: [
      'Volum mare de muncă repetitivă preluat automat',
      'Output-uri utile livrate în sistemele existente',
      'Fără rebuild complet doar pentru a adăuga inteligență',
    ],
    fit: 'Echipe care lucrează cu documente, mesaje, decizii repetitive sau fluxuri operaționale bogate în date, unde AI poate crește throughput-ul imediat.',
  },
]

const delivery = [
  'Proiectele pornesc dintr-un singur bottleneck numit clar, nu dintr-un brief vag de transformare AI.',
  'Prima versiune este scopată să creeze leverage rapid.',
  'Automatizarea, interfața și logica de business sunt proiectate împreună.',
]

const signals = [
  ['Potrivit pentru', 'Business-uri cu presiune reală în venituri, livrare sau execuție internă.'],
  ['Nu este pentru', 'Echipe care caută workshop-uri lungi de discovery fără un rezultat clar de business.'],
  ['Cum rulează proiectele', 'Scope strâns, colaborare directă, primă versiune utilă, apoi rafinare.'],
]

export default function ServicesPageRo() {
  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Servicii</p>
            <h1 className="section-title mt-6">Servicii de automatizare AI construite în jurul unor bottleneck-uri reale de business.</h1>
          </div>
          <div className="space-y-6">
            <p className="lede">
              Aici nu vorbim despre consultanță AI generică. Vorbim despre direcții de build clare pentru lead generation,
              automatizare de procese, aplicații custom și tooling cu AI care rezolvă probleme concrete de business.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {delivery.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-rami-fog"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider py-8 md:py-12">
        <div className="shell grid gap-6">
          {services.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-24 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[90px_1.1fr_0.9fr] lg:gap-10">
                <div className="font-display text-5xl text-rami-gold/80">0{index + 1}</div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rami-gold">
                    Direcție de build
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-tight text-rami-cream md:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-rami-cream/90">{service.strap}</p>
                  <p className="mt-5 text-base leading-8 text-rami-fog">{service.description}</p>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#0a1323]/70 p-5">
                    <p className="label">Rezultate principale</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-rami-cream">
                      {service.outcomes.map((item) => (
                        <li key={item} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="label">Potrivire bună pentru</p>
                    <p className="mt-4 text-sm leading-7 text-rami-fog">{service.fit}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Cum încep proiectele</p>
            <h2 className="section-title mt-6">Primul sprint este despre înțelegerea sistemului, nu despre decorarea brief-ului.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Mapăm fricțiunea', 'Identificăm unde se scurg bani, timp sau momentum.'],
              ['02', 'Definim versiunea utilă', 'Stabilim cel mai mic build care creează leverage rapid și poate continua să crească după lansare.'],
              ['03', 'Lansăm și rafinăm', 'Sistemul ajunge repede live, apoi îl îmbunătățim pe baza utilizării reale, nu a presupunerilor.'],
            ].map(([step, title, body]) => (
              <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="font-display text-3xl text-rami-gold/80">{step}</p>
                <h3 className="mt-4 text-xl font-semibold text-rami-cream">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-rami-fog">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="shell grid gap-5 md:grid-cols-3">
          {signals.map(([title, body]) => (
            <div key={title} className="rounded-[1.5rem] border border-white/10 bg-[#0a1323]/72 p-5">
              <p className="label">{title}</p>
              <p className="mt-4 text-sm leading-7 text-rami-fog">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip
        headline="Vrei ajutor să alegi serviciul AI potrivit?"
        subtext="Vino cu bottleneck-ul, problema de venit sau workflow-ul care continuă să se rupă. Îți spun ce sistem merită construit primul."
        ctaLabel="Începe conversația"
        locale="ro"
      />
    </main>
  )
}
