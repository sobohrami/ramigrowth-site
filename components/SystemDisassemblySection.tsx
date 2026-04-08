'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const stages = [
  {
    title: 'Perception',
    detail: 'Captures forms, CRM updates, inbox activity, and live demand signals.',
    note: 'Intake surface',
  },
  {
    title: 'Workflow',
    detail: 'Transforms business rules into branching automation, retries, and next-step routing.',
    note: 'Logic layer',
  },
  {
    title: 'Actions',
    detail: 'Triggers outbound messages, bookings, handoffs, reminders, and operational tasks.',
    note: 'Execution layer',
  },
  {
    title: 'Memory',
    detail: 'Stores context, summaries, and state so the system stays coherent over time.',
    note: 'Context layer',
  },
]

export default function SystemDisassemblySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

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

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % stages.length)
    }, 1700)

    return () => window.clearInterval(timer)
  }, [visible])

  return (
    <section ref={sectionRef} className="section-divider py-20 md:py-24">
      <div className="shell grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
        <div className="max-w-xl">
          <p className="eyebrow">System breakdown</p>
          <h2 className="section-title mt-6">A phone-safe automation diagram with a live signal moving through the stack.</h2>
          <p className="mt-6 text-base leading-8 text-rami-fog">
            Instead of locking the page into a sticky full-screen segment, this section reveals the system as a sequential
            signal rail. It is easier to read, cleaner on laptops, and much more reliable on mobile.
          </p>

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
            <Link href="/services" className="button-primary">
              Explore the stack
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rami-fog/70">
              Designed to stay readable on phone and laptop
            </p>
          </div>
        </div>

        <div className="rail-frame">
          <div className="rail-grid" />

          <div className="rail-header">
            <p className="breakdown-label">Operator blueprint</p>
            <p className="breakdown-value">A visible automation rail: intake, logic, execution, and memory.</p>
          </div>

          <div className="rail-system">
            <div className="rail-system__line" />
            <div
              className="rail-system__pulse"
              style={{ top: `${18 + activeIndex * 22}%` }}
              aria-hidden="true"
            />

            {stages.map((stage, index) => {
              const active = index === activeIndex
              const side = index % 2 === 0 ? 'right' : 'left'

              return (
                <div
                  key={`${stage.title}-card`}
                  className={`rail-card rail-card--${side} ${visible ? 'is-visible' : ''} ${active ? 'is-active' : ''}`}
                  style={
                    {
                      top: `${14 + index * 22}%`,
                      transitionDelay: `${index * 90}ms`,
                    } as React.CSSProperties
                  }
                >
                  <div className="rail-card__node">
                    <span className="rail-card__dot" />
                  </div>
                  <div className="rail-card__body">
                    <p className="rail-card__title">{stage.title}</p>
                    <p className="rail-card__detail">{stage.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
