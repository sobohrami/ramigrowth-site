import type { Locale } from '@/lib/locales'

export type FaqItem = {
  question: string
  answer: string
}

const FAQS: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: 'What AI automation services does RamiGrowth offer?',
      answer:
        'RamiGrowth builds lead generation systems, workflow automation, custom web apps, and AI-enhanced internal tools. The work is focused on practical business outcomes such as more qualified leads, less manual work, and faster execution.',
    },
    {
      question: 'Who do you work best with?',
      answer:
        'The best fit is service businesses, operator-led teams, founders, and small companies with a clearly named bottleneck. That usually means a problem in demand generation, follow-up, coordination, reporting, booking, or internal tooling.',
    },
    {
      question: 'Do you only build automations, or can you build custom apps too?',
      answer:
        'Both. Some problems are solved best with workflow automation inside the tools you already use. Others need a custom dashboard, portal, calculator, or focused web app. The recommendation depends on the job that needs to be done.',
    },
    {
      question: 'How long does an AI automation project take?',
      answer:
        'Small automations or focused workflow systems can often be scoped and launched within a few weeks. Custom web apps or more complex systems take longer, but projects are designed to ship a useful first version quickly instead of staying in discovery for months.',
    },
    {
      question: 'Can you work with the tools we already use?',
      answer:
        'Usually yes. Most projects are designed around the existing stack, such as CRMs, inboxes, scheduling tools, forms, spreadsheets, and internal workflows. The goal is to reduce friction, not force a full rebuild unless it is necessary.',
    },
    {
      question: 'Do you work only with businesses in Romania?',
      answer:
        'No. RamiGrowth is Romania-based and works well with Romanian businesses, but the studio also supports remote-first projects for clients in other markets when the scope and business case are clear.',
    },
    {
      question: 'How do you price projects?',
      answer:
        'Projects are scoped around the problem, the complexity of the system, and the fastest path to a useful first release. Pricing is discussed after the bottleneck, outcome, and build approach are clear enough to estimate properly.',
    },
    {
      question: 'How do we start?',
      answer:
        'You start by describing the business problem, the workflow that keeps breaking, or the revenue constraint you want to fix. From there, RamiGrowth recommends whether the next move should be automation, a custom app, or a lighter operational solution.',
    },
  ],
  ro: [
    {
      question: 'Ce servicii de automatizare AI oferă RamiGrowth?',
      answer:
        'RamiGrowth construiește sisteme de lead generation, automatizări de workflow, aplicații web custom și unelte interne cu AI. Munca este orientată spre rezultate practice de business, cum ar fi mai multe lead-uri calificate, mai puțină muncă manuală și execuție mai rapidă.',
    },
    {
      question: 'Cu ce tip de clienți lucrezi cel mai bine?',
      answer:
        'Potrivirea bună este cu firme de servicii, echipe conduse de operatori, fondatori și companii mici care au un bottleneck clar numit. De obicei este vorba despre cerere, follow-up, coordonare, raportare, booking sau tooling intern.',
    },
    {
      question: 'Construiești doar automatizări sau și aplicații custom?',
      answer:
        'Ambele. Unele probleme se rezolvă cel mai bine prin automatizare în uneltele pe care le folosești deja. Altele au nevoie de un dashboard custom, un portal, un calculator sau o aplicație web concentrată pe un singur job util.',
    },
    {
      question: 'Cât durează un proiect de automatizare AI?',
      answer:
        'Automatizările mici sau sistemele de workflow mai concentrate pot fi scopate și lansate în câteva săptămâni. Aplicațiile web custom sau sistemele mai complexe durează mai mult, dar proiectele sunt gândite să livreze rapid o primă versiune utilă, nu să rămână luni întregi în discovery.',
    },
    {
      question: 'Poți lucra cu uneltele pe care le folosim deja?',
      answer:
        'De cele mai multe ori, da. Majoritatea proiectelor sunt construite în jurul stack-ului existent, cum ar fi CRM-uri, inbox-uri, tool-uri de programări, formulare, spreadsheets și workflow-uri interne. Scopul este să reducem fricțiunea, nu să forțăm un rebuild complet dacă nu este necesar.',
    },
    {
      question: 'Lucrezi doar cu business-uri din România?',
      answer:
        'Nu. RamiGrowth este bazat în România și lucrează foarte bine cu business-uri românești, dar poate susține și proiecte remote-first pentru alte piețe atunci când scope-ul și logica de business sunt clare.',
    },
    {
      question: 'Cum stabilești prețul proiectelor?',
      answer:
        'Proiectele sunt evaluate în funcție de problemă, complexitatea sistemului și cel mai rapid drum către o primă lansare utilă. Prețul se discută după ce bottleneck-ul, rezultatul și direcția de build sunt suficient de clare pentru o estimare corectă.',
    },
    {
      question: 'Cum începem?',
      answer:
        'Totul începe cu o descriere clară a problemei de business, a workflow-ului care se rupe sau a blocajului de venit pe care vrei să îl rezolvi. De acolo, RamiGrowth recomandă dacă următorul pas ar trebui să fie automatizare, aplicație custom sau o soluție operațională mai simplă.',
    },
  ],
}

export function getFaqs(locale: Locale) {
  return FAQS[locale]
}
