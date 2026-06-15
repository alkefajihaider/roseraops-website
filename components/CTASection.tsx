import { COMPANY, CTA_PRIMARY, MAILTO } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import BloomMark from './BloomMark';

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-32">
      {/* Full bloom — soft glow + open rose framing the card */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,167,167,0.28),transparent_62%)] blur-2xl" />
        <div className="absolute left-1/2 top-1/2 w-[34rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 opacity-25">
          <BloomMark openness={1} className="h-auto w-full animate-float" />
        </div>
      </div>

      <div className="container-px relative">
        <AnimatedCard className="mx-auto max-w-2xl">
          <div className="glass rounded-[2rem] p-10 text-center shadow-glow sm:p-14">
            <span className="eyebrow">
              <span aria-hidden className="inline-block h-px w-6 bg-current opacity-60" />
              Start the conversation
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink text-balance sm:text-[2.6rem]">
              Ready to prune AI waste?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/70 text-pretty">
              Email RoseraOps with your current AI challenge, the tools your team uses, and where AI
              feels expensive, messy, or hard to measure.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={MAILTO} className="btn-primary">
                {CTA_PRIMARY}
                <span aria-hidden>→</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-sm font-medium text-emerald transition-colors hover:text-[#985252]"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
