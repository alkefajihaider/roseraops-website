export const COMPANY = {
  name: 'RoseraOps',
  domain: 'roseraops.com',
  email: 'roseraops@gmail.com',
  tagline: 'Prune AI waste. Let human intelligence bloom.',
};

export const MAILTO =
  'mailto:roseraops@gmail.com?subject=AI%20Waste%20Conversation%20-%20RoseraOps';

export const CTA_PRIMARY = 'Start an AI Waste Conversation';
export const CTA_SECONDARY = 'View Our Method';

export const NAV_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Services', href: '#services' },
  { label: 'Method', href: '#method' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_COST_CARDS = [
  { label: 'Token Waste', value: 'Tracked', tone: 'clay' },
  { label: 'Model Overuse', value: 'Audited', tone: 'gold' },
  { label: 'Prompt Drift', value: 'Contained', tone: 'teal' },
  { label: 'Workflow ROI', value: 'Measured', tone: 'emerald' },
];

export const PROBLEM_CARDS = [
  { title: 'Bloated prompts', body: 'Long, restated prompts inflate token cost on every call.', icon: 'leaf' },
  { title: 'Premium model overuse', body: 'Expensive models run tasks a smaller one would handle.', icon: 'bud' },
  { title: 'Repeated context', body: 'Whole documents re-sent when a few lines would do.', icon: 'stem' },
  { title: 'Weak governance', body: 'No agreed rules for tools, data, or human review.', icon: 'thorn' },
  { title: 'Low ROI measurement', body: 'Activity gets tracked instead of value, so waste hides.', icon: 'bloom' },
  { title: 'Output still needs cleanup', body: 'Generic AI output requires heavy human correction.', icon: 'roots' },
];

export const SERVICES = [
  {
    n: '01',
    title: 'AI Waste Audit',
    body: 'Find where teams overspend on AI tools, tokens, models, repeated prompts, and low-value workflows.',
  },
  {
    n: '02',
    title: 'AI Cost Optimization Training',
    body: 'Train employees to prompt efficiently, cut context bloat, use the right model, stay mentally engaged, and avoid unnecessary AI usage.',
  },
  {
    n: '03',
    title: 'Narrow Workflow Design',
    body: 'Turn messy AI usage into single-purpose workflows with clear inputs, required formats, domain rules, and human review.',
  },
  {
    n: '04',
    title: 'AI Governance Playbook',
    body: 'Set practical rules for approved tools, sensitive data, review standards, hallucination checks, and cost tracking.',
  },
];

export const METHOD_STEPS = [
  { step: 'Frame', body: 'Humans define the problem, goal, constraints, and success criteria before AI is used.' },
  { step: 'Filter', body: 'The team decides whether AI is actually needed, or whether a simpler process works better.' },
  { step: 'Automate', body: 'AI handles high-leverage repetitive work: refinement, formatting, synthesis, and documentation.' },
  { step: 'Verify', body: 'Humans review the output for accuracy, originality, risk, quality, and business fit.' },
  { step: 'Optimize', body: 'The workflow is measured by cost, tokens, model choice, time saved, and business value.' },
];

export const BUILT_STEPS = [
  { n: '01', title: 'Human Strategy', body: 'Define the buyer, offer, philosophy, and message.' },
  { n: '02', title: 'Refined Prompt', body: 'Compress the strategy into a specific, high-context build prompt.' },
  { n: '03', title: 'AI Execution', body: 'Use AI for structure, layout, code, and copy once the direction is known.' },
  { n: '04', title: 'Human Review', body: 'Check quality, accuracy, design, positioning, and deployment readiness.' },
];

export const RESEARCH = [
  {
    source: 'Microsoft Research / CHI 2025',
    topic: 'Generative AI and critical thinking',
    body: 'Microsoft Research found that higher confidence in GenAI was associated with less critical-thinking effort among surveyed knowledge workers. RoseraOps trains teams to stay mentally engaged while using AI.',
    links: [
      {
        label: 'Read source',
        href: 'https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/',
      },
    ],
  },
  {
    source: 'Harvard Business School / BCG',
    topic: 'The jagged technological frontier',
    body: 'Research with BCG consultants showed AI can improve speed and quality on some tasks while performing poorly on others. RoseraOps trains teams to know what to automate and what to keep human-led.',
    links: [{ label: 'Read source', href: 'https://d3.harvard.edu/navigating-the-jagged-technological-frontier/' }],
  },
  {
    source: 'NBER',
    topic: 'Generative AI at work',
    body: 'A field study found generative AI increased productivity for customer-support agents when embedded into structured workflows. RoseraOps focuses on measurable AI workflows, not random AI usage.',
    links: [{ label: 'Read source', href: 'https://www.nber.org/papers/w31161' }],
  },
  {
    source: 'OpenAI · Anthropic',
    topic: 'Cost and usage discipline',
    body: 'Provider guidance shows prompt structure, repeated context, file size, model choice, and conversation length affect cost and usage. RoseraOps turns those details into practical team habits.',
    links: [
      { label: 'OpenAI', href: 'https://platform.openai.com/docs/guides/prompt-caching' },
      { label: 'Anthropic', href: 'https://support.anthropic.com/en/articles/9797557-usage-limit-best-practices' },
    ],
  },
];

export const RESEARCH_NOTE = 'Research does not say AI is bad. It says AI needs discipline.';
export const RESEARCH_MIT_NOTE =
  'Emerging preprint research on “cognitive debt” raises similar questions about overreliance, though it should be read cautiously.';

export const FOOTER_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Services', href: '#services' },
  { label: 'Method', href: '#method' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];
