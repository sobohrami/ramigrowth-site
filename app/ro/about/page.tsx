import type { Metadata } from 'next'
import CTAStrip from '@/components/CTAStrip'

export const metadata: Metadata = {
  title: 'Despre',
  description:
    'Builder și operator: sisteme custom de automatizare, aplicații web și tooling cu AI pentru probleme operaționale reale.',
}

export default function AboutPageRo() {
  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Despre</p>
            <h1 className="section-title mt-6">Builder first. Operator-minded. Aproape de muncă.</h1>
          </div>

          <div className="space-y-6 text-base leading-8 text-rami-fog">
            <p>Lucrez direct pe un număr mic de sisteme, nu încerc să par o agenție mare.</p>
            <p>
              Asta înseamnă fără handoff către juniori, fără proces umflat doar ca să justifice factura și fără separare
              între persoana care definește sistemul și persoana care îl construiește.
            </p>
            <p>
              Majoritatea proiectelor intră în trei categorii: generare de venit, eficiență operațională sau un produs
              focusat care trebuie să existe pentru că stack-ul actual nu mai este suficient.
            </p>
          </div>
        </div>
      </section>

      <section className="section-divider py-10 md:py-14">
        <div className="shell grid gap-6 md:grid-cols-3">
          {[
            ['Built', 'ProDetailer.app', 'Automatizare lead generation și follow-up pentru business-uri de auto detailing.'],
            ['Built', 'SalariuOk.ro', 'Produs de salary benchmarking pentru România, cu o interfață focusată pe decizie.'],
            ['Bias', 'Tight scope', 'Problemă clară, execuție clară, primă versiune utilă, apoi rafinare.'],
          ].map(([label, title, body]) => (
            <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_22px_80px_rgba(0,0,0,0.18)]">
              <p className="label">{label}</p>
              <p className="mt-4 font-display text-3xl text-rami-cream">{title}</p>
              <p className="mt-4 text-sm leading-7 text-rami-fog">{body}</p>
            </div>
          ))}
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
