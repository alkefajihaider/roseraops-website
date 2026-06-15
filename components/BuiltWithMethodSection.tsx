import { BUILT_STEPS } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

export default function BuiltWithMethodSection() {
  return (
    <section id="proof" className="relative overflow-hidden py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Proof of work"
          title="Built with the same method we teach."
          intro="This website was not created by blindly asking AI to “make a startup website.” It was built through the same process RoseraOps teaches enterprise teams."
        />

        <AnimatedCard delay={100} className="mt-6 max-w-3xl">
          <p className="text-base leading-relaxed text-ink/70 text-pretty">
            First, the business thesis, target buyer, service model, positioning,
            founder perspective, AI cost philosophy, training principles, research
            direction, and visual direction were developed through human-led strategy.
            Then AI was used only after the direction was clear, the structure was
            defined, and the prompt was refined. Strategy came first. Prompting came
            second. Execution came third. Human review comes before publishing.
          </p>
        </AnimatedCard>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          {/* Vertical timeline */}
          <ol className="relative space-y-6 pl-2">
            <span
              aria-hidden
              className="absolute bottom-3 left-[1.45rem] top-3 w-px bg-gradient-to-b from-emerald/40 via-rose/40 to-gold/40"
            />
            {BUILT_STEPS.map((s, i) => (
              <AnimatedCard as="li" key={s.n} delay={i * 70} className="relative flex gap-5">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald/20 bg-card text-sm font-semibold text-emerald shadow-soft tabnums">
                  {s.n}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{s.body}</p>
                </div>
              </AnimatedCard>
            ))}
          </ol>

          {/* Orbiting quote card */}
          <AnimatedCard delay={120} className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              {/* orbit rings */}
              <div
                aria-hidden
                className="absolute inset-2 animate-[spin_38s_linear_infinite] rounded-full border border-dashed border-emerald/20 motion-reduce:animate-none"
              >
                <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-rose/80" />
                <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sage" />
              </div>
              <div
                aria-hidden
                className="absolute inset-8 animate-[spin_26s_linear_infinite_reverse] rounded-full border border-dashed border-rose/25 motion-reduce:animate-none"
              >
                <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-gold/80" />
              </div>

              <div className="glass absolute inset-[18%] flex flex-col items-center justify-center rounded-full p-7 text-center shadow-glow">
                <span className="font-display text-4xl leading-none text-rose/50">“</span>
                <p className="mt-1 font-display text-base font-medium leading-snug text-ink">
                  Premium AI should not be used as a replacement for thinking. It
                  should be used as leverage after the thinking is already done.
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
