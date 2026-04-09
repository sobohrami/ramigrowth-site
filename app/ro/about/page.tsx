import Link from 'next/link'
import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'Despre RamiGrowth, studio de automatizare AI din România',
  description:
    'Află cum lucrează RamiGrowth: un studio de automatizare AI din România, focusat pe lead generation, automatizare de procese și software custom pentru nevoi reale de business.',
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
    body: 'Un produs de salary benchmarking construit pentru piața din România.',
  },
  {
    label: 'Model',
    title: 'Colaborare directă',
    body: 'Scope clar, un singur builder responsabil, primă versiune utilă, apoi rafinare.',
  },
]

const principles = [
  'Lucrezi direct cu persoana care proiectează și construiește sistemul.',
  'Rulează doar un număr mic de proiecte în același timp.',
  'Munca este judecată după rezultate de business, nu după jargon AI.',
]

export default function AboutPageRo() {
  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Despre</p>
            <h1 className="section-title mt-6">RamiGrowth este un studio de automatizare AI din România, construit pentru sisteme utile de business.</h1>
          </div>

          <div className="space-y-6 text-base leading-8 text-rami-fog">
            <p>
              Scopul este simplu: să ajute business-urile să genereze mai multă cerere, să elimine munca repetitivă și să construiască unelte care fac execuția mai ușoară.
            </p>
            <p>
              Lucrezi direct cu persoana care modelează sistemul. Asta păstrează deciziile mai clare, livrarea mai rapidă și proiectul mai aproape de workflow-ul real.
            </p>
            <p>
              Cele mai multe proiecte pornesc din una dintre aceste nevoi: mai multe lead-uri, un proces care consumă prea mult timp sau o unealtă internă ori pentru clienți care încă nu există.
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
            <p className="eyebrow">Cum se lucrează</p>
            <h2 className="section-title mt-6">Problemă clară, scope strâns, primă versiune utilă.</h2>
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
                Dacă rezultatul de business nu este suficient de clar încât să poată fi numit, de obicei este prea devreme să construim. Primul pas este să înțelegem exact ce trebuie îmbunătățit.
              </p>
              <p>
                Ținta nu este să rulăm cât mai multe proiecte. Ținta este să lansăm sisteme care continuă să economisească timp sau să genereze venit după lansare.
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
        subtext="Acesta este modelul: colaborare directă, scope clar și sisteme construite să fie utile în lumea reală."
        ctaLabel="Programează un discovery call"
        locale="ro"
      />
    </main>
  )
}
