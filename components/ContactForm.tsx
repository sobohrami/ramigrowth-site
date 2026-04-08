'use client'

import { getFormspreeAction } from '@/lib/site-config'

export default function ContactForm() {
  const action = getFormspreeAction()

  if (!action) {
    return (
      <p className="rounded-md border border-rami-border bg-rami-surface px-4 py-3 text-sm text-rami-muted">
        Contact form is not configured yet. Set <code className="font-mono text-rami-ink">NEXT_PUBLIC_FORMSPREE_FORM_ID</code>{' '}
        in the deployment environment, or use the email in the footer if provided.
      </p>
    )
  }

  return (
    <form action={action} method="POST" className="space-y-5">
      <input type="hidden" name="_subject" value="RamiGrowth — contact form" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-rami-ink">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-md border border-rami-border bg-white px-3 py-2 text-sm text-rami-ink outline-none ring-rami-link/30 transition-shadow focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-rami-ink">
          Your email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-md border border-rami-border bg-white px-3 py-2 text-sm text-rami-ink outline-none ring-rami-link/30 transition-shadow focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-rami-ink">
          Business / company name <span className="font-normal text-rami-muted">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-2 w-full rounded-md border border-rami-border bg-white px-3 py-2 text-sm text-rami-ink outline-none ring-rami-link/30 transition-shadow focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="problem" className="block text-sm font-medium text-rami-ink">
          Describe the problem
        </label>
        <p className="mt-1 text-xs text-rami-muted">
          What are you trying to solve? What&apos;s costing you time or money right now? The more specific, the better.
        </p>
        <textarea
          id="problem"
          name="problem"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-rami-border bg-white px-3 py-2 text-sm text-rami-ink outline-none ring-rami-link/30 transition-shadow focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-rami-ink">
          Rough budget range <span className="font-normal text-rami-muted">(optional)</span>
        </label>
        <select
          id="budget"
          name="budget"
          className="mt-2 w-full rounded-md border border-rami-border bg-white px-3 py-2 text-sm text-rami-ink outline-none ring-rami-link/30 transition-shadow focus:ring-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select a range
          </option>
          <option value="Under €1,000">Under €1,000</option>
          <option value="€1,000–€5,000">€1,000–€5,000</option>
          <option value="€5,000–€15,000">€5,000–€15,000</option>
          <option value="€15,000+">€15,000+</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-rami-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black md:w-auto"
      >
        Send it
      </button>
    </form>
  )
}
