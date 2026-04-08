'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

const modules = [
  {
    key: 'perception',
    title: 'Perception',
    detail: 'Inbound forms, CRM updates, email intent, live signals',
    side: 'right' as const,
    y: 27,
    shiftY: -10,
  },
  {
    key: 'workflow',
    title: 'Workflow',
    detail: 'Rules, retries, branching logic, orchestration',
    side: 'left' as const,
    y: 44,
    shiftY: -2,
  },
  {
    key: 'actions',
    title: 'Actions',
    detail: 'Messages, booking, handoff, outbound triggers',
    side: 'right' as const,
    y: 61,
    shiftY: 4,
  },
  {
    key: 'memory',
    title: 'Memory',
    detail: 'State, summaries, synced context, historical trace',
    side: 'left' as const,
    y: 78,
    shiftY: 12,
  },
]

const steps = [
  {
    title: 'Core column',
    body: 'The system first reads as one controlled intelligence layer with a single luminous spine.',
  },
  {
    title: 'Sensing peels away',
    body: 'The top intake layer lifts from the column so the perception surface becomes legible.',
  },
  {
    title: 'Branches reveal',
    body: 'Execution and workflow modules move outward with guided connections rather than flying out of frame.',
  },
  {
    title: 'Architecture exposed',
    body: 'By the end, the whole operating body is visible: spine, branches, callouts, and state memory.',
  },
]

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount
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
      const raw = (-rect.top + viewport * 0.16) / Math.max(total, 1)
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

  const diagramState = useMemo(
    () =>
      modules.map((module, index) => {
        const y = module.y + module.shiftY * progress
        const calloutX = module.side === 'left' ? lerp(-138, -300, progress) : lerp(30, 84, progress)
        const nodeScale = lerp(0.94, 1.02, progress)
        const nodeLift = (index - 1.5) * 8 * progress
        const opacity = lerp(0.5, 1, progress)
        const endX = module.side === 'left' ? lerp(45, 24, progress) : lerp(55, 76, progress)
        const controlX = module.side === 'left' ? lerp(48, 36, progress) : lerp(52, 64, progress)

        return {
          ...module,
          y,
          calloutX,
          nodeScale,
          nodeLift,
          opacity,
          path: `M 50 ${y} C 50 ${y}, ${controlX} ${y - 1}, ${endX} ${y - 2}`,
          endX,
        }
      }),
    [progress],
  )

  return (
    <section ref={sectionRef} className="section-divider relative h-[200vh]">
      <div className="sticky top-[88px] h-[calc(100vh-88px)] overflow-hidden">
        <div className="shell grid h-full gap-10 py-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div className="max-w-xl">
            <p className="eyebrow">System breakdown</p>
            <h2 className="section-title mt-6">Scroll and the AI operator opens into a visible neural spine.</h2>
            <p className="mt-6 text-base leading-8 text-rami-fog">
              This version stays inside the frame and reads more like a real systems diagram: a central operating spine with
              controlled branches for perception, workflow, actions, and memory.
            </p>

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-rami-fog/65">
                <span>Reveal progress</span>
                <span>{Math.round(progress * 100)}%</span>
              </div>

              <div className="h-px w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-rami-gold via-rami-goldSoft to-rami-steel transition-[width] duration-200"
                  style={{ width: `${Math.max(8, progress * 100)}%` }}
                />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {steps.map((step, index) => {
                const active = index === activeStep
                return (
                  <div
                    key={step.title}
                    className={`breakdown-step transition-all duration-300 ${
                      active ? 'border-rami-gold/40 bg-white/[0.06]' : 'opacity-80'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`breakdown-step__index ${active ? 'border-rami-gold/40 text-rami-gold' : ''}`}>{`0${index + 1}`}</div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-semibold text-rami-cream md:text-lg">{step.title}</h3>
                        <p
                          className={`overflow-hidden text-sm leading-7 text-rami-fog transition-all duration-300 ${
                            active ? 'mt-2 max-h-32 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          {step.body}
                        </p>
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
                Continue scrolling to reveal the full stack
              </p>
            </div>
          </div>

          <div className="breakdown-frame relative h-full min-h-[620px]">
            <div className="breakdown-grid" />

            <div className="absolute left-6 right-6 top-6 rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-5 py-4">
              <p className="breakdown-label">Operator blueprint</p>
              <p className="breakdown-value">A spine-first automation map: intake, reasoning, routing, execution, memory.</p>
            </div>

            <div className="spine-canvas absolute inset-x-0 bottom-0 top-28">
              <div className="spine-aura" style={{ opacity: lerp(0.35, 0.62, progress) }} />
              <div className="spine-axis" />
              <div className="spine-axis spine-axis--glow" style={{ opacity: lerp(0.35, 0.78, progress) }} />

              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {diagramState.map((module) => (
                  <g key={module.key}>
                    <path
                      d={module.path}
                      fill="none"
                      stroke={module.side === 'left' ? 'rgba(123,97,255,0.38)' : 'rgba(89,229,255,0.38)'}
                      strokeWidth="0.22"
                      strokeLinecap="round"
                      strokeDasharray="1"
                      strokeDashoffset={1 - progress}
                      opacity={lerp(0.1, 0.8, progress)}
                    />
                    <circle cx="50" cy={module.y} r="0.7" fill="rgba(89,229,255,0.95)" opacity={lerp(0.4, 0.95, progress)} />
                    <circle cx={module.endX} cy={module.y - 2} r="0.7" fill="rgba(154,255,210,0.9)" opacity={lerp(0.25, 0.9, progress)} />
                  </g>
                ))}
              </svg>

              {diagramState.map((module, index) => (
                <div
                  key={module.key}
                  className="spine-node"
                  style={{
                    top: `${module.y}%`,
                    transform: `translate3d(-50%, calc(-50% + ${module.nodeLift}px), 0) scale(${module.nodeScale})`,
                    opacity: module.opacity,
                  }}
                >
                  <div className="spine-node__shell">
                    <div className="spine-node__rib spine-node__rib--top" />
                    <div className="spine-node__core" />
                    <div className="spine-node__rib spine-node__rib--bottom" />
                  </div>
                  <div className="spine-node__meta">
                    <span className="spine-node__index">{`0${index + 1}`}</span>
                    <span className="spine-node__name">{module.title}</span>
                  </div>
                </div>
              ))}

              {diagramState.map((module) => (
                <div
                  key={`${module.key}-callout`}
                  className={`spine-callout ${module.side === 'left' ? 'spine-callout--left' : 'spine-callout--right'}`}
                  style={{
                    top: `${module.y}%`,
                    transform: `translate3d(${module.calloutX}px, -50%, 0)`,
                    opacity: lerp(0.2, 1, progress),
                  }}
                >
                  <p className="spine-callout__title">{module.title}</p>
                  <p className="spine-callout__detail">{module.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
