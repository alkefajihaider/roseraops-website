import { RESEARCH, RESEARCH_MIT_NOTE, RESEARCH_NOTE } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import BloomMark from './BloomMark';
import SectionHeading from './SectionHeading';

function SourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition-colors hover:text-[#985252]"
    >
      {label}
      <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-0.5">
        ↗
      </span>
    </a>
  );
}

export default function ResearchSection() {
  return (
    <section id="research" className="relative overflow-hidden py-24 sm:py-28">
      {/* Floral forms become more open here — credibility and growth */}
      <div aria-hidden className="pointer-events-none absolute -right-20 top-24 w-[26rem] opacity-[0.16]">
        <BloomMark openness={0.68} className="h-auto w-full" />
      </div>

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Evidence"
          title="Research behind the method."
          intro={RESEARCH_NOTE}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {RESEARCH.map((r, i) => (
            <AnimatedCard key={r.topic} delay={(i % 2) * 90} lift className="card-surface group relative flex flex-col overflow-hidden p-7">
              <span className="absolute right-5 top-5 h-8 w-8 rounded-full bg-gradient-to-br from-rose/15 to-gold/10" />
              <span className="eyebrow text-[10px]">{r.source}</span>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">{r.topic}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{r.body}</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink/8 pt-4">
                {r.links.map((l) => (
                  <SourceLink key={l.href} href={l.href} label={l.label} />
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedCard delay={120}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink/65">
            {RESEARCH_MIT_NOTE}
          </p>
        </AnimatedCard>
      </div>
    </section>
  );
}
