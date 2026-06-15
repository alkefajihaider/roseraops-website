import { EXPENSIVE_WAY, ROSERA_WAY } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

function CrossIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="8.2" stroke="#B86F6F" strokeWidth="1.2" />
      <path d="M6 6l6 6M12 6l-6 6" stroke="#B86F6F" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="8.2" stroke="#2F6F5E" strokeWidth="1.2" />
      <path d="M5.5 9.2l2.4 2.4 4.6-5" stroke="#2F6F5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BeliefSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-mist/60" />
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="What we believe"
          title="AI should refine human thinking, not replace it."
          intro="The most effective AI workflows start with human judgment. Humans define the problem, choose the direction, identify what good output looks like, and own the final decision. AI is then used to accelerate research support, formatting, documentation, synthesis, QA, and repetitive work."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <AnimatedCard className="card-surface relative overflow-hidden p-8" lift>
            <div className="absolute right-6 top-6 font-display text-5xl text-clay/15">01</div>
            <span className="eyebrow eyebrow-clay">The expensive way</span>
            <ul className="mt-6 space-y-3.5">
              {EXPENSIVE_WAY.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CrossIcon />
                  <span className="text-[15px] text-ink/70">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedCard>

          <AnimatedCard
            delay={100}
            className="relative overflow-hidden rounded-2xl bg-ink p-8 shadow-lift"
            lift
          >
            <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(175,199,181,0.35),transparent_70%)]" />
            <div className="absolute right-6 top-6 font-display text-5xl text-sage/20">02</div>
            <span className="eyebrow text-sage">The RoseraOps way</span>
            <ul className="mt-6 space-y-3.5">
              {ROSERA_WAY.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-sage/20">
                    <CheckIcon />
                  </span>
                  <span className="text-[15px] text-ivory/90">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
