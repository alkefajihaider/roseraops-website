import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

const FLOW = [
  'Humans frame the problem.',
  'Humans decide whether AI is needed.',
  'Humans define what good output looks like.',
  'AI accelerates refinement, synthesis, documentation, and QA.',
  'Humans verify, improve, and own the final decision.',
];

function BloomDiagram() {
  return (
    <div className="card-surface relative overflow-hidden p-8 sm:p-10">
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(175,199,181,0.18),transparent_60%)]" />
      <svg
        viewBox="0 0 260 320"
        className="relative mx-auto h-72 w-auto"
        role="img"
        aria-label="A rose blooming above its roots, illustrating that structure produces growth."
      >
        {/* roots */}
        <g stroke="#B86F6F" strokeWidth="1.4" fill="none" opacity="0.8">
          <path d="M130 250c-2 18-10 30-26 42M130 250c2 18 10 30 26 42M130 250c-20 8-32 20-40 40M130 250c20 8 32 20 40 40M130 250v46" />
        </g>
        <text x="130" y="312" textAnchor="middle" className="fill-clay" fontSize="11" fontWeight="600">
          ROOTS · Human judgment
        </text>

        {/* stem */}
        <path d="M130 250V120" stroke="#2F6F5E" strokeWidth="2.4" />
        {/* leaves */}
        <path d="M130 200c-22 0-36-12-40-30 22-2 36 10 40 30Z" fill="#AFC7B5" opacity="0.9" />
        <path d="M130 170c22 0 36-12 40-30-22-2-36 10-40 30Z" fill="#AFC7B5" opacity="0.7" />

        {/* bloom */}
        <g transform="translate(130 86)">
          <circle r="46" fill="#FBEDED" />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse
              key={a}
              cx="0"
              cy="-22"
              rx="16"
              ry="26"
              fill="#D8A7A7"
              opacity="0.85"
              transform={`rotate(${a})`}
            />
          ))}
          <circle r="15" fill="#B86F6F" />
          <circle r="7" fill="#D9B56D" />
        </g>
        <text x="130" y="20" textAnchor="middle" className="fill-emerald" fontSize="11" fontWeight="600">
          BLOOM · Business value
        </text>
      </svg>
      <p className="relative mt-2 text-center text-sm leading-relaxed text-ink/65">
        A rose blooms because its roots, stem, structure, sunlight, and pruning are
        aligned. Human productivity blooms under AI the same way — with the right
        structure, constraints, and discipline.
      </p>
    </div>
  );
}

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 sm:py-28">
      <div className="container-px grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Philosophy"
            title="Human judgment first. AI leverage second."
            intro="RoseraOps believes the next advantage in AI will not come from using the most AI. It will come from using the least AI required to create the most business value."
          />
          <AnimatedCard delay={100}>
            <p className="mt-6 text-base leading-relaxed text-ink/70 text-pretty">
              Most teams waste AI by asking models to think from start to finish. They
              begin with vague prompts, expand the conversation endlessly, upload
              unnecessary context, use premium models for low-value tasks, and accept
              generic output that still needs human cleanup. The RoseraOps method is
              different:
            </p>
          </AnimatedCard>
          <AnimatedCard delay={160}>
            <ul className="mt-6 space-y-3">
              {FLOW.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
                  />
                  <span className="text-[15px] leading-relaxed text-ink/80">{line}</span>
                </li>
              ))}
            </ul>
          </AnimatedCard>
          <AnimatedCard delay={220}>
            <p className="mt-7 inline-flex rounded-full bg-emerald/8 px-5 py-2 text-sm font-medium text-emerald">
              This is not anti-AI. This is intelligent AI usage.
            </p>
          </AnimatedCard>
        </div>

        <AnimatedCard delay={120}>
          <BloomDiagram />
        </AnimatedCard>
      </div>
    </section>
  );
}
