import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'Despre RamiGrowth și modelul de studio de automatizare AI',
  description:
    'Află cum lucrează RamiGrowth: un studio de automatizare AI condus de builder, focusat pe lead generation, automatizare procese și software custom pentru probleme reale de business.',
  alternates: {
    canonical: '/ro/about',
    languages: {
      en: '/about',
      ro: '/ro/about',
    },
  },
}

const proof = [
  {
    label: 'Built',
    title: 'ProDetailer.app',
    body: 'Automatizare de lead generation și follow-up pentru business-uri de auto detailing.',
  },
  {
    label: 'Built',
    title: 'SalariuOk.ro',
    body: 'Un produs de salary benchmarking pentru România, gândit în jurul unui workflow clar de decizie.',
  },
  {
    label: 'Model',
    title: 'Scope strâns',
    body: 'Problemă clară, primă versiune utilă, execuție directă, apoi rafinare.',
  },
]

const principles = [
  'Execuție condusă de builder, fără strat de account management',
  'Număr mic de proiecte active în același timp',
  'Rezultatele comerciale au prioritate față de jargon și teatru de proces',
]

export default function AboutPageRo() {
  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Despre</p>
            <h1 className="section-title mt-6">Un studio mic de automatizare AI construit pentru execuție directă.</h1>
          </div>

          <div className="space-y-6 text-base leading-8 text-rami-fog">
            <p>
              RamiGrowth funcționează ca un studio condus de builder, nu ca un model de agenție umflat. Persoana care
              diagnostichează bottleneck-ul este aceeași care ajunge să modeleze sistemul.
            </p>
            <p>
              Asta înseamnă mai puține handoff-uri, decizii mai strânse și livrare mai rapidă. Înseamnă și că proiectele
              rămân ancorate în workflow-ul real, nu alunecă în poziționări AI generice.
            </p>
            <p>
              Cele mai multe proiecte intră în trei direcții: generare de cerere, automatizare operațională sau o
              suprafață de produs clară care trebuie să existe pentru că stack-ul actual nu mai este suficient.
            </p>
          </div>
        </div>
      </section>

      <section className="section-divider py-10 md:py-14">
        <div className="shell grid gap-6 md:grid-cols-3">
          {proof.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_22px_80px_rgba(0,0,0,0.18)]">
              <p className="label">{item.label}</p>
              <p className="mt-4 font-display text-3xl text-rami-cream">{item.title}</p>
              <p className="mt-4 text-sm leading-7 text-rami-fog">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-divider py-20">
        <div className="shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Cum rulează proiectele</p>
            <h2 className="section-title mt-6">Vedem presiunea clar, apoi construim cel mai mic sistem care o elimină.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0a1323]/75 p-7">
              <p className="label">Principii de lucru</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-rami-cream">
                {principles.map((item) => (
                  <li key={item} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-base leading-8 text-rami-fog">
              <p>
                Scope-ul vine înainte de angajament. Dacă rezultatul de business nu poate fi numit clar de la început,
                de obicei este prea devreme să construim.
              </p>
              <p>
                Scopul nu este să maximizăm numărul de proiecte. Scopul este să lansăm sisteme care devin utile într-un
                business real și continuă să creeze valoare după lansare.
              </p>
              <p>
                Dacă asta este genul de colaborare pe care îl cauți,{' '}
                <Link href="/ro/contact" className="text-rami-gold hover:text-rami-goldSoft">
                  pornește conversația
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        headline="Vrei un builder care rămâne aproape de problema reală de business?"
        subtext="Acesta este modelul: puține proiecte active, scope clar, execuție directă și sisteme care trebuie să funcționeze în lumea reală."
        ctaLabel="Programează un discovery call"
        locale="ro"
      />
    </main>
  )
}
