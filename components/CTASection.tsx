import { COMPANY, CTA_PRIMARY, MAILTO } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';

const PROMPTS = [
  'Your company or team size',
  'What AI tools your team uses',
  'Where AI feels expensive, messy, or hard to measure',
  'Whether you need an audit, training, governance, or workflow design',
];

export default function CTASection() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="container-px">
        <AnimatedCard>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-14 shadow-lift sm:px-12 lg:px-16">
            {/* botanical glow */}
            <span className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(175,199,181,0.4),transparent_70%)]" />
            <span className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(216,167,167,0.35),transparent_70%)]" />
            <svg
              aria-hidden
              className="absolute right-8 top-8 h-28 w-28 opacity-20"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path d="M50 95V45" stroke="#AFC7B5" strokeWidth="1.5" />
              <circle cx="50" cy="32" r="18" stroke="#D8A7A7" strokeWidth="1.5" />
              <path d="M50 16c5 4 8 9 8 16s-3 12-8 16c-5-4-8-9-8-16s3-12 8-16Z" fill="#D8A7A7" opacity="0.4" />
            </svg>

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <span className="eyebrow text-sage">Start the conversation</span>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ivory text-balance sm:text-4xl">
                  Ready to prune AI waste before it becomes permanent?
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/70">
                  Send RoseraOps a brief email about your company, your current AI
                  usage, and where you believe time or money is being wasted.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href={MAILTO} className="btn-primary bg-sage text-ink hover:bg-[#9fbca7]">
                    {CTA_PRIMARY}
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-ivory/80 transition-colors hover:text-sage"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-7">
                <p className="text-sm font-semibold text-ink">Tell us:</p>
                <ul className="mt-4 space-y-3">
                  {PROMPTS.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-ink/75">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl bg-emerald/8 px-4 py-3 text-xs text-emerald">
                  We reply with a short, specific read on where waste likely lives.
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
