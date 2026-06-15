import { BLUEPRINT } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

export default function ProofPointSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-mist/50" />
      <div className="container-px grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Proof point"
            title="The best enterprise AI workflows are narrow, structured, and reviewed."
            intro="RoseraOps designs AI workflows around strict scope, clear inputs, controlled outputs, domain terminology, and human review. In operational environments, this approach can turn raw details into structured, management-ready documentation without letting AI wander outside its role."
          />
          <AnimatedCard delay={120}>
            <p className="mt-6 text-base leading-relaxed text-ink/70 text-pretty">
              A narrow operational documentation assistant can be designed to accept
              only the document type, date, and operational details, then generate a
              structured, management-ready narrative using required terminology,
              formatting rules, tone rules, and action-item rules. This is the opposite
              of open-ended AI usage: constrained, repeatable, measurable, and
              reviewable.
            </p>
          </AnimatedCard>
        </div>

        <AnimatedCard delay={140}>
          <div className="card-surface relative overflow-hidden p-7 sm:p-8">
            <span className="absolute right-0 top-0 h-28 w-28 rounded-bl-[3rem] bg-gradient-to-br from-sage/20 to-transparent" />
            <div className="flex items-center justify-between">
              <span className="eyebrow">Narrow Agent Blueprint</span>
              <span className="rounded-full bg-emerald/8 px-3 py-1 text-[11px] font-semibold text-emerald">
                Scoped
              </span>
            </div>

            <dl className="mt-6 divide-y divide-ink/8">
              {BLUEPRINT.map((b, i) => (
                <div key={b.k} className="flex items-start gap-4 py-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-mist text-xs font-semibold text-emerald tabnums ring-1 ring-emerald/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <dt className="font-display text-base font-semibold text-ink">
                      {b.k}
                    </dt>
                    <dd className="text-sm leading-relaxed text-ink/65">{b.v}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald/6 px-4 py-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 8.5l3 3 7-8"
                  stroke="#2F6F5E"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs font-medium text-emerald">
                One job · one format · one review process
              </span>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
