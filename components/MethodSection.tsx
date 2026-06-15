import { METHOD_STEPS } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

function LeafNode({ n }: { n: number }) {
  return (
    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald/25 bg-card shadow-soft">
      <span className="font-display text-base font-semibold text-emerald">{n}</span>
      {/* small leaf budding off the stem node */}
      <svg className="absolute -right-2.5 top-1/2 h-4 w-4 -translate-y-1/2" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M2 8c4 0 8 2 12 0-2-4-8-4-12 0Z" fill="#AFC7B5" stroke="#2F6F5E" strokeWidth="0.7" />
      </svg>
    </span>
  );
}

export default function MethodSection() {
  return (
    <section id="method" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ivory via-mist/50 to-ivory" />
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="The method"
          title="The Human-First AI Efficiency Framework"
          intro="Five disciplined steps that decide when AI is used, how it is constrained, and how the result is measured."
        />

        <div className="relative mx-auto mt-16 max-w-2xl">
          {/* structured stem running down the page */}
          <span
            aria-hidden
            className="absolute bottom-6 left-6 top-6 w-[2px] -translate-x-1/2 bg-gradient-to-b from-emerald/50 via-sage to-emerald/20"
          />
          <ol className="space-y-7">
            {METHOD_STEPS.map((s, i) => (
              <AnimatedCard as="li" key={s.step} delay={i * 80} className="relative flex gap-6">
                <LeafNode n={i + 1} />
                <div className="card-surface flex-1 p-5 sm:p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">{s.step}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{s.body}</p>
                </div>
              </AnimatedCard>
            ))}
          </ol>
        </div>

        <AnimatedCard delay={160} className="mx-auto mt-12 max-w-2xl">
          <p className="text-center font-display text-lg leading-snug text-ink">
            The goal is not to use more AI. The goal is to create{' '}
            <span className="text-emerald">more value per AI dollar.</span>
          </p>
        </AnimatedCard>
      </div>
    </section>
  );
}
