'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

const parts = [
  {
    key: 'perception',
    title: 'Perception layer',
    detail: 'Inbound signals, forms, CRM updates, email intent',
    className: 'breakdown-part breakdown-part--wide',
    motion: { x: 0, y: -220, rotate: -3, scale: 1.02 },
  },
  {
    key: 'workflow',
    title: 'Workflow engine',
    detail: 'Rules, orchestration, retries, routing logic',
    className: 'breakdown-part breakdown-part--module',
    motion: { x: -230, y: -20, rotate: -8, scale: 1.04 },
  },
  {
    key: 'actions',
    title: 'Action router',
    detail: 'Messages, follow-up, handoff, calendar actions',
    className: 'breakdown-part breakdown-part--module',
    motion: { x: 230, y: -10, rotate: 8, scale: 1.04 },
  },
  {
    key: 'memory',
    title: 'Memory bus',
    detail: 'Summaries, client state, synced context',
    className: 'breakdown-part breakdown-part--wide',
    motion: { x: 0, y: 235, rotate: 2, scale: 1.03 },
  },
]

const steps = [
  {
    title: 'Core assembled',
    body: 'At first the system reads like one intelligent operator: polished, calm, and unified.',
  },
  {
    title: 'Signals separate',
    body: 'As you scroll, the sensing layer lifts away to show how the system sees forms, inboxes, and live events.',
  },
  {
    title: 'Execution modules split',
    body: 'The outreach, workflow, and action modules move apart so the automation stack becomes legible instead of magical.',
  },
  {
    title: 'Full architecture revealed',
    body: 'By the end, the entire operating system is exposed: perception, memory, orchestration, and output.',
  },
]

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export default function SystemDisassemblySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const viewport = window.innerHeight
      const total = sectionRef.current.offsetHeight - viewport
      const raw = (-rect.top + viewport * 0.15) / Math.max(total, 1)
      setProgress(clamp(raw, 0, 1))
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const activeStep = Math.min(steps.length - 1, Math.floor(progress * steps.length))

  const partStyles = useMemo(
    () =>
      parts.map((part) => ({
        key: part.key,
        style: {
          transform: `translate3d(calc(-50% + ${part.motion.x * progress}px), calc(-50% + ${part.motion.y * progress}px), 0) rotate(${part.motion.rotate * progress}deg) scale(${1 + (part.motion.scale - 1) * progress})`,
          opacity: 0.48 + progress * 0.52,
        },
      })),
    [progress],
  )

  const pointerStyles = {
    top: {
      transform: `translate3d(${progress * 8}px, ${progress * -32}px, 0)`,
      opacity: 0.4 + progress * 0.6,
    },
    left: {
      transform: `translate3d(${progress * -48}px, ${progress * -14}px, 0)`,
      opacity: 0.4 + progress * 0.6,
    },
    right: {
      transform: `translate3d(${progress * 48}px, ${progress * -10}px, 0)`,
      opacity: 0.4 + progress * 0.6,
    },
    bottom: {
      transform: `translate3d(${progress * 4}px, ${progress * 24}px, 0)`,
      opacity: 0.4 + progress * 0.6,
    },
  }

  return (
    <section ref={sectionRef} className="section-divider relative h-[240vh]">
      <div className="sticky top-[88px] h-[calc(100vh-88px)] overflow-hidden">
        <div className="shell grid h-full gap-12 py-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="max-w-xl">
            <p className="eyebrow">System breakdown</p>
            <h2 className="section-title mt-6">Scroll and the AI operator disassembles into the layers that make it work.</h2>
            <p className="mt-6 text-base leading-8 text-rami-fog">
              Instead of showing AI as a vague glowing object, this section turns it into visible operating parts: perception,
              memory, orchestration, and action.
            </p>

            <div className="mt-10 space-y-4">
              {steps.map((step, index) => {
                const active = index === activeStep
                return (
                  <div
                    key={step.title}
                    className={`breakdown-panel transition-all duration-300 ${
                      active ? 'border-rami-gold/40 bg-white/[0.06]' : 'opacity-70'
                    }`}
                  >
                    <p className="label">{`0${index + 1}`}</p>
                    <h3 className="mt-3 text-xl font-semibold text-rami-cream">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-rami-fog">{step.body}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link href="/services" className="button-primary">
                Explore the stack
              </Link>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rami-fog/70">
                Scroll depth {Math.round(progress * 100)}%
              </p>
            </div>
          </div>

          <div className="breakdown-frame relative h-full min-h-[640px]">
            <div className="breakdown-grid" />
            <div className="breakdown-ring breakdown-ring--one" />
            <div className="breakdown-ring breakdown-ring--two" />

            <div className="absolute left-6 right-6 top-6 rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-5 py-4">
              <p className="breakdown-label">Operator blueprint</p>
              <p className="breakdown-value">A visible stack for modern AI automation: intake, reasoning, routing, execution.</p>
            </div>

            <div className="breakdown-core" style={{ transform: `translate(-50%, -50%) scale(${1 - progress * 0.06})` }} />

            {parts.map((part, index) => (
              <div key={part.key} className={part.className} style={partStyles[index].style}>
                <p className="breakdown-part__title">{part.title}</p>
                <p className="breakdown-part__detail">{part.detail}</p>
              </div>
            ))}

            <div className="breakdown-pointer left-[53%] top-[18%]" style={pointerStyles.top}>
              <div className="flex items-center gap-3">
                <span className="breakdown-marker" />
                <span>Perception</span>
              </div>
            </div>

            <div className="breakdown-pointer left-[9%] top-[48%]" style={pointerStyles.left}>
              <div className="flex items-center gap-3">
                <span className="breakdown-marker" />
                <span>Workflow</span>
              </div>
            </div>

            <div className="breakdown-pointer right-[8%] top-[46%]" style={pointerStyles.right}>
              <div className="flex items-center gap-3">
                <span className="breakdown-marker" />
                <span>Actions</span>
              </div>
            </div>

            <div className="breakdown-pointer left-[41%] bottom-[18%]" style={pointerStyles.bottom}>
              <div className="flex items-center gap-3">
                <span className="breakdown-marker" />
                <span>Memory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
