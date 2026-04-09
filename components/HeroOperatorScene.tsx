'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Locale } from '@/lib/locales'
import { localizePath } from '@/lib/locales'

export default function HeroOperatorScene({ locale = 'en' }: { locale?: Locale }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const chips =
    locale === 'ro'
      ? [
          { title: 'Rutare lead-uri', detail: 'Inbox -> CRM -> Calendar', className: 'left-[-4%] top-[12%] md:left-[-10%]' },
          { title: 'Triage AI', detail: 'Califică, rezumă, atribuie', className: 'right-[-2%] top-[18%] md:right-[-8%]' },
          { title: 'Sync operațional', detail: 'Ops, remindere, follow-up', className: 'left-[2%] bottom-[18%] md:left-[-6%]' },
        ]
      : [
          { title: 'Lead routing', detail: 'Inbox -> CRM -> Calendar', className: 'left-[-4%] top-[12%] md:left-[-10%]' },
          { title: 'AI triage', detail: 'Qualify, summarize, assign', className: 'right-[-2%] top-[18%] md:right-[-8%]' },
          { title: 'Workflow sync', detail: 'Ops, reminders, follow-up', className: 'left-[2%] bottom-[18%] md:left-[-6%]' },
        ]
  const signals =
    locale === 'ro' ? ['Scor intenție', 'Logică follow-up', 'Rezumat inteligent', 'Orchestrare taskuri'] : ['Intent scoring', 'Follow-up logic', 'Smart summaries', 'Task orchestration']
  const copy =
    locale === 'ro'
      ? {
          activeSystem: 'Sistem activ',
          systemValue: 'Operator RamiGrowth',
          mode: 'Mod',
          modeValue: 'Orchestrare venituri + operațiuni',
          outputs: 'Rezultate',
          outputsValue: 'Lead-uri, workflow-uri, unelte interne',
          cta: 'Vezi sistemele în acțiune',
        }
      : {
          activeSystem: 'Active system',
          systemValue: 'RamiGrowth operator',
          mode: 'Mode',
          modeValue: 'Revenue + ops orchestration',
          outputs: 'Outputs',
          outputsValue: 'Leads, workflows, internal tools',
          cta: 'See systems in action',
        }

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * 14
    const rotateX = (0.5 - py) * 12
    setTilt({ x: rotateX, y: rotateY })
  }

  return (
    <div className="relative mx-auto w-full max-w-[620px] [perspective:1800px]">
      {chips.map((chip, index) => (
        <div
          key={chip.title}
          className={`hero-chip ${chip.className}`}
          style={{ animationDelay: `${index * 0.45}s` }}
        >
          <p className="hero-chip__title">{chip.title}</p>
          <p className="hero-chip__detail">{chip.detail}</p>
        </div>
      ))}

      <div
        className="hero-stage"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      >
        <div className="hero-grid" />
        <div className="hero-ring hero-ring--outer" />
        <div className="hero-ring hero-ring--middle" />
        <div className="hero-ring hero-ring--inner" />

        <div className="hero-beam hero-beam--left" />
        <div className="hero-beam hero-beam--right" />

        <div className="hero-sentinel">
          <div className="hero-sentinel__halo" />
          <div className="hero-sentinel__shell">
            <svg viewBox="0 0 520 620" className="hero-sentinel__svg" aria-hidden="true">
              <defs>
                <linearGradient id="shellGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(234,244,255,0.94)" />
                  <stop offset="55%" stopColor="rgba(89,229,255,0.36)" />
                  <stop offset="100%" stopColor="rgba(123,97,255,0.18)" />
                </linearGradient>
                <linearGradient id="visorGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#59e5ff" />
                  <stop offset="50%" stopColor="#9affd2" />
                  <stop offset="100%" stopColor="#7b61ff" />
                </linearGradient>
                <linearGradient id="jawGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(78,119,201,0.68)" />
                  <stop offset="100%" stopColor="rgba(10,18,38,0.94)" />
                </linearGradient>
              </defs>

              <path
                d="M260 46c-54 0-100 20-138 60-42 45-63 107-63 187 0 94 35 166 104 216 29 21 63 38 97 50 34-12 68-29 97-50 70-50 105-122 105-216 0-80-21-142-64-187-37-40-83-60-138-60Z"
                fill="url(#shellGradient)"
                opacity="0.16"
              />
              <path
                d="M260 90c-44 0-82 16-113 48-34 35-51 85-51 151 0 73 28 129 84 168 23 17 50 30 80 40 30-10 57-23 81-40 55-39 83-95 83-168 0-66-17-116-51-151-31-32-69-48-113-48Z"
                fill="rgba(6,11,24,0.72)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="3"
              />
              <path
                d="M171 188c20-27 49-40 89-40s69 13 89 40c10 13 15 26 15 40 0 10-4 18-12 24-8 7-19 10-31 10H152c-12 0-22-3-31-10-8-6-12-14-12-24 0-14 5-27 15-40Z"
                fill="rgba(12,20,39,0.95)"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="2"
              />
              <path
                d="M170 211h180c15 0 27 12 27 27v6c0 15-12 27-27 27H170c-15 0-27-12-27-27v-6c0-15 12-27 27-27Z"
                fill="rgba(5,10,22,0.96)"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="2"
              />
              <g opacity="0.98">
                <rect x="161" y="225" width="80" height="30" rx="15" fill="url(#visorGradient)" />
                <rect x="279" y="225" width="80" height="30" rx="15" fill="url(#visorGradient)" />
                <circle cx="201" cy="240" r="9" fill="#eaf4ff" opacity="0.92" />
                <circle cx="319" cy="240" r="9" fill="#eaf4ff" opacity="0.92" />
              </g>
              <path d="M235 240h50" stroke="rgba(234,244,255,0.92)" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
              <path
                d="M188 305c14-16 38-24 72-24s58 8 72 24c8 9 12 22 12 38v38c0 27-9 49-27 66-16 15-35 22-57 22s-41-7-57-22c-18-17-27-39-27-66v-38c0-16 4-29 12-38Z"
                fill="url(#jawGradient)"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="2"
              />
              <path
                d="M202 346h116"
                stroke="rgba(154,255,210,0.7)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.72"
              />
              <path
                d="M214 372h92M223 398h74M236 424h48"
                stroke="rgba(89,229,255,0.72)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.72"
              />
              <circle cx="260" cy="134" r="10" fill="rgba(89,229,255,0.82)" />
              <path
                d="M260 145v28"
                stroke="rgba(89,229,255,0.88)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            <div className="hero-sentinel__scanline" />
            <div className="hero-sentinel__pulse hero-sentinel__pulse--one" />
            <div className="hero-sentinel__pulse hero-sentinel__pulse--two" />
          </div>
        </div>

        <div className="hero-orbit-data">
          <div>
            <p className="hero-orbit-data__label">{copy.activeSystem}</p>
            <p className="hero-orbit-data__value">{copy.systemValue}</p>
          </div>
          <div className="hero-orbit-data__stack">
            {signals.map((signal, index) => (
              <span key={signal} className="hero-signal" style={{ animationDelay: `${index * 0.3}s` }}>
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-console">
          <div>
            <p className="hero-console__label">{copy.mode}</p>
            <p className="hero-console__value">{copy.modeValue}</p>
          </div>
          <div>
            <p className="hero-console__label">{copy.outputs}</p>
            <p className="hero-console__value">{copy.outputsValue}</p>
          </div>
          <Link href={localizePath('/work', locale)} className="hero-console__cta">
            {copy.cta}
          </Link>
        </div>
      </div>
    </div>
  )
}
