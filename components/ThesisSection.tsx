import { THESIS_AI_FOR, THESIS_HUMAN_OWNS } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

const CREDENTIALS = [
  'Electrical engineering background',
  'Startup founder experience',
  'Operations experience in high-scale environments',
  'Hands-on experience implementing structured AI workflows',
];

function Chip({ children, tone }: { children: string; tone: 'sage' | 'rose' }) {
  return (
    <span
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${
        tone === 'sage'
          ? 'bg-sage/25 text-emerald'
          : 'bg-rose/20 text-[#985252]'
      }`}
    >
      {children}
    </span>
  );
}

function SproutIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="mt-0.5 shrink-0"
    >
      <path d="M10 16V8" stroke="#2F6F5E" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M10 11C7 11 5 9 5 6c3 0 5 2 5 5Z"
        fill="#AFC7B5"
        stroke="#2F6F5E"
        strokeWidth="0.6"
      />
      <path
        d="M10 10c0-3 2-5 5-5 0 3-2 5-5 5Z"
        fill="#D8A7A7"
        stroke="#B86F6F"
        strokeWidth="0.6"
      />
    </svg>
  );
}

export default function ThesisSection() {
  return (
    <section id="thesis" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ivory via-mist/50 to-ivory" />

      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="Platform thesis"
          title="The next AI advantage belongs to companies that measure AI like an operating system, not a toy."
          intro="The winning companies will not be the ones using the most AI. They will be the ones that know exactly where AI creates value, where it creates waste, and how to turn human judgment into repeatable, measurable AI workflows."
        />

        <AnimatedCard delay={120} className="mx-auto mt-10 max-w-2xl">
          <div className="card-surface p-8 text-center">
            <p className="text-sm uppercase tracking-eyebrow text-ink/65">
              Companies that win will ask
            </p>

            <p className="mt-4 font-display text-2xl font-semibold leading-snug text-ink sm:text-[1.7rem]">
              How much value did this workflow create{' '}
              <span className="text-emerald">per AI dollar?</span>
            </p>

            <p className="mt-5 text-sm leading-relaxed text-ink/65">
              RoseraOps starts with audit-led AI cost intelligence, then turns
              repeated waste patterns into software for spend visibility, workflow
              optimization, governance, and human-first AI adoption.
            </p>
          </div>
        </AnimatedCard>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          <AnimatedCard delay={80} className="card-surface p-8" lift>
            <span className="eyebrow">AI should be used for</span>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {THESIS_AI_FOR.map((x) => (
                <Chip key={x} tone="sage">
                  {x}
                </Chip>
              ))}
            </div>
          </AnimatedCard>

          <AnimatedCard delay={160} className="card-surface p-8" lift>
            <span className="eyebrow eyebrow-clay">Humans should still own</span>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {THESIS_HUMAN_OWNS.map((x) => (
                <Chip key={x} tone="rose">
                  {x}
                </Chip>
              ))}
            </div>
          </AnimatedCard>
        </div>

        <div
          id="founder"
          className="mx-auto mt-10 grid max-w-5xl items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <AnimatedCard delay={180} className="card-surface p-8" lift>
            <span className="eyebrow">Founder thesis</span>

            <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-ink">
              AI should make teams sharper, not more dependent.
            </h3>

            <p className="mt-5 text-base leading-relaxed text-ink/70 text-pretty">
              RoseraOps was built from a practical operations and engineering
              perspective. The thesis is simple: AI should not replace the thinking
              stage of work. It should be used after the problem is understood,
              after the direction is clear, and after humans know what good output
              looks like.
            </p>

            <p className="mt-5 text-base leading-relaxed text-ink/70 text-pretty">
              Used correctly, AI reduces busy work and increases productivity. Used
              poorly, it creates generic work, wasted tokens, expensive workflows,
              and false confidence. The company’s own website was created using
              this exact philosophy: human-led strategy first, refined prompting
              second, premium AI execution third, and human review before publishing.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={220}>
            <div className="card-surface relative h-full overflow-hidden p-8">
              <span className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(216,167,167,0.25),transparent_70%)]" />

              <span className="eyebrow">Founder perspective</span>

              <ul className="mt-6 space-y-4">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-start gap-3.5">
                    <SproutIcon />
                    <span className="text-[15px] leading-snug text-ink/80">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 border-t border-ink/8 pt-5 font-display text-base italic leading-snug text-ink/70">
                Used correctly, AI reduces busy work. Used poorly, it manufactures
                expensive, confident mediocrity.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
