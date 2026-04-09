'use client'

import { getFormspreeAction } from '@/lib/site-config'
import type { Locale } from '@/lib/locales'

export default function ContactForm({ locale = 'en' }: { locale?: Locale }) {
  const action = getFormspreeAction()
  const copy =
    locale === 'ro'
      ? {
          config:
            'Formularul de contact nu este configurat încă. Setează',
          name: 'Numele tău',
          email: 'Adresa ta de email',
          company: 'Business sau numele companiei',
          optional: '(opțional)',
          problem: 'Descrie problema',
          problemHint:
            'Ce îți consumă timp, bani sau momentum acum? Cu cât ești mai specific, cu atât recomandarea va fi mai bună.',
          budget: 'Buget estimativ',
          select: 'Selectează un interval',
          send: 'Trimite brief-ul',
        }
      : {
          config:
            'Contact form is not configured yet. Set',
          name: 'Your name',
          email: 'Your email address',
          company: 'Business or company name',
          optional: '(optional)',
          problem: 'Describe the problem',
          problemHint:
            'What is costing you time, money, or momentum right now? Specific details make the recommendation much better.',
          budget: 'Rough budget range',
          select: 'Select a range',
          send: 'Send the brief',
        }

  if (!action) {
    return (
      <p className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-rami-fog">
        {copy.config}{' '}
        <code className="rounded bg-black/20 px-1.5 py-0.5 font-mono text-xs text-rami-cream">
          NEXT_PUBLIC_FORMSPREE_FORM_ID
        </code>{' '}
        in the deployment environment, or use the email in the footer if provided.
      </p>
    )
  }

  return (
    <form action={action} method="POST" className="space-y-5">
      <input type="hidden" name="_subject" value="RamiGrowth | contact form" />

      <div>
        <label htmlFor="name" className="label">
          {copy.name}
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className="field" />
      </div>

      <div>
        <label htmlFor="email" className="label">
          {copy.email}
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className="field" />
      </div>

      <div>
        <label htmlFor="company" className="label">
          {copy.company} <span className="normal-case tracking-normal text-rami-fog/70">{copy.optional}</span>
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" className="field" />
      </div>

      <div>
        <label htmlFor="problem" className="label">
          {copy.problem}
        </label>
        <p className="mt-2 text-sm leading-7 text-rami-fog">{copy.problemHint}</p>
        <textarea id="problem" name="problem" required rows={6} className="field" />
      </div>

      <div>
        <label htmlFor="budget" className="label">
          {copy.budget} <span className="normal-case tracking-normal text-rami-fog/70">{copy.optional}</span>
        </label>
        <select id="budget" name="budget" className="field" defaultValue="">
          <option value="" disabled>
            {copy.select}
          </option>
          <option value="Under EUR 1,000">Under EUR 1,000</option>
          <option value="EUR 1,000-EUR 5,000">EUR 1,000-EUR 5,000</option>
          <option value="EUR 5,000-EUR 15,000">EUR 5,000-EUR 15,000</option>
          <option value="EUR 15,000+">EUR 15,000+</option>
        </select>
      </div>

      <button type="submit" className="button-primary w-full md:w-auto">
        {copy.send}
      </button>
    </form>
  )
}
