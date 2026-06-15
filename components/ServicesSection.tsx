import { MAILTO } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

const SERVICES = [
  {
    n: '01',
    title: 'AI SpendOps Audit',
    body: 'Review AI tools, subscriptions, token-heavy workflows, premium model usage, repeated prompts, context bloat, employee habits, and low-value use cases. Deliver a clear map of where AI spend is creating value and where it is leaking money.',
  },
  {
    n: '02',
    title: 'AI Cost Intelligence Report',
    body: 'Turn scattered AI usage into a structured report covering tool overlap, waste patterns, workflow ROI, model selection, governance gaps, and estimated savings opportunities.',
  },
  {
    n: '03',
    title: 'Human-First AI Training',
    body: 'Train teams to use AI as leverage instead of dependency. Focus on problem framing, prompt discipline, verification, reusable workflows, and knowing when not to use AI.',
  },
  {
    n: '04',
    title: 'Workflow Optimization Design',
    body: 'Design narrow, repeatable AI workflows for operational reports, documentation, support summaries, compliance checks, internal knowledge, and structured business writing.',
  },
  {
    n: '05',
    title: 'AI Governance Playbook',
    body: 'Create practical rules for approved tools, sensitive data, human review, model selection, hallucination checks, cost tracking, and team accountability.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Services"
          title="Audit-led AI SpendOps, built to become software."
          intro="RoseraOps begins with hands-on AI waste audits and workflow reviews. Each engagement helps identify the repeated patterns that will become the foundation of the RoseraOps AI SpendOps platform."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
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
            Start an AI SpendOps Audit
            <span aria-hidden>→</span>
          </a>
        </AnimatedCard>
      </div>
    </section>
  );
}
