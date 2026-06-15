import {
  CTA_PRIMARY,
  CTA_SECONDARY,
  HERO_COST_CARDS,
  MAILTO,
} from '@/lib/constants';
import AnimatedCard from './AnimatedCard';

// Ring node positions as % within the visual panel (matches SVG vine endpoints).
const NODES = [
  { label: 'Frame', x: 50, y: 11, accent: 'emerald' },
  { label: 'Filter', x: 85, y: 29, accent: 'teal' },
  { label: 'Automate', x: 80, y: 83, accent: 'gold' },
  { label: 'Verify', x: 22, y: 83, accent: 'clay' },
  { label: 'Optimize', x: 15, y: 30, accent: 'sage' },
];

const VINES = [
  'M50 46 C 46 34, 54 22, 50 13',
  'M50 46 C 64 42, 78 36, 84 31',
  'M50 46 C 62 58, 74 70, 79 81',
  'M50 46 C 40 60, 30 72, 23 81',
  'M50 46 C 36 42, 24 36, 17 32',
];

const accentText: Record<string, string> = {
  emerald: 'text-emerald',
  teal: 'text-[#1C6F71]',
  gold: 'text-[#8A6A1F]',
  clay: 'text-[#985252]',
  sage: 'text-emerald',
};
const accentDot: Record<string, string> = {
  emerald: '#2F6F5E',
  teal: '#4CA6A8',
  gold: '#D9B56D',
  clay: '#B86F6F',
  sage: '#AFC7B5',
};

const toneStyles: Record<string, string> = {
  clay: 'text-[#985252]',
  gold: 'text-[#8A6A1F]',
  teal: 'text-[#1C6F71]',
  emerald: 'text-emerald',
};

function Dashboard() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Soft glow behind the panel */}
      <div className="absolute inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,rgba(216,167,167,0.35),transparent_70%)] blur-2xl" />

      <div className="glass relative rounded-[1.75rem] p-5 shadow-glow sm:p-7">
        <div className="mb-5 flex items-center justify-between">
          <span className="eyebrow">
            <span aria-hidden className="inline-block h-px w-5 bg-current opacity-60" />
            Human-First Workflow
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose/70" />
            <span className="h-2 w-2 rounded-full bg-gold/70" />
            <span className="h-2 w-2 rounded-full bg-sage" />
          </span>
        </div>

        {/* Node graph */}
        <div className="relative aspect-[4/3.5] w-full">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            {VINES.map((d, i) => (
              <g key={i}>
                <path
                  d={d}
                  fill="none"
                  stroke="rgba(47,111,94,0.30)"
                  strokeWidth="1.4"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                />
                <path
                  d={d}
                  fill="none"
                  stroke={accentDot[NODES[i].accent]}
                  strokeWidth="1.4"
                  strokeDasharray="2 10"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  opacity="0.7"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="24"
                    to="0"
                    dur={`${3 + i * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            ))}
          </svg>

          {/* Center: Human Judgment */}
          <div
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: '50%', top: '46%' }}
          >
            <div className="animate-pulseNode rounded-2xl border border-emerald/25 bg-card px-4 py-3 text-center shadow-lift">
              <div className="font-display text-sm font-semibold leading-tight text-ink sm:text-base">
                Human
                <br />
                Judgment
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-eyebrow text-emerald">
                Owns the decision
              </div>
            </div>
          </div>

          {/* Ring nodes */}
          {NODES.map((n) => (
            <div
              key={n.label}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <div className="flex items-center gap-1.5 rounded-full border border-ink/10 bg-card/90 px-3 py-1.5 shadow-soft backdrop-blur">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: accentDot[n.accent] }}
                />
                <span className={`text-xs font-semibold ${accentText[n.accent]}`}>
                  {n.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Cost telemetry row */}
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {HERO_COST_CARDS.map((c) => (
            <div
              key={c.label}
              className="rounded-xl border border-ink/8 bg-mist/60 px-3 py-2.5"
            >
              <div className="text-[10px] font-medium uppercase tracking-wide text-ink/65">
                {c.label}
              </div>
              <div className={`mt-1 text-sm font-semibold tabnums ${toneStyles[c.tone]}`}>
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="container-px grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28">
        <div>
          <AnimatedCard>
            <span className="eyebrow">
              <span aria-hidden className="inline-block h-px w-6 bg-current opacity-60" />
              Enterprise AI cost discipline
            </span>
          </AnimatedCard>

          <AnimatedCard delay={80}>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.4rem]">
              Enterprise AI is getting expensive because most teams are using it{' '}
              <span className="relative whitespace-nowrap text-clay">
                wrong
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-rose"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 8C40 3 80 3 120 6s60 4 78 1"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>
          </AnimatedCard>

          <AnimatedCard delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70 text-pretty">
              RoseraOps helps companies reduce AI waste, train teams to use AI
              responsibly, and build workflows that increase productivity without
              replacing human judgment.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={MAILTO} className="btn-primary">
                {CTA_PRIMARY}
                <span aria-hidden>→</span>
              </a>
              <a href="#method" className="btn-ghost">
                {CTA_SECONDARY}
              </a>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink/65">
              <span className="flex items-center gap-2">
                <Sprout /> Audit-led, not tool-led
              </span>
              <span className="flex items-center gap-2">
                <Sprout /> Human-first by design
              </span>
              <span className="flex items-center gap-2">
                <Sprout /> Value per AI dollar
              </span>
            </div>
          </AnimatedCard>
        </div>

        <AnimatedCard delay={200} className="animate-float">
          <Dashboard />
        </AnimatedCard>
      </div>

      <FloralDivider />
    </section>
  );
}

function Sprout() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M8 14V7" stroke="#2F6F5E" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M8 9C5 9 3 7 3 4c3 0 5 2 5 5Z"
        fill="#AFC7B5"
        stroke="#2F6F5E"
        strokeWidth="0.7"
      />
      <path
        d="M8 8c0-3 2-5 5-5 0 3-2 5-5 5Z"
        fill="#D8A7A7"
        stroke="#B86F6F"
        strokeWidth="0.7"
      />
    </svg>
  );
}

export function FloralDivider() {
  return (
    <div className="container-px" aria-hidden>
      <div className="relative flex items-center justify-center">
        <div className="hairline" />
        <svg
          className="absolute bg-ivory px-4"
          width="56"
          height="22"
          viewBox="0 0 56 22"
          fill="none"
        >
          <path d="M28 4v14" stroke="#2F6F5E" strokeWidth="1" />
          <path d="M28 12c-6 0-10-3-11-7 6-1 10 2 11 7Z" fill="#AFC7B5" opacity="0.9" />
          <path d="M28 12c6 0 10-3 11-7-6-1-10 2-11 7Z" fill="#D8A7A7" opacity="0.9" />
          <circle cx="28" cy="4" r="2.5" fill="#D9B56D" />
        </svg>
      </div>
    </div>
  );
}
