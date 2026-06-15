import { RESEARCH } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

function ReadSource({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition-colors hover:text-[#985252]"
    >
      {label}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover/link:translate-x-0.5"
      >
        ↗
      </span>
    </a>
  );
}

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Evidence"
          title="Research behind the method."
          intro="Research does not say AI is bad. It says AI needs discipline. RoseraOps uses current research on productivity, cognition, model usage, and cost efficiency to train teams toward better AI habits."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {RESEARCH.map((r, i) => (
            <AnimatedCard
              key={r.paper}
              delay={(i % 3) * 80}
              lift
              className="card-surface group relative flex flex-col overflow-hidden p-7"
            >
              <span className="absolute right-5 top-5 h-8 w-8 rounded-full bg-gradient-to-br from-rose/15 to-gold/10" />
              <span className="eyebrow text-[10px]">{r.source}</span>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                {r.paper}
              </h3>

              <div className="mt-4 space-y-3 text-sm leading-relaxed">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/65">
                    Key finding
                  </span>
                  <p className="mt-1 text-ink/70">{r.finding}</p>
                </div>
                <div className="rounded-xl bg-mist/70 p-3.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-emerald">
                    RoseraOps interpretation
                  </span>
                  <p className="mt-1 text-ink/75">{r.interpretation}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4 border-t border-ink/8 pt-4">
                <ReadSource href={r.link} label="Read source" />
                {r.altLink ? <ReadSource href={r.altLink} label="arXiv" /> : null}
              </div>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedCard delay={120}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink/65">
            Findings are summarized for context and link to their original sources.
            Emerging or preprint work is noted as such and should be interpreted
            cautiously.
          </p>
        </AnimatedCard>
      </div>
    </section>
  );
}
