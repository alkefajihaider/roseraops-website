import { CTA_PRIMARY, MAILTO, SERVICES } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import BloomMark from './BloomMark';
import SectionHeading from './SectionHeading';

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-28">
      {/* Petals beginning to open behind the cards */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-1/3 w-[28rem] opacity-[0.16]">
        <BloomMark openness={0.4} className="h-auto w-full" />
      </div>

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Services"
          title="Enterprise AI consulting built for cost, quality, and judgment."
          intro="Four engagements that move teams from scattered AI adoption to disciplined, measurable AI operations."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <AnimatedCard key={s.n} delay={i * 80} lift className="card-surface group relative overflow-hidden p-8">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald via-sage to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-semibold text-emerald/40">{s.n}</span>
                <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{s.title}</h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{s.body}</p>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedCard delay={120} className="mt-10 flex justify-center">
          <a href={MAILTO} className="btn-primary">
            {CTA_PRIMARY}
            <span aria-hidden>→</span>
          </a>
        </AnimatedCard>
      </div>
    </section>
  );
}
