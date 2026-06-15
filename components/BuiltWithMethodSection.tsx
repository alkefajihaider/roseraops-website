import { BUILT_STEPS } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import BloomMark from './BloomMark';
import SectionHeading from './SectionHeading';

export default function BuiltWithMethodSection() {
  return (
    <section id="proof" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-mist/50" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Proof of work"
          title="Built with the same method we teach."
          intro="This website was not created by blindly asking AI to “make a startup website.” The strategy, buyer, offer, research, message, and visual direction were defined first. Premium AI was used only after the direction was clear."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <ol className="relative space-y-6 pl-2">
            <span aria-hidden className="absolute bottom-3 left-[1.45rem] top-3 w-px bg-gradient-to-b from-emerald/40 via-rose/40 to-gold/50" />
            {BUILT_STEPS.map((s, i) => (
              <AnimatedCard as="li" key={s.n} delay={i * 80} className="relative flex gap-5">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald/20 bg-card text-sm font-semibold text-emerald shadow-soft tabnums">
                  {s.n}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{s.body}</p>
                </div>
              </AnimatedCard>
            ))}
          </ol>

          {/* Nearly-bloomed rose framing the quote */}
          <AnimatedCard delay={120} className="relative">
            <div aria-hidden className="pointer-events-none absolute -inset-6 -z-10 opacity-30">
              <BloomMark openness={0.88} className="h-full w-full" />
            </div>
            <div className="glass rounded-2xl p-8 text-center shadow-glow">
              <span className="font-display text-4xl leading-none text-rose/50">“</span>
              <p className="mt-1 font-display text-lg font-medium leading-snug text-ink">
                Premium AI should not replace thinking. It should create leverage after the thinking is done.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
