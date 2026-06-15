import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

const CREDENTIALS = [
  'Electrical engineering background',
  'Startup founder experience',
  'Operations experience in high-scale environments',
  'Hands-on experience implementing structured AI workflows',
];

export default function FounderThesisSection() {
  return (
    <section id="founder" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-mist/50" />
      <div className="container-px grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Founder thesis"
            title="AI should make teams sharper, not more dependent."
            intro="RoseraOps was built from a practical operations and engineering perspective, grounded in implementing structured AI workflows in real operational environments."
          />
          <AnimatedCard delay={120}>
            <p className="mt-6 text-base leading-relaxed text-ink/70 text-pretty">
              The thesis is simple: AI should not be used to replace the thinking stage
              of work. It should be used after the problem is understood, after the
              direction is clear, and after humans know what good output looks like.
              Used correctly, AI reduces busy work and increases productivity. Used
              poorly, it creates generic work, wasted tokens, expensive workflows, and
              false confidence.
            </p>
          </AnimatedCard>
          <AnimatedCard delay={180}>
            <p className="mt-5 text-base leading-relaxed text-ink/70 text-pretty">
              The company’s own website was created using this exact philosophy:
              human-led strategy first, refined prompting second, premium AI execution
              third, and human review before publishing.
            </p>
          </AnimatedCard>
        </div>

        <AnimatedCard delay={140}>
          <div className="card-surface relative overflow-hidden p-8">
            <span className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(216,167,167,0.25),transparent_70%)]" />
            <span className="eyebrow">Founder perspective</span>
            <ul className="mt-6 space-y-4">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex items-start gap-3.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden className="mt-0.5 shrink-0">
                    <path d="M10 16V8" stroke="#2F6F5E" strokeWidth="1.3" strokeLinecap="round" />
                    <path d="M10 11C7 11 5 9 5 6c3 0 5 2 5 5Z" fill="#AFC7B5" stroke="#2F6F5E" strokeWidth="0.6" />
                    <path d="M10 10c0-3 2-5 5-5 0 3-2 5-5 5Z" fill="#D8A7A7" stroke="#B86F6F" strokeWidth="0.6" />
                  </svg>
                  <span className="text-[15px] leading-snug text-ink/80">{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-ink/8 pt-5 font-display text-base italic leading-snug text-ink/70">
              Used correctly, AI reduces busy work. Used poorly, it manufactures
              expensive, confident mediocrity.
            </p>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
