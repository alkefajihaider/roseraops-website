import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

const PROBLEM_CARDS = [
  {
    title: 'No AI spend visibility',
    body: 'Teams are using AI across departments, but leaders often cannot see which tools are being used, what they cost, which workflows they support, or whether the output is actually worth the spend.',
    icon: 'leaf',
  },
  {
    title: 'Tool overlap and subscription sprawl',
    body: 'Companies stack ChatGPT, Claude, Copilot, automation tools, writing tools, meeting tools, and niche AI apps without knowing which ones duplicate each other or quietly drain budget.',
    icon: 'bud',
  },
  {
    title: 'Premium model overuse',
    body: 'Employees often use the most expensive AI models for simple tasks that could be handled by cheaper models, reusable templates, or better internal processes.',
    icon: 'stem',
  },
  {
    title: 'Workflows are not being measured',
    body: 'AI may feel productive, but most companies do not track whether it reduces time, improves quality, lowers cost, or simply creates more review work for managers.',
    icon: 'roots',
  },
  {
    title: 'Weak verification standards',
    body: 'AI output still needs human judgment. Without review rules, teams risk hallucinations, low-quality work, compliance mistakes, and false confidence in automated answers.',
    icon: 'thorn',
  },
  {
    title: 'Training without accountability',
    body: 'Most AI training teaches prompts, not operating discipline. Teams need to know when to use AI, when not to use it, how to verify it, and how to tie usage back to business value.',
    icon: 'bloom',
  },
];

function BotanicalIcon({ name }: { name: string }) {
  const stroke = '#2F6F5E';
  const common = {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true as const,
  };

  switch (name) {
    case 'leaf':
      return (
        <svg {...common}>
          <path d="M5 19C5 11 11 5 19 5c0 8-6 14-14 14Z" stroke={stroke} strokeWidth="1.4" />
          <path d="M5 19 19 5M9 15h4M11 13v4" stroke="#B86F6F" strokeWidth="1.1" />
        </svg>
      );

    case 'bud':
      return (
        <svg {...common}>
          <path d="M12 21v-7" stroke={stroke} strokeWidth="1.4" />
          <path d="M12 14c-3 0-5-2-5-6 3 0 5 2 5 6Z" stroke={stroke} strokeWidth="1.3" />
          <path d="M12 12c0-4 2-7 5-7 0 4-2 7-5 7Z" stroke="#B86F6F" strokeWidth="1.3" />
        </svg>
      );

    case 'stem':
      return (
        <svg {...common}>
          <path d="M12 21V6" stroke={stroke} strokeWidth="1.4" />
          <path
            d="M12 11c-3 0-5-2-5-5 3 0 5 2 5 5ZM12 15c3 0 5-2 5-5-3 0-5 2-5 5Z"
            stroke="#B86F6F"
            strokeWidth="1.2"
          />
          <circle cx="12" cy="5" r="2" stroke="#D9B56D" strokeWidth="1.3" />
        </svg>
      );

    case 'roots':
      return (
        <svg {...common}>
          <path d="M12 3v9" stroke={stroke} strokeWidth="1.4" />
          <path
            d="M12 12c-2 2-3 4-3 7M12 12c2 2 3 4 3 7M12 12c-4 1-6 3-7 6M12 12c4 1 6 3 7 6"
            stroke="#B86F6F"
            strokeWidth="1.1"
          />
          <circle cx="12" cy="6" r="2.5" stroke="#D9B56D" strokeWidth="1.3" />
        </svg>
      );

    case 'thorn':
      return (
        <svg {...common}>
          <path d="M5 19 19 5" stroke={stroke} strokeWidth="1.4" />
          <path d="M11 13l-4 1 1-4M15 9l3-1-1 3" stroke="#B86F6F" strokeWidth="1.2" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="11" r="3" stroke={stroke} strokeWidth="1.4" />
          <path
            d="M12 8c0-3 2-5 2-5s2 2 2 5M12 8c0-3-2-5-2-5M9 11c-3 0-5 2-5 2s2 2 5 2M15 11c3 0 5 2 5 2s-2 2-5 2M12 14c0 3 2 5 2 5"
            stroke="#B86F6F"
            strokeWidth="1.1"
          />
        </svg>
      );
  }
}

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="The problem"
          tone="clay"
          title="The AI problem is no longer access. It is visibility."
          intro="Companies now have powerful AI tools across every department, but most leaders cannot clearly see where AI is saving money, where it is wasting money, which workflows are improving, and where employees are becoming dependent on expensive tools without measurable ROI."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEM_CARDS.map((c, i) => (
            <AnimatedCard
              key={c.title}
              delay={i * 70}
              lift
              className="card-surface group relative overflow-hidden p-7"
            >
              <span className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-gradient-to-br from-rose/10 to-transparent" />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist ring-1 ring-emerald/10 transition-colors group-hover:bg-sage/30">
                <BotanicalIcon name={c.icon} />
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {c.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">
                {c.body}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
