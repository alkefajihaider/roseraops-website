import { TRAINING_RULES } from '@/lib/constants';
import AnimatedCard from './AnimatedCard';
import SectionHeading from './SectionHeading';

export default function TrainingRulesSection() {
  return (
    <section id="training" className="py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Training"
          title="The RoseraOps Training Rules"
          intro="Twelve operating principles we install in teams so AI sharpens judgment instead of replacing it."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINING_RULES.map((rule, i) => (
            <AnimatedCard
              key={rule}
              delay={(i % 3) * 70}
              lift
              className="card-surface group flex items-start gap-4 p-6"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald/8 font-display text-sm font-semibold text-emerald tabnums transition-colors group-hover:bg-emerald group-hover:text-ivory">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="pt-1 text-[15px] font-medium leading-snug text-ink/85">
                {rule}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
