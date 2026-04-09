import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { getCalendlyUrl } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact pentru servicii AI și automatizare procese',
  description:
    'Contactează RamiGrowth pentru automatizări AI, lead generation, automatizare workflow-uri sau aplicații web custom. Discovery-first și răspuns în 24 de ore.',
  alternates: {
    canonical: '/ro/contact',
    languages: {
      en: '/contact',
      ro: '/ro/contact',
    },
  },
}

const situations = [
  'Ai nevoie de lead-uri calificate fără să faci mai mult outbound manual chiar tu.',
  'Echipa pierde timp în bucle operaționale repetitive care ar trebui deja automatizate.',
  'Ai nevoie de o unealtă internă, o aplicație pentru clienți sau un sistem AI construit rapid și clar.',
]

const nextSteps = [
  ['01', 'Revizuire brief', 'Citesc problema, caut presiunea operațională reală și decid dacă merită un build.'],
  ['02', 'Recomandare rapidă', 'Primești un răspuns direct: automatizare, aplicație custom sau o rezolvare operațională mai ușoară.'],
  ['03', 'Următorul pas cu scope clar', 'Dacă există fit, definim cea mai mică versiune utilă care merită construită prima.'],
]

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
              <p>Cele mai utile situații sunt de obicei acestea:</p>
            </div>

            <div className="mt-8 space-y-3">
              {situations.map((item, index) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-5 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-rami-gold">0{index + 1}</p>
                  <p className="mt-3 text-sm leading-7 text-rami-cream">{item}</p>
                </div>
              ))}
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

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-9">
              <div className="mb-8 border-b border-white/10 pb-6">
                <p className="eyebrow text-rami-gold/90">Brief de proiect</p>
                <p className="mt-4 text-sm leading-7 text-rami-fog">
                  Scurt, specific și legat de workflow-ul real. Așa iese și răspunsul mai bun.
                </p>
              </div>
              <ContactForm locale="ro" />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {nextSteps.map(([step, title, body]) => (
                <div key={step} className="rounded-[1.4rem] border border-white/10 bg-[#0a1323]/72 p-5">
                  <p className="font-display text-3xl text-rami-gold/80">{step}</p>
                  <h2 className="mt-4 text-lg font-semibold text-rami-cream">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-rami-fog">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
