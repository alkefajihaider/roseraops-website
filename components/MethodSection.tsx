import { METHOD_STEPS } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

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

        {/* Vine spine running through the steps (desktop) */}
        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent lg:block"
          />
          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-5">
            {METHOD_STEPS.map((s, i) => (
              <AnimatedCard as="li" key={s.step} delay={i * 90} className="relative">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-emerald/25 bg-card shadow-soft">
                    <span className="font-display text-lg font-semibold text-emerald">
                      {i + 1}
                    </span>
                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-rose/70" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink lg:mt-5">
                    {s.step}
                  </h3>
                </div>
                <p className="mt-3 pl-[4.5rem] text-sm leading-relaxed text-ink/65 lg:pl-0">
                  {s.body}
                </p>
              </AnimatedCard>
            ))}
          </ol>
        </div>

        <AnimatedCard delay={200} className="mx-auto mt-16 max-w-2xl">
          <div className="card-surface flex items-center gap-5 p-7 text-center sm:text-left">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              aria-hidden
              className="hidden shrink-0 sm:block"
            >
              <circle cx="20" cy="16" r="9" fill="#FBEDED" stroke="#B86F6F" strokeWidth="1.2" />
              <path d="M20 9c2 2 3 4 3 7s-1 5-3 7c-2-2-3-4-3-7s1-5 3-7Z" fill="#D8A7A7" />
              <path d="M20 24v9M20 30c4 0 6-2 7-5-3-1-6 1-7 5Z" stroke="#2F6F5E" strokeWidth="1.2" fill="#AFC7B5" />
            </svg>
            <p className="font-display text-lg leading-snug text-ink">
              The goal is not to use more AI. The goal is to create{' '}
              <span className="text-emerald">more business value per AI dollar.</span>
            </p>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
