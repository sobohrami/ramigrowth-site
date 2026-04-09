'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { Locale } from '@/lib/locales'
import { localizePath } from '@/lib/locales'

export default function SystemDisassemblySection({ locale = 'en' }: { locale?: Locale }) {
  const sectionRef = useRef<HTMLElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visible, setVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [pulseOffset, setPulseOffset] = useState(0)
  const stages =
    locale === 'ro'
      ? [
          { title: 'Percepție', detail: 'Captează formulare, update-uri CRM, activitate din inbox și semnale live de cerere.', note: 'Strat de intake' },
          { title: 'Workflow', detail: 'Transformă regulile de business în automatizări ramificate, retry-uri și rutare către următorul pas.', note: 'Strat logic' },
          { title: 'Acțiuni', detail: 'Declanșează mesaje outbound, booking-uri, handoff-uri, remindere și taskuri operaționale.', note: 'Strat de execuție' },
          { title: 'Memorie', detail: 'Păstrează context, rezumate și stare astfel încât sistemul să rămână coerent în timp.', note: 'Strat de context' },
        ]
      : [
          { title: 'Perception', detail: 'Captures forms, CRM updates, inbox activity, and live demand signals.', note: 'Intake surface' },
          { title: 'Workflow', detail: 'Transforms business rules into branching automation, retries, and next-step routing.', note: 'Logic layer' },
          { title: 'Actions', detail: 'Triggers outbound messages, bookings, handoffs, reminders, and operational tasks.', note: 'Execution layer' },
          { title: 'Memory', detail: 'Stores context, summaries, and state so the system stays coherent over time.', note: 'Context layer' },
        ]
  const copy =
    locale === 'ro'
      ? {
          eyebrow: 'Anatomia sistemului',
          title: 'O hartă de automatizare responsive, cu un semnal live care trece prin întregul stack.',
          body:
            'Sistemul se citește acum ca o diagramă operațională reală: un rail central, patru straturi vizibile și un semnal live care trece prin stack fără să rupă layout-ul pe laptop sau telefon.',
          cta: 'Explorează stack-ul',
          helper: 'Conceput să rămână lizibil pe telefon și laptop',
          headerLabel: 'Blueprint operator',
          headerValue: 'Un rail de automatizare stabil: intake, logică, execuție și memorie.',
        }
      : {
          eyebrow: 'System breakdown',
          title: 'A responsive automation map with a live signal moving through the stack.',
          body:
            'The system now reads like an actual operating diagram: one central rail, four visible layers, and a live signal that moves through the stack without breaking the layout on laptop or phone.',
          cta: 'Explore the stack',
          helper: 'Designed to stay readable on phone and laptop',
          headerLabel: 'Operator blueprint',
          headerValue: 'A stable automation rail: intake, logic, execution, and memory.',
        }

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % stages.length)
    }, 1700)

    return () => window.clearInterval(timer)
  }, [visible])

  useEffect(() => {
    const updatePulse = () => {
      const stack = stackRef.current
      const node = nodeRefs.current[activeIndex]

      if (!stack || !node) return

      setPulseOffset(node.offsetTop + node.offsetHeight / 2)
    }

    updatePulse()

    const resizeObserver = new ResizeObserver(updatePulse)

    if (stackRef.current) {
      resizeObserver.observe(stackRef.current)
    }

    window.addEventListener('resize', updatePulse)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updatePulse)
    }
  }, [activeIndex])

  return (
    <section ref={sectionRef} className="section-divider py-20 md:py-24">
      <div className="shell grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
        <div className="max-w-xl">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="section-title mt-6">{copy.title}</h2>
          <p className="mt-6 text-base leading-8 text-rami-fog">{copy.body}</p>

          <div className="mt-8 space-y-3">
            {stages.map((stage, index) => {
              const active = index === activeIndex

              return (
                <div
                  key={stage.title}
                  className={`rail-step transition-all duration-300 ${
                    active ? 'border-rami-gold/40 bg-white/[0.06]' : 'opacity-85'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`rail-step__index ${active ? 'border-rami-gold/40 text-rami-gold' : ''}`}>{`0${index + 1}`}</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-rami-cream md:text-lg">{stage.title}</h3>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-rami-fog/60">{stage.note}</span>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-rami-fog">{stage.detail}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <Link href={localizePath('/services', locale)} className="button-primary">
              {copy.cta}
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rami-fog/70">{copy.helper}</p>
          </div>
        </div>

        <div className="rail-frame">
          <div className="rail-grid" />

          <div className="rail-header">
            <p className="breakdown-label">{copy.headerLabel}</p>
            <p className="breakdown-value">{copy.headerValue}</p>
          </div>

          <div className="rail-system">
            <div ref={stackRef} className="rail-stack">
              <div className="rail-stack__line" aria-hidden="true" />
              <div
                className="rail-stack__pulse"
                style={{ transform: `translate(-50%, ${pulseOffset}px)` }}
                aria-hidden="true"
              />

              {stages.map((stage, index) => {
                const active = index === activeIndex
                const side = index % 2 === 0 ? 'right' : 'left'

                return (
                  <div
                    key={`${stage.title}-row`}
                    className={`rail-row rail-row--${side} ${visible ? 'is-visible' : ''} ${active ? 'is-active' : ''}`}
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <div className="rail-row__lane rail-row__lane--left" aria-hidden="true" />

                    <div className="rail-row__axis">
                      <div
                        ref={(element) => {
                          nodeRefs.current[index] = element
                        }}
                        className="rail-row__node"
                      >
                        <span className="rail-row__dot" />
                      </div>
                      <span className="rail-row__index">{`0${index + 1}`}</span>
                    </div>

                    <div className="rail-row__lane rail-row__lane--right" aria-hidden="true" />

                    <article className="rail-row__body">
                      <div className="rail-row__header">
                        <p className="rail-row__title">{stage.title}</p>
                        <p className="rail-row__note">{stage.note}</p>
                      </div>
                      <p className="rail-row__detail">{stage.detail}</p>
                    </article>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
