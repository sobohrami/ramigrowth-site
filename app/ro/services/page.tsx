import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'Servicii de automatizare AI pentru lead generation, procese și software custom',
  description:
    'Explorează serviciile RamiGrowth pentru automatizări AI, lead generation, automatizare de procese și software custom construit pentru firme de servicii și echipe conduse de operatori.',
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
    strap: 'Găsește, contactează și urmărește prospectele potrivite în mod automat.',
    description:
      'Prospectare, enrichment, outbound personalizat, logică de follow-up și rutare de lead-uri construite în jurul pieței, ofertei și procesului tău de vânzare.',
    outcomes: [
      'Mai multe conversații calificate',
      'Follow-up automatizat',
      'Un pipeline mai curat, cu mai puține oportunități pierdute',
    ],
    fit: 'Potrivit pentru firme de servicii, operatori B2B, recrutare și echipe conduse de fondatori care au nevoie de cerere fără să piardă ore întregi pe outreach manual.',
  },
  {
    id: 'workflow-automation',
    title: 'Automatizare workflow-uri',
    strap: 'Redu munca administrativă repetitivă și ține echipa în mișcare.',
    description:
      'Onboarding, programări, rapoarte, remindere, handoff-uri, igienă CRM, facturare și bucle back-office reconstruite în fluxuri mai rapide și mai ușor de urmărit.',
    outcomes: [
      'Ore câștigate înapoi în fiecare săptămână',
      'Mai puține greșeli manuale',
      'Mai multă capacitate fără angajări suplimentare pentru admin',
    ],
    fit: 'Potrivit pentru firme de servicii, clinici, agenții și operatori îngropați în taskuri repetitive care ar trebui deja automatizate.',
  },
  {
    id: 'custom-web-apps',
    title: 'Aplicații web custom',
    strap: 'Construiește exact unealta pe care echipa ta și-ar fi dorit să o aibă deja.',
    description:
      'Unelte interne, portaluri pentru clienți, dashboard-uri, calculatoare sau un MVP clar construit în jurul unui workflow și al unui use case real de business.',
    outcomes: [
      'Software util în săptămâni, nu în trimestre',
      'Un produs construit după felul în care lucrează echipa ta',
      'O bază care poate continua să evolueze după lansare',
    ],
    fit: 'Potrivit pentru fondatori care construiesc prima versiune utilă și pentru echipe care au depășit deja spreadsheet-urile plus SaaS-urile rupte între ele.',
  },
  {
    id: 'ai-enhanced-tooling',
    title: 'Tooling cu AI',
    strap: 'Folosește AI acolo unde chiar economisește timp sau îmbunătățește deciziile.',
    description:
      'Extracție din documente, sumarizare, triere, rutare, asistenți interni, operațiuni de conținut și straturi de suport decizional acolo unde AI poate reduce fricțiunea operațională reală.',
    outcomes: [
      'Volum mare de muncă repetitivă preluat automat',
      'Output-uri utile livrate în sistemele existente',
      'Fără rebuild complet doar pentru a adăuga inteligență',
    ],
    fit: 'Potrivit pentru echipe care lucrează cu documente, mesaje, decizii repetitive sau workflow-uri bogate în date, unde AI poate crește rapid throughput-ul.',
  },
]

const delivery = [
  'Pornim de la o problemă clară de business.',
  'Lansăm rapid o primă versiune utilă.',
  'Îmbunătățim sistemul după utilizare reală, nu după presupuneri.',
]

const signals = [
  ['Pentru cine este', 'Pentru echipe care au nevoie de mai multe lead-uri, mai puțină muncă manuală sau o unealtă internă mai bună.'],
  ['La ce să te aștepți', 'Scope clar, colaborare directă și o primă versiune practică.'],
  ['Ce contează cel mai mult', 'Sistemul trebuie să economisească timp, să genereze venit sau să facă execuția mai ușoară.'],
]

export default function ServicesPageRo() {
  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Servicii</p>
            <h1 className="section-title mt-6">Servicii de automatizare AI pentru lead generation, procese și software custom.</h1>
          </div>
          <div className="space-y-6">
            <p className="lede">
              Alege serviciul care se potrivește problemei: mai multe lead-uri calificate, mai puțină muncă manuală sau
              o aplicație construită exact pentru fluxul tău de lucru.
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
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rami-gold">Serviciu</p>
                  <h2 className="mt-4 font-display text-4xl leading-tight text-rami-cream md:text-5xl">{service.title}</h2>
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
            <p className="eyebrow">Cum se mișcă proiectele</p>
            <h2 className="section-title mt-6">De la problemă clară la lansare utilă.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Găsim fricțiunea', 'Identificăm unde se pierd timp, bani sau follow-through.'],
              ['02', 'Scopăm prima versiune', 'Definim cel mai mic build care face o diferență reală și rapidă.'],
              ['03', 'Lansăm și îmbunătățim', 'Sistemul ajunge repede live, apoi este rafinat pe baza utilizării reale.'],
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
        headline="Nu ești sigur ce serviciu se potrivește?"
        subtext="Spune-mi ce încetinește business-ul și îți spun rapid care este următorul pas potrivit."
        ctaLabel="Începe conversația"
        locale="ro"
      />
    </main>
  )
}
