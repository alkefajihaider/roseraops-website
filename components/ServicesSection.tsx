import { CTA_PRIMARY, MAILTO, SERVICES } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Services"
          title="Enterprise AI consulting built for cost, quality, and judgment."
          intro="Five engagements that move teams from scattered AI adoption to disciplined, measurable AI operations."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            // First two cards span wider on large screens for editorial rhythm.
            const feature = i < 2;
            return (
              <AnimatedCard
                key={s.n}
                delay={i * 70}
                lift
                className={`card-surface group relative flex flex-col overflow-hidden p-8 ${
                  feature ? 'lg:col-span-3 lg:flex-row lg:items-center lg:gap-10' : ''
                }`}
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald via-sage to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className={feature ? 'lg:w-1/3' : ''}>
                  <span className="font-display text-2xl font-semibold text-emerald/40">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                    {s.title}
                  </h3>
                </div>
                <p
                  className={`mt-3 text-[15px] leading-relaxed text-ink/65 ${
                    feature ? 'lg:mt-0 lg:flex-1' : ''
                  }`}
                >
                  {s.body}
                </p>
              </AnimatedCard>
            );
          })}
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
