import { CTA_PRIMARY, CTA_SECONDARY, HERO_COST_CARDS, MAILTO } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import BloomMark from './BloomMark';

// Four cost cards positioned around the central Human Judgment node.
const NODES = [
  { x: 27, y: 21 },
  { x: 73, y: 21 },
  { x: 27, y: 79 },
  { x: 73, y: 79 },
];

const VINES = [
  'M50 50 C 42 42, 34 33, 28 25',
  'M50 50 C 58 42, 66 33, 72 25',
  'M50 50 C 42 58, 34 67, 28 75',
  'M50 50 C 58 58, 66 67, 72 75',
];

const dot: Record<string, string> = {
  clay: '#B86F6F',
  gold: '#D9B56D',
  teal: '#4CA6A8',
  emerald: '#2F6F5E',
};
const valueText: Record<string, string> = {
  clay: 'text-[#985252]',
  gold: 'text-[#8A6A1F]',
  teal: 'text-[#1C6F71]',
  emerald: 'text-emerald',
};

function Dashboard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_45%,rgba(216,167,167,0.32),transparent_70%)] blur-2xl" />

      <div className="glass relative overflow-hidden rounded-[1.75rem] p-5 shadow-glow sm:p-7">
        {/* Closed rosebud motif — restrained at the top of the bloom story */}
        <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 w-40 opacity-40">
          <BloomMark openness={0.05} className="h-auto w-full" />
        </div>

        <div className="relative mb-5 flex items-center justify-between">
          <span className="eyebrow">
            <span aria-hidden className="inline-block h-px w-5 bg-current opacity-60" />
            AI Cost Telemetry
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose/70" />
            <span className="h-2 w-2 rounded-full bg-gold/70" />
            <span className="h-2 w-2 rounded-full bg-sage" />
          </span>
        </div>

        <div className="relative aspect-square w-full">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
            {VINES.map((d, i) => (
              <g key={i}>
                <path d={d} fill="none" stroke="rgba(47,111,94,0.28)" strokeWidth="1.3" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
                <path
                  d={d}
                  fill="none"
                  stroke={dot[HERO_COST_CARDS[i].tone]}
                  strokeWidth="1.3"
                  strokeDasharray="2 10"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  opacity="0.7"
                >
                  <animate attributeName="stroke-dashoffset" from="24" to="0" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
                </path>
              </g>
            ))}
          </svg>

          {/* Center: Human Judgment */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
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

          {/* Four cost nodes */}
          {HERO_COST_CARDS.map((c, i) => (
            <div
              key={c.label}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${NODES[i].x}%`, top: `${NODES[i].y}%` }}
            >
              <div className="w-[7.5rem] rounded-xl border border-ink/10 bg-card/95 px-3 py-2 text-center shadow-soft backdrop-blur">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: dot[c.tone] }} />
                  <span className="text-[10px] font-medium uppercase tracking-wide text-ink/65">{c.label}</span>
                </div>
                <div className={`mt-0.5 text-xs font-semibold tabnums ${valueText[c.tone]}`}>{c.value}</div>
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
                <svg className="absolute -bottom-2 left-0 h-3 w-full text-rose" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 8C40 3 80 3 120 6s60 4 78 1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h1>
          </AnimatedCard>

          <AnimatedCard delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70 text-pretty">
              RoseraOps helps enterprise teams reduce AI waste, improve productivity, and train
              employees to use AI without replacing human judgment.
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
        </div>

        <AnimatedCard delay={200} className="animate-float">
          <Dashboard />
        </AnimatedCard>
      </div>
    </section>
  );
}
