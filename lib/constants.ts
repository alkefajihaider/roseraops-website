export const COMPANY = {
  name: 'RoseraOps',
  domain: 'roseraops.com',
  email: 'roseraops@gmail.com',
  tagline: 'Prune AI waste. Let human intelligence bloom.',
  taglineShort: 'Reduce AI waste. Let people flourish.',
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
  { label: 'Thesis', href: '#thesis' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_NODES = ['Frame', 'Filter', 'Automate', 'Verify', 'Optimize'];

export const HERO_COST_CARDS = [
  { label: 'Token Waste', value: '−38%', tone: 'clay' },
  { label: 'Model Overuse', value: 'Audited', tone: 'gold' },
  { label: 'Prompt Drift', value: 'Contained', tone: 'teal' },
  { label: 'Workflow ROI', value: 'Measured', tone: 'emerald' },
];

export const PROBLEM_CARDS = [
  {
    title: 'Token waste',
    body: 'Long prompts, restated context, and verbose output quietly inflate the bill on every call.',
    icon: 'leaf',
  },
  {
    title: 'Model overuse',
    body: 'Premium models run low-value tasks that a smaller model — or no model — could handle.',
    icon: 'bud',
  },
  {
    title: 'Long-context bloat',
    body: 'Whole documents get re-uploaded when a few precise lines would do the same job.',
    icon: 'stem',
  },
  {
    title: 'Employee overreliance',
    body: 'Teams reach for AI before framing the problem, eroding judgment over time.',
    icon: 'roots',
  },
  {
    title: 'Weak governance',
    body: 'No agreed rules for tools, data handling, model choice, or human review.',
    icon: 'thorn',
  },
  {
    title: 'No ROI measurement',
    body: 'Activity gets tracked instead of value, so waste hides in plain sight.',
    icon: 'bloom',
  },
];

export const EXPENSIVE_WAY = [
  'Start with AI',
  'Let AI define the problem',
  'Keep expanding the prompt',
  'Use premium models for everything',
  'Accept generic output',
  'Fix mistakes afterward',
];

export const ROSERA_WAY = [
  'Think first',
  'Frame the task',
  'Use AI only where it creates leverage',
  'Choose the right model',
  'Constrain the output',
  'Verify before shipping',
];

export const SERVICES = [
  {
    n: '01',
    title: 'AI Waste Audit',
    body: 'Audit AI usage, subscriptions, token-heavy workflows, model selection, repeated prompts, context bloat, and low-value use cases. Deliver a clear report showing where money and time are being wasted.',
  },
  {
    n: '02',
    title: 'AI Cost Optimization Training',
    body: 'Train engineering and business teams to use shorter prompts, smaller models, fresh chats, reusable prompt libraries, output constraints, and human-first workflows.',
  },
  {
    n: '03',
    title: 'Cognitive Discipline Workshops',
    body: 'Teach teams how to use AI without outsourcing judgment. Focus on critical thinking, verification, creativity, original problem framing, and avoiding dependency loops.',
  },
  {
    n: '04',
    title: 'Narrow AI Workflow Design',
    body: 'Design strict single-purpose AI workflows for repetitive business tasks: operational reports, incident summaries, documentation, compliance checks, support summaries, internal knowledge, and structured management writing.',
  },
  {
    n: '05',
    title: 'AI Governance Playbook',
    body: 'Create practical rules for approved tools, sensitive data handling, human review, model selection, hallucination checks, cost tracking, escalation paths, and team accountability.',
  },
];

export const METHOD_STEPS = [
  {
    step: 'Frame',
    body: 'Humans define the problem, business goal, user, constraints, and success criteria before AI is used.',
  },
  {
    step: 'Filter',
    body: 'The team decides whether AI is actually needed. If a deterministic rule, template, or script works better, AI is skipped.',
  },
  {
    step: 'Automate',
    body: 'AI is used only for high-leverage repetitive work: refinement, formatting, synthesis, documentation, QA support, and acceleration.',
  },
  {
    step: 'Verify',
    body: 'Humans review the output for correctness, originality, risk, accuracy, security, and business fit.',
  },
  {
    step: 'Optimize',
    body: 'The workflow is measured by cost, tokens, model choice, output quality, time saved, and ROI.',
  },
];

export const BUILT_STEPS = [
  {
    n: '01',
    title: 'Human Strategy',
    body: 'Define the buyer, business model, offer, thesis, and message.',
  },
  {
    n: '02',
    title: 'Research-Backed Positioning',
    body: 'Anchor the site in credible AI productivity, cost, and critical-thinking research.',
  },
  {
    n: '03',
    title: 'Refined Prompting',
    body: 'Compress the strategy into a clear, specific, high-context prompt.',
  },
  {
    n: '04',
    title: 'Premium AI Execution',
    body: 'Use AI for layout, copy, structure, and code once the direction is already known.',
  },
  {
    n: '05',
    title: 'Human Review',
    body: 'Check quality, accuracy, positioning, visual polish, and deployment readiness.',
  },
  {
    n: '06',
    title: 'Cost-Efficient Output',
    body: 'Reduce endless back-and-forth by doing the thinking before the generation.',
  },
];

export const BLUEPRINT = [
  { k: 'One job', v: 'A single, narrowly scoped task — nothing more.' },
  { k: 'Defined inputs', v: 'Only document type, date, and operational details.' },
  { k: 'Required format', v: 'A fixed, management-ready output structure.' },
  { k: 'Domain terminology', v: 'The team’s own language and conventions.' },
  { k: 'Output rules', v: 'Tone, formatting, and action-item rules enforced.' },
  { k: 'Human review', v: 'A person checks before anything ships.' },
];

export const RESEARCH = [
  {
    source: 'Microsoft Research / CHI 2025',
    paper: 'The Impact of Generative AI on Critical Thinking',
    link: 'https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/',
    finding:
      'A survey of 319 knowledge workers found that higher confidence in GenAI was associated with less critical-thinking effort, while higher self-confidence was associated with more critical thinking.',
    interpretation:
      'AI tools should keep people mentally engaged. Teams need training that preserves judgment, verification, and task ownership instead of encouraging blind trust.',
  },
  {
    source: 'MIT Media Lab / arXiv',
    paper: 'Your Brain on ChatGPT: Accumulation of Cognitive Debt',
    link: 'https://www.media.mit.edu/publications/your-brain-on-chatgpt/',
    altLink: 'https://arxiv.org/abs/2506.08872',
    finding:
      'This emerging preprint studies the cognitive and behavioral effects of LLM-assisted essay writing and raises questions about overreliance. It is a preprint and has received methodological criticism, so it should be interpreted cautiously.',
    interpretation:
      'The lesson is not to avoid AI. It is that AI should support thinking, not replace it — used after the problem is framed and quality is defined.',
  },
  {
    source: 'Harvard Business School / BCG',
    paper: 'Navigating the Jagged Technological Frontier',
    link: 'https://d3.harvard.edu/navigating-the-jagged-technological-frontier/',
    finding:
      'Research with BCG consultants showed GPT-4 improved speed and quality on tasks within AI’s capability frontier, while performance was uneven across tasks.',
    interpretation:
      'Teams need to know which tasks belong to AI and which require human judgment. This is why RoseraOps trains employees to filter before automating.',
  },
  {
    source: 'NBER',
    paper: 'Generative AI at Work',
    link: 'https://www.nber.org/papers/w31161',
    finding:
      'A field study of customer-support agents found access to generative AI increased productivity by about 14% on average, with the strongest gains among newer and less experienced workers.',
    interpretation:
      'AI can increase productivity inside structured, measurable workflows. The goal is controlled AI usage tied to business outcomes — not random adoption.',
  },
  {
    source: 'OpenAI',
    paper: 'Prompt Caching',
    link: 'https://platform.openai.com/docs/guides/prompt-caching',
    finding:
      'OpenAI explains that repeated prompt prefixes can be cached to reduce latency and input-token costs.',
    interpretation:
      'Companies reduce waste by standardizing prompts, reusing stable instructions, separating static and variable context, and designing workflows with cost in mind.',
  },
  {
    source: 'Anthropic',
    paper: 'Claude Usage Limit Best Practices',
    link: 'https://support.anthropic.com/en/articles/9797557-usage-limit-best-practices',
    finding:
      'Anthropic notes that usage is affected by message length, file-attachment size, conversation length, tool usage, model choice, and artifact usage.',
    interpretation:
      'Premium AI usage should be planned. Reduce context bloat, start fresh when tasks change, batch requests when useful, and use expensive models only when they create leverage.',
  },
];

export const THESIS_AI_FOR = [
  'refinement',
  'documentation',
  'formatting',
  'synthesis support',
  'quality checks',
  'repetitive workflows',
  'structured summaries',
  'operational reporting',
  'training support',
];

export const THESIS_HUMAN_OWNS = [
  'strategy',
  'judgment',
  'originality',
  'creativity',
  'final decisions',
  'ethical responsibility',
  'business context',
  'problem definition',
];

export const TRAINING_RULES = [
  'Think first, prompt second.',
  'Never outsource problem definition.',
  'Use AI to refine, not replace, judgment.',
  'Start fresh when the task changes.',
  'Do not make models reread unnecessary context.',
  'Ask for direct output when explanation is not needed.',
  'Use smaller models for lower-risk tasks.',
  'Track tokens, output length, and cost per workflow.',
  'Review AI output like work from a junior employee.',
  'Build narrow agents with one job, one format, one review.',
  'Use deterministic software when rules are clear.',
  'Measure ROI by business value, not AI activity.',
];

export const FOOTER_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Services', href: '#services' },
  { label: 'Method', href: '#method' },
  { label: 'Research', href: '#research' },
  { label: 'AI Cost Thesis', href: '#thesis' },
  { label: 'Contact', href: '#contact' },
];
