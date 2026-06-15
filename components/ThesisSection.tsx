import { THESIS_AI_FOR, THESIS_HUMAN_OWNS } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

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

export default function ThesisSection() {
  return (
    <section id="thesis" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ivory via-mist/40 to-ivory" />
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="AI cost thesis"
          title="The next AI advantage will belong to the companies that use less AI per result."
          intro="The next wave of advantage will not come from giving every employee unlimited access to the most expensive model. It will come from disciplined AI operations."
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
              They reduce long-context waste, avoid unnecessary file uploads,
              standardize prompts, select the right model for the task, reuse
              high-performing workflows, and train employees to think before prompting.
            </p>
          </div>
        </AnimatedCard>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
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
      </div>
    </section>
  );
}
