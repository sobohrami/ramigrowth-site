import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { getCalendlyUrl } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Discovery call întâi. Spune-mi problema operațională și îți răspund în 24 de ore.',
}

export default function ContactPageRo() {
  const cal = getCalendlyUrl()

  return (
    <main>
      <section className="section-divider py-20 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="section-title mt-6">Vino cu bottleneck-ul. Îți spun dacă merită construit.</h1>

            <div className="mt-8 space-y-5 text-base leading-8 text-rami-fog">
              <p>
                Lucrez cu un număr mic de proiecte simultan. Înainte să spun da, vreau să înțeleg problema reală,
                rezultatul dorit și dacă acesta este cu adevărat instrumentul potrivit.
              </p>
              <p>
                Prefer să primesc un brief specific: unde se blochează operațiunea, ce rezultat vrei și ce ai încercat
                deja.
              </p>
            </div>

            {cal ? (
              <p className="mt-8 text-sm leading-7 text-rami-fog">
                Preferi să vorbim întâi?{' '}
                <a href={cal} target="_blank" rel="noopener noreferrer" className="text-rami-gold hover:text-rami-goldSoft">
                  Programează un discovery call de 20 de minute
                </a>
                .
              </p>
            ) : null}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-9">
            <div className="mb-8 border-b border-white/10 pb-6">
              <p className="eyebrow text-rami-gold/90">Brief de proiect</p>
              <p className="mt-4 text-sm leading-7 text-rami-fog">
                Scurt, specific și legat de workflow-ul real. Așa iese și răspunsul mai bun.
              </p>
            </div>
            <ContactForm locale="ro" />
          </div>
        </div>
      </section>
    </main>
  )
}
